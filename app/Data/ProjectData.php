<?php

namespace App\Data;

use Storage;
use App\Enum\Status;
use DateTimeImmutable;
use App\Data\MediaData;
use App\Models\Project;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;

class ProjectData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $slug,
        public string $customer,
        public string $industry,
        public CarbonImmutable $year,
        public Lazy|string|null $description,
        public Lazy|string|null $challenge,
        public Lazy|string|null $mission,
        public Lazy|string|null $results,
        public Lazy|string|null $solutions,
        public string $cover_image,
        public bool $is_featured,
        public Status $status,
        public DateTimeImmutable $created_at,
        public DateTimeImmutable $updated_at,
        /** @var \Spatie\LaravelData\Lazy|array<MediaData> */
        public Lazy|array $gallery,
    ) {
    }

    /**
     * Summary of fromModel
     * @param Project $project
     * @return ProjectData
     */
    public static function fromModel(Project $project): self
    {
        return new self(
            $project->id,
            $project->title,
            $project->slug,
            $project->customer,
            $project->industry,
            CarbonImmutable::parse($project->year),
            Lazy::create(fn() => $project->description),
            Lazy::create(fn() => $project->challenge),
            Lazy::create(fn() => $project->mission),
            Lazy::create(fn() => $project->results),
            Lazy::create(fn() => $project->solutions),
            $project->cover_image ? Storage::url($project->cover_image) : asset('default-project.png'),
            (bool) $project->is_featured,
            Status::from($project->status),
            $project->created_at->toDateTimeImmutable(),
            $project->updated_at->toDateTimeImmutable(),
            Lazy::create(fn() => MediaData::collection($project->getMedia('gallery')))
        );

    }
}
