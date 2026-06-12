'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  origin: string;
  location: string;
  budget: string;
  timeline: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEnquiries();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check');
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setAuthError('Invalid password');
      }
    } catch {
      setAuthError('Error logging in');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
    setEnquiries([]);
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      } else {
        setError(data.error || 'Failed to fetch');
      }
    } catch {
      setError('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this request?')) return;
    try {
      const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries(enquiries.filter(e => e.id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch {
      alert('Error deleting');
    }
  };


  if (isAuthenticated === null) return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full space-y-4">
          <h2 className="text-2xl font-bold text-center text-[#000433]">Admin Login</h2>
          {authError && <p className="text-red-500 text-sm text-center">{authError}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin Password"
            required
            className="w-full bg-slate-100 border border-slate-300 px-4 py-2 rounded focus:outline-none focus:border-[#00847b]"
          />
          <button type="submit" className="w-full bg-[#00847b] text-white py-2 rounded font-bold hover:bg-[#006b64] cursor-pointer">
            Login
          </button>
          <Link href="/" className="block text-center text-sm text-[#00847b] hover:underline mt-4">
            Return to website
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#000433]">Admin Dashboard</h1>
          <div className="space-x-4">
            <Link href="/" className="text-[#00847b] hover:underline font-semibold text-sm">
              &larr; Back to Website
            </Link>
            <button onClick={handleLogout} className="text-sm px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded font-semibold cursor-pointer">
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Consultation Requests</h2>
              <p className="text-sm text-slate-500 mt-1">Review all contact submissions below.</p>
            </div>
          </div>


          <div className="p-6 overflow-x-auto">
            {loading ? (
              <div className="text-center py-12 text-slate-500">Loading requests...</div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : enquiries.length === 0 ? (
              <div className="text-center py-12 text-slate-500">No requests found.</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-sm uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold">Name</th>
                    <th className="py-3 px-4 font-semibold">Contact</th>
                    <th className="py-3 px-4 font-semibold">Details</th>
                    <th className="py-3 px-4 font-semibold w-1/4">Message</th>
                    <th className="py-3 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-slate-50 align-top text-sm group">
                      <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                        {new Date(enquiry.createdAt).toLocaleDateString()}<br/>
                        <span className="text-xs text-slate-400">{new Date(enquiry.createdAt).toLocaleTimeString()}</span>
                      </td>
                      <td className="py-4 px-4 font-medium text-[#000433]">{enquiry.name}</td>
                      <td className="py-4 px-4 text-slate-600">
                        <a href={`mailto:${enquiry.email}`} className="text-[#00847b] hover:underline block">{enquiry.email}</a>
                        {enquiry.phone && <span className="text-xs text-slate-500">{enquiry.phone}</span>}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        <div><span className="font-semibold">Loc:</span> {enquiry.location}</div>
                        <div><span className="font-semibold">Budget:</span> {enquiry.budget}</div>
                        <div><span className="font-semibold">Timeline:</span> {enquiry.timeline}</div>
                        <div className="text-xs text-slate-400 mt-1">Origin: {enquiry.origin}</div>
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-xs">
                        <div className="max-w-xs break-words">
                          {enquiry.message || <span className="text-slate-400 italic">No message provided</span>}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button 
                          onClick={() => handleDelete(enquiry.id)}
                          className="text-red-500 hover:text-red-700 text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-red-50 px-3 py-1 rounded cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
