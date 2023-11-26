import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <Helmet>
        <title>MediCamp/Contact</title>
      </Helmet>

      <h2 className="text-4xl md:text-5xl text-center text-black font-bold  p-14">
        Contact Us
      </h2>
      
      <div>
        <h2 className="text-5xl text-center font-semibold mt-10">
          Drop us a message for any query
        </h2>
        <div className="card rounded-none w-8/12 mx-auto my-10 bg-base-100 shadow-xl">
          <div className="card-body flex-row gap-5 w-full">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-gray-600 font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered bg-lime-50"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-gray-600 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="card-body flex-row gap-5 w-full">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-gray-600 font-medium">
                  Phone
                </span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-gray-600 font-medium">
                  Your Interest
                </span>
              </label>
              <input
                type="text"
                name="interest"
                placeholder="Interest"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="card-body  w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-600 font-medium">Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div className="card-body flex-row justify-between text-center">
                <div>
                <h2 className="text-xl">For Emergency</h2>
                <p className="font-bold text-lime-500">+442-4569-789</p>
                </div>
                <div>
                <button className="btn rounded-none bg-lime-500 text-white">Send message</button>
                </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5 lg:px-0">
        <div className="card rounded-none bg-base-100 shadow-2xl">
          <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-200 rounded-full shadow-lg items-center flex justify-center mt-8">
            <CiLocationOn></CiLocationOn>
          </p>

          <div className="card-body">
            <h2 className="text-center text-3xl text-gray-500 font-medium">
              Address
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>7 Green Lake Street</p>

              <p>Crawfordsville, IN 47933</p>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-base-100 shadow-xl">
          <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-200  rounded-full items-center flex justify-center mt-8">
            <FiPhoneCall></FiPhoneCall>
          </p>

          <div className="card-body">
            <h2 className="text-center text-3xl text-gray-500 font-medium">
              Call Now
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>+01 123 456 789</p>
              <p>+01 987 654 321</p>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-base-100 shadow-xl">
          <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-200  rounded-full items-center flex justify-center mt-8">
            <MdForwardToInbox></MdForwardToInbox>
          </p>

          <div className="card-body">
            <h2 className="text-center text-3xl text-gray-500 font-medium">
              Email Us
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>medicamp@gmail.com</p>
              <p>us.medicamp@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
