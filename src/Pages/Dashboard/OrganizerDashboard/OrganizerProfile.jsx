import useAuth from "../../../Hooks/useAuth";


const OrganizerProfile = () => {
    const {user} = useAuth()
    console.log(user);
    return (
        <div>
           
        </div>
    );
};

export default OrganizerProfile;