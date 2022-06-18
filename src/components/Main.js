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
              <img src={parameter.profile_image_url} alt="image" />
              <h3>{parameter.v_model_display_name}</h3>
              </div>
              </>
            )
          })
        }
      
    </div>
  )
}

export default Main
