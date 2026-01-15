<?php

namespace App\Http\Controllers;

use App\Data\PostData;
use App\Models\Testimony;
use App\Data\TestimonyData;
use Illuminate\Http\Request;
use App\Services\ProjectService;
use Stephenjude\FilamentBlog\Models\Post;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, ProjectService $project)
    {
        $posts = Post::published()
            ->with('author', 'category', 'tags')
            ->get();
        $posts = PostData::collection($posts);
        $testimonials = Testimony::published()
            ->get()
            ->map(fn($testimonie) => TestimonyData::fromModel($testimonie));
        return inertia('home', [
            'projects' => $project->getAll(),
            'testimonials' => $testimonials,
            'posts' => $posts,
        ]);
    }
}
