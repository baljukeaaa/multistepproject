"use client"
import { useState } from "react";
import { UserInformationstep } from "./components/UserInformationstep";
import { ContinueButton } from "./components/ContinueButton";
import { Header } from "./components/Header";


export default function Home() {
const [currentStep, setCurrentStep] = useState (0);

const nextStep = () => {
  if (1 > currentStep) {
    setCurrentStep (currentStep + 1);
  }
}
 const previousStep= () => {
  setCurrentStep (currentStep - 1);
 }

  return (
    <main className="mx-auto mt-40 broder w-[480px] h-[655px] bg-white">
      
    <Header/>
    <UserInformationstep />
    < ContinueButton />
      </main>
  )
}
