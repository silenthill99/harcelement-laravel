<x-mail::message>
# Nouveau message de contact

**Sujet:** {{ $msg->subject }}

**Email:** {{ $msg->email }}

**Message:**

{{ $msg->message }}

---

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
