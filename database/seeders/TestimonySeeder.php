<?php

namespace Database\Seeders;

use App\Models\Testimony;
use Illuminate\Database\Seeder;

class TestimonySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonies = [
            [
                'name' => 'Mariama Baldé',
                'company' => 'Nimba Food',
                'position' => 'Directrice Marketing',
                'message' => "Welya Creative a transformé notre marque. Le nouveau packaging et le site e-commerce ont dépassé toutes nos attentes. Une équipe créative, réactive et à l'écoute.",
                'avatar' => 'images/teams/team-1.jpg',
            ],
            [
                'name' => 'Ibrahima Sow',
                'company' => 'CIS Guinée',
                'position' => 'Responsable Digital',
                'message' => 'Un accompagnement stratégique de bout en bout. Notre nouveau site inspire confiance et nos demandes de devis ont doublé. Un vrai partenaire de croissance.',
                'avatar' => 'images/teams/team-2.jpg',
            ],
            [
                'name' => 'Aïssatou Diallo',
                'company' => 'Africa Water',
                'position' => 'Fondatrice',
                'message' => 'Professionnalisme, créativité et sens du détail. Notre identité de marque est enfin à la hauteur de nos ambitions. Merci Welya Creative !',
                'avatar' => 'images/teams/contact-avatar.jpg',
            ],
            [
                'name' => 'Lamine Bah',
                'company' => 'Windfall',
                'position' => 'CEO',
                'message' => 'Ils ont su vulgariser une offre complexe avec un design clair et élégant. Le résultat est bluffant et nos partenaires le remarquent.',
                'avatar' => 'images/teams/lamine-bah.jpg',
            ],
        ];

        foreach ($testimonies as $data) {
            $avatar = $data['avatar'];
            unset($data['avatar']);

            $data['is_published'] = true;

            /** @var Testimony $testimony */
            $testimony = Testimony::firstOrCreate(
                ['name' => $data['name'], 'company' => $data['company']],
                $data,
            );

            if ($testimony->getMedia('avatar')->isEmpty()) {
                $absolute = public_path($avatar);
                if (is_file($absolute)) {
                    $testimony
                        ->addMedia($absolute)
                        ->preservingOriginal()
                        ->toMediaCollection('avatar');
                }
            }
        }
    }
}
