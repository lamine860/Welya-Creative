<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Stephenjude\FilamentBlog\Models\Author;
use Stephenjude\FilamentBlog\Models\Category;
use Stephenjude\FilamentBlog\Models\Post;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authors = [
            [
                'name' => 'Lamine Diallo',
                'email' => 'lamine@welyacreative.com',
                'bio' => 'Fondateur de Welya Creative, passionné de branding et de produits digitaux.',
                'photo' => 'images/teams/lamine-bah.jpg',
            ],
            [
                'name' => 'Aïssatou Diallo',
                'email' => 'aissatou@welyacreative.com',
                'bio' => "Directrice artistique, spécialiste de l'identité de marque et du design d'expérience.",
                'photo' => 'images/teams/contact-avatar.jpg',
            ],
        ];

        $authorModels = [];
        foreach ($authors as $data) {
            $photo = $data['photo'];
            unset($data['photo']);
            /** @var Author $author */
            $author = Author::firstOrCreate(['email' => $data['email']], $data);
            if (! $author->photo) {
                $author->photo = $this->copyToBlog($photo);
                $author->save();
            }
            $authorModels[] = $author;
        }

        $categoriesData = [
            ['name' => 'Design', 'slug' => 'design'],
            ['name' => 'Développement', 'slug' => 'developpement'],
            ['name' => 'Branding', 'slug' => 'branding'],
        ];
        $categories = [];
        foreach ($categoriesData as $data) {
            $categories[$data['slug']] = Category::firstOrCreate(
                ['slug' => $data['slug']],
                [
                    'name' => $data['name'],
                    'description' => 'Articles autour du thème '.$data['name'].'.',
                    'is_visible' => true,
                ],
            );
        }

        $posts = [
            [
                'title' => 'Construire une identité de marque mémorable',
                'slug' => 'construire-une-identite-de-marque-memorable',
                'excerpt' => 'Les principes essentiels pour créer une marque forte, cohérente et reconnaissable.',
                'category' => 'branding',
                'author' => 0,
                'banner' => 'images/hero-slide-01.jpg',
                'tags' => ['Branding', 'Stratégie'],
                'content' => '<p>Une identité de marque forte repose sur la cohérence, la clarté et l\'émotion. Elle se construit bien au-delà d\'un logo : voix, couleurs, typographie et expériences.</p><p>Dans cet article, nous partageons notre méthode pour bâtir une marque qui reste dans les mémoires.</p>',
            ],
            [
                'title' => 'UX/UI : concevoir des expériences qui convertissent',
                'slug' => 'ux-ui-concevoir-des-experiences-qui-convertissent',
                'excerpt' => 'Comment aligner esthétique et performance pour maximiser vos conversions.',
                'category' => 'design',
                'author' => 1,
                'banner' => 'images/teams/branding.webp',
                'tags' => ['UX Design', 'UI Design', 'Conversion'],
                'content' => '<p>Un beau design ne suffit pas : il doit guider l\'utilisateur vers l\'action. Hiérarchie visuelle, clarté des parcours et micro-interactions font toute la différence.</p><p>Découvrez nos bonnes pratiques pour des interfaces à la fois élégantes et efficaces.</p>',
            ],
            [
                'title' => 'Les tendances du développement web en 2024',
                'slug' => 'tendances-developpement-web-2024',
                'excerpt' => 'Panorama des technologies et pratiques qui façonnent le web moderne.',
                'category' => 'developpement',
                'author' => 0,
                'banner' => 'images/hero-slide-02.jpg',
                'tags' => ['Développement', 'Web', 'Performance'],
                'content' => '<p>Du rendu côté serveur aux frameworks réactifs, le web évolue vite. Performance, accessibilité et expérience développeur sont au cœur des priorités.</p><p>Voici les tendances à suivre pour rester à la pointe.</p>',
            ],
            [
                'title' => 'Réussir le lancement digital de votre produit',
                'slug' => 'reussir-le-lancement-digital-de-votre-produit',
                'excerpt' => "De la stratégie à l'exécution : les étapes clés d'un lancement réussi.",
                'category' => 'branding',
                'author' => 1,
                'banner' => 'images/hero-slide-03.jpg',
                'tags' => ['Stratégie', 'Marketing digital'],
                'content' => '<p>Un lancement réussi se prépare : positionnement clair, message impactant et canaux adaptés à votre audience.</p><p>Nous détaillons une feuille de route éprouvée pour mettre toutes les chances de votre côté.</p>',
            ],
            [
                'title' => "L'importance du responsive design",
                'slug' => 'importance-du-responsive-design',
                'excerpt' => "Offrir une expérience parfaite sur tous les écrans n'est plus une option.",
                'category' => 'design',
                'author' => 0,
                'banner' => 'images/about-header.jpg',
                'tags' => ['UI Design', 'Web'],
                'content' => '<p>La majorité du trafic est désormais mobile. Concevoir en mobile-first garantit une expérience fluide, quel que soit l\'appareil.</p><p>Nous expliquons comment adopter cette approche sans compromis.</p>',
            ],
            [
                'title' => 'Optimiser les performances de votre site',
                'slug' => 'optimiser-les-performances-de-votre-site',
                'excerpt' => 'Vitesse, SEO et satisfaction utilisateur : un trio indissociable.',
                'category' => 'developpement',
                'author' => 1,
                'banner' => 'images/teams/branding-team.jpg',
                'tags' => ['Performance', 'SEO', 'Web'],
                'content' => '<p>Un site rapide améliore le référencement et l\'expérience utilisateur. Optimisation des images, mise en cache et bonnes pratiques front-end sont essentielles.</p><p>Suivez nos conseils pour un site véritablement performant.</p>',
            ],
        ];

        foreach ($posts as $index => $data) {
            /** @var Post $post */
            $post = Post::firstOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'excerpt' => $data['excerpt'],
                    'content' => $data['content'],
                    'banner' => $this->copyToBlog($data['banner']),
                    'published_at' => now()->subDays(($index + 1) * 3),
                    'blog_author_id' => $authorModels[$data['author']]->id,
                    'blog_category_id' => $categories[$data['category']]->id,
                ],
            );

            if ($post->tags->isEmpty()) {
                $tags = array_map(
                    fn (string $name) => Tag::findOrCreate($name, null, 'fr'),
                    $data['tags'],
                );
                $post->attachTags($tags);
            }
        }
    }

    /**
     * Copy a public image into the public storage "blog" directory and return
     * the relative path stored in the `banner`/`photo` column.
     */
    private function copyToBlog(string $relativePath): ?string
    {
        $source = public_path($relativePath);
        if (! is_file($source)) {
            return null;
        }

        $destinationDir = storage_path('app/public/blog');
        File::ensureDirectoryExists($destinationDir);

        $filename = basename($relativePath);
        $destination = $destinationDir.DIRECTORY_SEPARATOR.$filename;

        if (! is_file($destination)) {
            File::copy($source, $destination);
        }

        return 'blog/'.$filename;
    }
}
