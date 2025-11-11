import { useRef } from "react";
import Container from "../../components/container/Container";
import { useLoaderData, useNavigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const PetSuppliesDetails = () => {
  const productDetails = useLoaderData();
  const modalRef = useRef();
  const { user } = useAuthContext();
  const axiosHook = useAxios();
  const navigate = useNavigate();
  const {
    _id: productId,
    name: productName,
    category,
    email,
    description,
    price,
    location,
    image,
  } = productDetails || {};

  const handleOrder = () => {
    modalRef.current.showModal();
  };

  const handleOrderDetails = (e) => {
    e.preventDefault();
    const buyerName = e.target.name.value;
    const email = e.target.email.value;
    const productId = e.target.productId.value;
    const productName = e.target.productName.value;
    const quantity =
      category === "Pets" ? 1 : parseInt(e.target.quantity.value);
    const price = e.target.price.value;
    const address = e.target.address.value;
    const dateValue = e.target.date.value;
    const [year, month, day] = dateValue.split("-");
    const date = `${day}-${month}-${year}`;
    const phone = e.target.phone.value;
    const additionalNotes = e.target.notes.value;

    const orderInfo = {
      buyerName,
      email,
      productId,
      productName,
      quantity: parseInt(quantity),
      price: parseInt(price),
      address,
      date,
      phone,
      additionalNotes,
    };

    axiosHook.post("/orders", orderInfo).then((data) => {
      if (data.data.insertedId) {
        toast.success("Your order request successfull");
        e.target.reset();
        modalRef.current.close();
        navigate("/myOrders")

      }
    });
  };

  return (
    <div>
      <Container>
        <div className="max-w-5xl mx-auto space-y-12 py-20">
          <div>
            <h3 className="text-5xl font-bold text-primary text-center">
              Pets & Supplies Details
            </h3>
          </div>
          <div className="card bg-base-100  max-w-2xl mx-auto shadow-sm p-4 space-y-4 border border-gray-100">
            <figure className="">
              <img src={image} className="rounded-xl h-96 w-full" />
            </figure>
            <div className="space-y-4">
              <h2 className="card-title">Name : {productName}</h2>
              <p className="font-semibold">Category : {category}</p>
              <p>Owner Email : {email}</p>
              <p className="font-semibold">
                Price : ৳ <span>{price}</span>
              </p>
              <p>Location : {location}</p>
              <p className="text-justify">Description : {description}</p>
              <div className="card-actions">
                <button onClick={handleOrder} className="btn btn-primary">
                  Adopt / Order
                </button>

                {/* modal code */}
                <dialog
                  ref={modalRef}
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle px-2"
                >
                  <div className="modal-box ">
                    <h3 className="text-5xl font-bold text-primary text-center pb-8">
                      Order Form
                    </h3>

                    {/* form details */}

                    <div className="flex justify-center">
                      <div className="card bg-base-100 w-full border border-gray-200 max-w-2xl shadow-md">
                        <div className="card-body">
                          <form onSubmit={handleOrderDetails}>
                            <fieldset className="fieldset space-y-4 text-lg">
                              {/* User Name */}
                              <label className="label font-semibold">
                                Buyer Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                              />

                              {/* Email */}
                              <label className="label font-semibold">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                              />

                              {/* Product ID */}
                              <label className="label font-semibold">
                                Product ID
                              </label>
                              <input
                                type="text"
                                name="productId"
                                defaultValue={productId}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                              />

                              {/* Product Name */}
                              <label className="label font-semibold">
                                Product / Pet Name
                              </label>
                              <input
                                type="text"
                                name="productName"
                                defaultValue={productName}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                              />

                              {/* Price */}
                              <label className="label font-semibold">
                                Price
                              </label>
                              <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                readOnly
                                className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-0"
                              />

                              {/* Quantity */}
                              <label className="label font-semibold">
                                Quantity
                              </label>
                              <input
                                type="number"
                                name="quantity"
                                defaultValue={category === "Pets" ? 1 : ""}
                                readOnly={category === "Pets"}
                                placeholder="Enter Quantity"
                                className="input input-bordered w-full focus:outline-none focus:ring-0"
                                required
                              />

                              {/* Address */}
                              <label className="label font-semibold">
                                Address
                              </label>
                              <input
                                type="text"
                                name="address"
                                placeholder="Enter address"
                                className="input input-bordered w-full focus:outline-none focus:ring-0"
                                required
                              />

                              {/* Phone */}
                              <label className="label font-semibold">
                                Phone
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                className="input input-bordered w-full focus:outline-none focus:ring-0"
                                required
                              />

                              {/* Date */}
                              <label className="label font-semibold">
                                Pick Up Date
                              </label>
                              <input
                                type="date"
                                name="date"
                                className="input input-bordered w-full focus:outline-none focus:ring-0"
                                required
                              />

                              {/* Notes */}
                              <label className="label font-semibold">
                                Additional Notes
                              </label>
                              <textarea
                                name="notes"
                                placeholder="Write details..."
                                className="textarea textarea-bordered w-full focus:outline-none focus:ring-0"
                                rows={4}
                                required
                              />

                              {/* Submit Button ✅ */}
                              <button
                                type="submit"
                                className="btn btn-primary text-white mt-4 w-full"
                              >
                                Submit
                              </button>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* modal close */}
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PetSuppliesDetails;
