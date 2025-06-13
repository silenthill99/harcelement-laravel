<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
   public function index() {
       return Inertia::render('AddVideo');
   }

   public function create(Request $request) {
       $data = $request->validate([
           'title' => 'required|string|max:255',
           'link' => 'required|string|max:255',
       ]);

       Video::create($data);
       return redirect()->back();
   }
}
