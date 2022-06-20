import React from 'react'

function Main({props}) {
  // console.log(props)
  return (
    <div>
       
      <h1>
        New Cars 
      </h1>
        {
          props.map((parameter) => {
            return (
              <>
              <div className='main_div' >
              <img src={parameter.profile_image_url} alt="im" />
              <h3>{parameter.v_model_display_name}</h3>
              <h3>{parameter.v_model_min_price}-{parameter.v_model_max_price}</h3>
              <h2>
                View June Offers
              </h2>
              </div>
              </>
            )
          })
        }
      
    </div>
  )
}

export default Main
