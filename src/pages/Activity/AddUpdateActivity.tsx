// import { useMemo, useState } from 'react';
import { IAddUpdateActivity,activityValidationSchema } from "../../types/activity.types"
import { Form, Formik} from "formik"
import FormikControl from "../../components/formik/FormikControl"
import { useAddActivity,useFetchActivity} from '../../api/activityApi';
import { toFormikValidationSchema } from 'zod-formik-adapter';
// import {  Button } from 'react-daisyui'

const AddUpdateActivity = () => {

  const {data : activityData} = useFetchActivity();
  console.log("ac",activityData?.data)

  const initialValues : IAddUpdateActivity = {
    title : activityData?.data?.title || "",
    oneLiner : activityData?.data?.oneLiner || "",
    city:activityData?.data?.city || "",
    // duration:activityData?.data?.duration || 0,
    // cardType :activityData?.data?.cardType || "booking",
    // price : activityData?.data?.price || 0,
    // tags : activityData?.data?.tags ,
    // description :activityData?.data?.description || ""
}

const dataToValidate = {
  title :"abc",
  oneLiner : "lk",
  city:"mum"
}
// Check validation using safeParse
const validationResult =  activityValidationSchema.safeParse(dataToValidate);

if (validationResult.success) {
  console.log('Data is valid:', validationResult.data);
} else {
  console.log('Validation errors:', validationResult.error.message);
}


 const {mutate:addActivity}    =    useAddActivity()

 
  const handleSubmit = (values:IAddUpdateActivity)=>{
   console.log("submit",values)
const apiData :IAddUpdateActivity= {
title: values.title,
oneLiner:values.oneLiner,
city : values.city
//     duration:values.duration,
//     cardType:values.cardType,
//     tags:values.tags, 
//     description:values.description,
//     price:values.price
}
console.log("api:",apiData)
// console.log(mutate(apiData))
addActivity(apiData)

  }
  return (
    <div>
      <Formik validationSchema={toFormikValidationSchema(activityValidationSchema)} initialValues={initialValues} onSubmit={values =>handleSubmit(values)}>
        <>
        <button type="submit" form="activityForm" className='btn btn-accent'> Save</button>
       
<Form id='activityForm' className='border border-blue-500 flex flex-col items-start m-2 p-2 gap-3'>
<FormikControl
                      control='input'
                      type='text'
                      name='title'
                      placeholder='Enter Activity Name'
                      label='Activity Name'
                      className='md:col-span-6'
                    />
                    <FormikControl
                      control='input'
                      type='text'
                      name='oneLiner'
                      placeholder='Description'
                      label='Short Description'
                      className='md:col-span-6'
                    />

{/* <FormikControl
                      control='input'
                      type='text'
                      name='oneLiner'
                      placeholder='Description'
                      label='Short Description'
                      className='md:col-span-6'
                    /> */}
                    <FormikControl
                      control='input'
                      type='text'
                      name='city'
                      placeholder='city'
                      label='City'
                      className='md:col-span-6'
                    />
                     {/* <FormikControl
                      control='input'
                      type='number'
                      name='duration'
                      placeholder='0'
                      label='Duration'
                      className='md:col-span-6'
                    /> */}
{/* <FormikControl
                      control='input'
                      type='text'
                      name='cardType'
                      placeholder='Booking'
                      label='Card Type'
                      className='md:col-span-6'
                    /> */}
{/* 
<FormikControl
                      control='input'
                      type='text'
                      name='Tags'
                      placeholder='Tag'
                      label='Tags'
                      className='md:col-span-6'
                    /> */}
                    {/* <FormikControl
                      control='input'
                      type='text'
                      name='Description'
                      placeholder='Description'
                      label='Description'
                      className='md:col-span-6'
                    /> */}
                     {/* <FormikControl
                      control='input'
                      type='number'
                      name='price'
                      placeholder='00'
                      label='Price'
                      className='md:col-span-6'
                    /> */}
                     <div>
          
        </div>

</Form>


        </>
        
      </Formik>
    </div>
  )
}

export default AddUpdateActivity
