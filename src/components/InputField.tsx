// import React,{FC} from 'react';
import {Field , ErrorMessage} from 'formik';
import { IFormControlProps } from './formik/FormikControl';
import TextError from './formik/TextError';

// interface InputFieldProps {
//     inputParameters: IInputParameters,
//     className?: string
// }

// export interface IInputParameters {
//     varient?:string;
//     type?: string;
//     label?: string;
//     name: string;
//     placeholder?: string;
//     mandatory?: boolean;
//     options?: string[];
//     readonly?: boolean;
//     fullWidth?: boolean;
// }


const InputField = (props :IFormControlProps)=>{
    const {name,label,className} = props

    return(
        <div className={className}>
            <div className='flex flex-col gap-2 align-middle w-full'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} className={'border border-blue-500  rounded-lg w-full'}/>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
            </div>
        </div>

    )

}

export default InputField