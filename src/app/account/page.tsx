export default function Account() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 mt-6 w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-400 focus:border-pink-400"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-400 focus:border-pink-400"
                required
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-pink-500 hover:underline">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              SIGN IN
            </button>
          </form>
          <div className="mt-6 flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:underline">Create account</a>
            <a href="/" className="hover:underline">Return to Store</a>
          </div>
        </div>
      </div>
    );
  }
  