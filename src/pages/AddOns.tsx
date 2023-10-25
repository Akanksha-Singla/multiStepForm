import Navbar from "./Navbar";
import {useState} from "react"
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useFetchAddOn } from "../api/addOn";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { IAddOn } from "../types/personalInfo.types";
import React from 'react';

const AddOns = () => {
  const navigate = useNavigate();
  const {data} =useFetchAddOn();
  const dispatch = useDispatch();
  const [addPlan, setAddPlan] = React.useState<IAddOn[]| null>(null);

  const initialValues = {};
  return (
    <div className="flex flex-row m-3 gap-2 h-full">
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center gap-3 p-10 border border-gray-300   shadow-xl rounded-xl">
        <div>
          <h1 className="font-bold text-3xl">Pick add-ons</h1>
          <h2 className="font-normal text-xl">
            Add-ons help enhance your gaming experience
          </h2>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            // Handle form submission here with the selected billing cycle
            dispatch(add(addPlan))
            console.log("addPlan",addPlan);
            navigate("/your-summary");
          }}
        >
          <Form className="w-full">
            <div className="form-control w-full flex flex-col gap-3 ">
{data && data?.data.map((addOn :IAddOn)=>{
  return <div className="flex flex-col items-center justify-center gap-3" key={addOn.id}>
  <label className="cursor-pointer w-full">
    <div className="flex flex-row items-center justify-between  bg-base-100 shadow-xl border border-solid border-gray-300 h-35 p-6 rounded-lg hover:border-blue-500">
      <div className="flex flex-row gap-5">
        <Field
          type="checkBox"
          name="addOns"
          value={addOn.id}
          onClick={() => {if (addPlan === null) {
            // If addPlan is null, initialize it as an array with the current addOn
            setAddPlan([addOn]);
          } else {
            // If addPlan is already an array, add the current addOn to it
            setAddPlan([...addPlan, addOn]);
          }}}
          // className="hidden"
        />
        <div >
          <h2 className="card-title">{addOn.planName}</h2>
          <h2 className="font-light">{addOn.description}</h2>
        </div>
      </div>
      <p className="font-light">+${addOn.price}/month</p>
    </div>
  </label>
  </div>
})}
<div className="flex justify-between w-full ">
                  <button
                    className="flex items-center btn btn-primary"
                    onClick={() => navigate("/your-selectPlan")}
                  >
                    {" "}
                    Go Back{" "}
                  </button>
                  <button
                    className="flex items-center btn btn-primary"
                    type="submit"
                  >
                    {" "}
                    Next Step{" "}
                  </button>
                </div>

              {/* <div className="flex flex-col items-center justify-center gap-3">
                <label className="cursor-pointer w-full">
                  <div className="flex flex-row items-center justify-between  bg-base-100 shadow-xl border border-solid border-gray-300 h-35 p-6 rounded-lg hover:border-blue-500">
                    <div className="flex flex-row gap-5">
                      <Field
                        type="checkBox"
                        name="selectedPlan"
                        value="Online service"
                        // className="hidden"
                      />
                      <div>
                        <h2 className="card-title">Online service</h2>
                        <h2 className="font-light">Access to multiplayer games</h2>
                      </div>
                    </div>
                    <p className="font-light">+$9/month</p>
                  </div>
                </label>
                <label className="cursor-pointer w-full">
                  <div className="flex flex-row items-center justify-between  bg-base-100 shadow-xl border border-solid border-gray-300 h-35 p-6 rounded-lg hover:border-blue-500">
                    <div className="flex flex-row gap-5">
                      <Field
                        type="checkBox"
                        name="selectedPlan"
                        value="Larger Storage"
                        // className="hidden"
                      />
                      <div>
                        <h2 className="card-title">Larger Storage</h2>
                        <h2 className="font-light">Extra 1Tb of cloud service</h2>
                      </div>
                    </div>

                    <p className="font-light">+$2/month</p>
                  </div>
                </label>
                <label className="cursor-pointer w-full">
                  <div className="flex flex-row items-center justify-between  bg-base-100 shadow-xl border border-solid border-gray-300 h-35 p-6 rounded-lg hover:border-blue-500">
                    <div className="flex flex-row gap-5">
                      <Field
                        type="checkBox"
                        name="selectedPlan"
                        value="Online service"
                        // className="hidden"
                      />
                      <div>
                        <h2 className="card-title">Customizable Profile</h2>
                        <h2 className="font-light">Custom theme on your profile</h2>
                      </div>
                    </div>

                    <p className="font-light">+$9/month</p>
                  </div>
                </label>
                <div className="flex justify-between w-full ">
                  <button
                    className="flex items-center btn btn-primary"
                    onClick={() => navigate("/your-selectPlan")}
                  >
                    {" "}
                    Go Back{" "}
                  </button>
                  <button
                    className="flex items-center btn btn-primary"
                    type="submit"
                  >
                    {" "}
                    Next Step{" "}
                  </button>
                </div>
              </div> */}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddOns;
