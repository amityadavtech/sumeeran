import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import ScrollReveal from './ScrollReveal';

interface GalleryGridProps {
  showFilter?: boolean;
  limit?: number;
}

const GalleryGrid = ({ showFilter = false, limit }: GalleryGridProps) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ['all', 'bridal', 'hair', 'skin', 'nails', 'makeup', 'spa'];

  const filteredImages = galleryImages.filter(image => 
    selectedFilter === 'all' || image.category === selectedFilter
  );

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div data-testid="gallery-grid">
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
              data-testid={`filter-button-${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="masonry-grid">
        {displayImages.map((image, index) => (
          <ScrollReveal key={image.id} delay={index * 50} className="masonry-item">
            <div 
              className="img-zoom-container rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="img-zoom w-full h-auto"
                loading="lazy"
                data-testid={`gallery-image-${index}`}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              data-testid="lightbox-close"
            >
              <X size={32} />
            </button>
            <img 
              src={lightboxImage} 
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
              data-testid="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
