

const Model = ({isVisible, errorMessage=null}) => {
  if(isVisible){
    return (
      <div id="modal">
          <div id="content">
              {/* <h1>The From Has Been Submitted Successfully</h1> */}

              <h1 style={{color:errorMessage? "red" : "green"}}>{errorMessage!= null? errorMessage : "The From Has Been Submitted Successfully"}</h1>
          </div>
      </div>
    )

  } else {
    return (<></>)
  }

}

export default Model