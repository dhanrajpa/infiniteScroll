import React, { useState, useEffect, Suspense, useRef } from 'react'
import axios from 'axios';
import SkeletonCard from './SkeletonCard';
import Select from 'react-select';

// const Data = React.lazy(() => import("./Data.js"))

const Scroll = () => {
  const effectRan = useRef(false);

  const [city, setCity] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("effect ran");
    if (effectRan.current === false) {
      showData();
    //   console.log(city)
    }

    return () => {
      console.log('unmounted parent')
      effectRan.current = true
    }
  }, []);

  const showData = async () => {
    const result = await axios.get("http://localhost:3006/emp")
    console.table(result.data)
    setCity(result.data);
  };

  return (
    <>
      <div className='container'>   
  
          
            <Select name="select" id="select" >
            {
           city.map((data,index)=>{
                return(

                    <option key={data.name} >{data[index].name}</option>
                )
           })
            }
            </Select>


      </div>
    </>
  );
};



export default Scroll

