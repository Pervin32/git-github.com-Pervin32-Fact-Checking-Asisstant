import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    // Eğer basılan tuş "Enter" ise
    if (event.key === 'Enter') {
      handleSearch(); // Enter'a basılınca arama fonksiyonunu çalıştır
    }
  };

  const handleSearch = () => {
    // Loading başlasın
    setLoading(true);

    // 2 saniye sonra loading kaldırılsın ve başka bir sayfaya yönlendirilsin
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard'); // Yönlendirme yapılacak sayfa
    }, 2000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Search Page</h1>
      
      {/* Burada input alanına basılan tuşları dinliyoruz */}
      <input 
        id="search-input" 
        type="text" 
        placeholder="Enter search term" 
        onKeyDown={handleKeyPress} // Tuş basımını dinliyoruz
      />
      
      {/* Loading ekranı */}
      {loading && (
        <div style={{ marginTop: '20px' }}>
          <ClipLoader size={50} color={'#123abc'} loading={loading} />
        </div>
      )}

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;
