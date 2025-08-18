<?php

namespace App\Http\Controllers;

use App\Models\Clip;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Redirect;

class ClipController extends Controller
{
    public function index()
    {
        $clip = Clip::all();

        $role = null;

        if (Auth::check()) {
            $role = Auth::user()->roles()->first();
        }

        return Inertia::render('Quelques clips', ['clips' => $clip, 'role' => $role]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'required|string',
        ]);

        Clip::create($data);

        return Redirect::route('clips.index');
    }

    public function show(Clip $clip)
    {
        return $clip;
    }

    public function update(Request $request, Clip $clip)
    {
        $data = $request->validate([

        ]);

        $clip->update($data);

        return $clip;
    }

    public function destroy(Clip $clip)
    {
        $clip->delete();

        return response()->json();
    }

    public function create() {
        return Inertia::render('Clips/Create');
    }
}
