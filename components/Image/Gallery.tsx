'use client'
import { useState } from 'react';
import Line from '../../assets/hr.png';
import { default as image1, default as image10, default as image11, default as image12, default as image13, default as image14, default as image2, default as image3, default as image4, default as image5, default as image6, default as image7, default as image8, default as image9 } from '../../assets/mission.jpg';
import GallerySection from '../galleryPhotos';


interface GalleryItemProps {
  image: string;
}


const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  return (
    <div className="transition-transform transform hover:scale-105">
      <img src={image} alt="Gallery item" className="w-full h-[200px] object-cover rounded-md" />
    </div>
  );
};


const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14,
];

const itemsPerPage = 6;

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-auto p-4 w-full px-4 md:px-[150px] mt-20">
      <h2 className="text-[40px] md:text-[40px] font-[700] text-center text-primary mb-4">Visit our gallery</h2>
      <p className="text-center text-[#7388A0] mb-5 text-[14px] md:text-[16px] mx-auto font-[400]">
        However you are able to provide, open your hands and give something to these children,
        <br className="hidden md:block" />
        beautify their present and brighten their future.
      </p>
      <img src={Line.src} alt='line' className='pb-3 mx-auto w-[70px] md:w-[111px] border-1' />
      <GallerySection />


     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        </div>

   

  
      <div className="flex justify-center mt-6 space-x-4">

      {/* Pagination buttons */}
      {/* <div className="flex justify-center mt-6 space-x-4">

        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 text-[14px] md:text-[16px] bg-primary text-white rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-3 py-2 text-[14px] md:text-[16px] bg-primary text-white rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </div>
    </div>
  );
};

export default Gallery;
