<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galerie extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'slug',
        'type',
        'fichier',
        'image_miniature',
        'description',
        'annee',
        'statut',
    ];
}
