import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";
import Container from "../../components/container/Container";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const axiosHook = useAxios();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosHook(`/listings?category=${categoryName}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [axiosHook, categoryName]);

  return (
    <section  className="py-24">
      <Container>
        <h3 className="text-5xl font-bold text-center text-primary mb-16">
          {categoryName} Products
        </h3>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No {categoryName} Products Available!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div
                key={item._id}
                className="card bg-base-100 border border-gray-200 shadow p-3"
              >
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-60 w-full object-cover"
                  />
                </figure>
                <div className="space-y-3">
                  <h3 className="card-title mt-2">{item.name}</h3>
                  <p className="text-sm">{item.location}</p>
                  <p className="font-semibold">
                    {item.category === "Pets"
                      ? "Free Adoption"
                      : `৳${item.price}`}
                  </p>
                  <Link
                    to={`/pets-supplies-details/${item._id}`}
                    className="btn btn-primary mt-2 w-full"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default CategoryFilteredProducts;
