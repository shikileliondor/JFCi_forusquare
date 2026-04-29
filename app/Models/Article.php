<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'slug',
        'resume',
        'contenu',
        'image_couverture',
        'statut',
        'date_publication',
    ];

    protected function casts(): array
    {
        return [
            'date_publication' => 'datetime',
        ];
    }
}
