<?php

namespace Database\Seeders;

use App\Enum\Status;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Nimba Food',
                'customer' => 'Nimba Food SARL',
                'industry' => 'Agroalimentaire',
                'year' => 2024,
                'is_featured' => true,
                'description' => "Refonte complète de l'identité de marque et création d'une plateforme e-commerce pour une marque agroalimentaire guinéenne premium.",
                'challenge' => '<p>Nimba Food souhaitait moderniser son image et vendre ses produits en ligne, tout en conservant l\'authenticité de son ancrage local.</p>',
                'mission' => '<p>Concevoir une identité visuelle chaleureuse, un packaging distinctif et une expérience d\'achat en ligne fluide sur tous les appareils.</p>',
                'solutions' => '<p>Nouvelle charte graphique, système de packaging modulable, site e-commerce responsive et campagne de lancement sur les réseaux sociaux.</p>',
                'results' => '<p>+45% de notoriété de marque et une première boutique en ligne opérationnelle en moins de 8 semaines.</p>',
                'gallery' => [
                    'images/projects/nimba-food/nimba-food-website-mockup.jpg',
                    'images/projects/nimba-food/nimba-food-mobile-mockup.jpg',
                    'images/projects/nimba-food/nimba-food-packaging-mockup.jpg',
                    'images/projects/nimba-food/nimba-food-promotional-banner.jpg',
                ],
            ],
            [
                'title' => 'CIS Assurance',
                'customer' => 'CIS Guinée',
                'industry' => 'Assurance & Finance',
                'year' => 2024,
                'is_featured' => true,
                'description' => "Conception d'un site institutionnel moderne et d'un espace client pour une compagnie d'assurance de premier plan.",
                'challenge' => '<p>Un site vieillissant qui ne reflétait pas le sérieux et la modernité de la compagnie.</p>',
                'mission' => '<p>Repenser l\'architecture de l\'information et créer une interface rassurante, claire et accessible.</p>',
                'solutions' => '<p>Design system complet, pages produits pédagogiques et parcours de demande de devis simplifié.</p>',
                'results' => '<p>Taux de conversion des demandes de devis multiplié par 2 après la refonte.</p>',
                'gallery' => [
                    'images/teams/branding.webp',
                    'images/teams/branding-02.webp',
                    'images/teams/branding-team.jpg',
                ],
            ],
            [
                'title' => 'Africa Water',
                'customer' => 'Africa Water',
                'industry' => 'Distribution & Grande consommation',
                'year' => 2023,
                'is_featured' => false,
                'description' => "Création de l'identité de marque et d'une boutique en ligne pour un distributeur d'eau minérale.",
                'challenge' => '<p>Se démarquer dans un marché concurrentiel avec une marque mémorable et une présence digitale forte.</p>',
                'mission' => '<p>Construire une marque fraîche et désaltérante, déclinée du packaging au web.</p>',
                'solutions' => '<p>Logo, charte, déclinaisons packaging et site vitrine avec espace revendeurs.</p>',
                'results' => '<p>Une image de marque cohérente et une hausse notable de l\'engagement en ligne.</p>',
                'gallery' => [
                    'images/hero-slide-01.jpg',
                    'images/hero-slide-02.jpg',
                ],
            ],
            [
                'title' => 'Windfall Énergie',
                'customer' => 'Windfall',
                'industry' => 'Énergie & Environnement',
                'year' => 2023,
                'is_featured' => false,
                'description' => "Plateforme web et identité pour une entreprise d'énergies renouvelables.",
                'challenge' => '<p>Vulgariser une offre technique et inspirer confiance auprès des investisseurs et particuliers.</p>',
                'mission' => '<p>Raconter une histoire de marque durable et concevoir une plateforme claire et engageante.</p>',
                'solutions' => '<p>Direction artistique, site multi-pages et supports de communication.</p>',
                'results' => '<p>Un positionnement premium et une génération de leads qualifiés en hausse.</p>',
                'gallery' => [
                    'images/hero-slide-03.jpg',
                    'images/about-header.jpg',
                ],
            ],
            [
                'title' => 'Human Bird',
                'customer' => 'Human Bird Media',
                'industry' => 'Média & Divertissement',
                'year' => 2022,
                'is_featured' => false,
                'description' => "Conception d'une application mobile et d'une identité vibrante pour un média digital.",
                'challenge' => '<p>Capter une audience jeune et mobile avec une expérience rapide et immersive.</p>',
                'mission' => '<p>Créer une marque audacieuse et une interface mobile intuitive et rythmée.</p>',
                'solutions' => '<p>Branding, maquettes UI/UX haute fidélité et prototype interactif.</p>',
                'results' => '<p>Un produit prêt au lancement salué pour sa fluidité et son originalité.</p>',
                'gallery' => [
                    'images/projects/nimba-food-mockup-desktop-01.jpg',
                    'images/projects/nimba-food-mobile-mockup-02.jpg',
                ],
            ],
        ];

        foreach ($projects as $data) {
            $gallery = $data['gallery'];
            unset($data['gallery']);

            $data['status'] = Status::PUBLISHED->value;

            /** @var Project $project */
            $project = Project::firstOrCreate(['title' => $data['title']], $data);

            if ($project->getMedia('gallery')->isEmpty()) {
                foreach ($gallery as $relativePath) {
                    $absolute = public_path($relativePath);
                    if (is_file($absolute)) {
                        $project
                            ->addMedia($absolute)
                            ->preservingOriginal()
                            ->toMediaCollection('gallery');
                    }
                }
            }
        }
    }
}
