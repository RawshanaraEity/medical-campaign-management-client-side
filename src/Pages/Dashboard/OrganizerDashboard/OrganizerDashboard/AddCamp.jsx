

import { useForm } from "react-hook-form";

const AddCamp = () => {

  const {
     register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
}

  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)} className="your-form-styles">
     <div className=" w-11/12 mx-auto">
        <div className="flex gap-5">
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
          type="url"
          {...register("image", { required: true })}
          className="input input-bordered"
        />
        {errors.image && <span className="text-red-600">This field is required</span>}
      </div>
        </div>

     <div className="flex gap-5">
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
          className="input input-bordered"
        />
        {errors.scheduledDate && <span className="text-red-600">This field is required</span>}
      </div>
     </div>

     <div className="flex gap-5">
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
          className="input input-bordered"
        />
        {errors.venueLocation && <span className="text-red-600">This field is required</span>}
      </div>
     </div>

     <div className="flex gap-5">
             {/* Specialized Services */}
      <div className="form-control flex-1">
      <label className="label">
           <span className="label-text text-lg font-medium">
           Specialized Services
           </span>
            </label>
        <input
          type="text"
          {...register("specializedServices", { required: true })}
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
        <input
          type="text"
          {...register("healthcareProfessionals", { required: true })}
          className="input input-bordered"
        />
        {errors.healthcareProfessionals && <span className="text-red-600">This field is required</span>}
      </div>
     </div>

     <div className="flex gap-5">
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

      <div className="flex gap-5">
        {/* Description */}
      <div className="form-control flex-1">
      <label className="label">
           <span className="label-text text-lg font-medium">
           Description
           </span>
            </label>
        <textarea
          {...register("description", { required: true })}
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
        <textarea {...register("benefits", { required: true })} className="input input-bordered" />
        {errors.benefits && <span className="text-red-600">This field is required</span>}
      </div>
      </div>

      {/* Submit Button */}
      <div className="form-control  mt-6">
          <input  className="btn bg-lime-500 text-white " type="submit" value="Submit" />
        </div>
     </div>
    </form>
   </div>
  );
};

export default AddCamp;
