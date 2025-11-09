import React from "react";
import { FaPaw, FaHandHoldingHeart, FaSmileBeam } from "react-icons/fa";

const WhyAdopt = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Adopt from <span className="text-[#dd6c20]">Paw</span><span className="text-[#4388C9]">Mart?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Every time you adopt, you’re not just bringing home a new friend — you’re
          saving a life and creating a beautiful future full of love, joy & care.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaPaw className="text-5xl mx-auto text-[#dd6c20]" />
            <h3 className="font-bold text-xl mt-4">Save a Life</h3>
            <p className="text-gray-600 mt-2">
              Give a second chance to pets who deserve love and a caring home.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaHandHoldingHeart className="text-5xl mx-auto text-[#4388C9]" />
            <h3 className="font-bold text-xl mt-4">End Pet Homelessness</h3>
            <p className="text-gray-600 mt-2">
              Adoption reduces stray animals and creates a safer community.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaSmileBeam className="text-5xl mx-auto text-[#dd6c20]" />
            <h3 className="font-bold text-xl mt-4">Unconditional Love</h3>
            <p className="text-gray-600 mt-2">
              Adopted pets are loyal, grateful and become a part of your heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
