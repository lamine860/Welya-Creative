<?php

namespace Database\Seeders;

use App\Enum\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::firstOrCreate(
            ['email' => 'mlamine860@gmail.com'],
            [
                'name' => 'Lamine Diallo',
                'password' => Hash::make('passwordABC'),
                'email_verified_at' => now(),
                'role' => Role::ADMIN->value,
            ]
        );

        $this->call([
            ProjectSeeder::class,
            TestimonySeeder::class,
            BlogSeeder::class,
        ]);
    }
}
