export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium tracking-wide">
            BOOKS • READING • GROWTH
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Why Reading Books Shapes <br className="hidden md:block" />a Better
            Mind
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Books expand imagination, sharpen thinking, and help us grow —
            intellectually, emotionally, and creatively.
          </p>
        </div>

        {/* Decorative Blur */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      </section>

      {/* FEATURED IMAGE */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books and reading"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700">
          <p>
            Reading is not just a hobby — it’s a lifelong skill that shapes how
            we think, learn, and understand the world. Every book carries ideas
            that can influence perspectives and unlock new possibilities.
          </p>

          <h2>Knowledge That Compounds</h2>
          <p>
            Books expose readers to new concepts, cultures, and experiences.
            Unlike short content, books encourage deep thinking and long-term
            understanding.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-gray-600">
            “The more that you read, the more things you will know.” — Dr. Seuss
          </blockquote>

          <h2>Sharper Focus & Thinking</h2>
          <p>
            Reading improves concentration and analytical ability. Following
            arguments, stories, and ideas strengthens the brain in ways that
            digital scrolling cannot.
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
            Reading daily is a simple habit — but its impact is powerful and
            long-lasting.
          </p>
        </article>
      </section>

      {/* AUTHOR CARD */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-5 rounded-3xl bg-white/70 backdrop-blur shadow-lg p-6">
          <img
            src="https://i.pravatar.cc/100?img=47"
            className="w-16 h-16 rounded-full"
            alt="Author"
          />
          <div>
            <h4 className="font-semibold text-gray-900">
              BookNest Editorial Team
            </h4>
            <p className="text-sm text-gray-600">
              Curating thoughtful content on books, reading culture, and
              lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Find Your Next Favorite Book
          </h3>
          <p className="mb-6 text-emerald-100">
            Explore our curated collection of books for every reader.
          </p>
          <button className="btn bg-white text-emerald-700 hover:bg-emerald-50 btn-wide rounded-full font-semibold">
            Browse Book Collection
          </button>
        </div>
      </section>
    </main>
  );
}
