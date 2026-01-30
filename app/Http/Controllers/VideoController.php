<?php

namespace App\Http\Controllers;

use App\Http\Resources\VideoResource;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        $videoList = Video::paginate(20);

        $can_create = Auth::user()->can('create', Video::class);

        return Inertia::render('CourtsMetrages', [
            "videoList" => VideoResource::collection($videoList),
            'can_create' => $can_create
        ]);
    }

    public function create()
    {
        return Inertia::render('AddVideo');
    }

    public function store(Request $request)
    {
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
        Gate::authorize('update', $video);
        return Inertia::render("Update", [
            'video' => $video
        ]);
    }

    public function update(Request $request, $id)
    {
        $video = Video::findOrFail($id);
        Gate::authorize('update', $video);
        $values = $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'required|url|regex:/^https:\/\/(www\.)?youtube\.com\/watch\?v=.+$/'
        ]);

        $video->update($values);
        return redirect()->route('videos.index');
    }

    public function destroy(Video $video) {
        Gate::authorize('delete', $video);
        $video->delete();
        return redirect()->route('videos.index');
    }
}
