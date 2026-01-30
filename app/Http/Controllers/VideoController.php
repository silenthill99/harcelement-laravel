<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Http\Resources\VideoResource;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        $videoList = Video::paginate(20);

        $can_create = request()->user()?->can('create', Video::class);

        return Inertia::render('videos/index', [
            "videoList" => VideoResource::collection($videoList),
            'can_create' => $can_create
        ]);
    }

    public function create()
    {
        Gate::authorize('create', Video::class);
        return Inertia::render('videos/create');
    }

    public function store(StoreVideoRequest $request)
    {
        $data = $request->validated();

        Video::create($data);
        return redirect()->route('videos.index');
    }

    public function edit($id)
    {
        $video = Video::findOrFail($id);
        Gate::authorize('update', $video);
        return Inertia::render("videos/update", [
            'video' => $video
        ]);
    }

    public function update(UpdateVideoRequest $request, Video $video)
    {
        Gate::authorize('update', $video);
        $values = $request->validated();

        $video->update($values);
        return redirect()->route('videos.index');
    }

    public function destroy(Video $video) {
        Gate::authorize('delete', $video);
        $video->delete();
        return redirect()->route('videos.index');
    }
}
