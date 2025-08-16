import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState({})

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=> res.json())
    //     .then((res)=>{
    //         console.log(res.followers)
    //         setData(res)
    //     })
    // },[])

    const data= useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='mx-auto mt-4' src={data.avatar_url} width={300}/>
    </div>
  )
}

export default Github

export const useGitInfo = async()=>{
    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}
