import InputField from "../InputField";
import { FC } from "react";
// import { IFormikInputParams } from "../../types/formikInputParams.types"; 

// interface IFormikControlProps{
//     inputParams:IFormikInputParams,
//     className?:string
// }
const FormikControl : FC<IFormControlProps> = (props) =>{
    const { control} = props
    if(control === 'input')
        { return (<InputField {...props}/>)} 
     else
       return null;
  
       
  } 
  
  
  export default FormikControl

export type IFormControlProps={
label :string,
name : string,
mandatory?:boolean,
readonly?:boolean,
className?:string
} & (({
    control: 'input';
    placeholder: string;
  } & (
    | { type: 'text' | 'email' | 'password' | 'date' }
    | { type: 'number'; }
  )))