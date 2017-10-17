<?php

use Illuminate\Database\Seeder;
/*
{
"id":1,
"psgcCode":"010000000",
"regDesc":"REGION I (ILOCOS REGION)",
"regCode":"01"

$table->increments('id');
$table->integer('psgc_code');
$table->string('name');
$table->integer('reg_code');
}
 */
class RegionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $regions = Storage::get('public/ph-location/refregion.json');

        $regions_array = json_decode($regions)->RECORDS;
        foreach($regions_array as $value) {
            DB::table('regions')->insert([
                'reg_code' => (int)$value->regCode,
                'psgc_code' => (int)$value->psgcCode,
                'name' => strtolower($value->regDesc)
            ]);
        }
    }
}
