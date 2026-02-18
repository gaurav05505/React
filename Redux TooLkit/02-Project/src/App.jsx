import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaAPI'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white px-10 py-5'>
      <SearchBar />
      <Tabs /> 
    </div>
  )
}

export default App
