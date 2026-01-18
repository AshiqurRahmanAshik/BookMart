import React from "react";

const BuyFromUs = () => {
  return (
    <div>
      <section className="py-16 bg-base-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral">
              Why Readers Love Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Books",
                desc: "100% original and verified publications",
              },
              {
                title: "Fast Delivery",
                desc: "Quick and safe delivery across Bangladesh",
              },
              {
                title: "Reader Support",
                desc: "Friendly support for book suggestions",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-base-100 rounded-2xl p-8 text-center shadow-sm"
              >
                <h3 className="text-xl font-semibold text-neutral mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyFromUs;
