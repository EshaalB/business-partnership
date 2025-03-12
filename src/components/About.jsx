import React from "react";
import image from "../assets/image.jpg";

const About = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-darkBlue">
            About us
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
            At BPC Portal, we're dedicated to fostering collaboration,
            innovation, and economic growth through our secure and user-friendly
            platform.
          </p>
        </div>

        <div className="grid lg:gap-7 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={image}
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-darkBlue">
              Who We Are
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
              At BPC Portal, we're the catalysts for collaborative success.
              Bringing together investors, entrepreneurs, and skilled
              professionals, we empower dreams to reality.
            </p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-darkBlue">
              What We Do
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
              Our platform seamlessly connects visionaries with resources,
              fostering innovation and growth. From secure messaging to
              comprehensive market analysis, we're your partner in prosperity.
            </p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-darkBlue">
              Why Choose Us
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
              Choose BPC Portal for efficiency, trust, and boundless
              opportunities. Join our vibrant community today and unlock your
              path to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
