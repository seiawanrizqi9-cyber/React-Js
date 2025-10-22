import { ThemeProvider } from "@/components/ThemeSwitcher"
import ProfilePage from "@/components/ProfilePage"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground p-6">
        <ProfilePage />
      </div>
    </ThemeProvider>
  )
}