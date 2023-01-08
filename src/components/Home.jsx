import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick = { () => navigate('order-summary', {replace: true}) } type ="button">Place Order</button>
        </div>
    )
}

export default Home;