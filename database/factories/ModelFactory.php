<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10)
    ];
});

$factory->define(App\Models\Product::class, function (Faker\Generator $faker) {

    return [
        'title' => $faker->words(3, true),
        'description' => $faker->realText,
        'price' => $faker->randomFloat,
        'user_id' => function() {
            return rand(1, App\Models\User::count());
        }
    ];
});

$factory->define(App\Models\Comment::class, function(Faker\Generator $faker) {

    return [
        'title' => $faker->words(3, true),
        'body' => $faker->realText,
        'user_id' => function() {
            return rand(1, App\Models\User::count());
        },
        'product_id' => function() {
            return rand(1, App\Models\Product::count());
        }
    ];
});

$factory->define(App\Models\Upload::class, function(Faker\Generator $faker) {
    return [
        'filename' => $faker->imageUrl(1200, 742, 'food', true, 'Faker'),
        'product_id' => function() {
            return rand(1, App\Models\Product::count());
        }
    ];
});

$factory->define(App\Models\Category::class, function(Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
