<?php

namespace App\Http\Controllers;

use App\Services\ProjectService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, ProjectService $project)
    {
        return inertia('home', [
            'projects' => $project->getAll(),
        ]);
    }
}
