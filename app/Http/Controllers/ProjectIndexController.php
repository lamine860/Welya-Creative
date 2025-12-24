<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
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
        $projects = Project::published()
            ->get()
            ->map(fn(Project $project) => ProjectData::from($project));
        return inertia('projects/index', [
            'projects' => $projects,
        ]);
    }
}
