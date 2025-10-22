// src/components/ProfilePage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTheme } from "./ThemeSwitcher";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        {/* Theme Switcher — di dalam card, pojok kanan atas, tidak keluar */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-10 w-10" // ukuran standar, posisi rapi
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        <CardHeader className="text-center pb-4 pt-8">
          {" "}
          {/* tambah pt-8 agar tidak tabrakan dengan tombol */}
          {/* Avatar */}
          <div className="flex justify-center mb-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          {/* Judul Utama */}
          <CardTitle className="text-xl">Profil Pengguna</CardTitle>
          {/* Teks bantu */}
          <p className="text-sm text-muted-foreground mt-1">
            Perbarui informasi akun Anda di sini.
          </p>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input
                placeholder="Masukkan nama Anda"
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="email@contoh.com"
                className="text-sm"
              />
            </div>
          </div>

          <Button className="w-full mt-6 text-sm">Simpan Perubahan</Button>
        </CardContent>
      </Card>
    </div>
  );
}
