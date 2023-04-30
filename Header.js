import React from 'react'

const Header = () => {
  return (
    <div className="container fixed flex min-h-[60px] p-2">
      <img src="./images/logopng.png" className="h-12 w-14"  alt="TESLA"/>
      <div className="flex p-0 10 justify-center flex-nowrap">
        <p>Model X</p>
        <p>Model 3</p>
        <p>Model Y</p>
        <p>Model S</p>
      </div>
    </div>
  )
}

export default Header