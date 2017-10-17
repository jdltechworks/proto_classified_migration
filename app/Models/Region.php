<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    public function provinces()
    {
        return $this->hasMany(Province::class);
    }
    
    public function municipalities()
    {
        return $this->hasMany(Municipality::class);
    }

    public function barangays()
    {
        return $this->hasMany(Barangay::class);
    }

}
