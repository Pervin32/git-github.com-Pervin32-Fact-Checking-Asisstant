import React, { useState } from 'react';
import enter from '@/assets/img/enter.svg';
import search from '@/assets/img/search.svg';
import { Link, useNavigate } from 'react-router-dom';

const Text_Input_Check = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    navigate('/loading'); // Yönlendirilecek sayfa
  };

  const handleKeyPress = (event) => {
    // Eğer Enter tuşuna basıldıysa
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Üst butonlar */}
      <div className='flex justify-end gap-6 pt-10 pr-8'>
        <Link
          to='/dashboard'
          className='bg-blue w-[100px] sm:w-[168px] h-9 text-white rounded-full text-center text-sm sm:text-base leading-[30px] flex items-center justify-center'
        >
          A
        </Link>
        <img src={enter} alt='enter' className='w-6 h-6' />
      </div>

      {/* Search */}
      <div className='max-w-[744px] w-full h-12 sm:h-[52px] flex items-center justify-between mx-auto mt-[150px] sm:mt-[375px] border px-4 sm:px-6 rounded-lg sm:rounded-[16px] text-[#8D8D8D]'>
        <input
          type='text'
          placeholder='İnformasiya və ya keçid linkini bura daxil et!'
          className='w-full text-sm sm:text-lg leading-6 outline-none'
          onKeyDown={handleKeyPress} // Enter tuşuna basılir
        />
        <div className='bg-[#959595] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center'>
          <img src={search} alt='search' className='w-4 h-4 sm:w-5 sm:h-5' />
        </div>
      </div>
    </div>
  );
};

export default Text_Input_Check;
