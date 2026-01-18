import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="badge badge-primary badge-outline mb-3">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-neutral">
              Trusted by Thousands of Readers
            </h2>
            <p className="text-neutral/70 mt-3">
              Numbers that reflect our love for books and readers
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  📚
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-neutral">25,000+</h3>
                  <p className="text-neutral/70">Books Sold</p>
                </div>
              </div>
              <p className="text-sm text-neutral/60 mt-4">
                Serving readers all across Bangladesh
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-accent/10 text-accent">
                  👥
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-neutral">12,000+</h3>
                  <p className="text-neutral/70">Happy Readers</p>
                </div>
              </div>
              <p className="text-sm text-neutral/60 mt-4">
                Growing community of book lovers
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-secondary/10 text-secondary">
                  🚚
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-neutral">48 Hours</h3>
                  <p className="text-neutral/70">Fast Delivery</p>
                </div>
              </div>
              <p className="text-sm text-neutral/60 mt-4">
                Quick & reliable doorstep delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
