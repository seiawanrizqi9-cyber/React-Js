import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { MonthlySalesChart } from '../components/MonthlySalesChart';

export default function DashboardPage() {
  const stats = [
    { title: "Pengguna Saat Ini", value: "128", change: "+12%" },
    { title: "Pengguna Web Global", value: "5.3M", change: "+2.1%" },
    { title: "Total Penjualan", value: "Rp247.5jt", change: "+8.5%" },
    { title: "Produk Terjual", value: "89 unit", change: "+15%" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.title}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-500">{stat.change} dari bulan lalu</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <MonthlySalesChart />
    </div>
  );
}