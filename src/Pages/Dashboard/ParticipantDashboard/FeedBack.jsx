import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";


const FeedBack = () => {

    
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
 
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    


    const onSubmit = (data) =>{
        console.log(data);
     
      if(user && user.email ){
      
        const reviewItem = {
            
             campName: data.campName,
             feedback: data.feedback,
             rating:parseInt(data.rating) ,
             date: data.date,
            

        }

        axiosPublic.post('/reviews', reviewItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: 'Registered successfully',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
       
      
    }


  

  return (
    <div>
        <Helmet>
        <title>MediCamp/Dashboard/Feedback and Rating</title>
      </Helmet>
        <div>
            <h2 className="text-4xl font-medium text-center">Leave Your FeedBack</h2>
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="flex flex-col md:flex-row gap-5 w-full">
       <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Camp Name</span>
          </label>
          <input
            type="text"
            {...register("campName", { required: true })}
            placeholder="camp name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">FeedBack</span>
          </label>
          <input
            type="text"
            {...register("feedback", { required: true })}
            placeholder="Feedback"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">feedback is required</span>
          )}
        </div>
       </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Rating</span>
          </label>
          <input
            type="number"
            {...register("rating", { required: true })}
            placeholder="rating"
            className="input input-bordered"
          />
           {errors.name && (
            <span className="text-red-600">rating is required</span>
          )}
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Date</span>
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Date"
            className="input input-bordered"
          />
           {errors.name && (
            <span className="text-red-600">date is required</span>
          )}
        </div>
        </div>
        <div className="form-control  mt-6">
          <input  className="btn bg-lime-500 text-white " type="submit" value="Review" />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
