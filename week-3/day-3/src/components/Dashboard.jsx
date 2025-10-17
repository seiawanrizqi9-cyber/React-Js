export default function Dashboard() {
  const tasks = [
    "Optimasi performa",
    "Deploy aplikasi",
    "Review kode"
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Dashboard</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">Daftar Tugas:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}