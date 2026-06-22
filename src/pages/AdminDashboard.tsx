import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiShoppingCart,
  FiPackage,
  FiTrendingUp,
  FiSettings,
  FiLogOut,
  FiMessageSquare,
  FiBarChart,
  FiGrid,
  FiEdit,
  FiFileText,
  FiMail,
  FiPhone,
  FiDollarSign,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import ScrollToTop from '@/components/ScrollToTop ';
import { Button } from 'react-day-picker';
import UploadProduct from '@/components/UploadProduct';
import QuotationEditor from '@/components/QuotationEditor';
import displayINRCurrency from '@/helper/displayINRCurrency';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', otp: '' });
  const [activeSection, setActiveSection] = useState('overview');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [customProducts, setCustomProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [quatation, setQuatation] = useState([]);
  const [openQuatationEditor, setOpenQuatationEditor] = useState(false);


  useEffect(() => {
    const user = localStorage.getItem('fibso_user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'admin') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);
  useEffect(() => {
    const cartItems = localStorage.getItem('fibso_quotation')
    if (cartItems) {
      setQuatation(JSON.parse(cartItems))
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.otp === '111111') {
      const adminUser = {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@fibso.com',
        role: 'admin',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('fibso_user', JSON.stringify(adminUser));
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('fibso_user');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleUpload = (newProduct) => {
    const newId = Date.now(); // or any unique ID logic
    setCustomProducts(prev => [...prev, { id: newId, ...newProduct }]);
    setShowUploadForm(false); // Hide form after upload
  };


  const productCategories = [
    { name: 'Ethernet Cables', value: 35, color: '#3B82F6' },
    { name: 'Fiber Optic', value: 25, color: '#10B981' },
    { name: 'Networking Tools', value: 20, color: '#F59E0B' },
    { name: 'Accessories', value: 20, color: '#8B5CF6' }
  ];

  const recentQuotations = [
    { id: 1, customer: 'TechCorp Ltd', product: 'Cat6 Ethernet Cable - 1000ft', amount: '$2,500', status: 'pending', date: '2024-01-15' },
    { id: 2, customer: 'DataCenter Solutions', product: 'Fiber Optic Patch Cables', amount: '$1,800', status: 'approved', date: '2024-01-14' },
    { id: 3, customer: 'Network Systems Inc', product: 'Networking Tool Kit', amount: '$850', status: 'rejected', date: '2024-01-13' }
  ];


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center p-4">
        <ScrollToTop />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-border max-w-md w-full"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <FiSettings className="text-3xl text-primary-foreground" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Admin Portal</h2>
            <p className="text-muted-foreground">Please login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">OTP</label>
              <input
                type="number"
                value={loginForm.otp}
                onChange={(e) => setLoginForm({ ...loginForm, otp: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                placeholder="Enter otp"
                min={1}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-fiber"
            >
              Login to Dashboard
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-slate-100 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Demo credentials:<br />
              Username: <strong>admin</strong><br />
              Otp: <strong>111111</strong>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { icon: FiUsers, label: 'Total Users', value: '1,234', change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { icon: FiShoppingCart, label: 'Orders', value: '567', change: '+8%', color: 'from-green-500 to-emerald-500' },
    { icon: FiPackage, label: 'Products', value: '89', change: '+3%', color: 'from-orange-500 to-red-500' },
    { icon: FiDollarSign, label: 'Revenue', value: '$45.2K', change: '+15%', color: 'from-purple-500 to-pink-500' }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: FiGrid },
    { id: 'products', label: 'Products', icon: FiPackage },
    { id: 'orders', label: 'Orders', icon: FiShoppingCart },
    { id: 'quotations', label: 'Quotations', icon: FiFileText },
    // { id: 'customers', label: 'Customer Responses', icon: FiMessageSquare },
    // { id: 'analytics', label: 'Analytics', icon: FiBarChart },
    // { id: 'settings', label: 'Website Settings', icon: FiSettings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-BLUE-300 via-muted to-white">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          className="w-64 bg-card/95 backdrop-blur-lg border-r border-border min-h-screen p-4"
        >
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-2">FIBSO Admin</h2>
            <p className="text-sm text-muted-foreground">Dashboard Panel</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeSection === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-blue-100 text-foreground'
                  }`}
              >
                <item.icon className="text-lg" />
                {item.label}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 mt-8 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
          >
            <FiLogOut />
            Logout
          </motion.button>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {sidebarItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
            </h1>
            <p className="text-muted-foreground">Manage your fiber solutions business</p>
          </motion.div>

          {/* Overview Section */}
          {activeSection === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="relative overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-green-600">{stat.change}</p>
                          </div>
                          <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                            <stat.icon className="text-xl text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quotations Section */}
          {activeSection === 'quotations' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Quotations</CardTitle>
                  <CardDescription>Manage customer quotation requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quatation.map((quote) => (
                      <motion.div
                        key={quote.id}
                        whileHover={{ scale: 1.01 }}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className='w-20 h-full mr-5'>
                          <img src={quote?.image} alt='imageofproduct' />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{quote?.customer || "customer name"}</h4>
                          <p className="text-sm text-muted-foreground">{quote?.name}</p>
                          <p className="text-xs text-muted-foreground">Quantity : {quote?.quantity}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-foreground">{displayINRCurrency(quote?.sellingPrice) || ""}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${quote?.status === 'approved' ? 'bg-green-100 text-green-800' :
                            quote.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                            {quote?.status}
                          </span>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 text-green-600 hover:bg-green-100 rounded"
                            >
                              <FiCheckCircle />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 text-red-600 hover:bg-red-100 rounded"
                            >
                              <FiXCircle />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                            >
                              <button onClick={() => setOpenQuatationEditor(prev => !prev)}>
                                <FiEdit />
                              </button>
                              {
                                openQuatationEditor && (
                                  <QuotationEditor items={quatation} onClose={() => setOpenQuatationEditor(prev => !prev)} />
                                )
                              }
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Customer Responses Section */}
          {/* {activeSection === 'customers' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Customer Feedback</CardTitle>
                  <CardDescription>Recent customer responses and reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerResponses.map((response) => (
                      <motion.div
                        key={response.id}
                        whileHover={{ scale: 1.01 }}
                        className="p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-foreground">{response.customer}</h4>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${i < response.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{response.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{response.message}</p>
                        <div className="flex gap-2 mt-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
                          >
                            Reply
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
                          >
                            Archive
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )} */}

          {/* Website Settings Section */}
          {/* {activeSection === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Website Control</CardTitle>
                    <CardDescription>Manage website appearance and content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiEdit className="text-primary" />
                        <div>
                          <h4 className="font-medium">Edit Homepage</h4>
                          <p className="text-sm text-muted-foreground">Update hero section and content</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiPackage className="text-secondary" />
                        <div>
                          <h4 className="font-medium">Manage Products</h4>
                          <p className="text-sm text-muted-foreground">Add, edit, or remove products</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiSettings className="text-accent" />
                        <div>
                          <h4 className="font-medium">Site Settings</h4>
                          <p className="text-sm text-muted-foreground">Configure site preferences</p>
                        </div>
                      </div>
                    </motion.button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Frequently used admin functions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiUsers className="text-green-600" />
                        <div>
                          <h4 className="font-medium">User Management</h4>
                          <p className="text-sm text-muted-foreground">Manage user accounts and roles</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiActivity className="text-orange-600" />
                        <div>
                          <h4 className="font-medium">Activity Logs</h4>
                          <p className="text-sm text-muted-foreground">View system activity and logs</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full p-4 text-left border border-border rounded-lg hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <FiMail className="text-purple-600" />
                        <div>
                          <h4 className="font-medium">Email Templates</h4>
                          <p className="text-sm text-muted-foreground">Customize email communications</p>
                        </div>
                      </div>
                    </motion.button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )} */}

          {activeSection === 'products' && (
            <div className="relative">
              {/* Upload Button aligned to the right */}
              <div className="flex justify-end px-4 pt-4">
                <button
                  onClick={() => setShowUploadForm(prev => !prev)}
                  className="btn-fiber text-white px-4 py-2 rounded hover:btn-fiber transition"
                >
                  {showUploadForm ? 'Cancel Upload' : 'Upload Product'}
                </button>
              </div>

              {/* Upload Form or Placeholder */}
              <div className="px-4 pt-8">
                {showUploadForm ? (
                  <div className="flex justify-center">
                    <UploadProduct onUpload={handleUpload} />
                  </div>
                ) : products.length > 0 ? (
                  <div className='w-full max-h-[400px] overflow-y-scroll p-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {products.map((product, index) => (
                        <div key={index} className="bg-white rounded shadow p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded mb-4"
                          />
                          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                          <p className="text-sm text-gray-700 text-ellipsis line-clamp-1">{product.description}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <ScrollToTop />
                    <FiPackage className="text-6xl text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Product Management</h3>
                    <p className="text-muted-foreground">No products uploaded yet.</p>
                  </motion.div>
                )}
              </div>
            </div>
          )}



          {activeSection === 'orders' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FiShoppingCart className="text-6xl text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Order Management</h3>
              <p className="text-muted-foreground">This section is under development</p>
            </motion.div>
          )}

          {activeSection === 'analytics' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FiBarChart className="text-6xl text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">This section is under development</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;