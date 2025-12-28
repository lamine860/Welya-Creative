<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;
class MediaData extends Data
{
    public function __construct(
        public int $id,
        public string $url,
        // public string $thumb,
    ) {
    }

    public static function collection(MediaCollection $mediaCollection)
    {
        return $mediaCollection->map(fn(Media $media) => new self(
            $media->id,
            $media->getUrl(),
            // $media->getUrl('thumb'),
        ));
    }
}
