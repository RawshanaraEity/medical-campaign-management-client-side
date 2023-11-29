import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">Total Payments: {payments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-lime-200 text-black">
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-lg font-medium">
            {payments.map((payment, index) => <tr key={payment._id}>

              <th>{index + 1}</th>
              <td>$ {payment.price} </td>
              <td>{payment.transactionId} </td>
              <td className="text-yellow-500 font-bold">{payment.status}</td>
            </tr> 
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
