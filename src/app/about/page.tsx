import Newsletter from "@/components/Newsletter";

const values = [
  { emoji: "🏔️", label: "Himalayan" },
  { emoji: "🧵", label: "Handcrafted" },
  { emoji: "🌿", label: "Sustainable" },
  { emoji: "🤝", label: "Community" },
];

const timeline = [
  { year: "2024", title: "The Spark ✨", text: "Pratik, inspired by Nepali Dhaka fabric patterns during a visit to Kathmandu, envisioned a clothing brand that bridges Himalayan heritage with modern streetwear." },
  { year: "2025", title: "First Collection 🎉", text: "Launched our debut collection of 12 pieces inspired by Nepali motifs. Sold out in the first week! The diaspora community embraced the cultural connection." },
  { year: "2026", title: "Growing Global 🚀", text: "Expanded to 50+ products, partnered with eco-friendly suppliers in Nepal and beyond, building a worldwide community proud of their heritage." },
];

const team = [
  { emoji: "👨‍💼", name: "Pratik Bhusal", role: "Founder & Creative Director" },
  { emoji: "👩‍🎨", name: "Maya Chen", role: "Head of Design" },
  { emoji: "👨‍💻", name: "Alex Rivera", role: "Operations Lead" },
  { emoji: "👩‍🔬", name: "Sam Okafor", role: "Sustainability Manager" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 pb-10 text-center bg-gradient-to-br from-himalaya via-himalaya-light to-himalaya text-white">
        <h1 className="text-5xl font-black tracking-tight">Our Story 🇳🇵</h1>
        <p className="text-white/70 mt-2 text-lg">Rooted in Nepal, designed for the world</p>
      </section>

      {/* About Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-96 bg-gradient-to-br from-crimson to-saffron rounded-xl flex items-center justify-center text-[8rem]">
              🏔️
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                Where Himalayan heritage meets modern fashion<span className="text-crimson">.</span>
              </h2>
              <p className="text-gray mb-4 text-lg leading-relaxed">
                PB - Bhusal Wears was born from the rich tapestry of Nepali culture. Inspired by the vibrant Dhaka fabrics, the majesty of the Himalayas, and the warmth of Nepali hospitality, we create clothing that tells a story — your story, our story.
              </p>
              <p className="text-gray mb-6 text-lg leading-relaxed">
                Every piece blends traditional Nepali artistry with contemporary design. We source eco-friendly materials and work with local artisans to ensure every item carries the spirit of Nepal — from the mountains to your wardrobe.
              </p>
              <div className="flex gap-6">
                {values.map(({ emoji, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl">{emoji}</div>
                    <h4 className="text-sm font-bold mt-1">{label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Our Journey<span className="text-crimson">.</span></h2>
            <p className="text-gray mt-2">From Kathmandu dreams to global fashion</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map(({ year, title, text }) => (
              <div key={year} className="flex gap-6 bg-white p-6 rounded-xl shadow-md border border-saffron/10">
                <div className="text-2xl font-black text-crimson min-w-[60px]">{year}</div>
                <div>
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-gray mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Meet the Team<span className="text-crimson">.</span></h2>
            <p className="text-gray mt-2">The people behind the vibes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map(({ emoji, name, role }) => (
              <div key={name} className="text-center bg-white p-8 rounded-xl shadow-md">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-crimson to-saffron flex items-center justify-center text-4xl mb-4">
                  {emoji}
                </div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-gray text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
