import { useState } from 'react';

export default function AccountCard({
  formName,
  btnName,
  clear,
  isSigin = true,
}) {
  const initialData = {
    email: '',
    password: '',
    checkbox: false,
  };

  const [formData, setFormData] = useState(initialData);

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function userData(credentials) {
      return fetch(`${isSigin ? '/login' : '/register'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      }).then((data) => data.json());
    }
    userData({
      email: formData.email,
      password: formData.password,
      ...(isSigin && { checkbox: formData.checkbox }),
    })
      .then((data) => {
        console.log('Sikeres:', data);
      })
      .catch((error) => {
        console.error('Hiba történt:', error);
      });
  };

  const deleteData = () => {
    setFormData(initialData);
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <h4 className="mb-5 text-center text-lg font-medium">{formName}</h4>
      <form
        className="bg-white p-5 shadow-lg rounded-lg w-full"
        onSubmit={handleSubmit}
      >
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
            name="email"
            value={formData.email}
            onChange={handleData}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleData}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Check box remember me vagy üres hely */}
        <div className="mb-4 flex items-center h-6">
          {isSigin ? (
            <>
              <input
                type="checkbox"
                className="mr-2"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleData}
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Emlékezz rám
              </label>
            </>
          ) : (
            <div></div>
          )}
        </div>
        {/* Gombok */}
        <div className="flex gap-3 justify-center mt-5">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700 transition-colors">
            {btnName}
          </button>
          {isSigin && (
            <button
              className="px-4 py-2 border border-gray-300 bg-red-500 text-white rounded hover:bg-gray-50 transition-colors"
              onClick={deleteData}
            >
              {clear}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
