<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Miraz',
            'email' => 'miraz@example.com',
            'password' => bcrypt('1234qwer'),
            'email_verified_at' => time(),
        ]);

        Project::factory()
            ->count(3)
            ->hasMozzamel(2)
            ->hasSunsporting(2)
            ->hasSunfootball(2)
            ->hasYoungsun(2)
            ->create();
    }
}
