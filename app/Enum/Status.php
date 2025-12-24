<?php

namespace App\Enum;

enum Status: string
{
    case PUBLISHED = 'published';
    case DRAFT = 'draft';
}
