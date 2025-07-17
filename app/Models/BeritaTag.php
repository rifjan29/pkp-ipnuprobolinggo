<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BeritaTag extends Model
{
    protected $table = 'detail_tag_berita';
    protected $fillable = [
        'berita_id',
        'tag_id'
    ];

    public function tag(): BelongsTo{
        return $this->belongsTo(Tag::class,'tag_id');
    }
}
