import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const UpdateListing = () => {
  const { user } = useAuthContext();
  const axiosHook = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState([]);


  useEffect(() => {
    
    axiosHook.get(`/listings/${id}`).then((res) => {
      setListing(res.data);
    });
  }, [id, axiosHook]);

  const handleUpdateListing = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const dateValue = e.target.date.value;
    const [year, month, day] = dateValue.split("-");
    const date = `${day}-${month}-${year}`;

    const updateData = {
      name,
      category: listing.category,
      price: parseInt(price),
      location,
      description,
      image,
      date,
      email: user?.email,
    };

    axiosHook.put(`/listings/${id}`, updateData).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Listing updated successfully!");
        navigate("/myListing");
      }
    });
  };

 

  return (
    <Container>
      <section className="space-y-8 py-16">
        <h3 className="text-5xl font-bold text-primary text-center">
          Update Listing
        </h3>

        <div className="flex justify-center">
          <div className="card bg-base-100 w-full border border-gray-200 max-w-2xl shadow-md">
            <div className="card-body">
              <form onSubmit={handleUpdateListing}>
                <fieldset className="fieldset space-y-4 text-lg">
                  <label className="label font-semibold">
                    Product/Pet Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={listing.name}
                    className="input input-bordered w-full"
                    required
                  />

                  <label className="label font-semibold">Category</label>
                  <input
                    type="text"
                    value={listing.category}
                    disabled
                    className="input input-bordered w-full bg-gray-200"
                  />

                  <label className="label font-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={listing.price}
                    className="input input-bordered w-full"
                    required
                  />

                  <label className="label font-semibold">Location</label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={listing.location}
                    className="input input-bordered w-full"
                    required
                  />

                  <label className="label font-semibold">Description</label>
                  <textarea
                    name="description"
                    defaultValue={listing.description}
                    className="textarea textarea-bordered w-full"
                    rows={3}
                    required
                  />

                  <label className="label font-semibold">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={listing.image}
                    className="input input-bordered w-full"
                    required
                  />

                  <label className="label font-semibold">Pick Up Date</label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />

                  <label className="label font-semibold">Email</label>
                  <input
                    type="email"
                    defaultValue={listing.email}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                  />

                  <button className="btn btn-primary text-white mt-4 w-full">
                    Update
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

export default UpdateListing;
