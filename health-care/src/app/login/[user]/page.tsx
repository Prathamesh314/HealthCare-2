import React from 'react'
import Userlogin from './Userlogin'

const page = ({params}: {params: string}) => {
    console.log(params)
    
  return (
    <div><Userlogin params={params}/></div>
  )
}

export default page