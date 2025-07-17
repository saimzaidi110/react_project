import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Productpages() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  // Fetch products
  const getproducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Edit
  const handleEdit = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setEditProductId(id);
    setEditFormData({
      name: productToEdit.name,
      price: productToEdit.price,
      category: productToEdit.category
    });
  };

  // Input Change
  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  // Save Updated Product
  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/products/${editProductId}`, {
        name: editFormData.name,
        price: parseFloat(editFormData.price),
        category: editFormData.category
      });

      const { status, message } = response.data;

      if (status) {
        toast.success(message || 'Product updated');
        setEditProductId(null);
        getproducts();
      } else {
        toast.error(message || 'Update failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update product');
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditProductId(null);
    setEditFormData({
      name: '',
      price: '',
      category: ''
    });
  };

  // Delete Product
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      if (res.data.status) {
        toast.success(res.data.message || 'Product deleted successfully');
        getproducts();
      } else {
        toast.error(res.data.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error deleting product');
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        {products.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 border-b">ID</th>
                <th className="py-2 border-b">Name</th>
                <th className="py-2 border-b">Price</th>
                <th className="py-2 border-b">Category</th>
                <th className="py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2 border-b">{product.id}</td>
                  <td className="px-4 py-2 border-b">
                    {editProductId === product.id ? (
                      <input
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editProductId === product.id ? (
                      <input
                        name="price"
                        type="number"
                        value={editFormData.price}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editProductId === product.id ? (
                      <input
                        name="category"
                        value={editFormData.category}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editProductId === product.id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-2xl font-bold mb-4">No product Found</h2>
        )}
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Productpages() {

//     const [products, setProducts] = useState([])
//     const getproducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/products');
//             console.log(response.data);
//             setProducts(response.data)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     useEffect(() => {
//         getproducts();

//     }, [])

//      return (
//     <div>
//       <div className="p-6">
//         <h1 className="text-3xl font-bold mb-4">Users</h1> 
//         {products.length > 0 ? (
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className=" py-2 border-b">ID</th>
//                 <th className=" py-2 border-b">Name</th>
//                 <th className=" py-2 border-b">Price</th>
//                  <th className=" py-2 border-b">Category</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td className="px-4 py-2 border-b">{product.id}</td>
//                   <td className="px-4 py-2 border-b">{product.name}</td>
//                   <td className="px-4 py-2 border-b">{product.price}</td>
//                   <td className="px-4 py-2 border-b">{product.category}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) :
//          (
//             <h2 className="text-2xl font-bold mb-4">No product Found</h2>
//         //   <NoUserFound />    
//         )}
//       </div>
//     </div>
//   )
// }
