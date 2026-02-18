import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {

    const dispatch = useDispatch(); 


    const [text , setText] = useState('')

    function handleSubmit(e){
        e.preventDefault(); 
        dispatch(setQuery(text))

        setText("")        
    }


  return (
    <div>
      <form 
      onSubmit={(e)=>{ 
        handleSubmit(e)
      }}
      className='flex gap-5'>

        <input 
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        className='h-14 w-full border border-gray-900 px-8 rounded-2xl outline-none '
        type="text" 
        placeholder='Search Anything...' />


        <button
        className='h-14 w-80 border border-gray-900 px-8 rounded-2xl outline-none 
        active:scale-5
        hover:bg-green-400 hover:text-black
        transition-all duration-300 ease-out '
        >Search</button>


      </form>

    </div>
  )
}

export default SearchBar
