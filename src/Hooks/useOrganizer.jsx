import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useOrganizer = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    // console.log("useremail",user?.email);


   const { data:isOrganizer, isPending: isOrganizerLoading } =useQuery({
    queryKey: [user?.email, 'isOrganizer'],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/users/organizer/${user?.email}`);
        // console.log(res.data);
        return res?.data?.organizer;
    }
   })
   return [isOrganizer, isOrganizerLoading]
};

export default useOrganizer;