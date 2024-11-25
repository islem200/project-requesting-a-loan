
import Model from "./Model"
import { useState } from "react"

const LoanForm = () => {
  const [showModel, setshowModel] = useState(false)
  const [errorMessage, setErrorMessage]  = useState(null)
  const [loanInputs, setLoanInputs] = useState({
    name:"",
    phoneNumber:"", 
    age:"",
    isEmployee:false,
    salaryRange:""


   });

   function handleFormSubmit(event) {
    event.preventDefault();
    const {age, phoneNumber} = loanInputs
    setErrorMessage(null)
    if(age < 18|| age > 100){
      setErrorMessage("the age is not allowed")
    }else if (phoneNumber.length <8 || phoneNumber.length >11){
      setErrorMessage("Phone Number Format Is Incorrect")
    }
      setshowModel(true)

    

    
  
   };

   const btnIsDisabled =
   loanInputs.name == "" || 
   loanInputs.age =="" || 
   loanInputs.phoneNumber == ""

  //  let btnClasses  = ""
  //  if(btnIsDisabled){
  //   btnClasses = "disabled"
  //  }else{
  //   btnClasses = ""
  //  }

  const handleDivClick = () => {
    if (showModel){
      setshowModel(false);

    }
   
  }
  return (
    <div
    onClick={handleDivClick}
     className="flex" style={{ flexDirection:"column"} }>
        <form id="loan-form" className="flex" style={{flexDirection:"column"}}>
            <h1>Requesting a Loan</h1>
            <hr/>

            <label>Name:</label>
            <input 
            value={loanInputs.name} 
            onChange={(event)=>{
              setLoanInputs({...loanInputs, name: event.target.value})

            }}/>

            <label>Phone Number:</label>
            <input
            value={loanInputs.phoneNumber}
            onChange={(event)=>{
              setLoanInputs({...loanInputs, phoneNumber: event.target.value})
            }}/>

            <label>Age:</label>
            <input
            value={loanInputs.age}
            onChange={(event)=>{
              setLoanInputs({...loanInputs, age: event.target.value })
            }}/>

            <label style={{marginTop:"30px"}}>Are you an employee?</label>
            <input type="checkbox"
             checked={loanInputs.isEmployee}
             onChange={(event)=>{
              setLoanInputs({...loanInputs, isEmployee: event.target.checked})
             }} />

            <label>Salary:</label>
            <select
            value={loanInputs.salaryRange}
            onChange={(event)=>{
              setLoanInputs({...loanInputs, salaryRange: event.target.value})
            }}>
                <option>less than 500$</option>
                <option>between 500$ and 2000</option>
                <option>above 2000</option>
            </select>

            <button
            //className={btnClasses}
            className={btnIsDisabled? "disabled" : ""}
            disabled={btnIsDisabled}
             onClick={handleFormSubmit}
            id="submit-loan-btn">Submit</button>
        </form>
        <Model errorMessage={errorMessage } isVisible={showModel}/>
    </div>
  )
}

export default LoanForm