import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
// import { useMutation } from 'react-query'
import { IAddUpdateActivity } from '../types/activity.types'

const fetchActivity = () =>{
    return axios.get("http://localhost:4000/addUpdateActivity")
}
export const useFetchActivity = () => {
    return useQuery ("list of activity" , fetchActivity, {
      staleTime:30000,
        // onSuccess,
        // onError,
        //data transform 
//         select : (data)=>{
//             const employeeNames = data?.data.map((emp)=> emp.firstN ame)
//             return employeeNames
// } 
})
 }

// const addActivity = (data:IAddUpdateActivity)=>{
//   return axios.post("http://localhost:4000/addUpdateActivity",data)
// }
const addNewActivity = async (data: IAddUpdateActivity) => {
  const res = await axios.post<IAddUpdateActivity>('http://localhost:4000/addUpdateActivity', data);
  return res.data;
};

export const useAddActivity = ()=>{
  return useMutation(addNewActivity)
} 


const updateActivity = async ({
  _id,
  data,
}: {
  _id: string;
  data: Partial<IAddUpdateActivity>;
}) => {
  const res = await axios.put<IAddUpdateActivity>(`http://localhost:4000/addUpdateActivity/${_id}`, data);
  return res.data;
};

export const useUpdateActivity = () => {
  return useMutation(updateActivity);
};