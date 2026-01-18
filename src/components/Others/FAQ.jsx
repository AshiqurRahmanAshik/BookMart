import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="py-16 bg-base-100">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="badge badge-primary badge-outline mb-3">FAQ</span>
            <h2 className="text-4xl font-bold text-neutral">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral/70 mt-3">
              Everything you need to know before ordering
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                How do I place an order?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Simply browse our collection, add your desired books to the
                cart, and complete the checkout process with your delivery
                details.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                Are the books original?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Yes, all our books are 100% original and sourced directly from
                authorized publishers and distributors.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                Do you offer cash on delivery?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Yes, we provide cash on delivery (COD) service across Bangladesh
                for your convenience.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                How long does delivery take?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Delivery usually takes 1–3 working days inside major cities and
                3–5 working days for other areas.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                Can I return or exchange a book?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Yes, you can request a return or exchange within 3 days of
                delivery if the book is damaged or incorrect.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                Do you deliver outside Bangladesh?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                Currently, we deliver only within Bangladesh. International
                delivery options will be available soon.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <div className="collapse-title font-semibold">
                How can I contact customer support?
              </div>
              <div className="collapse-content text-sm text-neutral/70">
                You can reach us via our Contact Us page, email, or phone number
                during our working hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
