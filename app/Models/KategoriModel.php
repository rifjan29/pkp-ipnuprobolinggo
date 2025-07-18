<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KategoriModel extends Model
{
    protected $table = 'kategori';
    protected $fillable = [
        'name',
        'slug',
        'status',
        'keterangan',
    ];

    public function scopeBerita($query)
    {
        return $query->where('status', 'berita');
    }

    /**
     * Scope for artikel kategoris
     */
    public function scopeArtikel($query)
    {
        return $query->where('status', 'artikel');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($kategori) {
            if (empty($kategori->slug)) {
                $kategori->slug = \Str::slug($kategori->name);
            }
        });

        static::updating(function ($kategori) {
            if ($kategori->isDirty('name')) {
                $kategori->slug = \Str::slug($kategori->name);
            }
        });
    }
}
