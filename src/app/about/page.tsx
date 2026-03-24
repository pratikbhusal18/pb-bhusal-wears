import Newsletter from "@/components/Newsletter";

const values = [
  { emoji: "🌿", label: "Sustainable" },
  { emoji: "🎨", label: "Colorful" },
  { emoji: "☁️", label: "Comfortable" },
  { emoji: "💪", label: "Inclusive" },
];

const timeline = [
  { year: "2024", title: "The Spark ✨", text: "Pratik sketched the first PB designs on a napkin during a road trip. The idea: clothes that are as fun to wear as they are to look at." },
  { year: "2025", title: "First Collection 🎉", text: "Launched our debut collection of 12 pieces. Sold out in the first week! The community loved the bold colors and soft fabrics." },
  { year: "2026", title: "Growing the Fam 🚀", text: "Expanded to 50+ products, partnered with eco-friendly suppliers, and built an amazing community of PB fans worldwide." },
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
      <section className="py-16 pb-10 text-center bg-gradient-to-br from-[#E8FFF0] via-[#FFF9E6] to-[#FFF1F1]">
        <h1 className="text-5xl font-black tracking-tight">Our Story 📖</h1>
        <p className="text-gray mt-2 text-lg">How a love for color and comfort became a clothing brand</p>
      </section>

      {/* About Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-96 bg-gradient-to-br from-coral to-yellow rounded-xl flex items-center justify-center text-[8rem]">
              🌈
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                We believe clothes should make you smile<span className="text-coral">.</span>
              </h2>
              <p className="text-gray mb-4 text-lg leading-relaxed">
                PB - Bhusal Wears was born from a simple idea: clothing should be fun, comfortable, and kind to the planet. We design pieces that let you express your unique personality without compromising on quality or sustainability.
              </p>
              <p className="text-gray mb-6 text-lg leading-relaxed">
                Every item is crafted with premium eco-friendly materials, vibrant colors, and thoughtful designs that work for your everyday adventures — whether that&apos;s a coffee run, a weekend hike, or just hanging out.
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
            <h2 className="text-4xl font-extrabold tracking-tight">Our Journey<span className="text-coral">.</span></h2>
            <p className="text-gray mt-2">From idea to your wardrobe</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map(({ year, title, text }) => (
              <div key={year} className="flex gap-6 bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl font-black text-coral min-w-[60px]">{year}</div>
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
            <h2 className="text-4xl font-extrabold tracking-tight">Meet the Team<span className="text-coral">.</span></h2>
            <p className="text-gray mt-2">The people behind the vibes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map(({ emoji, name, role }) => (
              <div key={name} className="text-center bg-white p-8 rounded-xl shadow-md">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-coral to-yellow flex items-center justify-center text-4xl mb-4">
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
