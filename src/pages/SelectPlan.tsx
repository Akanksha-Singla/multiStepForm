import Navbar from "./Navbar"
import {useState} from "react" 
import {Formik,Form ,Field} from "formik"
import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import Pro  from "../../assets/images/icon-pro.svg"
import { useNavigate } from "react-router-dom"
import { useFetchPlan } from "../api/planApi"
import { add } from "../store/cartSlice"
import { useDispatch } from "react-redux/es/exports"
import { ISelect , selectValidationSchema } from "../types/personalInfo.types"
import React from 'react';
// import { toFormikValidationSchema } from 'zod-formik-adapter';

const SelectPlan = () => {
  const[billingCycle ,setBillingCycle] =useState("monthly") 
  const handleBillingCycleChange = (event) => {
    console.log(event.target.checked)
    setBillingCycle(event.target.checked ? "yearly" : "monthly");
  };

const navigate = useNavigate()
const [selectPlan, setSelectPlan] = React.useState<ISelect | null>(null);
  
const initialValues = {
    // billingCycle: "monthly",
    // selectPlan:{}
    }
const {data} = useFetchPlan()

const dispatch = useDispatch()

  return ( 
    <div className=" flex flex-row m-3 gap-2 h-full">
     <Navbar/>
     <div className = "w-full h-screen flex flex-col justify-center gap-3 p-5 border border-gray-300   shadow-xl rounded-xl">
      <div>
      <h1 className="font-bold text-3xl">Select Your Plan</h1>
      <h2  className="font-normal text-xl">You have option for yearly or monthly billing</h2>

      </div>
    
<Formik initialValues ={initialValues}  onSubmit={(values) => {
            // Handle form submission here with the selected billing cycle
            // const jsonObject = JSON.parse(jsonString)
            console.log(values);
            console.log(selectPlan)
            dispatch(add(selectPlan))
            navigate("/your-addOn")
          }}>
<Form className="flex items-center justify-center" id="selectPlan_form">
<div className="form-control w-full flex flex-col gap-3 ">
    <label className="cursor-pointer flex  gap-3 justify-center">
      <span className="font-bold text-xl">Mothly</span> 
      {/* <input type="checkbox" className="toggle toggle-accent" checked={billingCycle === "yearly"}
      onChange={handleBillingCycleChange} /> */}
     
      <Field
                    type="checkbox"
                    name="billingCycle"
                    checked={billingCycle === "yearly"}
                    onChange={handleBillingCycleChange} 
                    className="toggle toggle-accent"
                  />
           <span className="font-bold text-xl">Yearly</span>
    </label>

    {billingCycle === "monthly" ? (
      <div className="flex flex-row items-center justify-center gap-3"> 
        {
          data && data?.data.map((plan :ISelect)=>{
            return  <div className="flex flex-row items-center justify-center gap-3" key={plan.id}>
                <label className="cursor-pointer">
                         <Field
                            type="radio"
                             name="selectedPlan"
                             value= {plan.id}
                             className="hidden"
                             onClick={() => setSelectPlan(plan)} 
                            />
                              {/* <div className="card w-200px bg-base-100 shadow-xl border border-solid border-gray-300  hover:border-blue-500 " > */}
                              <div
                  className={`card w-200px bg-base-100 shadow-xl border border-solid border-gray-300 hover:border-blue-500 
                  ${ selectPlan && selectPlan.id === plan.id ? "selected" : ''
                  }`}
                >
              <figure className="px-10 pt-10">
              <img src ={plan.image} alt="Arcade" className="rounded-xl" />
               </figure>
               <div className="card-body items-center text-center">
               <h2 className="card-title">{plan.planName}</h2>
               <p>$9/month</p>
                
            </div>
           </div>
                           </label> 
            </div>
            
          })
        }

      </div>
//     <div className="flex flex-row items-center justify-center gap-3">
//       <label className="cursor-pointer">
//                   <Field
//                     type="radio"
//                     name="selectedPlan"
//                     value="acrade"
//                     className="hidden"
//                   />
//                  <div className="card w-200px bg-base-100 shadow-xl border border-solid border-gray-300  hover:border-blue-500">
//   <figure className="px-10 pt-10">
//     <img src ={arcade} alt="Arcade" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Arcade</h2>
//     <p>$9/month</p>
    
//   </div>
// </div>
//                 </label>

//                 <label className="cursor-pointer">
//                   <Field
//                     type="radio"
//                     name="selectedPlan"
//                     value="advanced"
//                     className="hidden"
//                   />
//                   <div className="card w-200px bg-base-100 shadow-xl border border-solid border-gray-300  hover:border-blue-500 ">
//   <figure className="px-10 pt-10">
//     <img src ={advanced} alt="advanced" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Advanced</h2>
//     <p>$12/month</p>
    
//   </div>
//   </div>
//                 </label>
//                 <label className="cursor-pointer">
//                   <Field
//                     type="radio"
//                     name="selectedPlan"
//                     value="Pro"
//                     className="hidden"
//                   />
//                   <div className="card w-200px bg-base-100 shadow-xl border border-solid border-gray-300  hover:border-blue-500">
//   <figure className="px-10 pt-10">
//     <img src ={Pro} alt="Pro" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Pro</h2>
//     <p>$23/month</p>
    
//   </div>
//   </div>
//                 </label>
//     </div>
    ):(<div>
      <div className="flex flex-row items-center justify-center gap-3">
      <label className="cursor-pointer">
                  <Field
                    type="radio"
                    name="selectedPlanYearly"
                    value="acrade"
                    className="hidden"
                  />
                 <div className="card w-200px bg-base-100 shadow-xl  border border-solid border-gray-300  hover:border-blue-500">
  <figure className="px-10 pt-10">
    <img src ={arcade} alt="Arcade" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Arcade</h2>
    <p>$9/Yearly</p>
    
  </div>
</div>
  </label>

                <label className="cursor-pointer">
                  <Field
                    type="radio"
                    name="selectedPlanYearly"
                    value="advanced"
                    className="hidden"
                  />
                  <div className="card w-200px bg-base-100 shadow-xl  border border-solid border-gray-300  hover:border-blue-500">
  <figure className="px-10 pt-10">
    <img src ={advanced} alt="advanced" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Advanced</h2>
    <p>$12/Yearly</p>
    
  </div>
  </div>
                </label>
                <label className="cursor-pointer">
                  <Field
                    type="radio"
                    name="selectedPlanYearly"
                    value="Pro"
                    className="hidden"
                  />
                  <div className="card w-200px bg-base-100 shadow-xl  border border-solid border-gray-300  hover:border-blue-500">
  <figure className="px-10 pt-10">
    <img src ={Pro} alt="Pro" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pro</h2>
    <p>$23/Yearly</p>
    
  </div>
  </div>
 </label>
    </div>
    </div>)}
  <div className="flex justify-between">
  <button className="flex items-center btn btn-primary" onClick={() => navigate("/")}> Go Back </button>
  <button className="flex items-center btn btn-primary" type="submit"> Next Step </button>
 </div>
   
  </div>

 
</Form>
 
  </Formik>
    

     </div>
    </div>
  )
}

export default SelectPlan
