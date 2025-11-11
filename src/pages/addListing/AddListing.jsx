import { useState } from "react";
import Container from "../../components/container/Container";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddListing = () => {
  const { user } = useAuthContext();
  const [category, setCategory] = useState("");
  const axiosHook = useAxios();
  const navigate = useNavigate();

  const handleAddListing = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const dateValue = e.target.date.value;
    const date = new Date(dateValue);

    const listingData = {
      name,
      category,
      price: parseInt(price),
      location,
      description,
      image,
      date,
      email: user?.email,
    };

  

    axiosHook.post("/listings", listingData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Listing added successfully!");
        e.target.reset();
        navigate("/", { replace: true });
        window.location.reload();
      }
    });
  };

  return (
    <Container>
      <section className="space-y-8 py-16">
      <title>PawMart | Add Listing</title>
        <h3 className="text-4xl md:text-5xl font-bold text-primary text-center">
          Add Listing
        </h3>

        <div className="flex justify-center">
          <div className="card bg-base-100 w-full border border-gray-200 max-w-2xl shadow-md">
            <div className="card-body">
              <form onSubmit={handleAddListing}>
                <fieldset className="fieldset space-y-4 text-lg">
                  {/* Product / Pet Name */}
                  <label className="label font-semibold">
                    Product/Pet Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full focus:outline-none focus:ring-0"
                    required
                  />

                  {/* Category */}
                  <label className="label font-semibold">Category</label>
                  <select
                    name="category"
                    className="select select-bordered w-full focus:outline-none focus:ring-0"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                  </select>

                  {/* Price */}
                  <label className="label font-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    defaultValue={category === "Pets" ? 0 : ""}
                    disabled={category === "Pets"}
                    className="input input-bordered w-full focus:outline-none focus:ring-0"
                    min="0"
                    required
                  />

                  {/* Location */}
                  <label className="label font-semibold">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    className="input input-bordered w-full focus:outline-none focus:ring-0"
                    required
                  />

                  {/* Description */}
                  <label className="label font-semibold">Description</label>
                  <textarea
                    name="description"
                    placeholder="Write details..."
                    className="textarea textarea-bordered w-full focus:outline-none focus:ring-0"
                    rows={3}
                    required
                  />

                  {/* Image URL */}
                  <label className="label font-semibold">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered w-full focus:outline-none focus:ring-0"
                    required
                  />

                  {/* Date */}
                  <label className="label font-semibold">Pick Up Date</label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full focus:outline-none focus:ring-0"
                    required
                  />

                  {/* Email readonly */}
                  <label className="label font-semibold">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                  />

                  {/* Submit */}
                  <button className="btn btn-primary text-white mt-4 w-full">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AddListing;
