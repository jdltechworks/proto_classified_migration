<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
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
class CreateRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regions', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('psgc_code');
            $table->string('name');
            $table->integer('reg_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('regions');
    }
}
