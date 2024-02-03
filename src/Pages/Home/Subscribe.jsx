
import Swal from "sweetalert2";

const Subscribe = () => {


  const handleSubscribe = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
   
    console.log(email,name)

    if(handleSubscribe){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
    } 
}


  return (
    <div className="">
      <div className=" md:px-10 py-5 lg:py-0 bg-zinc-50 ">
        <div className="lg:h-72 flex justify-between md:gap-10 items-center flex-col md:flex-row">
          <div className="text-center flex-1 lg:flex-none">
            <h1 className="text-3xl lg:text-5xl font-bold">
            Subscribe Now
            </h1>
            <p className="py-6 text-lg lg:text-xl">
              Do not miss. Get our latest news & update regularly
            </p>
          </div>
          <div className="lg:flex-1 rounded  border bg-[rgba(156,219,135,0.2)]  shadow-2xl  ">
            <form onSubmit={handleSubscribe} className="card-body  items-center flex-row gap-0">
              <div className="w-full ">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input  w-full md:py-9 rounded text-black"
                  required
                />
              </div>
              <div className=" ">
                <button className="btn bg-lime-500  md:h-[76px]  text-white rounded text-xl font-bold capitalize">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
