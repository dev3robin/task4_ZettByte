'use client'

import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Spinner from '../../components/Spinner'

type User = {
  id: number
  name: string
  email: string
  company: { name: string }
  phone: string
  website: string
  address: { street: string; suite: string; city: string; zipcode: string }
}

export default function Users() {
  const { data, loading } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  )
  const [selected, setSelected] = useState<User | null>(null)
  if (loading) return <Spinner />
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white mb-2">Users Details</h2>
      <div className="hidden md:block overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
        <table className="min-w-full text-left">
          <thead className="text-sm text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Company</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(u => (
              <tr
                key={u.id}
                onClick={() => setSelected(u)}
                className="cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-3 truncate max-w-xs">{u.name}</td>
                <td className="px-4 py-3 truncate max-w-xs">{u.email}</td>
                <td className="px-4 py-3 truncate max-w-xs">{u.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-3">
        {data?.map(u => (
          <div
            key={u.id}
            onClick={() => setSelected(u)}
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition"
          >
            <p className="font-semibold text-gray-800 truncate">{u.name}</p>
            <p className="text-sm text-gray-600 truncate">{u.email}</p>
            <p className="text-sm text-gray-600 truncate">{u.company.name}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div
          className="fixed inset-0 bg-grey bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)} 
        >
          <div
            className="bg-white border-1  rounded-xl shadow-lg max-w-md w-full p-6 relative"
            onClick={e => e.stopPropagation()} 
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">{selected.name}</h3>
            <p><span className="font-semibold">Email:</span> {selected.email}</p>
            <p><span className="font-semibold">Company:</span> {selected.company.name}</p>
            <p><span className="font-semibold">Phone:</span> {selected.phone}</p>
            <p><span className="font-semibold">Website:</span> {selected.website}</p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {selected.address.street}, {selected.address.suite}, {selected.address.city},{" "}
              {selected.address.zipcode}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
