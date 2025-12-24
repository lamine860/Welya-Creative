<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project)
    {
        return inertia('projects/show', [
            'project' => ProjectData::from($project)
        ]);
    }
}
