<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SunSporting>
 */
class SunSportingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'paragraph' => fake()->sentence(),
            'location' => fake()->streetAddress(),
            'image_path' => fake()->imageUrl(),
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
