<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

/**
 * @property int $id
 * @property string $name
 * @property string|null $company
 * @property string|null $position
 * @property string $message
 * @property bool $is_published
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony published()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereIsPublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Testimony whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Testimony extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $fillable = [
        'name',
        'company',
        'position',
        'message',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    /**
     * Media collections
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('avatar')
            ->singleFile();
    }

    /**
     * Media conversions
     */
    public function registerMediaConversions($media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(300)
            ->height(300)
            ->sharpen(10)
            ->nonQueued();
    }

    /**
     * Scope: only published testimonials
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)
            ->orderBy('created_at');
    }
}
