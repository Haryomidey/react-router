import { useNavigate } from "react-router-dom";

const OrderSummary = ()=>{
    const navigate = useNavigate();
    return (
        <div className="order-summary">
            <h1>Order Confirmed!</h1> 
            <button onClick = { ()=> navigate(-1) } type="button">Go Back</button>   
        </div>
    )
}

export default OrderSummary;