<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index() {
        $videos = Video::all();
        return Inertia::render('Courts métrages', ["videos" => $videos]);
    }

   public function create() {
       return Inertia::render('AddVideo');
   }

   public function store(Request $request) {
       $data = $request->validate([
           'title' => 'required|string|max:255',
           'link' => 'required|url|regex:/^https:\/\/(www\.)?youtube\.com\/watch\?v=.+$/',
       ]);

       Video::create($data);
       return redirect()->route('videos.index');
   }
}
