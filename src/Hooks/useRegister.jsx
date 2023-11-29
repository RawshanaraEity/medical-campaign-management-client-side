import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRegister = () => {
    const axiosPublic = useAxiosPublic()


    const {data: register = [], isPending: loading, refetch } =useQuery({
        queryKey: ['register'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/register')
            return res.data;
        }
    })


    return [register, loading, refetch]
};

export default useRegister;