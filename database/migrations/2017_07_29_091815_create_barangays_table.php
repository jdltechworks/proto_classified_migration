<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
/*
{
"id":1,
"brgyCode":"012801001",
"brgyDesc":"Adams (Pob.)",
"regCode":"01",
"provCode":"0128",
"citymunCode":"012801"
}

 */
class CreateBarangaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barangays', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('brgy_code');
            $table->string('name');
            $table->integer('region_id');
            $table->integer('prov_code');
            $table->integer('mun_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barangays');
    }
}
