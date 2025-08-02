import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { auth } from '../firebase/config'

const Adminnav = () => {
  const location = useLocation()
  
  const handleLogout = async () => {
    await auth.signOut()
    localStorage.removeItem('adminAuth')
    localStorage.removeItem('adminToken')
    window.location.href = '/singh/login'
  }

  const navItems = [
    { path: '/singh', label: '🏠 Dashboard', icon: '🏠' },
    { path: '/singh/webseries', label: '🎬 Webseries', icon: '🎬' },
    { path: '/singh/stories', label: '📚 Stories', icon: '📚' },
    { path: '/singh/ulluactresses', label: '🌟 Actresses', icon: '🌟' },
    { path: '/singh/desileaks', label: '🔥 Desi Leaks', icon: '🔥' },
    { path: '/singh/viral', label: '⚡ Viral', icon: '⚡' }
  ]

  return (
    <nav className="bg-zinc-900 border-b border-zinc-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-pink-500">🛠️ Admin Panel</h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  location.pathname === item.path
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {item.icon} {item.label.split(' ')[1]}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Admin</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden mt-4 flex flex-wrap gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-md text-xs font-medium transition ${
              location.pathname === item.path
                ? 'bg-pink-600 text-white'
                : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Adminnav