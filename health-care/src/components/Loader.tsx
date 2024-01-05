import Image from 'next/image';
import React from 'react'

const Loader = () => {
    return (
        <div className="loader-container flex flex-col gap-y-6 justify-center items-center w-[1000px]">
            <Image
            src="https://media.tenor.com/bGGgsm4yPmEAAAAi/bubu-bubu-bear.gif"
            alt="Loading..."
            className="loader-gif"
            width={150}
            height={150}
            />
            <div className='font-mono font-semibold text-xl'>
                Keep Doing Exercise...
            </div>
        </div>
    );
}

export default Loader