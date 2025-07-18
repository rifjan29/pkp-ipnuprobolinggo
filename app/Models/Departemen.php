<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Departemen extends Model
{
    protected $table = 'departemen';
    protected $fillable = [
        'name',
        'deskripsi',
        'golongan',
        'status',
    ];

}
