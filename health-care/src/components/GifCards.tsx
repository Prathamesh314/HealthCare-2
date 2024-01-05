import React from 'react'

type GifInterface = {
    bodyPart:string
    equipment:string
    gifUrl:string
    id:string
    name:string
    target:string
}

const GifCards = ({gifs}:{gifs: any}) => {
    console.log(gifs)
  return (
    <div>GifCards</div>
  )
}

export default GifCards