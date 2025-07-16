<?php

namespace App\Http\Controllers\MasterData;

use App\Http\Controllers\Controller;
use App\Models\KategoriModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $kategoris = KategoriModel::orderBy('created_at', 'desc')->get();

        return Inertia::render('Backoffice/Kategori/List', [
            'user' => $user,
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:kategori,name',
            'keterangan' => 'nullable|string|max:1000',
            'status' => 'required|in:berita,artikel',
        ], [
            'name.required' => 'Nama kategori wajib diisi.',
            'name.unique' => 'Nama kategori sudah digunakan.',
            'name.max' => 'Nama kategori maksimal 255 karakter.',
            'keterangan.max' => 'Keterangan maksimal 1000 karakter.',
            'status.required' => 'Status wajib dipilih.',
            'status.in' => 'Status harus berita atau artikel.',
        ]);

        try {
            KategoriModel::create([
                'name' => $validated['name'],
                'keterangan' => $validated['keterangan'],
                'status' => $validated['status'],
                'created_by' => Auth::id(),
            ]);

            return redirect()->route('kategori.index')
                ->with('success', 'Kategori berhasil ditambahkan.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Gagal menambahkan kategori. Silakan coba lagi.');
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
    public function update(Request $request, string $id)
    {
        $kategori = KategoriModel::findOrFail($id);

        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('kategori', 'name')->ignore($kategori->id)
            ],
            'keterangan' => 'nullable|string|max:1000',
            'status' => 'required|in:berita,artikel',
        ], [
            'name.required' => 'Nama kategori wajib diisi.',
            'name.unique' => 'Nama kategori sudah digunakan.',
            'name.max' => 'Nama kategori maksimal 255 karakter.',
            'keterangan.max' => 'Keterangan maksimal 1000 karakter.',
            'status.required' => 'Status wajib dipilih.',
            'status.in' => 'Status harus berita atau artikel.',
        ]);

        try {
            $kategori->update([
                'name' => $validated['name'],
                'keterangan' => $validated['keterangan'],
                'status' => $validated['status'],
                'updated_by' => Auth::id(),
            ]);

            return redirect()->route('kategori.index')
                ->with('success', 'Kategori berhasil diperbarui.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Gagal memperbarui kategori. Silakan coba lagi.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         try {
            $kategori = KategoriModel::findOrFail($id);

            // Check if kategori is being used by products
            // Uncomment this if you have a products table with kategori_id
            // if ($kategori->products()->count() > 0) {
            //     return redirect()->back()
            //         ->with('error', 'Kategori tidak dapat dihapus karena masih digunakan oleh produk.');
            // }

            $kategori->delete();

            return redirect()->route('kategori.index')
                ->with('success', 'Kategori berhasil dihapus.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Gagal menghapus kategori. Silakan coba lagi.');
        }
    }
}
