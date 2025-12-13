<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('project-show', []);
    }
}
