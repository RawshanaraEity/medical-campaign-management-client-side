
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMediCamps from "../../../../Hooks/useMediCamps";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageCamp = () => {
    const [camps, loading, refetch] = useMediCamps()
    const axiosPublic = useAxiosPublic()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( result => {
            if (result.isConfirmed){
                 axiosPublic.delete(`/camps/${item._id}`)
                 .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    } 
                 })
                
            }
          });
    }


    return (
        <div>
            <h2 className="text-4xl text-center">Manage Your Camp</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Camp Name</th>
        <th>Camp Fees</th>
        <th>Details</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        camps.map((item, index) =>  <tr key={item._id}>
            <td>
                {index + 1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.campName}
            </td>
            <td>
             $ {item.campFees}
            </td>
            <td className="text-right">
            <Link to={`/camp-details/${item?._id}`}>
                <button className="btn btn-ghost ">See Details</button>
             </Link>
            </td>
            <td>
           <Link to={`/dashboard/updateItems/${item._id}`}>
           <button  className="btn btn-ghost text-white bg-lime-500">
                Update
              </button>
           </Link>
            </td>
            <td>
            <button onClick={() => handleDeleteItem(item)} className="btn bg-red-600 text-white">
                Remove
              </button>
            </td>
          </tr>)
      }
     
    </tbody>
   
    
  </table>
</div>
      </div>
    );
};

export default ManageCamp;