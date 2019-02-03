<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(UploadsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductCategoryTableSeeder::class);
        $this->call(ProvinceTableSeeder::class);
        $this->call(RegionTableSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(MunicipalityTableSeeder::class);
        $this->call(BarangayTableSeeder::class);

    }
}
