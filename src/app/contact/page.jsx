import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="badge badge-primary badge-outline mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold text-neutral mt-3">
              Contact Our Bookshop
            </h2>
            <p className="text-neutral/70 mt-4 max-w-2xl mx-auto">
              Have a question about our books, orders, or recommendations? We’d
              love to hear from you.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-base-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral mb-6">
                📚 Visit or Reach Us
              </h3>

              <div className="space-y-5 text-neutral/80">
                <p>
                  <strong className="text-neutral">Address:</strong>
                  <br />
                  Green Leaf Bookshop,
                  <br />
                  Rajshahi, Bangladesh
                </p>

                <p>
                  <strong className="text-neutral">Email:</strong>
                  <br />
                  support@greenleafbooks.com
                </p>

                <p>
                  <strong className="text-neutral">Phone:</strong>
                  <br />
                  +880 1XXX-XXXXXX
                </p>

                <p>
                  <strong className="text-neutral">Opening Hours:</strong>
                  <br />
                  Saturday – Thursday: 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-base-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral mb-6">
                ✉️ Send Us a Message
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="label">
                    <span className="label-text text-neutral">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full bg-base-100"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-neutral">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-base-100"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-neutral">Message</span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered w-full bg-base-100 h-32"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-full rounded-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
