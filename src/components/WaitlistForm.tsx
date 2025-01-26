import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_size: '' // Updated to match database column name
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if Supabase is properly configured
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setStatus('error');
      setErrorMessage('Supabase configuration is missing. Please try again later.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          name: formData.name,
          email: formData.email,
          company_size: formData.company_size
        }]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', company_size: '' });
    } catch (error: any) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(
        error.code === '23505' 
          ? 'This email is already on the waitlist.'
          : 'Error joining waitlist. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      <div>
        <label htmlFor="company_size" className="block text-sm font-medium text-gray-700">
          Company Size
        </label>
        <select
          id="company_size"
          required
          value={formData.company_size}
          onChange={(e) => setFormData(prev => ({ ...prev, company_size: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="">Select size</option>
          <option value="solo">Solo</option>
          <option value="small">Small team (2-5)</option>
          <option value="medium">Medium team (5-20)</option>
          <option value="large">Large team (20-50)</option>
          <option value="super">Super large team (50-100)</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Successfully joined the waitlist!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center">{errorMessage}</p>
      )}
    </form>
  );
};

export default WaitlistForm;