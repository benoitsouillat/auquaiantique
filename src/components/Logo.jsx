import React from 'react'

const Logo = () => {
  return (
    <div className='logo_div'>
        <img className="logo" src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="Au Quai Antique" />
        <h1 className='header-title'>Au Quai Antique</h1>
    </div>
  )
}

export default Logo