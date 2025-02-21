export const ContinueButton = ({nextStep, currentStep }) => {
    return (
      <div className="flex gap-4 justify-self-center text-white bg-black">
      {currentStep != 1 && <button>Back</button>}
      <button type="submit" ></button>
      <button onClick={nextStep}>Continue <span>{currentStep}/3</span></button>
      </div>
    )
  }