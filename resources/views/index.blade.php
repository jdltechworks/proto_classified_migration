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
            data-url="{{url('/')}}"
        ></div>
        <script src={{mix('js/pace.min.js')}}></script>
        <script src={{mix('js/app.js')}}></script>
</html>
