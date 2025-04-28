import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  return (
    <div className="pt-24 pb-4 mb-15">
      {/* section heading */}
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div>
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div>
          <WhyChooseCard image="/images/c2.svg" title="Easy & Quick " />
        </div>
        <div>
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Support 24/7 "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
