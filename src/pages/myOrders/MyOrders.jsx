import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";

const MyOrders = () => {
  const axiosHook = useAxios();
  const { user } = useAuthContext();
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosHook.get(`/orders?email=${user?.email}`).then((data) => {
        setMyOrders(data.data);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
    }
  }, [axiosHook, user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-[#2479C9] space-y-4">
        <p className="text-lg font-semibold">Data is Loading</p>
        <BarLoader color="#2479C9" />
      </div>
    );
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const title = "My Orders Report";
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, pageWidth / 2, 12, { align: "center" });

    autoTable(doc, {
      startY: 15,
      head: [
        ["SL", "BuyerName", "Price", "Quantity", "Address", "Date", "Phone"],
      ],
      body: myOrders.map((order, index) => [
        index + 1,
        order.buyerName,
        order.price,
        order.quantity,
        order.address,
        order.date,
        order.phone,
      ]),
    });

    doc.save("my-orders.pdf");
  };

  return (
    <Container>
      <title>PawMart | My Orders</title>
      <div className="py-16 space-y-12">
        <h3 className="text-4xl md:text-5xl font-bold text-primary text-center">
          My Orders : {myOrders.length}
        </h3>
        {/* Download */}
        <div className="text-center">
          <button
            onClick={handleDownloadPDF}
            className="btn btn-primary btn-sm md:btn-md"
          >
            📄 Download Order Report
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table table-zebra border border-blue-100 text-sm md:text-base">
            <thead className="bg-primary text-white text-lg">
              <tr>
                <th>SL</th>
                <th>BuyerName</th>
                <th>Pet/Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myOrders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td className="whitespace-nowrap">{order.buyerName}</td>
                  <td className="whitespace-nowrap">{order.productName}</td>
                  <td>৳ {order.price}</td>
                  <td>{order.quantity}</td>
                  <td className="whitespace-normal wrap-break">
                    {order.address}
                  </td>
                  <td>{order.date}</td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyOrders;
