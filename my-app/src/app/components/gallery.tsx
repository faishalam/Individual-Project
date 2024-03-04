import React from 'react';

const Gallery = () => {
  // Daftar gambar galeri
  const galleryImages = [
    'https://spaces.ilfen.co/assets/image/produk/black_56.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // ...Tambahkan gambar lainnya sesuai kebutuhan
  ];

  return (
    <div className="flex flex-wrap justify-center mt-8 mx-2">
      {galleryImages.map((imageUrl, index) => (
        <div key={index} className="gallery-item w-1/4 p-2">
          <img src={imageUrl} className="w-full rounded-lg" alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
