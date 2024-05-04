<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    public function mozzamel()
    {
        return $this->hasMany(MozzamelHuque::class);
    }

    public function sunsporting()
    {
        return $this->hasMany(SunSporting::class);
    }

    public function sunfootball()
    {
        return $this->hasMany(SunFootball::class);
    }

    public function youngsun()
    {
        return $this->hasMany(YoungSunSpoting::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
