import axios from 'axios'
import {  useQuery } from 'react-query'
// import { useMutation } from 'react-query'


const fetchPlan = () =>{
    return axios.get("http://localhost:4000/selectPlan")
}
export const useFetchPlan = () => {
    return useQuery ("list of plan" , fetchPlan, {
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

