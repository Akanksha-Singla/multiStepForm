import { useNavigate } from "react-router-dom"
import { useFetchActivity } from "../api/activityApi";
import { IAddUpdateActivity } from "../types/activity.types";

const AllActivity = () => {
const navigate = useNavigate();
const {isLoading, data, isFetching} = useFetchActivity()
console.log(isFetching,isLoading, "data:", data?.data)
  return (
    <div>
        <button className="border border-black-100 p-2" onClick={()=>navigate('add-update-activity')}>Create New</button>
        <div className="flex flex-wrap gap-2">
        {data &&  data?.data.map((activity:IAddUpdateActivity)=>{
          return <div className="card w-1/4 border border-blue-400" key={activity.id}>
          {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body border border-blue-500">
            <h2 className="card-title">{activity.title}</h2>
            <p>{activity.oneLiner}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"onClick={()=>navigate('add-update-activity')}>Edit/Update</button>
            </div>
          </div>
        </div>
     

        })}
  
        </div>
        
        {/* {data &&  data?.data.map((activity:IAddUpdateActivity)=>{
          return <div key={activity.title}>
            {activity.title}

            </div>

        })} */}

    </div>
  )
}

export default AllActivity
