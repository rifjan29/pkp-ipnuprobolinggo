<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Berita extends Model
{
    protected $table = 'berita';
    protected $fillable = [
        'title',
        'slug',
        'thumbnail',
        'deskripsi',
        'content',
        'count_read',
        'author_id',
        'category_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($berita) {
            if (empty($berita->slug)) {
                $berita->slug = \Str::slug($berita->title);
            }
        });

        static::updating(function ($berita) {
            if ($berita->isDirty('title')) {
                $berita->slug = \Str::slug($berita->title);
            }
        });
    }

    public function category() :BelongsTo{
        return $this->belongsTo(KategoriModel::class,'category_id');
    }

    public function author() :BelongsTo{
        return $this->belongsTo(User::class,'author_id');
    }

    public function tag(): HasMany{
        return $this->hasMany(BeritaTag::class,'berita_id');
    }
}
