import React from "react";

const heroes = [
  {
    id: 1,
    pet: "Miko",
    hero: "Bella",
    img: "https://i.ibb.co.com/nsGgNM65/heroes1.jpg",
    story:
      "Bella is a passionate pet lover who rescued Miko from the streets. She ensures Miko has a warm home, nutritious food, and endless cuddles every day.",
  },
  {
    id: 2,
    pet: "Max",
    hero: "Rohan",
    img: "https://i.ibb.co.com/PvHCgFwp/heroes2.jpg",
    story:
      "Rohan, a dedicated animal lover, adopted Max and provides him with constant care, playtime, and love. Their bond is a perfect example of compassion.",
  },
  {
    id: 3,
    pet: "Charlie & Milo",
    hero: "Sarah",
    img: "https://i.ibb.co.com/8nHTgDNm/heroes3.jpg",
    story:
      "Sarah is a true pet enthusiast who gave Charlie and Milo a second chance at life. Her home is filled with love, toys, and safe spaces for them to thrive.",
  },
];

const PetHeroes = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Meet Our <span className="text-[#dd6c20]">Pet</span>
          <span className="text-[#4388C9]"> Heroes</span>
        </h2>
        <p className="max-w-3xl mx-auto text-center text-sm md:text-lg text-gray-400 mb-12">
          These amazing humans make rescuing & rehoming possible. Our Pet Heroes
          dedicate their time, effort & hearts to give animals a second chance
          at life.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="p-5 rounded-xl bg-white shadow hover:shadow-lg hover:scale-103 transition-transform duration-800 border border-gray-100 hover:shadow-[#dd6c20]/10"
            >
              <img
                src={hero.img}
                alt={`${hero.pet} & ${hero.hero}`}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="font-bold text-xl mt-4 text-gray-800">
                <span className="text-[#dd6c20]">{hero.pet}</span> &{" "}
                <span className="text-primary">{hero.hero}</span>
              </h3>
              <p className="text-gray-600 text-md leading-relaxed mt-3">
                {hero.story}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#4388C9] text-white  btn btn-lg rounded-lg font-semibold hover:bg-[#dd6c20] hover:shadow-lg transition-all duration-300 cursor-pointer">
          Read More Success Stories
        </button>
      </div>
    </section>
  );
};

export default PetHeroes;
