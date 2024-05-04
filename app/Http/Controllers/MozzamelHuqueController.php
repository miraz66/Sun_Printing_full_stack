<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MozzamelHuque;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\MozzamelResource;
use App\Http\Requests\StoreMozzamelHuqueRequest;
use App\Http\Requests\UpdateMozzamelHuqueRequest;

class MozzamelHuqueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = MozzamelHuque::query();
        $sports = $query->paginate(10);

        return Inertia::render('Project/Home', [
            "sports" => MozzamelResource::collection($sports),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $name = "Mozzamel Huque Sritisoggo";
        return Inertia::render("Project/Create", ["name" => $name]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMozzamelHuqueRequest $request)
    {
        $data = $request->validated();


        // if ($request->hasFile('image')) {
        //     $imagePath = $request->file('image')->store('project_images', 'public'); // Store in the 'public' disk
        //     $data['image_path'] = $imagePath; // Add image path to the data array
        // }

        $data["created_by"] = Auth::id();
        $data["updated_by"] = Auth::id();

        MozzamelHuque::create($data);
        return to_route('project.home')
            ->with("success", "Project created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(MozzamelHuque $mozzamelHuque)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MozzamelHuque $mozzamelHuque)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMozzamelHuqueRequest $request, MozzamelHuque $mozzamelHuque)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MozzamelHuque $mozzamelHuque)
    {
        //
    }
}
