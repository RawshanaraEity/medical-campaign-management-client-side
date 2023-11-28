
import useMediCamps from "../../../../Hooks/useMediCamps";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import ManageCampForm from "../../../../components/ManageCampForm";


const ManageCamp = () => {
  const [camps, loading, refetch] = useMediCamps();
  const axiosPublic = useAxiosPublic();

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
        axiosPublic.delete(`/camps/${item._id}`).then((res) => {
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
        <h2 className="text-4xl mb-5 text-center ">Manage Camp Data</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Camp Name</th>
              <th>Camp Fees</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {camps.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.campName}</td>
                <td>$ {item.campFees}</td>
                <td className="text-right">
                  <Link to={`/camp-details/${item?._id}`}>
                    <button className="btn btn-ghost ">See Details</button>
                  </Link>
                </td>
                <td>
                
         <Link to={`/dashboard/update-camp/${item?._id}`}>
         <button className="btn btn-sm rounded-none bg-lime-500  text-white">
            Update
          </button>
         </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn rounded-none btn-sm bg-red-600 text-white"
                  >
                    Remove
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

export default ManageCamp;
