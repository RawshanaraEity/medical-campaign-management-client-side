import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIONG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageCampForm = () => {
    const {id} = useParams()
    console.log(id);
    const axiosPublic = useAxiosPublic()
    const [camp, setCamp] = useState([]);
    const navigate = useNavigate()

     useEffect(() => {
    axiosPublic
      .get(`/camps/${id}`)
      .then((response) => {
        setCamp(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching camp data:", error);
      });
  }, [axiosPublic, id]);

    const {
       register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) =>{
      console.log(data);
  
      const imageFile = { image: data.image[0] }
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
              'content-type': "multipart/form-data"
          }
      } )
      if(res.data.success){
          
          const campItem = {
              campName: data.campName,
              campFees: parseFloat(data.campFees),
              scheduledDate: data.scheduledDate,
              scheduledTime: data.scheduledTime,
              venueLocation: data.venueLocation,
              specializedServices: data.specializedServices.split(',').map(item => item.trim()),
              healthcareProfessionals: data.healthcareProfessionals.split(',').map(item => item.trim()),
              benefits: data.benefits.split(',').map(item => item.trim()),
              targetAudience: data.targetAudience,
              participantCount: parseFloat(data.participantCount),
              description: data.description,
              image: res.data.data.display_url
          }
          // 
          const campRes = await axiosPublic.patch(`/camps/${camp._id}`, campItem);
          console.log(campRes.data)
          if(campRes.data.modifiedCount){
              
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.campName} is updated successfully`,
                  showConfirmButton: false,
                  timer: 1500
                });
                reset()
                navigate('/dashboard/manage-camps')
          }
      }
      console.log(res.data);
    };

    return (
        <div>
            
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full  mx-auto bg-lime-50 p-5 md:p-3 lg:p-8 shadow-lg">
           <div className="flex flex-col md:flex-row gap-5">
                {/* Camp Name */}
         <div className="form-control flex-1">
           <label className="label">
              <span className="label-text text-lg font-medium">
              Camp Name
              </span>
               </label>
           <input
             type="text"
             {...register("campName", { required: true })}
             defaultValue={camp.campName}
             className="input input-bordered"
           />
           {errors.campName && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Image */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Image UR
              </span>
               </label>
               <input
             type="file"
             {...register("image", { required: true })}
             className="file file-input-bordered"
           />
           {errors.image && <span className="text-red-600">This field is required</span>}
         </div>
           </div>
   
        <div className="flex flex-col md:flex-row gap-5">
            {/* Camp Fees */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Camp Fees
              </span>
               </label>
           <input
             type="number"
             {...register("campFees", { required: true })}
             defaultValue={camp.campFees}
             className="input input-bordered"
           />
           {errors.campFees && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Scheduled Date */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Scheduled Date
              </span>
               </label>
           <input
             type="date"
             {...register("scheduledDate", { required: true })}
             defaultValue={camp.scheduledDate}
             className="input input-bordered"
           />
           {errors.scheduledDate && <span className="text-red-600">This field is required</span>}
         </div>
        </div>
   
        <div className="flex flex-col md:flex-row gap-5">
            {/* Scheduled Time */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Scheduled Time
              </span>
               </label>
           <input
             type="text"
             {...register("scheduledTime", { required: true })}
             defaultValue={camp.scheduledTime}
             className="input input-bordered"
           />
           {errors.scheduledTime && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Venue Location */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Venue Location
              </span>
               </label>
           <input
             type="text"
             {...register("venueLocation", { required: true })}
             defaultValue={camp.venueLocation}
             className="input input-bordered"
           />
           {errors.venueLocation && <span className="text-red-600">This field is required</span>}
         </div>
        </div>
   
        <div className="flex flex-col md:flex-row gap-5">
                {/* Specialized Services */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Specialized Services
              </span>
               </label>
           <textarea
             type="text"
             {...register("specializedServices", { required: true })}
             defaultValue={camp.specializedServices}
             className="input input-bordered"
           />
           {errors.specializedServices && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Healthcare Professionals */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Healthcare Professionals
              </span>
               </label>
           <textarea
             type="text"
             {...register("healthcareProfessionals", { required: true })}
             defaultValue={camp.healthcareProfessionals}
             className="input input-bordered"
           />
           {errors.healthcareProfessionals && <span className="text-red-600">This field is required</span>}
         </div>
        </div>
   
        <div className="flex flex-col md:flex-row gap-5">
        {/* Target Audience */}
        <div className="form-control flex-1">
        <label className="label">
              <span className="label-text text-lg font-medium">
              Target Audience
              </span>
               </label>
           <input
             type="text"
             {...register("targetAudience", { required: true })}
             defaultValue={camp.targetAudience}
             className="input input-bordered"
           />
           {errors.targetAudience && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Participant Count */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Participant Count
              </span>
               </label>
           <input
             type="number"
             {...register("participantCount", { required: true })}
             value={0} readOnly
             className="input input-bordered"
           />
           {errors.participantCount && <span>This field is required</span>}
         </div>
        </div>
   
         <div className="flex flex-col md:flex-row gap-5">
           {/* Description */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Description
              </span>
               </label>
           <textarea
             {...register("description", { required: true })}
             defaultValue={camp.description}
             className="input input-bordered"
           />
           {errors.description && <span className="text-red-600">This field is required</span>}
         </div>
   
         {/* Benefits */}
         <div className="form-control flex-1">
         <label className="label">
              <span className="label-text text-lg font-medium">
              Benefits
              </span>
               </label>
           <textarea
            {...register("benefits", { required: true })}
            defaultValue={camp.benefits}
             className="input input-bordered" />
           {errors.benefits && <span className="text-red-600">This field is required</span>}
         </div>
         </div>
   
         {/* Submit Button */}
         <div className="form-control w-28 mx-auto mt-6">
             <input  className="btn  bg-lime-500 text-white " type="submit" value="Submit" />
           </div>
        </div>
       </form>
      </div>
    );
};

export default ManageCampForm;