
import { FaCalendar, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
  return (
    <div>
      
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={camp?.image} alt="camp" className="rounded-xl h-64" />
        </figure>
        <div className="card-body h-96 space-y-4 relative">
          <h2 className="card-title text-2xl">{camp?.campName}</h2>
          <h2 className="">{camp?.description?.slice(0, 150)}</h2>

          <div>
            <div className="flex items-center text-gray-500 gap-2">
            <FaCalendar></FaCalendar> 
            <p> {camp?.scheduledDate}</p> 
             </div> 
            <div className="flex items-center text-gray-500 gap-2">
            <FaClock> </FaClock>  
            <p> {camp?.scheduledTime}</p> 
             </div> 
          </div>
          
          <div className="card-actions justify-between items-center ">
          <p className="absolute font-bold bottom-8 left-5">Total Participant: {camp?.participantCount} </p>
           <Link to={`/camp-details/${camp?._id}`}>
           <button className="btn bg-lime-400 text-white absolute bottom-5 right-5">
              Camp Details
            </button>
           </Link>
          </div>
          {/* <progress
            className="progress progress-error flex-end"
            value={camp.participantCount}
            max="100"
          ></progress> */}
        </div>
      </div>
    </div>
  );
};

export default CampCard;
