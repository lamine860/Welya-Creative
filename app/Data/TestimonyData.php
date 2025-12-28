<?php

namespace App\Data;

use App\Models\Testimony;
use Spatie\LaravelData\Data;

class TestimonyData extends Data
{
    public function __construct(
        public string $name,
        public string $position,
        public string $company,
        public string $message,
        public string $avatar,
    ) {
    }

    public static function fromModel(Testimony $testimony): self
    {
        return new self(
            $testimony->name,
            $testimony->position,
            $testimony->company,
            $testimony->message,
            $testimony->getFirstMediaUrl(),
        );
    }

}
