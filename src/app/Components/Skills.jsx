import React from 'react'
import TeachStack from './TeackStack'

const Skills = () => {
  return (
  <>
  <div className="container mt-5">
    <div className="row">
        <div className="col-12 d-flex justify-content-center">
            <h1 className='text-white text-center'>Professional</h1>
            <h1 className='text-white text-center  ms-2' id='heading'>Skillset</h1>
        </div>
    </div>
    <TeachStack/>
    <div className="row">
    <div className="col-12 d-flex justify-content-center">
            <h1 className='text-white text-center' id='heading'>Tools</h1>
            <h1 className='text-white text-center  ms-2' > I Use </h1>
        </div>
    </div>
  </div>
  </>
  )
}

export default Skills