<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Product extends Model
{
    protected $fillable = [
        'title',
        'user_id',
        'description',
        'price'
    ];

    public function setTitleAttribute($value) {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function scopeRelated($query, $keys, $id) {
        return $query->whereHas('categories', function ($query) use ($keys) {
          $query->whereIn('categories.id', $keys);
      })->where('id', '<>', $id)->with('images', 'categories')->take(6);
    }

    public function scopeCollection($query) {
        return $query->with(['images', 'user', 'categories'])->latest();
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function images()
    {
        return $this->hasMany(Upload::class);
    }
    public function getRouteKeyName() {
        return 'slug';
    }

}
