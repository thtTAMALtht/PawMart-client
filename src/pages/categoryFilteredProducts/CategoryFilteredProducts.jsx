import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

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
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        {categoryName} Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No {categoryName} Products Available!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow p-4 border">
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="text-sm">{item.location}</p>
                <p className="font-semibold">
                  {item.category === "Pets"
                    ? "Free Adoption"
                    : `৳${item.price}`}
                </p>
                <Link
                  to={`/pets-supplies-details/${item._id}`}
                  className="btn btn-primary mt-2"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilteredProducts;
