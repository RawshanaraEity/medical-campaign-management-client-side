
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const Users = () => {
    const axiosPublic = useAxiosPublic()
    const [users, setUsers] = useState()


    useEffect(() => {
        axiosPublic.get('/users')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log("Error fetching camp data:", error)
      })
        
    }, [axiosPublic]);

    return (
            <div>
                    <h2> Users: {users?.length} </h2>
            </div>


    )

    
};

export default Users;