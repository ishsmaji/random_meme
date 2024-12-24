import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';




const Tag = () => {

     const[tag,setTag]=useState("Car");
     const{gif,loading,fetchData}=useGif(tag);
    

    function clickhandeler(){
      fetchData(tag);
    }
    function changehandeler(event){
      setTag(event.target.value);
    }


  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>

        {
          loading?(<Spinner/>):( <img src={gif} width={450}/>
          )
        }

        <input
          className='w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={changehandeler}
          type="text"
          value={tag}
        />
       
        <button onClick={clickhandeler} className='w-10/12 bg-yellow-500 
        text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag