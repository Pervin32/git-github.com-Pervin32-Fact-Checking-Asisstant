import React, { useRef } from 'react';

const VideoComponent = () => {
  // Video elementinə referans
  const videoRef = useRef(null);

  // Video dayandırma və oynatma funksiyası
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); // Əgər video dayandırılıbsa, oynadın
    } else {
      videoRef.current.pause(); // Əgər video oynayırsa, dayandırın
    }
  };


  
  return (
    <div>
      <video
        className="w-[649px] h-[365px]"
        autoPlay
        muted
        loop
        ref={videoRef}
        onClick={handleVideoClick} // Video üzərinə basıldığında bu funksiyanı çağır
      >
        <source src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1217365378199853181/8e4a4592ef2f53e2d7f750ab40e363cb75a4f322?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkPfLtdd2I7dMNpc152fbJvCXGnBR6gm~D81azZo2RBk3hSJlWLJ2wi3NZW2XLvwDnaUdUvD2iu1C95cNyKWrFuWkXP3lKVCzKEmE2poK3BfRipzAEcpS94OJFsiuIwItvGESmHohNC1l3OzqIE3SlCW2Iq3gHNuoF0YMGiXxXJNLnK-BGZpn2QDx-T-5bbOqBiYJ9gNlEuZpSEA~iXcWAY8pe8g3mfTwnr2S-PnKF6fJ65nwl0Se~5ei2dV1ZPd7tY6Oqrh0Kte8799TwzwcXfdjCC8VFhIpHFDswlu2wTN-pq3V~3oUuhfipvGA08E0f8Eyjdy~lo4eMLiJO7ghg__" type="video/mp4" />

        
      </video>
    </div>
  );
};

export default VideoComponent;
