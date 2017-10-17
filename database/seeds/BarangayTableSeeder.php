<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
/*
$table->increments('id');
$table->number('brgy_code');
$table->string('name');
$table->number('reg_code');
$table->number('prov_code');
$table->number('mun_code');

"brgyCode":"012801001",
"brgyDesc":"Adams (Pob.)",
"regCode":"01",
"provCode":"0128",
"citymunCode":"012801"
 */
class BarangayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $barangay = Storage::get('public/ph-location/refbrgy.json');

        $barangay_array = json_decode($barangay)->RECORDS;
        foreach($barangay_array as $value) {
            DB::table('barangays')->insert([
                'region_id' => (int)$value->regCode,
                'name' => $value->brgyDesc,
                'prov_code' => (int)$value->provCode,
                'brgy_code' => (int)$value->brgyCode,
                'mun_code' => (int)$value->citymunCode
            ]);
        }
    }
}
