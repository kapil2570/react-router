import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function GitHub() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/kapil2570')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data)
  })
  }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default GitHub