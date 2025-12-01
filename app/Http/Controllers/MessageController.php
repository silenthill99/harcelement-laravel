<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Models\Message;
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
        Message::create($data);

        return Redirect::route("contacts")->with("success", "Message sent successfully");
    }
}
