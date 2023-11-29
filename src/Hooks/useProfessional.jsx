import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useProfessional = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    // console.log("useremail",user?.email);


   const { data:isProfessional, isPending: isProfessionalLoading } =useQuery({
    queryKey: [user?.email, 'isprofessional'],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/users/professional/${user?.email}`);
        // console.log(res.data);
        return res?.data?.professional;
    }
   })
   return [isProfessional, isProfessionalLoading]
};

export default useProfessional;