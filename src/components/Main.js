import React from 'react'

function Main({props}) {
  // console.log(props)
  return (
    <div>
       
      <h1>
        New Car 
      </h1>
        {
          props.map((parameter) => {
            return (
              <>
              <div className='main_div'>
              New Car 
      </div>
              </>
            )
          })
        }
      
    </div>
  )
}

export default Main
