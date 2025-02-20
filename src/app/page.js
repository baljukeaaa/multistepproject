"use client"
import { useState } from "react";
import { UserInformationstep } from "./components/UserInformationstep";
import { ContinueButton } from "./components/ContinueButton";
import { Header } from "./components/Header";

// import { InputField } from "./InputField"


export default function Home() {
const [currentStep, setCurrentStep] = useState (0);
const [formValues, setFormValues] = useState({
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: ""
});

const [formErrors, setFormErrors] = useState({
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: ""
})

const steps = [UserInformationstep];
const Component = steps[currentStep];
const nextStep = (event) => {
  event.preventDefault()
  setCurrentStep ((prev)=> prev + 1)
}
// const nextStep = () => {
//   if (1 > currentStep) {
//     setCurrentStep (currentStep + 1);
//   }
// }
//  const previousStep= () => {
//   setCurrentStep (currentStep - 1);
//  }

  return (
    <main className="mx-auto mt-40 broder w-[480px] h-[655px] bg-white">
    <Header/>
    <UserInformationstep />
    < ContinueButton nextStep={nextStep} currentStep={currentStep}/>
 <form className="mt-7">
 <Component formValues={formValues}  
 setFormValues={ setFormValues}
 formErrors={formErrors}  
 setFormErrors={ setFormErrors}/>
 </form>
      </main>
  )
}
