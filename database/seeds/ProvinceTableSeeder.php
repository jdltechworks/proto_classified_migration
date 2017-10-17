<?php

use Illuminate\Database\Seeder;
/*
    $table->increments('id');
    $table->integer('psgc_code');
    $table->string('name');
    $table->integer('reg_code');
    $table->integer('prov_code');
        "id":1,
        "psgcCode":"012800000",
        "provDesc":"ILOCOS NORTE",
        "regCode":"01",
        "provCode":"0128"
 */
class ProvinceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $province = Storage::get('public/ph-location/refprovince.json');

        $province_array = json_decode($province)->RECORDS;
        foreach($province_array as $value) {
            DB::table('provinces')->insert([
                'region_id' => (int)$value->regCode,
                'psgc_code' => (int)$value->psgcCode,
                'name' => strtolower($value->provDesc),
                'prov_code' => (int)$value->provCode,
            ]);
        }
    }
}
