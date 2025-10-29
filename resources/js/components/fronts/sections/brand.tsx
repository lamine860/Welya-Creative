import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Africa Water",
    image: "/images/brands/africa-water.png",
  },
  {
    name: "CIS",
    image: "/images/brands/cis.png",
  },
  {
    name: "Darnei kah mein",
    image: "/images/brands/darnei-kah-mein.png",
  },
  {
    name: "Fa Global Gogistic",
    image: "/images/brands/fa-global-logistic.png",
  },
  {
    name: "Humnan bird",
    image: "/images/brands/humnan-bird.png",
  },
  {
    name: "Windfall",
    image: "/images/brands/windfall.png",
  },
 
]
const ReviewCard = ({
  image,
  name,
}: {
  image: string
  name: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden p-4",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="w-11" width="44" height="44" alt={name} src={image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export default function Brand() {
    return (
        <section className="bg-slate-200 py-8 md:py-16 dark:bg-slate-800">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee className="[--duration:20s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
