import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Professionals = () => {
    const axiosPublic = useAxiosPublic()
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
        axiosPublic.get('/professionals')
        .then((response) => {
          setDoctors(response.data);
        })
        .catch((error) => {
          console.log("Error fetching  data:", error)
      })
        
    }, [axiosPublic]);


    return (
        <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center py-10 lg:py-20">Meet Our Healthcare Professionals</h2>
     
           <div className="bg-fixed lg:h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/jfYQcB0/bg2.jpg)'}}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full text-white  justify-between items-center">
                {
                    doctors.map(doctor => (
                        <div key={doctor._id}> 
                            <div className="flex flex-col items-center py-10 ">
                                <img className="h-60 w-60  rounded-full border-4 border-lime-500" src={doctor.image} alt="" />
                                <h2 className="text-center text-xl font-semibold">{doctor.name}</h2>
                                <p className="text-center font-medium">{doctor.specialist}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
           </div>
        </div>
    );
};

export default Professionals;