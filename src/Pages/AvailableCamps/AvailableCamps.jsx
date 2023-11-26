import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AvailableCampCard from "./AvailableCampCard";

const AvailableCamps = () => {
  const allCamps = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>MediCamp/Available Camps</title>
      </Helmet>
      <h2 className="text-5xl text-center font-semibold my-14">Available Camps: {allCamps.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {
            allCamps?.map((camp, index) => (
                <AvailableCampCard key={index} camp={camp}></AvailableCampCard>
            ))
        }
      </div>
    </div>
  );
};

export default AvailableCamps;
