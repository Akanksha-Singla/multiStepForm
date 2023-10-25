import axios from 'axios'
import {  useQuery } from 'react-query'
// import { useMutation } from 'react-query'


const fetchAddOn = () =>{
    return axios.get("http://localhost:4000/addOn")
}
export const useFetchAddOn = () => {
    return useQuery ("list of addOn" , fetchAddOn, {
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

