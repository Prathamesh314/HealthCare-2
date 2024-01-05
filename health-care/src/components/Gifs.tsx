import React from 'react'
import GifCards from './GifCards'


interface GifInterface {
    bodyPart:string
    equipment:string
    gifUrl:string
    id:string
    name:string
    target:string
}

const Gifs = ({gifs}:{gifs: GifInterface[] | undefined}) => {
  return (
    <div>
        <GifCards gifs={gifs} />
    </div>
  )
}

export default Gifs