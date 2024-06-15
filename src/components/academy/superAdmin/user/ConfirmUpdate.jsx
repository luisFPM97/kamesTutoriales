import React from 'react'



const ConfirmUpdate = ({mConfirm, setMConfirm}) => {



    const handleClose = () => {
        setMConfirm(false)
        
      };

  return (
    <div className={mConfirm ? 'upUser' : 'upUser  usHide'}>
        <h1>Usuario actualizado!</h1>
        <button onClick={handleClose}>x</button>
    </div>
  )
}

export default ConfirmUpdate