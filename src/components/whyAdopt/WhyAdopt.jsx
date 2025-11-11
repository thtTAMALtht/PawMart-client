import { Typewriter } from "react-simple-typewriter";
import { FaPaw, FaHandHoldingHeart, FaSmileBeam } from "react-icons/fa";
import Container from "../container/Container";

const WhyAdopt = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center px-5">
          <h2 className="text-xl md:text-5xl font-bold mb-6">
            Why Adopt from{" "}
            <span className="text-[#dd6c20]">
              <Typewriter
                words={["Paw"]}
                loop={1}
                cursor={false}
                cursorStyle="|"
                typeSpeed={120}
              />
            </span>
            <span className="text-[#4388C9]">
              <Typewriter
                words={["Mart?"]}
                loop={0}
                cursor={true}
                typeSpeed={120}
              />
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-400 mb-12">
            Every time you adopt, you’re not just bringing home a new friend —
            you’re saving a life and creating a beautiful future full of love,
            joy & care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl hover:shadow-[#dd6c20]/10">
              <FaPaw className="text-5xl mx-auto text-[#dd6c20]" />
              <h3 className="font-bold text-xl mt-4 text-gray-600">
                Save a Life
              </h3>
              <p className="text-gray-600 mt-2 text-md">
                Give a second chance to pets who deserve love and a caring home.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow border border-gray-200 hover:shadow-xl transition hover:shadow-[#dd6c20]/10">
              <FaHandHoldingHeart className="text-5xl mx-auto text-[#4388C9]" />
              <h3 className="font-bold text-xl mt-4 text-gray-600">
                End Pet Homelessness
              </h3>
              <p className="text-gray-600 mt-2 text-md">
                Adoption reduces stray animals and creates a safer community.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow border border-gray-200 hover:shadow-xl transition hover:shadow-[#dd6c20]/10">
              <FaSmileBeam className="text-5xl mx-auto text-[#dd6c20]" />
              <h3 className="font-bold text-xl mt-4 text-gray-600">
                Unconditional Love
              </h3>
              <p className="text-gray-600 mt-2 text-md">
                Adopted pets are loyal, grateful and become a part of your
                heart.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyAdopt;
