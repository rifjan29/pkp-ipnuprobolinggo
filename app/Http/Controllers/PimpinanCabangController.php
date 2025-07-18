<?php

namespace App\Http\Controllers;

use App\Models\PimpinanCabang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PimpinanCabangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $pimpinanCabang = PimpinanCabang::orderBy('created_at', 'desc')->get();

        return Inertia::render('Backoffice/PimpinanCabang/List', [
            'user' => $user,
            'pimpinanCabang' => $pimpinanCabang
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
            'name' => 'required|string|max:255',
            'alamat' => 'nullable|string',
            'keterangan' => 'nullable|string',
            'status' => 'required|in:aktif,non-aktif',
            'status_pimpinan' => 'required|in:pac,pkpt,komisariat,ranting',
            'no_hp' => 'nullable|string|max:20',
            'jumlah_anggota' => 'nullable|numeric',
        ]);

        try {
            PimpinanCabang::create([
                'name' => $request->name,
                'alamat' => $request->alamat,
                'keterangan' => $request->keterangan,
                'status' => $request->status,
                'status_pimpinan' => $request->status_pimpinan,
                'no_hp' => $request->no_hp,
                'jumlah_anggota' => $request->jumlah_anggota,
            ]);

            return redirect()->back()->with('success', 'Pimpinan Cabang berhasil ditambahkan.');

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
        $request->validate([
            'name' => 'required|string|max:255',
            'alamat' => 'nullable|string',
            'keterangan' => 'nullable|string',
            'status' => 'required|in:aktif,non-aktif',
            'status_pimpinan' => 'required|in:pac,pkpt,komisariat,ranting',
            'no_hp' => 'nullable|string|max:20',
            'jumlah_anggota' => 'nullable|numeric',
        ]);

        try {
            PimpinanCabang::find($id)->update([
                'name' => $request->name,
                'alamat' => $request->alamat,
                'keterangan' => $request->keterangan,
                'status' => $request->status,
                'status_pimpinan' => $request->status_pimpinan,
                'no_hp' => $request->no_hp,
                'jumlah_anggota' => $request->jumlah_anggota,
            ]);

            return redirect()->back()->with('success', 'Pimpinan Cabang berhasil ditambahkan.');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Gagal menambahkan kategori. Silakan coba lagi.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
