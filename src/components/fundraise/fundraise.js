import React from 'react'
import './fundraise.css'

const Fundraise = () => {

  return (

    <div  className='fundraise-container' style={{margin:"0 ",height:"100vh"}}  onClick={()=>{ window.location.href = "https://youtu.be/0uo2uWCkrn0";}}>

        <div className="fundraise" style={{height:"50vh",width:"50vw" }}>

            <h1 style={{margin:"0 auto 5%",backgroundColor:"grey",fontWeight:"bold"}}>
                Fundraise
            </h1>                   

            <div> </div> {/* Empty div is required for proper styling*/}

            <div> </div> {/* Empty div is required for proper styling*/}

            <div onClick={()=>{ window.location.href = "https://youtu.be/0uo2uWCkrn0";}}>
                    <p>YouTube demo of fundraise is available at : 
                        (you can click to redirect)</p>
                    <h3>{"https://youtu.be/0uo2uWCkrn0"}</h3>
            </div>
        
        </div>
        
    </div>
    )
}

export default Fundraise