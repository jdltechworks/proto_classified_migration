<?php

use Illuminate\Database\Seeder;
/*
{
{
"id":1,
"psgcCode":"012801000",
"citymunDesc":"ADAMS",
"regDesc":"01",
"provCode":"0128",
"citymunCode":"012801"
}
$table->increments('id');
$table->integer('psgc_code');
$table->string('name');
$table->integer('reg_code');
$table->integer('prov_code');
 */
class MunicipalityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $municipality = Storage::get('public/ph-location/refcitymun.json');

        $municipality_array = json_decode($municipality)->RECORDS;
        foreach($municipality_array as $value) {
            DB::table('municipalities')->insert([
                'region_id' => (int)$value->regDesc,
                'psgc_code' => (int)$value->psgcCode,
                'name' => $value->citymunDesc,
                'prov_code' => (int)$value->provCode,
                'mun_code' => (int)$value->citymunCode
            ]);
        }
    }
}
