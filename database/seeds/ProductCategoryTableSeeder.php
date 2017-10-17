<?php

use Illuminate\Database\Seeder;

class ProductCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, App\Models\Product::count()) as $index) {
            $product_id = $index;
            $category_count = rand(1, 5);
            $category_ids = [];

            for($cat_count = 0; $cat_count <= $category_count; $cat_count++) {
                $category_id = rand(1, App\Models\Category::count());

                if(!in_array($category_id, $category_ids)) {
                    DB::table('category_product')->insert([
                        'product_id' => $product_id,
                        'category_id' => $category_id
                    ]);

                    array_push($category_ids, $category_id);
                }

            }
        }
    }
}
