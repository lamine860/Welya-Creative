<?php

namespace App\Http\Controllers;

use App\Data\TestimonyData;
use App\Models\Testimony;
use App\Services\ProjectService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, ProjectService $project)
    {
        $testimonials = Testimony::published()
            ->get()
            ->map(fn($testimonie) => TestimonyData::fromModel($testimonie));
        return inertia('home', [
            'projects' => $project->getAll(),
            'testimonials' => $testimonials,
        ]);
    }
}
