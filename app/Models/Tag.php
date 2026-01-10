<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class Tag extends \Spatie\Tags\Tag
{
    use HasTags;
    public static function getLocale(): string
    {
        return 'noi18n';
    }
}
