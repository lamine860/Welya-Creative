<?php

namespace App\Http\Controllers;

use App\Data\PostData;
use Illuminate\Http\Request;
use Stephenjude\FilamentBlog\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()
            ->with('author', 'category', 'tags')
            ->get();
        $posts = PostData::collection($posts);
        return inertia('blog/index', [
            'posts' => $posts,
        ]);
    }

    public function show(Post $post)
    {
        $post->load('tags', 'category', 'author');
        $post = PostData::from($post);
        return inertia('blog/show', [
            'post' => $post,
        ]);
    }
}
