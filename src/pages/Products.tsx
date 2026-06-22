import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import heroImage from '../assets/hero-fiber.jpg';
import ScrollToTop from '@/components/ScrollToTop ';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cables', name: 'Fiber Optic Cables' },
    { id: 'equipment', name: 'Network Equipment' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'services', name: 'Services' }
  ];

  const products = [
    {
      id: 1,
      name: 'Single-Mode Fiber Cable',
      category: 'cables',
      // price: 299.99,
      // rating: 4.8,
      // reviews: 142,
      image: heroImage,
      description: 'High-quality single-mode fiber optic cable for long-distance transmission.'
    },
    {
      id: 2,
      name: 'Multi-Mode Fiber Cable',
      category: 'cables',
      price: 199.99,
      rating: 4.6,
      reviews: 89,
      image: heroImage,
      description: 'Reliable multi-mode fiber cable perfect for short to medium distances.'
    },
    {
      id: 3,
      name: 'Fiber Optic Switch 24-Port',
      category: 'equipment',
      price: 1299.99,
      rating: 4.9,
      reviews: 67,
      image: heroImage,
      description: 'Enterprise-grade 24-port fiber optic network switch.'
    },
    {
      id: 4,
      name: 'Fiber Optic Patch Panel',
      category: 'equipment',
      price: 499.99,
      rating: 4.7,
      reviews: 134,
      image: heroImage,
      description: 'Professional patch panel for organized fiber connections.'
    },
    {
      id: 5,
      name: 'SC Fiber Connectors (10-Pack)',
      category: 'accessories',
      price: 49.99,
      rating: 4.5,
      reviews: 256,
      image: heroImage,
      description: 'High-precision SC connectors for reliable fiber connections.'
    },
    {
      id: 6,
      name: 'Fiber Installation Service',
      category: 'services',
      price: 799.99,
      rating: 4.9,
      reviews: 98,
      image: heroImage,
      description: 'Professional fiber optic installation and setup service.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 bg-gradient-to-r from-blue-300 to-white">
      <ScrollToTop/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our comprehensive range of fiber optic solutions designed for every need.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="transparent rounded-lg p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-smooth group">
              <div className="aspect-square bg-secondary/30 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary transition-smooth">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  {/* <span className="text-2xl font-bold text-primary">${product.price}</span> */}
                  <Link 
                    to={`/product/${product.id}`}
                    className="btn-fiber text-sm px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;