import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext'; 

function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const { login, error: contextError, loading, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated && !loading) {
          window.location.href = '/admin/produk'; 
        }
      }, [isAuthenticated, loading]);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let hasError = false;

        if (!email.includes('@')) {
            setEmailError('Email must contain @');
            hasError = true;
        } else {
            setEmailError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (!hasError) {
            login(email, password);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl text-black font-bold mb-6 text-center">Admin Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                emailError ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your email"
                            disabled={loading}
                        />
                        {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                                passwordError ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your password"
                            disabled={loading}
                        />
                        {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
                    </div>
                    {contextError && <p className="text-red-500 text-xs italic mb-4">{contextError}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthPage;