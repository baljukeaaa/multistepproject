import { ContinueButton } from "./ContinueButton"


export const UserInformationstep = ({setFormValues, FormValues, nextStep, currentStep, FormErrors, setFormErrors }) => {
  // const { setFormValues } = props;
 
  const onChange = (event) => {
    setFormValues((prev) => ({
      ...prev, [event.target.value]: event.target.value

    }))
  }

  const handleNext = () => {
    if(!FormValues.firstName) {
      setFormErrors((prev)=> ({...prev, firstName: "Error"}))
    }
    if(!FormValues.lastName) {
      setFormErrors((prev)=> ({...prev, lastName: "Error"}))
    }
    if(!FormValues.userName) {
      setFormErrors((prev)=> ({...prev, userName: "Error"}))
    }
  
  }


  return (
    <div>
      <div className="ml-2 space-y-2  ">
        <p>First name <span className="text-red-700">*</span></p>
        <br />
        <input onChange={onChange} placeholder=" Your First name"></input>
        <p>Last name <span className="text-red-700">*</span></p>
        <input onChange={onChange} placeholder=" Your Last name"></input>
        <p>Username <span className="text-red-700">*</span></p>
        <input onChange={onChange} placeholder=" Your Username"></input>
        {
          FormErrors.firstName && <p className="text-red-700">{FormErrors.firstName}</p>
        }
        <ContinueButton nextStep={nextStep} currentStep={currentStep} />
      </div>
    </div>
  )
}