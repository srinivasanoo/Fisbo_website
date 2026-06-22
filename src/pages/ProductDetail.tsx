import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop ';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'Single-Mode Fiber Cable',
    inStock: true,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    description: 'High-quality single-mode fiber optic cable designed for long-distance transmission with minimal signal loss. Perfect for enterprise networks and telecommunications applications.',
    features: [
      'Single-mode design for long-distance transmission',
      'Low attenuation and dispersion',
      'Suitable for wavelengths 1310nm and 1550nm',
      'LSZH (Low Smoke Zero Halogen) jacket',
      'Temperature range: -40°C to +70°C',
      'Compliant with ITU-T G.652.D standards'
    ],
    specifications: {
      'Core Diameter': '9/125 μm',
      'Cable Type': 'Single-mode',
      'Jacket Material': 'LSZH',
      'Cable Diameter': '3.0mm',
      'Wavelength': '1310nm/1550nm',
      'Attenuation': '≤ 0.36dB/km at 1310nm',
      'Length Options': '500m, 1000m, 2000m'
    }
  };

  const relatedProducts = [
    { id: 2, name: 'Multi-Mode Fiber Cable', price: 199.99, image: '/api/placeholder/200/200' },
    { id: 3, name: 'Fiber Optic Connectors', price: 49.99, image: '/api/placeholder/200/200' },
    { id: 4, name: 'Cable Management Kit', price: 89.99, image: '/api/placeholder/200/200' }
  ];

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('fibso_cart') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === Number(id));
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({
        id: Number(id),
        name: product.name,
        // price: product.price,
        quantity,
        image: product.images[0]
      });
    }
    
    localStorage.setItem('fibso_cart', JSON.stringify(existingCart));
    toast.success("product added to the cart.")
    console.log(`Added ${quantity} of product ${id} to cart`);
  };

  return (
    <div className="min-h-screen py-8  bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-slate-800">
      <ScrollToTop/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary/30 rounded-xl overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-secondary/30 rounded-lg overflow-hidden border-2 transition-smooth ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 font-semibold">✓ In Stock</span>
                ) : (
                  <span className="text-destructive font-semibold">✗ Out of Stock</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-foreground">Quantity:</label>
                <div className="flex items-center border border-input rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-foreground">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={addToCart}
                  className="btn-fiber flex-1 inline-flex items-center justify-center"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="btn-fiber-outline px-6 py-3">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="btn-fiber-outline px-6 py-3">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                  <span className="font-medium text-foreground">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link 
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-smooth group"
              >
                <div className="aspect-square bg-secondary/30">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{relatedProduct.name}</h3>
                  {/* <span className="text-xl font-bold text-primary">${relatedProduct.price}</span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;