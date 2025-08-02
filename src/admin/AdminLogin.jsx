import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, ADMIN_EMAIL } from '../firebase/config';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      const user = userCredential.user;
      
      if (user.email !== ADMIN_EMAIL) {
        await auth.signOut();
        alert('Access denied! Only admin can access.');
        return;
      }
      
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminToken', await user.getIdToken());
      onLogin(true);
      navigate('/singh');
    } catch (error) {
      alert('Login failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">🔐 Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="w-full p-3 rounded bg-zinc-800 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full p-3 rounded bg-zinc-800 text-white"
            required
          />
          <button type="submit" disabled={loading} className="w-full bg-pink-600 p-3 rounded text-white font-bold disabled:opacity-50">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;