export default function AccountCard({ name, clear, showButton = true }) {
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg max-w-md mx-auto">
      <h4 className="mb-5 text-center text-lg font-medium">{name}</h4>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          email
        </label>
        <input
          type="email"
          placeholder="email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          password
        </label>
        <input
          type="password"
          placeholder="password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-3 justify-center mt-5">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          {name}
        </button>

        {showButton && (
          <button className="px-4 py-2 border border-gray-300 bg-white rounded hover:bg-gray-50 transition-colors">
            {clear}
          </button>
        )}
      </div>
    </div>
  );
}
