<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReportageRequest;
use App\Http\Requests\UpdateReportageRequest;
use App\Models\Reportage;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ReportageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Reportage::class);
        return Inertia::render("videos/reportage/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReportageRequest $request)
    {
        $data = $request->validated();
        Reportage::create($data);

        return redirect()->route('videos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reportage $reportage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reportage $reportage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReportageRequest $request, Reportage $reportage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reportage $reportage)
    {
        Gate::authorize('delete', $reportage);
        $reportage->delete();

        return response()->json();
    }
}
