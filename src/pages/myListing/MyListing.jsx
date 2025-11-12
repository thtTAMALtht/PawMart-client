import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/container/Container";
import Swal from "sweetalert2";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";

const MyListing = () => {
  const axiosHook = useAxios();
  const { user } = useAuthContext();
  const [myListing, setMyListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosHook.get(`/listings?email=${user?.email}`).then((data) => {
        setMyListing(data.data);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
    }
    
  }, [user, axiosHook]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-[#2479C9] space-y-4">
        <p className="text-lg font-semibold">Data is Loading</p>
        <BarLoader color="#2479C9" />
      </div>
    );
  }
  //delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosHook.delete(`/listings/${id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          const remainingListing = myListing.filter(
            (listing) => listing._id !== id
          );
          setMyListing(remainingListing);
        });
      }
    });
  };


  return (
    <Container>
      <title>PawMart | My Listing</title>
      <div className="py-16 space-y-12">
        <h3 className="text-4xl md:text-5xl font-bold text-primary text-center">
          My Listing : {myListing.length}
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra border border-blue-100 text-sm md:text-base">
            <thead className="bg-primary text-white text-lg">
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Category</th>
                <th>Email</th>
                <th>Price</th>
                <th>Location</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myListing.map((listing, index) => (
                <tr key={listing._id}>
                  <td>{index + 1}</td>
                  <td className="whitespace-nowrap">{listing.name}</td>
                  <td>{listing.category}</td>
                  <td>{listing.email}</td>
                  <td>৳{listing.price}</td>
                  <td>{listing.location}</td>
                  <td>{listing.description.slice(0, 18)}....</td>
                  <td>
                    <img src={listing.image} alt="" className="w-20 h-15" />
                  </td>
                  <td className="flex flex-col lg:mt-3 gap-2 lg:flex-row">
                    <Link to={`/myListing/update/${listing._id}`}  className="btn btn-sm btn-outline btn-primary">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="btn btn-sm btn-outline bg-red-400 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyListing;
