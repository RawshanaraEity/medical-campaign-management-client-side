import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useParticipant = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();
    console.log("useremail",user?.email);

   const { data: isParticipant, isPending: isParticipantLoading } =useQuery({
    queryKey: [user?.email, 'isParticipant'],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/users/participant/${user?.email}`);
        console.log(res.data);
        return res?.data?.participant;
    }
   })
   return [isParticipant, isParticipantLoading]
};

export default useParticipant;

