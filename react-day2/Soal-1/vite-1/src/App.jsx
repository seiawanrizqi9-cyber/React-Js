import "./App.css";
import ProfileCard from "./components/ProfileCard.jsx";
import profileImg from "./assets/img/1.jpg";

function App() {
  // Data contoh untuk ditampilkan di ProfileCard
  const userProfile = {
    name: "Rizqi Setiawan",
    photo: profileImg, // Perbaiki: langsung gunakan variabel, dan ganti nama properti
    bio: "Seorang web developer yang antusias dengan teknologi JavaScript dan React. Senang belajar hal baru dan berbagi pengetahuan.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
  };

  return (
    <>
      <h1>Profil Pengguna</h1>
      <ProfileCard
        name={userProfile.name}
        photo={userProfile.photo} // Perbaiki: kirim prop 'photo'
        bio={userProfile.bio}
        skills={userProfile.skills}
      />
    </>
  );
}

export default App;
