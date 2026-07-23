<?php

namespace App\Models;

use App\Enum\Status;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;


/**
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string|null $customer
 * @property string|null $industry
 * @property int|null $year
 * @property string|null $description
 * @property string|null $challenge
 * @property string|null $mission
 * @property string|null $solutions
 * @property string|null $results
 * @property string|null $cover_image
 * @property int $is_featured
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @method static Builder<static>|Project draft()
 * @method static \Database\Factories\ProjectFactory factory($count = null, $state = [])
 * @method static Builder<static>|Project newModelQuery()
 * @method static Builder<static>|Project newQuery()
 * @method static Builder<static>|Project published()
 * @method static Builder<static>|Project query()
 * @method static Builder<static>|Project whereChallenge($value)
 * @method static Builder<static>|Project whereCoverImage($value)
 * @method static Builder<static>|Project whereCreatedAt($value)
 * @method static Builder<static>|Project whereCustomer($value)
 * @method static Builder<static>|Project whereDescription($value)
 * @method static Builder<static>|Project whereId($value)
 * @method static Builder<static>|Project whereIndustry($value)
 * @method static Builder<static>|Project whereIsFeatured($value)
 * @method static Builder<static>|Project whereMission($value)
 * @method static Builder<static>|Project whereResults($value)
 * @method static Builder<static>|Project whereSlug($value)
 * @method static Builder<static>|Project whereSolutions($value)
 * @method static Builder<static>|Project whereStatus($value)
 * @method static Builder<static>|Project whereTitle($value)
 * @method static Builder<static>|Project whereUpdatedAt($value)
 * @method static Builder<static>|Project whereYear($value)
 * @mixin \Eloquent
 */
class Project extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory, InteractsWithMedia, HasSlug;
    protected $fillable = [
        'title',
        'customer',
        'industry',
        'year',
        'description',
        'challenge',
        'mission',
        'results',
        'solutions',
        'cover_image',
        'is_featured',
        'status',
        'results',


    ];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('cover')->singleFile();

        $this->addMediaCollection('gallery');
    }
    public function scopePublished(Builder $query)
    {
        $query->where('status', Status::PUBLISHED->value);
    }
    public function scopeDraft(Builder $query)
    {
        $query->where('status', Status::DRAFT->value);
    }


}
