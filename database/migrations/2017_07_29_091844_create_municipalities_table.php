<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
/*
{
"id":1,
"psgcCode":"012801000",
"citymunDesc":"ADAMS",
"regDesc":"01",
"provCode":"0128",
"citymunCode":"012801"
$table->increments('id');
$table->integer('psgc_code');
$table->string('name');
$table->integer('reg_code');
$table->integer('prov_code');
}

 */
class CreateMunicipalitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('municipalities', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('psgc_code');
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
        Schema::dropIfExists('municipalities');
    }
}
