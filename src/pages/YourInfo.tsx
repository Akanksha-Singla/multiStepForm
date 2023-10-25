import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
import { Form ,Formik } from "formik"
import { IPersonalInfo ,personalInfoValidationSchema } from "../types/personalInfo.types"
import { toFormikValidationSchema } from 'zod-formik-adapter';
import FormikControl from "../components/formik/FormikControl"
const YourInfo = () => {
  const navigate = useNavigate()

const initialValues :IPersonalInfo ={
    name : " ",
    email : " ",
    phoneNumber : ""
}


const handleSubmit = (values:IPersonalInfo) =>{
    console.log(values)
    navigate('your-selectPlan')
}
  return (
    <div className="flex flex-row m-3 gap-2 h-full">
    <Navbar/>
    <div className = "w-full h-screen flex flex-col gap-3 p-5 border border-gray-300 justify-center shadow-xl rounded-xl">
    <h1 className="font-bold text-3xl "> Personal Info</h1>
    <h2  className="font-light text-xl ">Please provide your name,email address, and phone number</h2>
   <Formik validationSchema={toFormikValidationSchema(personalInfoValidationSchema)} onSubmit={(values: { name: string; email: string; phoneNumber: string; id?: number | undefined; }) => handleSubmit(values)} initialValues={initialValues} >
   <Form  className='w-full  flex flex-col items-end justify-start p-2 gap-3'>
   <FormikControl
                      control='input'
                      type='text'
                      name='name'
                      placeholder='Enter Name'
                      label='Name'
                      className='min-w-full'
                    />
                    <FormikControl
                      control='input'
                      type='email'
                      name='email'
                      placeholder='john@gmail.com'
                      label='Email Id'
                      className='min-w-full'
                    />


                    <FormikControl
                      control='input'
                      type='text'
                      name='phoneNumber'
                      placeholder=''
                      label='Phone Number'
                      className='min-w-full'
                    />
                     
                     <div className="flex items-end justify-end">
                      <button className=" flex items-center btn btn-primary" type="submit">Next Step</button>
                     </div>

                </Form>



   </Formik>
    </div>
      
    </div>
  )
}

export default YourInfo
