import { useState } from 'react';
import { user } from '../types';
import ProfileForm from '../components/ProfileForm';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<user | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = ( data: user) => {
    setProfileData(data);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader className="pb-3 text-center">
          <CardTitle>Profil Pengguna</CardTitle>
        </CardHeader>
        <CardContent>
          {profileData && !isEditing ? (
            <>
              <div className="space-y-4">
                <p className="text-lg">
                  Halo, <span className="font-semibold">{profileData.name}</span>! Profil Anda sudah tersimpan.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-gray-500">Nama</p><p>{profileData.name}</p></div>
                  <div><p className="text-gray-500">Email</p><p>{profileData.email}</p></div>
                  <div><p className="text-gray-500">Username</p><p>@{profileData.username}</p></div>
                  <div><p className="text-gray-500">Status</p><p>{profileData.isActive ? 'Aktif' : 'Tidak Aktif'}</p></div>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <p className="mb-6 text-gray-600 dark:text-gray-300 text-center">
                {profileData 
                  ? "Edit informasi profil Anda di bawah ini." 
                  : "Selamat datang! Isi profil Anda untuk memulai."}
              </p>
              <ProfileForm
                initialData={profileData || undefined}
                onSubmit={handleSave}
              />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}