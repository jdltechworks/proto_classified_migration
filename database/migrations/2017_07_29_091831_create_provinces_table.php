<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
/*
"id":1,
"psgcCode":"012800000",
"provDesc":"ILOCOS NORTE",
"regCode":"01",
"provCode":"0128"
 */
class CreateProvincesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provinces', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('psgc_code');
            $table->string('name');
            $table->integer('region_id');
            $table->integer('prov_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('provinces');
    }
}
