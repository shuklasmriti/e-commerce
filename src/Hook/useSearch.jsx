import { useState } from 'react';

const useSearch = () => {
    const[searchInput,setSearchInput]=useState('');
const searchChangeHandeler =(e)=>{
  setSearchInput(e.target.value);
}
  return {
    searchInput,searchChangeHandeler
  }
}

export default useSearch