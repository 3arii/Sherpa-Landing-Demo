import { HeroParallax } from '@/components/ui/hero-parallax'

const properties = [
  {
    title: "La Jolla Oceanfront",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Santa Barbara Villa",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "San Diego Downtown Loft",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    title: "Coronado Beach House",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    title: "Montecito Estate",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    title: "Pacific Beach Condo",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Santa Barbara Downtown",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    title: "Mission Hills Home",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    title: "Gaslamp Quarter Apartment",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    title: "Hope Ranch Property",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    title: "Del Mar Heights",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    title: "Hillcrest Modern",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Goleta Townhome",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    title: "North Park Craftsman",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
  },
  {
    title: "Carpinteria Beach",
    link: "#contact",
    thumbnail: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
  },
]

export default function PropertyShowcase() {
  return (
    <section className="bg-muted/30">
      <HeroParallax products={properties} />
    </section>
  )
}
