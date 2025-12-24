<?php

namespace App\Data;

use App\Enum\Status;
use Carbon\CarbonImmutable;
use DateTimeImmutable;
use Spatie\LaravelData\Data;

class ProjectData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public string $customer,
        public string $industry,
        public CarbonImmutable $year,
        public ?string $description,
        public ?string $challenge,
        public ?string $mission,
        public ?string $results,
        public ?string $solutions,
        public string $cover_image,
        public bool $is_featured,
        public Status $status,
        public DateTimeImmutable $created_at,
        public DateTimeImmutable $updated_at,
    ) {
    }
}
