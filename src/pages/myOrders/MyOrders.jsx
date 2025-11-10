import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const axiosHook = useAxios();
  const { user } = useAuthContext();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosHook.get(`/orders?email=${user?.email}`).then((data) => {
        setMyOrders(data.data);
      });
    }
  }, [axiosHook, user]);

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
      <div className="py-16 space-y-12">
        <h3 className="text-5xl font-bold text-primary text-center">
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
