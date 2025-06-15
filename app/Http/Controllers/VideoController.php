<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index() {
        $videos = Video::all();
        return Inertia::render('CourtsMetrages', ["videos" => $videos]);
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

   public function edit($id)
   {
       $video = Video::findOrFail($id);
       return Inertia::render("Update", [
           'video' => $video
       ]);
   }

   public function update(Request $request, $id)
   {

       $video = Video::findOrFail($id);

       $values = $request->validate([
           'title' => 'required|string|max:255',
           'link' => 'required|url|regex:/^https:\/\/(www\.)?youtube\.com\/watch\?v=.+$/'
       ]);

       $video->update($values);
       return redirect()->route('videos.index');
   }
}
