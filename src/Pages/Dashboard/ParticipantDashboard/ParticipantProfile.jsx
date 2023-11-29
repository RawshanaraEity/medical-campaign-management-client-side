import useAuth from "../../../Hooks/useAuth";


const ParticipantProfile = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div>
      <div className="card md:w-96 items-center mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
         <div className="">
               <img className="w-40 h-40 rounded-full border-4 border-lime-500" src={user?.photoURL ? user?.photoURL : `https://i.ibb.co/8X8stTp/user.webp`} alt={user?.displayName} />
         </div>
        
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{user?.displayName} </h2>
          <p className="text-xl text-gray-500 font-bold mb-5">{user.email}</p>
          <div className="card-actions">
            <button className="btn bg-lime-500 text-white">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ParticipantProfile;