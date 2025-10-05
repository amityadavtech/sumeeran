import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GalleryGrid from '@/components/ui/GalleryGrid';
import { galleryImages, galleryCategories } from '../data/gallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20" data-testid="gallery-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="gallery-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-text-dark  font-semibold text-sm tracking-wider mb-6">
              OUR PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-text-dark" data-testid="gallery-hero-title">
              Beauty Gallery
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto" data-testid="gallery-hero-description">
              Explore our stunning collection of transformations, artistry, and moments of beauty
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-white border-b" data-testid="gallery-controls">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full"
                data-testid="gallery-search"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3" data-testid="gallery-category-filters">
              {galleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary hover:text-white'
                  }`}
                  data-testid={`gallery-filter-${category.id}`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-600" data-testid="gallery-results-count">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
              {selectedCategory !== 'all' && ` in ${galleryCategories.find(cat => cat.id === selectedCategory)?.label}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-bg-light" data-testid="gallery-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <div className="masonry-grid">
              {filteredImages.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 50} className="masonry-item">
                  <div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    data-testid={`gallery-item-${index}`}
                  >
                    <div className="img-zoom-container relative">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="img-zoom w-full h-auto"
                        loading="lazy"
                        data-testid={`gallery-image-${index}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg font-playfair font-bold mb-1" data-testid={`gallery-title-${index}`}>
                            {image.title}
                          </h3>
                          <span className="text-sm text-gray-200 capitalize">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16" data-testid="gallery-no-results">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-playfair font-bold text-text-dark mb-4">
                No images found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-primary text-white hover:bg-secondary"
                data-testid="gallery-reset-filters"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-white" data-testid="video-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Behind the Scenes
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="video-gallery-title">
                Watch Our Artistry
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="video-gallery-description">
                See our talented artists in action and witness the transformation process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Bridal Makeup Process',
                duration: '3:45',
              },
              {
                thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Hair Color Transformation',
                duration: '5:20',
              },
              {
                thumbnail: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Nail Art Creation',
                duration: '4:15',
              },
            ].map((video, index) => (
              <ScrollReveal key={video.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  data-testid={`video-item-${index}`}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-lg font-playfair font-bold text-text-dark"
                      data-testid={`video-title-${index}`}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white" data-testid="gallery-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="gallery-cta-title">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="gallery-cta-description">
              Book your appointment today and let us create something beautiful for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                data-testid="gallery-book-button"
              >
                Book Your Session
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
                data-testid="gallery-contact-button"
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
