<?php

namespace App\Http\Controllers;

use App\Models\Jabatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JabatanKepengurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $jabatan = Jabatan::orderBy('created_at', 'desc')->get();

        return Inertia::render('Backoffice/Jabatan/List', [
            'user' => $user,
            'jabatan' => $jabatan
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
       $validated = $request->validate([
            'name' => 'required|string|max:255|unique:jabatan,name',
            'deskripsi' => 'nullable|string|max:1000',
            'status' => 'required|in:ipnu,ippnu',
        ], [
            'name.required' => 'Nama jabatan wajib diisi.',
            'name.unique' => 'Nama jabatan sudah digunakan.',
            'name.max' => 'Nama jabatan maksimal 255 karakter.',
            'deskripsi.max' => 'deskripsi maksimal 1000 karakter.',
            'status.required' => 'Status wajib dipilih.',
            'status.in' => 'Status harus IPNU atau IPPNU.',
        ]);

        try {
            Jabatan::create([
                'name' => $validated['name'],
                'deskripsi' => $validated['deskripsi'],
                'status' => $validated['status'],
                'created_by' => Auth::id(),
            ]);

            return redirect()->route('jabatan.index')
                ->with('success', 'Jabatan berhasil ditambahkan.');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Gagal menambahkan jabatan. Silakan coba lagi.');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
