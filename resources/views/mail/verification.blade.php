@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
   Welcome to AWPI
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
