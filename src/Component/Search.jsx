import React, { useState,useEffect } from 'react';
import {MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate, createSearchParams } from 'react-router-dom';
import {callAPI} from "../utlis/CallApi";


const Search = () => {
  const [suggestion, setSuggestion]=useState(null);
  const [searchTerm, setSearchTerm]=useState("");
  const [category, setCategory]= useState("All");
  const navigate = useNavigate();

  const getSuggestion= ()=>{
    callAPI(`data/suggestions.json`).then((suggestionResult)=>{setSuggestion(suggestionResult)})
  }
  useEffect(()=>{getSuggestion()},[])


  const onHandleSubmit = (e)=>{
      e.preventDefault();
      navigate({
        pathname: "search",
        search: `${
          createSearchParams({
            category: `${category}`,
            searchTerm: `${searchTerm}`
          })
        }`   
      
      })
      setSearchTerm("");
      setCategory("All");
  }
  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select onChange={(e)=>setCategory(e.target.value)} className='p-2 outline-none bg-gray-300 text-black border text-xs xl:text-sm'>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Mobile</option>
            </select>
            <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className='flex grow items-center h-[100%] rounded-l text-black' />
            <button className='w-[45px]'>
                <MagnifyingGlassIcon onClick={onHandleSubmit} className='h-[27px] m-auto stroke-slate-900'/>
            </button>
        </div>
        {suggestion && 
        <div className='bg-white text-black w-full z-40 absolute'>
          {
            suggestion.filter((suggestion)=>{
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              

              return (
                currentSearchTerm && title.startsWith(currentSearchTerm)&& title !== currentSearchTerm)
              
            }).slice(0,10).map((suggestion)=>{return <div key={suggestion.id} onClick={()=>setSearchTerm(suggestion.title)}> {suggestion.title} </div>})
          }
        </div>}
    </div>
  )
}

export default Search