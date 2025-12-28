<?php

namespace App\Enum;

enum Role: string
{
    case ADMIN = 'admin';
    case EDITOR = 'editor';
    case USER = 'user';
}
