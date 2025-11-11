import { Link } from "react-router";
import Container from "../../components/container/Container";

const categories = [
  {
    name: "Pets",
    label: "Pets (Adoption)",
    icon: "🐶",
  },
  {
    name: "Food",
    label: "Pet Food",
    icon: "🍖",
  },
  {
    name: "Accessories",
    label: "Accessories",
    icon: "🧸",
  },
  {
    name: "Care Products",
    label: "Pet Care Products",
    icon: "💊",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-14 md:py-28">
      <Container>
        <h3 className="text-2xl md:text-5xl font-bold text-center text-primary mb-6">
          Categories
        </h3>
        <p className="max-w-3xl mx-auto text-center text-sm md:text-lg text-gray-400 mb-12">
          Whether you’re adopting a cute companion, grabbing tasty treats,
          stylish accessories, or essential care products — we’ve organized
          everything for you! Pick a category and start shopping the smart way.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category-filtered-product/${category.name}`}
              className="bg-primary text-white rounded-lg p-6 text-center
              font-semibold hover:shadow-xl hover:shadow-[#dd6c20]/10 transition flex flex-col items-center gap-3 text-xl"
            >
              <span className="text-5xl">{category.icon}</span>
              {category.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryCards;
