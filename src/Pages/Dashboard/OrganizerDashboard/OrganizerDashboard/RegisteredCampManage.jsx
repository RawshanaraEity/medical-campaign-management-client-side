import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useRegister from "../../../../Hooks/useRegister";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";



const RegisteredCampManage = () => {
    const axiosPublic = useAxiosPublic();
    const [register, ,refetch] = useRegister()
  
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
          axiosPublic.delete(`/register/${item._id}`).then((res) => {
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
        <h2 className="text-4xl mb-10 text-center underline font-medium">Registered Camps</h2>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center font-medium">
            {register.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                       {item.campName}
                </td>
                <td>{item.scheduledDate}</td>
                <td>{item.scheduledTime}</td>
                <td>{item. venueLocation}</td>
                <td>$ {item.campFees}</td>
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

export default RegisteredCampManage;