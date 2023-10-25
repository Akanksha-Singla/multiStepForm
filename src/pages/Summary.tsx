import Navbar from "./Navbar";
import { useState,useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Summary = () => {
  
  const items = useSelector((state) => state.cart);
  // const selectedPlanIds = items.map((item) => item.selectedPlan.id);
  console.log("items:", items);
  // console.log(selectedPlanIds)
  const [totalPrice,setTotalPrice] = useState(0)
  
  useEffect(() => {
    // Calculate the total price when 'items' changes
    let calculatedTotalPrice = 0;

    items.forEach((item) => {
      if (Array.isArray(item)) {
        calculatedTotalPrice += item.reduce((sum, nestedItem) => sum + nestedItem.price, 0);
      } else {
        calculatedTotalPrice += item.price;
      }
    });

    setTotalPrice(calculatedTotalPrice);
  }, [items]);

  
  return (
    <div className="flex flex-row m-3 gap-2 h-full">
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center gap-3 p-10 border border-gray-300   shadow-xl rounded-xl">
        <div>
          <h1 className="font-bold text-3xl">Finishing up</h1>

          <h2 className="font-normal text-xl">
            Double check everything looks OK before confirming.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center  bg-base-100 shadow-xl border border-solid border-gray-300 h-35 p-6 rounded-lg w-full hover:border-blue-500">
            {items.map((item) => {
              
              if (Array.isArray(item)) {
                
                  return item.map((nestedItem) => (
                  <div
                    className="flex flex-row gap-5 justify-between items-center w-full"
                    key={nestedItem.planName}
                  >
                    <div className="card-title">{nestedItem.planName}</div>
                    <div className="font-light">+${nestedItem.price}/month</div>
                   
                  </div>
                ));
              } else {
                return (
                  <div
                    className="flex flex-row gap-5 justify-between items-center w-full"
                    key={item.planName}
                  >
                    <div className="card-title">{item.planName}</div>
                    <div className="font-light">+${item.price}/month</div>
                  
                  </div>
                );
                
              }
            })}
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <p className="font-medium">Total Price: ${totalPrice}</p>
          <button className="flex items-center btn btn-primary" type="submit">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
