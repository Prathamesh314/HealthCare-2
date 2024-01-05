"use client"
import React, { useState } from 'react'

interface GifInterface {
    bodyPart:string
    equipment:string
    gifUrl:string
    id:string
    name:string
    target:string
}

const GifCards = ({gifs}:{gifs: GifInterface[] | undefined}) => {
    gifs = gifs?.data;
    console.log(gifs)
    const cardsPerPage = 16;
    const cardsPerRow = 5;
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const indexOfLastCard = currentPage*cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCard = gifs?.slice(indexOfFirstCard, indexOfLastCard);
    
    const totalPages = Math.ceil(203 / cardsPerPage);
    
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };

  return (
    <div>
      {/* Render cards for the current page */}
      <div className="grid grid-cols-5 gap-x-4 w-[1000px] h-[500px]">
        {gifs?.map((card) => (
          <div key={card.id} className="card">
            <img src={card.gifUrl} alt={`GIF ${card.id}`} className="w-full h-32" />
          </div>
        ))}
      </div>

      {/* Pagination navigation */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 p-2 ${
              currentPage === index + 1 ? 'bg-gray-400' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GifCards