import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-widest uppercase">
            Books • Reading • Growth
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Why Reading Books <br className="hidden md:block" />
            Shapes a Better Mind
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Reading sharpens thinking, builds emotional intelligence, and
            unlocks lifelong growth through knowledge and imagination.
          </p>
        </div>

        {/* Decorative Blur */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      </section>

      {/* FEATURED IMAGE */}
      <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books and reading"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <article
          className="prose prose-lg md:prose-xl max-w-none
          prose-headings:font-bold
          prose-headings:text-gray-900
          prose-p:text-gray-700
          prose-blockquote:border-emerald-500
          prose-blockquote:text-gray-600
        "
        >
          <p>
            Reading is not just a hobby — it’s a lifelong habit that shapes how
            we think, learn, and understand the world. Every book carries ideas
            that can influence perspectives and unlock new possibilities.
          </p>

          <h2>Knowledge That Compounds</h2>
          <p>
            Books expose readers to new concepts, cultures, and experiences.
            Unlike short-form content, books encourage deep thinking and
            long-term understanding.
          </p>

          <blockquote>
            “The more that you read, the more things you will know.”
            <br />— Dr. Seuss
          </blockquote>

          <h2>Sharper Focus & Thinking</h2>
          <p>
            Reading improves concentration and analytical ability. Following
            arguments, stories, and ideas strengthens the brain in ways that
            endless digital scrolling cannot.
          </p>

          <ul>
            <li>Improves attention span</li>
            <li>Builds vocabulary naturally</li>
            <li>Encourages critical thinking</li>
          </ul>

          <h2>Emotional Intelligence & Creativity</h2>
          <p>
            Fiction builds empathy, while non-fiction builds clarity. Together,
            they help readers understand emotions, decisions, and human nature.
          </p>

          <p>
            Reading daily is a simple habit — but its impact is powerful,
            meaningful, and long-lasting.
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="relative bg-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Find Your Next Favorite Book 📚
          </h3>

          <p className="mb-8 text-emerald-100 max-w-2xl mx-auto text-lg">
            Explore our thoughtfully curated collection of original books —
            trusted by readers across Bangladesh.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-emerald-700 font-semibold text-lg hover:bg-emerald-50 transition shadow-xl"
          >
            Browse Book Collections →
          </Link>
        </div>
      </section>
    </main>
  );
}
