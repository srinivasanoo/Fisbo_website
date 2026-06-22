import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop ';
import { toast } from 'sonner';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('fibso_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('fibso_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success("removed item from the cart");
  };

  const handleProceedToCheckout = () => {
    // Move current cart items to quotation storage
    localStorage.setItem('fibso_quotation', JSON.stringify(cartItems));

    // Clear the cart
    setCartItems([]);
    localStorage.removeItem('fibso_cart');

    toast.success("Moved items to quotation successfully!");
  };


  // const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // const shipping = subtotal > 500 ? 0 : 50; // Free shipping over $500
  // const tax = subtotal * 0.08; // 8% tax
  // const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-gradient-to-r from-blue-300 to-white min-h-screen py-8">
        <ScrollToTop />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn-fiber">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-300 to-white min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground mt-1">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link to="/products" className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-secondary/30 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    {/* <p className="text-2xl font-bold text-primary">${item.price}</p> */}
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-smooth"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-smooth"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">
                      {/* ${(item.price * item.quantity).toFixed(2)} */}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 transition-smooth mt-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  {/* <span className="font-medium">${subtotal.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {/* {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} */}
                  </span>
                </div>
                {/* {shipping === 0 && (
                  <div className="text-sm text-green-600">
                    🎉 You qualify for free shipping!
                  </div> */}
                {/* )} */}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  {/* <span className="font-medium">${tax.toFixed(2)}</span> */}
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    {/* <span className="text-primary">${total.toFixed(2)}</span> */}
                  </div>
                </div>
              </div>

              <button className="btn-fiber w-full mb-4" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>

              <div className="text-center">
                <Link to="/products" className="text-primary hover:text-primary/80 text-sm transition-smooth">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 5, name: 'Fiber Patch Cables', price: 29.99, image: '/api/placeholder/200/200' },
              { id: 6, name: 'Network Switch', price: 599.99, image: '/api/placeholder/200/200' },
              { id: 7, name: 'Cable Management', price: 79.99, image: '/api/placeholder/200/200' }
            ].map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-smooth group"
              >
                <div className="aspect-square bg-blue-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  {/* <span className="text-xl font-bold text-primary">${product.price}</span> */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;