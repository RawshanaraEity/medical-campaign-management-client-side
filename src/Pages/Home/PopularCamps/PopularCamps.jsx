import { Link } from "react-router-dom";
import useMediCamps from "../../../Hooks/useMediCamps";
import CampCard from "../../../components/CampCard";
import { useState } from "react";

const PopularCamps = () => {
  const [allCamps] = useMediCamps();
  const [sortData, setSortData] = useState("");

  const popularCamps = allCamps?.filter((camp) => {
    const campNameLower = camp.campName.toLowerCase();
    return (
      campNameLower.includes("women") ||
      campNameLower.includes("child") ||
      campNameLower.includes("senior") ||
      campNameLower.includes("cancer") ||
      campNameLower.includes("dental") ||
      campNameLower.includes("diabetes")
    );
  });

  const sortedCamps = [...popularCamps].sort((a, b) => {
    return sortData === "asc" ? a.participantCount - b.participantCount : b.participantCount - a.participantCount;
  });

//   console.log(popularCamps);

  return (
    <div className="my-10">
      <h2 className="text-4xl text-center font-semibold">
        Popular Medical Camps
      </h2>

      <div className="flex text-center justify-center mt-10">
        <select
          className=" p-2 bg-lime-500 text-white"
          onChange={(e) => setSortData(e.target.value)}
          value={sortData}
        >
          <option value="">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 gap-5 my-10">
        {sortedCamps?.slice(0, 6).map((camp) => (
          <CampCard key={camp._id} camp={camp}></CampCard>
        ))}
      </div>

      <div className="text-center">
        <Link to="/availableCamps">
          <button className="btn bg-gray-500 text-white">Available Camp</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCamps;
