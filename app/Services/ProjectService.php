<?php

namespace App\Services;

use App\Data\ProjectData;
use App\Models\Project;

class ProjectService
{
    public function getAll()
    {
        return Project::published()
            ->get()
            ->map(fn($project) => ProjectData::fromModel($project)->include('gallery'));
    }
    public function getDetailFor(Project $project)
    {
        return ProjectData::fromModel($project)
            ->include('description', 'challenge', 'mission', 'results', 'solutions', 'gallery');
    }
}
