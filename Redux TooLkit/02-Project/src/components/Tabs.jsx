import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ["Photos" , "Videos"]; 
    const dispatch = useDispatch()

    const activetab = useSelector((state) => state.Search.activeTab)

  return (
    <div className='flex gap-5 mt-10'>
        {tabs.map(function (elem , idx){
            return(
                <button 
                onClick={()=>{
                    dispatch(setActiveTab(elem))
                }}
                className={` ${(activetab == elem ? "bg-green-400 text-black" : "bg-white/52")}   h-14 w-50 border border-gray-900 px-8 rounded-2xl outline-none 
                active:scale-90 cursor-pointer
                hover:border-green-400 hover:bg-transparent
                transition-all duration-300 ease-out`}
                key={idx}> 
                    {elem}
                </button>
            )
        })}


    </div>
  )
}

export default Tabs
