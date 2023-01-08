import { useParams } from "react-router-dom";


const UserDetails = () => {
    const {userId} = useParams();
    return (
        <div className="user-details">
            <h3>Details About Users { userId }</h3>
        </div>
    )
}

export default UserDetails;