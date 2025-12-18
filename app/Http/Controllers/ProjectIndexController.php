<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $projects = Project::where('status', 'published')
            ->get();
        return inertia('projects/index', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}
