<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body>
        <div id="main"
            data-csrf_token="{{csrf_token()}}"
            data-collection="@if(isset($collection)) {{$collection}} @endif"
            data-url="{{url('/')}}">@ssr('server/Server.js', ['crsf_token' => csrf_token(), 'url' => request()->path(), 'collection' => isset($collection) ? $collection : []])</div>
        <script src="{{mix('js/app.js')}}"></script>
</html>
