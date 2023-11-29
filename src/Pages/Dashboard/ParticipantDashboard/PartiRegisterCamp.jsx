import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const PartiRegisterCamp = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()


    const { data: payments = [] } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/payments/${user?.email}`);
          return res.data;
        },
      });

    const { data , refetch} = useQuery({
        queryKey: ["registeredCamp", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/register/${user?.email}`);
          return res?.data;
        },
      });

    //   console.log(data);

      const totalPrice = data?.reduce((total, item) => total+item?.campFees ,0)



      const handleDeleteItem = (item) => {
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
            axiosPublic.delete(`/register/${item?._id}`).then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };

    return (
        <div>
        <div className="border-b-2">
          <h2 className="text-4xl mb-10 text-center font-semibold underline">Registered Camps</h2>
          <div className="flex justify-evenly mb-8">
            <h2 className="text-4xl font-bold">Total Registration: {data?.length} </h2>
            <h2 className="text-4xl font-bold">Total Fees: ${totalPrice} </h2>

            {
              data?.length ? <Link to='/dashboard/payment'>
              <button className="btn bg-lime-500">Pay</button>
              </Link> : <button disabled className="btn bg-lime-500">Pay</button>

            }
            
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-lime-200">
              <tr>
                <th>#</th>
                <th>Camp Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
                <td>Camp Fees</td>
                <td>status</td>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                         {item.campName}
                  </td>
                  <td>{item.scheduledDate}</td>
                  <td>{item.scheduledTime}</td>
                  <td>{item. venueLocation}</td>
                  <td>$ {item.campFees}</td>
                  <td className="text-right text-yellow-500 font-bold">
                   {payments?.map(payment =>payment.status)}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn rounded-none btn-sm bg-red-600 text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PartiRegisterCamp;