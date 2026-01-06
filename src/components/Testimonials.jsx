import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: "Sarah Chen",
    role: "Property Manager",
    company: "Premier Properties",
    body: "Sherpa has transformed how we acquire new clients. The leads are pre-qualified and ready to sign.",
    img: "https://avatar.vercel.sh/sarah"
  },
  {
    name: "Michael Torres",
    role: "CEO",
    company: "Urban Living Management",
    body: "We've grown our portfolio by 40% in 6 months. The ROI on Sherpa is incredible.",
    img: "https://avatar.vercel.sh/michael"
  },
  {
    name: "Emily Watson",
    role: "Director",
    company: "Coastal PM Group",
    body: "Finally, a lead gen service that understands property management. No more tire-kickers.",
    img: "https://avatar.vercel.sh/emily"
  },
  {
    name: "David Kim",
    role: "Owner",
    company: "Summit Property Services",
    body: "The quality of leads is outstanding. Every conversation is with someone serious about hiring.",
    img: "https://avatar.vercel.sh/david"
  },
  {
    name: "Jessica Brown",
    role: "VP of Growth",
    company: "Metro Management Co",
    body: "Sherpa's percent-of-rent model aligns perfectly with our goals. We only pay when we win.",
    img: "https://avatar.vercel.sh/jessica"
  },
  {
    name: "Robert Martinez",
    role: "Founder",
    company: "Horizon Properties",
    body: "Best investment we've made this year. Our close rate on Sherpa leads is 3x our other sources.",
    img: "https://avatar.vercel.sh/robert"
  }
]

const ReviewCard = ({ img, name, role, company, body }) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-4",
        "border-border bg-card hover:bg-muted/50 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-sm text-muted-foreground">{role} at {company}</p>
        </div>
      </div>
      <blockquote className="text-muted-foreground leading-relaxed">{body}</blockquote>
    </figure>
  )
}

export default function Testimonials() {
  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <section className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Property Managers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients are saying about their experience with Sherpa.
          </p>
        </div>
      </div>

      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  )
}
