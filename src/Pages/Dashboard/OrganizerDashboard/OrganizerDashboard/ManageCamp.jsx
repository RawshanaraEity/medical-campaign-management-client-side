
import useMediCamps from "../../../../Hooks/useMediCamps";

const ManageCamp = () => {
    const [camps, loading, refetch] = useMediCamps()

    return (
        <div>
            <h2 className="text-4xl text-center">Manage Your Camp</h2>
      
      </div>
    );
};

export default ManageCamp;