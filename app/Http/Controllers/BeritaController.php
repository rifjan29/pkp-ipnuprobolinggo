<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\BeritaTag;
use App\Models\KategoriModel;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
          $query = Berita::with(['category', 'author', 'tag.tag']);

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('deskripsi', 'like', '%' . $request->search . '%')
                  ->orWhereHas('category', function ($q) use ($request) {
                      $q->where('name', 'like', '%' . $request->search . '%');
                  })
                  ->orWhereHas('author', function ($q) use ($request) {
                      $q->where('name', 'like', '%' . $request->search . '%');
                  });
            });
        }

        $berita = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('Backoffice/Berita/List', [
            'berita' => $berita,
            'categories' => KategoriModel::berita()->get(),
            'users' => User::all(),
            'tags' => Tag::all(),
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            // 'deskripsi' => 'required|string',
            // 'content' => 'required|string',
            // 'category_id' => 'required|exists:kategori,id',
            // 'author_id' => 'required|exists:users,id',
            // 'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            // 'tag_ids' => 'nullable|array',
            // 'tag_ids.*' => 'exists:tag,id',
            // 'new_tags' => 'nullable|array',
            // 'new_tags.*' => 'string|max:50',
        ]);


        DB::beginTransaction();
        try {

            // Handle thumbnail upload
            $thumbnailPath = null;
            if ($request->hasFile('thumbnail')) {
                $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
            }
            // Create the berita
            $berita = Berita::create([
                'title' => $request->title,
                'deskripsi' => $request->deskripsi,
                'content' => $request->content,
                'category_id' => $request->category_id,
                'author_id' => $request->author_id,
                'thumbnail' => $thumbnailPath,
                'count_read' => 0,
            ]);


            // Handle tags
            $tagIds = [];

            // Process tag_ids array
            if ($request->tag_ids) {
                foreach ($request->tag_ids as $tagInput) {
                    if (is_numeric($tagInput)) {
                        // Existing tag ID
                        $tagIds[] = (int) $tagInput;
                    } elseif (str_starts_with($tagInput, 'new_')) {
                        // New tag - extract the name from the frontend
                        // The name should be passed separately or we need to handle it differently
                        // For now, let's assume the tag name is passed in a different way
                        continue; // Skip for now, handle below
                    }
                }
            }

            // Process new_tags array (tag names)
            if ($request->new_tags) {
                foreach ($request->new_tags as $tagName) {
                    if (is_string($tagName) && trim($tagName) !== '') {
                        $tag = Tag::firstOrCreate(['name' => trim($tagName)]);
                        $tagIds[] = $tag->id;
                    }
                }
            }

            // Alternative approach: if tag_ids contains new_ prefixed items,
            // we need to get the actual tag names from somewhere
            // This is a limitation of the current approach - we need the tag names

            // Attach tags to berita
            if (!empty($tagIds)) {
                foreach (array_unique($tagIds) as $tagId) {
                    BeritaTag::create([
                        'berita_id' => $berita->id,
                        'tag_id' => $tagId,
                    ]);
                }
            }

            DB::commit();

            return redirect()->route('berita.index')
                ->with('success', 'Berita berhasil ditambahkan.');

        } catch (\Exception $e) {
            DB::rollback();

            // Delete uploaded file if exists
            if ($thumbnailPath) {
                Storage::disk('public')->delete($thumbnailPath);
            }

            return back()->withErrors(['error' => 'Failed to create article: ' . $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id){

    }
    public function updateBerita(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'content' => 'required|string',
            'category_id' => 'required|exists:kategori,id',
            'author_id' => 'required|exists:users,id',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tag_ids' => 'array',
            'tag_ids.*' => 'exists:tag,id',
        ]);

        $berita = Berita::findOrFail($id);
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail
            if ($berita->thumbnail) {
                Storage::disk('public')->delete($berita->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        $berita->update($validated);

        // Update tags
        BeritaTag::where('berita_id', $berita->id)->delete();
        if (!empty($validated['tag_ids'])) {
            foreach ($validated['tag_ids'] as $tagId) {
                BeritaTag::create([
                    'berita_id' => $berita->id,
                    'tag_id' => $tagId,
                ]);
            }
        }

        return redirect()->route('berita.index')->with('success', 'Article updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $berita = Berita::find($id);
        // Delete thumbnail
        if ($berita->thumbnail) {
            Storage::disk('public')->delete($berita->thumbnail);
        }

        // Delete related tags
        BeritaTag::where('berita_id', $berita->id)->delete();

        $berita->delete();

        return redirect()->route('berita.index')->with('success', 'Article deleted successfully');
    }
}
