<?php

namespace App\Data;

use App\Models\Tag;
use DateTimeImmutable;
use Illuminate\Database\Eloquent\Collection;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;
use Stephenjude\FilamentBlog\Models\Author;
use Stephenjude\FilamentBlog\Models\Category;
use Stephenjude\FilamentBlog\Models\Post;

class PostData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public string $excerpt,
        public string $banner_url,
        public string $url,
        public string $content,
        public DateTimeImmutable $created_at,
        public DateTimeImmutable $updated_at,
        /** @var \Spatie\LaravelData\Lazy|array<Tag> */
        public Lazy|Collection $tags,
        public Lazy|Author|null $author,
        public Lazy|Category|null $category,
    ) {
    }

    public static function collection(Collection $posts)
    {
        return $posts->map(fn(Post $post) => self::from($post));

    }
}
