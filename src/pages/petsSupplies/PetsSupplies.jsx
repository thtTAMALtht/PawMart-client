import React, { useState, useEffect } from "react";

import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const PetsSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const axiosHook = useAxios();

  useEffect(() => {
    axiosHook
      .get("/listings")
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, [axiosHook]);

  let filteredListings = [];

  if (filterCategory === "") {
    filteredListings = listings;
  } else {
    filteredListings = listings.filter((listing) => {
      return listing.category === filterCategory;
    });
  }

  return (
    <div className="pt-28 px-4 md:px-8 lg:px-16 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-5xl font-bold text-primary">Pets & Supplies</h3>

        {/* Category Filter */}
        <select
          className="select select-bordered focus:outline-none focus:ring-0"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {filteredListings.map((listing) => (
          <div
            key={listing._id}
            className="card bg-base-100 p-3 shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            <figure>
              <img
                src={listing.image}
                alt={listing.name}
                className="h-60 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Name : {listing.name}</h3>
              <p className="text-sm text-gray-500">{listing.category}</p>
              <p className="text-sm">Location : {listing.location}</p>
              <p className="font-semibold text-lg">
                {listing.category === "Pets"
                  ? "Free Adoption"
                  : `৳${listing.price}`}
              </p>
              <div className="card-actions mt-2">
                <Link
                  to={`/pets-supplies-details/${listing._id}`}
                  className="btn btn-primary btn-sm text-white w-full"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsSupplies;
