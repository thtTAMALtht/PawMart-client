import { Link } from "react-router";
import Container from "../../components/container/Container";

const categories = [
  { name: "Pets", label: "Pets (Adoption)" },
  { name: "Food", label: "Pet Food" },
  { name: "Accessories", label: "Accessories" },
  { name: "Care Products", label: "Pet Care Products" },
];

const CategoryCards = () => {
  return (
    <section className="py-24">
      <Container>
        <h3 className="text-5xl font-bold text-center text-primary mb-16">
          Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category-filtered-product/${category.name}`}
              className="bg-primary text-white rounded-lg p-6 text-center
          font-semibold hover:opacity-90 transition"
            >
              🐶 {category.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryCards;
