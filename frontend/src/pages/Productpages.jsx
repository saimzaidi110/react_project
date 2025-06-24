import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Productpages() {

    const [products, setProducts] = useState([])
    const getproducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            console.log(response.data);
            setProducts(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getproducts();

    }, [])

     return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1> 
        {products.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className=" py-2 border-b">ID</th>
                <th className=" py-2 border-b">Name</th>
                <th className=" py-2 border-b">Price</th>
                 <th className=" py-2 border-b">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2 border-b">{product.id}</td>
                  <td className="px-4 py-2 border-b">{product.name}</td>
                  <td className="px-4 py-2 border-b">{product.price}</td>
                  <td className="px-4 py-2 border-b">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) :
         (
            <h2 className="text-2xl font-bold mb-4">No product Found</h2>
        //   <NoUserFound />    
        )}
      </div>
    </div>
  )
}
