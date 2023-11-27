import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="flex flex-row gap-5 w-full">
       <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Address</span>
          </label>
          <input
            type="text"
            {...register("address", { required: true })}
            name="address"
            placeholder="Address"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Address is required</span>
          )}
        </div>
       </div>

        <div className="flex flex-row gap-5 w-full">
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Age</span>
          </label>
          <input
            type="number"
            {...register("age")}
            name="age"
            placeholder="Age"
            className="input input-bordered"
          />
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text text-lg font-medium">Phone</span>
          </label>
          <input
            type="number"
            {...register("phone")}
            name="phone"
            placeholder="Phone"
            className="input input-bordered"
          />
        </div>
        </div>

        <div className="flex flex-row gap-5 w-full">
        <div className="form-control flex-1">
        <label className="label">
            <span className="label-text text-lg font-medium">Gender</span>
          </label> 
          <select
           className="input input-bordered"
           {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        </div>
        <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-gray-600 font-medium">
                  Your Interest
                </span>
              </label>
              <input
                type="text"
                {...register("interest")}
                name="interest"
                placeholder="Interest"
                className="input input-bordered"
                required
              />
            </div>
        </div>
        <div className="form-control  mt-6">
          <input className="btn bg-lime-500 text-white " type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
