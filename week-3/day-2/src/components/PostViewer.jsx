import useFetch from "../hooks/useFetch";

const PostViewer = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div className="max-w-md mx-auto mt-6 p-6 border border-gray-200 rounded-lg bg-yellow-50">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Ekstraksi Logika ke Custom Hook (Soal 2)
      </h2>

      {loading && <p className="text-gray-600">Memuat data...</p>}

      {error && <p className="text-red-600">Gagal memuat: {error}</p>}

      {data && !loading && (
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">{data.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{data.body}</p>
          <p className="text-xs text-gray-500 mt-2">
            ID: {data.id} • User ID: {data.userId}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostViewer;