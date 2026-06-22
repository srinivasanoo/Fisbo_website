import imageToBase64 from '@/helper/imageTobase64';
import { useState } from 'react';
import { toast } from 'sonner';
import ScrollToTop from './ScrollToTop ';


const UploadProduct = ({ onUpload }) => {
    const [formData, setFormData] = useState<{
        name: string;
        category: string;
        description: string;
        image: string; 
        rating: number;
        reviews: number;
        attenuation: string;
        wavelength: string;
        coreDiameter: string;
        cableDiameter: string;
        jacketMaterial: string;
        lengthOptions: string;
        temperatureRange: string;
    }>( {
        name: '',
        category: 'cables',
        description: '',
        image: '',
        rating: null,
        reviews: null,
        attenuation: '',
        wavelength: '',
        coreDiameter: '',
        cableDiameter: '',
        jacketMaterial: '',
        lengthOptions: '',
        temperatureRange: '',
    });

    // Convert image file to base64 string
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const base64: string = await imageToBase64(file);
            setFormData(prev => ({
                ...prev,
                image: base64,
            }));
        } catch (err) {
            console.error('Failed to convert image:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            ...formData,
            id: Date.now(),
        };

        // Save to localStorage
        const existing = JSON.parse(localStorage.getItem('products')) || [];
        const updated = [...existing, newProduct];
        localStorage.setItem('products', JSON.stringify(updated));
        toast.success("Product added successfully");

        // Callback to parent
        if (onUpload) onUpload(newProduct);

        // Reset form
        setFormData({
            name: '',
            category: 'cables',
            description: '',
            image: '',
            rating: 0,
            reviews: 0,
            attenuation: '',
            wavelength: '',
            coreDiameter: '',
            cableDiameter: '',
            jacketMaterial: '',
            lengthOptions: '',
            temperatureRange: '',
        });
    };

    return (
        <>
            <ScrollToTop />
            <form onSubmit={handleSubmit} className="bg-white border p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md">
                <h2 className="text-xl font-semibold">Upload Product</h2>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="cables">Fiber Optic Cables</option>
                    <option value="equipment">Network Equipment</option>
                    <option value="accessories">Accessories</option>
                    <option value="services">Services</option>
                </select>

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Product Description"
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                />

                {formData.image && (
                    <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-40 object-cover rounded"
                    />
                )}

                {/* Changed to type="text" */}
                <input
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    placeholder="Rating (1-5)"
                    className="w-full border px-3 py-2 rounded"
                    maxLength={1} // Optional: limit input length to 1 digit
                />

                {/* Changed to type="text" */}
                <input
                    type="text"
                    name="reviews"
                    value={formData.reviews}
                    onChange={handleChange}
                    placeholder="Number of Reviews"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="attenuation"
                    value={formData.attenuation}
                    onChange={handleChange}
                    placeholder="Attenuation (dB/km)"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="wavelength"
                    value={formData.wavelength}
                    onChange={handleChange}
                    placeholder="Wavelength (nm)"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="coreDiameter"
                    value={formData.coreDiameter}
                    onChange={handleChange}
                    placeholder="Core Diameter (μm)"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="cableDiameter"
                    value={formData.cableDiameter}
                    onChange={handleChange}
                    placeholder="Cable Diameter (mm)"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="jacketMaterial"
                    value={formData.jacketMaterial}
                    onChange={handleChange}
                    placeholder="Jacket Material"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="lengthOptions"
                    value={formData.lengthOptions}
                    onChange={handleChange}
                    placeholder="Length Options (m)"
                    className="w-full border px-3 py-2 rounded"
                />

                <input
                    type="text"
                    name="temperatureRange"
                    value={formData.temperatureRange}
                    onChange={handleChange}
                    placeholder="Temperature Range (°C)"
                    className="w-full border px-3 py-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Upload
                </button>
            </form>
        </>
    );
};

export default UploadProduct;
