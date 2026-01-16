<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Mail\MessageSendMail;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function create()
    {
        return Inertia::render("Contacts");
    }

    public function store(StoreMessageRequest $request)
    {
        $data = $request->validated();
        $msg = Message::create($data);

        Mail::to("floriangraziani095@gmail.com")->send(
            new MessageSendMail($msg)
        );

        return Redirect::route("contacts")->with("success", "Message sent successfully");
    }
}
