import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const chartData = [
  { month: "Jan", sales: 45000000, unitsSold: 120 },
  { month: "Feb", sales: 52000000, unitsSold: 145 },
  { month: "Mar", sales: 48000000, unitsSold: 130 },
  { month: "Apr", sales: 61000000, unitsSold: 170 },
  { month: "May", sales: 58000000, unitsSold: 160 },
  { month: "Jun", sales: 65000000, unitsSold: 180 },
  { month: "Jul", sales: 72000000, unitsSold: 200 },
  { month: "Aug", sales: 68000000, unitsSold: 190 },
  { month: "Sep", sales: 75000000, unitsSold: 210 },
  { month: "Oct", sales: 82000000, unitsSold: 230 },
  { month: "Nov", sales: 78000000, unitsSold: 220 },
  { month: "Dec", sales: 90000000, unitsSold: 250 },
]

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border rounded shadow">
        <p className="font-bold">{label}</p>
        <p className="text-blue-600">Penjualan: Rp{(payload[0].value / 1000000).toFixed(1)}jt</p>
        <p className="text-blue-500">Terjual: {payload[1].value} unit</p>
      </div>
    );
  }
  return null;
};

export function MonthlySalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Laporan Penjualan Tahunan</CardTitle>
        <CardDescription>Penjualan dan jumlah barang terjual per bulan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#2563eb" tickFormatter={(value) => `Rp${(value / 1000000)}jt`} />
              <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" tickFormatter={(value) => `${value}`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="sales" fill="#2563eb" name="Penjualan (Rp)" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="unitsSold" fill="#3b82f6" name="Barang Terjual" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}