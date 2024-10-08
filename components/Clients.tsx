"use client";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";
import { Fragment } from "react";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-4 justify-center items-center">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={60}
                  height={50}
                  className="w-10 md:w-14"
                />
                <p className="text-xl">{company.name}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;