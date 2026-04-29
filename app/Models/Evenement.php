<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Evenement extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'slug',
        'type',
        'description',
        'image_couverture',
        'lieu',
        'ville',
        'date_debut',
        'date_fin',
        'statut',
    ];

    protected function casts(): array
    {
        return [
            'date_debut' => 'datetime',
            'date_fin' => 'datetime',
        ];
    }

    public function inscriptionsEvenements(): HasMany
    {
        return $this->hasMany(InscriptionEvenement::class);
    }
}
