import { Helmet } from "react-helmet";
import useMediCamps from "../../Hooks/useMediCamps";
import CampCard from "../../components/CampCard";

const AvailableCamps = () => {
  const [allCamps] = useMediCamps()
//   console.log(allCamps);

  return (
    <div>
      <Helmet>
        <title>MediCamp/Available Camps</title>
      </Helmet>
      <h2 className="text-5xl text-center font-semibold my-14">Available Camps: {allCamps.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 gap-5 mb-20">
        {
            allCamps?.map((camp, index) => (
                <CampCard key={index} camp={camp}></CampCard>
            ))
        }
      </div>
    </div>
  );
};

export default AvailableCamps;
