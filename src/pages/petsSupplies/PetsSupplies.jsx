import React, { useState, useEffect } from "react";

import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const PetsSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const axiosHook = useAxios();

  useEffect(() => {
    axiosHook
      .get("/listings")
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, [axiosHook]);

  let displayListings = searchResults.length > 0 ? searchResults : listings;

  if (filterCategory) {
    displayListings = displayListings.filter(
      (item) => item.category === filterCategory
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();

    if (!searchValue) {
      setSearchResults([]);
      return;
    }

    axiosHook(`/search?search=${searchValue}`)
      .then((data) => setSearchResults(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16 space-y-6">
      <title>PawMart | Pets & Supplies</title>
      <div>
        <h3 className="text-5xl font-bold text-center text-primary">
          Pets & Supplies
        </h3>
      </div>

      <div className="flex justify-between items-center">
        {/* search product */}
        <form onSubmit={handleSearch} className="flex items-center">
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="search"
              className="placeholder-gray-400"
              placeholder="Search your product"
            />
          </label>
          <button className="btn ml-1 btn-primary rounded-full">Search</button>
        </form>
        {/* category */}
        <div>
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
        {/* Category Filter */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {displayListings.length > 0 ? (
          displayListings.map((listing) => (
            <div
              key={listing._id}
              className="card bg-base-100 p-3 shadow-md  transition-shadow rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-[#dd6c20]/10"
            >
              <figure>
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="space-y-3">
                <h3 className="card-title mt-2">Name : {listing.name}</h3>
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
                    className="btn btn-primary text-white w-full"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No Data Available
          </p>
        )}
      </div>
    </div>
  );
};

export default PetsSupplies;
