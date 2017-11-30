<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seller = Role::create([
            'name' => 'Seller',
            'slug' => 'seller',
            'permissions' => [
                'create-product' => true,
                'update-product' => true,
                'publish-product' => true,
            ]
        ]);

        $super_user = Role::create([
            'name' => 'SuperUser',
            'slug' => 'super_user',
            'permissions' => [
                'create-product' => true,
                'update-product' => true,
                'publish-product' => true,
                'delete-product' => true,
                'create-user' => true,
                'update-user' => true,
                'delete-user' => true,
            ]
        ]);
    }
}
