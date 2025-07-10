import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UserPage() {

  const [users, setUsers] = useState([])
  const getusers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      console.log(response.data);
      setUsers(response.data.users)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getusers();

  }, [])

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className=" py-2 border-b">ID</th>
                <th className=" py-2 border-b">Name</th>
                <th className=" py-2 border-b">Email</th>
                <th className=" py-2 border-b">Actiom</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-2 border-b">{user._id}</td>
                  <td className="px-4 py-2 border-b">{user.username}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>

                //<td className="px-4 py-2 border-b">
                //   <button
                //     style={{ backgroundColor: "green", color: "white", padding: "6px 12px", marginRight: "8px", borderRadius: "4px" }}
                //   >
                //     Edit
                //   </button>
                //   <button
                //     style={{ backgroundColor: "red", color: "white", padding: "6px 12px", borderRadius: "4px" }}
                //   >
                //     Delete
                //   </button>
                // </td>

              ))}
            </tbody>
          </table>
        ) :
          (
            <h2 className="text-2xl font-bold mb-4">No User Found</h2>
            //   <NoUserFound />    
          )}
      </div>
    </div>
  )
}
