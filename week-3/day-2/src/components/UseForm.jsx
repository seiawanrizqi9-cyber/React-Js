import useForm from '../hooks/useForm';

const UserForm = () => {
  const { values, handleChange, reset } = useForm({ name: '', email: '' });

  return (
    <div className="max-w-md mx-auto mt-6 p-6 border border-gray-200 rounded-lg bg-yellow-50">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Custom Hook untuk Form Handling (Soal 4)</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-gray-200 text-gray-800"
            placeholder="Masukkan nama"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-gray-200 text-gray-800"
            placeholder="Masukkan email"
          />
        </div>

        <button
          type="button"
          onClick={reset}
          className="text-sm text-gray-600 hover:text-gray-800 underline"
        >
          Reset Form
        </button>
      </form>

      {/* Preview */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-black mb-2">Preview Data:</h3>
        <div className="text-sm text-black space-y-1">
          <p><span className="font-medium">Nama:</span> {values.name || <span className="text-black">belum diisi</span>}</p>
          <p><span className="font-medium">Email:</span> {values.email || <span className="text-black">belum diisi</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default UserForm;