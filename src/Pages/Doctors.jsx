import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doctors } from '../assets/assets-frontend/assets.js'

function Doctors() {
  const navigate = useNavigate();
  const {speciality} = useParams()
  const [filterDoc, setfilterDoc] = useState([])
const applyFilter = () =>{
  if(speciality){
    const data=  doctors.filter( (doc) =>  doc.speciality === speciality ) ;
    console.log(data)
    
  }else{
    setfilterDoc(doctors)
  }
}
console.log(filterDoc)
useEffect(()=>{
 applyFilter()
},[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* <div className="flex flex-col gap-4 text-sm text-gray-600 ">
          <p onClick={()=>{speciality==='General physician'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>General physician</p>
          <p onClick={()=>{speciality==='Gynecologist'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>Gynecologist</p>
          <p onClick={()=>{speciality==='Dermatologist'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>Dermatologist</p>
          <p onClick={()=>{speciality==='Pediatricians'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>Pediatricians</p>
          <p onClick={()=>{speciality==='Neurologist'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>Neurologist</p>
          <p onClick={()=>{speciality==='Gasreoenterologist'? navigate('/doctors') : navigate('/doctors/')}} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1`}>Gasreoenterologist</p>
        </div> */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {
            filterDoc.map((item, index)=>(
              <div onClick={()=>{navigate(`/appointment/${item._id}`)}} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                  <img src={item.image}  alt="" className='bg-blue-50 ' />
                  <div className="p-4 ">
                      <div className="flex items-center gap-2 text-sm text-center text-green-500">
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                     <p className='text-gray-900 text-lg font-medium'> {item.name}</p>
                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors