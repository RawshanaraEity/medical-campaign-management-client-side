import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useCallback, useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendar, FaClock } from "react-icons/fa";
import RegisterForm from "./RegisterForm";
import useParticipant from "../Hooks/useParticipant";
import { Helmet } from "react-helmet";


const CampDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [campData, setCampData] = useState([]);
  const [isParticipant] = useParticipant()
 


const fetchCampData = useCallback(async () => {
    try {
      const response = await axiosPublic.get(`/camps/${id}`);
      setCampData(response.data);
    } catch (error) {
      console.error("error fetching", error)
    }
  }, [axiosPublic, id]);

  useEffect(() => {
    fetchCampData();
  }, [fetchCampData]);

  const handleRegistration = () => {
    fetchCampData();
  };


  //   console.log(campData);
  return (
   <div>
     <Helmet>
        <title>MediCamp/Camp Details</title>
      </Helmet>
    <div className="mb-20 bg-gray-100 shadow-xl py-20">
      <div className="grid grid-cols-1 md:grid-cols-3  px-5  lg:px-16">
        <div className="col-span-2 space-y-5">
          <img
            className="lg:h-[600px] lg:w-[700px]"
            src={campData?.image}
            alt="image"
          />
          <h2 className="text-4xl font-medium">{campData?.campName}</h2>
          <p className="text-lg">{campData?.description}</p>
          <h2 className="text-2xl font-bold   underline">Benefits</h2>
          <ul className="list-disc ml-4 text-xl">
            {  campData?.benefits?.map((item, index) => (
              <li key={index}> {item}</li>
            )) }
          </ul>
        </div>
        <div className="col-span-1 space-y-5">
          <h2 className="text-2xl font-bold   underline">
            Specialized Services
          </h2>
          <ul className="list-disc ml-4 text-xl">
            {  campData?.specializedServices?.map((item, index) => (
              <li key={index}> {item}</li>
            )) }
          </ul>
          <h2 className="text-2xl font-bold   underline">Our Professionals</h2>
          <ul className="list-disc ml-4 text-xl">
            {  campData?.healthcareProfessionals?.map((item, index) => (
              <li key={index}> {item}</li>
            ))  }
          </ul>
          <p className="text-2xl underline font-bold">
            Target Audience : {campData.targetAudience}
          </p>

          <div>
            <div className="flex items-center font-bold text-gray-500 gap-2">
              <FaCalendar></FaCalendar>
              <p> {campData?.scheduledDate}</p>
            </div>
            <div className="flex items-center font-bold text-gray-500 gap-2">
              <FaClock> </FaClock>
              <p> {campData?.scheduledTime}</p>
            </div>
            <div className="flex items-center text-lg font-bold text-gray-500 gap-2">
              <CiLocationOn className="text-red-600 "></CiLocationOn>
              <p>{campData?.venueLocation} </p>
            </div>
          </div>
          <p className="font-bold text-gray-500">
            Total Participant: {campData?.participantCount}
          </p>
          <p className="font-bold text-red-600">
            Camp Fees: ${campData?.campFees}
          </p>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          {
            isParticipant && 
              <button
            className="btn rounded bg-lime-500 text-xl text-white  px-7"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Join Camp
          </button>
            
          }
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-11/12 max-w-2xl p-10">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-medium text-2xl mb-5 text-center">Please Fillup This Form For Camp Registration</h3>
           <RegisterForm campData={campData} onRegistration={handleRegistration}></RegisterForm>


            </div>
          </dialog>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CampDetails;
