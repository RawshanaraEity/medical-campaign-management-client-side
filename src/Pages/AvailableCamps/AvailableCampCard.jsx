const AvailableCampCard = ({ camp }) => {
  console.log(camp);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={camp?.image} alt="camp" className="rounded-xl h-64" />
        </figure>
        <div className="card-body h-72 space-y-4 relative">
        <h2 className="card-title text-2xl">{camp?.campName}</h2>
          <h2 className="">{camp?.description.slice(0,150)}</h2>
          
          <div className="card-actions justify-end absolute bottom-5 right-5">

            <button className="btn bg-lime-400 text-white ">Camp Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCampCard;
