<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Services\ProjectService;
use Illuminate\Http\Request;

class ProjectShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project, ProjectService $projectService)
    {
        return inertia('projects/show', [
            'project' => $projectService->getDetailFor($project)
        ]);
    }
}
