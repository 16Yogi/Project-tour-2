import React, { useState } from 'react'

export default function Fetch() {
    const [Data, setData] = useState([])
    const abc=()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => setData(json))

    }
    console.log(Data)

  return (
 <>
<div>
   {
    Data.map((item)=><h1>{item.brand}</h1>)
   }
</div>
    <button onClick={abc}>sub</button>
 </>
  )
}
