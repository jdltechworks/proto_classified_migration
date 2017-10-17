<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function index() {
        return view('upload/index');
    }

    public function store(Request $request) {
        $test = $request->hasFile('photo');
        return compact('request');
    }
}
