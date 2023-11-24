import bannnerimg1 from '../../../assets/images/banner1.jpg'
import bannnerimg2 from '../../../assets/images/banner 4.jpg'
import bannnerimg3 from '../../../assets/images/banner3.jpg'
import bannnerimg4 from '../../../assets/images/banner.jpg'


const Banner = () => {
  return (
    <div className=''>
      <div className="carousel  w-full">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src={bannnerimg1}
            className="w-full"
          />
           <div className='bg-black opacity-10 absolute top-0   h-full w-full'> </div>
        </div>
        
        <div id="item2" className="carousel-item w-full relative">
          <img
            src={bannnerimg2}
            className="w-full"
          />
          <div className='bg-black opacity-10 absolute top-0   h-full w-full'> </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src={bannnerimg3}
            className="w-full"
          />
          <div className='bg-black opacity-10 absolute top-0   h-full w-full'> </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src={bannnerimg4}
            className="w-full"
          />
          <div className='bg-black opacity-10 absolute top-0   h-full w-full'> </div>
        </div>
       
      </div>
      
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        
      </div>
    
    </div>
  );
};

export default Banner;
