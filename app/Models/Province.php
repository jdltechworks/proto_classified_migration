<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public function province() 
    {
        return $this->belongsTo(Region::class);
    }
}
