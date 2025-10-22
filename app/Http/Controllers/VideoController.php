<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index() {
        $videoList = Video::paginate(20);

        $role = null;

        if (Auth::check()) {
            $role = Auth::user()->roles()->first();
        }

        return Inertia::render('CourtsMetrages', ["videoList" => $videoList, 'role' => $role]);
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
