<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stephenjude\FilamentBlog\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()
            ->with('author', 'category', 'tags')
            ->get();
        return inertia('blog/index', [
            'posts' => $posts,
        ]);
    }

    public function show(Post $post)
    {
        return inertia('blog/show', []);
    }
}
