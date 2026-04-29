<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParametreSite extends Model
{
    use HasFactory;

    protected $table = 'parametres_site';

    protected $fillable = [
        'cle',
        'valeur',
        'groupe',
    ];
}
