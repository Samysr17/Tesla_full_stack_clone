import React from 'react'
import { useLocation } from 'react-router-dom'
const Success_1 = () => {
  // console.log("hello")
  const location=useLocation();
  const data=location.state
  // console.log(data)
  // console.log(data[0].Name)
  return (
    <>
    <div  className="bg-black h-screen w-screen !!!" >
    <div className="text-white">
       Thank u for Choosing Tesla
    </div>
    <div className="text-white">Order placed</div>
    
    {/* <div>
                  {data.map((it) => (
                    <div className="flex justify-between h-[25%] w-[60%] ml-[20%] ">
                      <div>
                      </div>
                      <div className='w-40 h-40'><img src={it.Image} alt="" /></div>
                      <div className='text-white'><p>{it.Name}</p></div>
                      <div>{it.Price}</div>
                      <td className='text-white'>{it.quantity}</td>
                      <td className='text-white'>${it.Price*it.quantity}</td>
                    </div>
                  ))}
                </div> */}
                </div>
    </>
  )
}

export default Success_1