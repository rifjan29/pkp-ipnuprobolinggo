<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PimpinanCabang extends Model
{
    protected $table = 'pimpinan_cabang';
    protected $fillable = [
        'name',
        'alamat',
        'keterangan',
        'status',
        'status_pimpinan',
        'no_hp',
        'user_id',
        'jumlah_anggota'
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class,'user_id');
    }
}
