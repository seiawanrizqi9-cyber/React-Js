import { useState } from 'react';
import { user } from '../types';
import { Button } from './ui/button';
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldSet, FieldLegend } from './ui/field';
import { Input } from './ui/input';

interface ProfileFormProps {
  initialData?: Partial<user>;
  onSubmit: (data: user) => void;
}

export default function ProfileForm({ initialData, onSubmit }: ProfileFormProps) {
  // Jika ada initialData, gunakan isActive-nya; jika tidak, default false (Nonaktif)
  const [formData, setFormData] = useState<Partial<user>>(initialData || { isActive: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.username || !formData.password) {
      alert('Semua field wajib diisi');
      return;
    }
    // Saat disimpan, pastikan status jadi Aktif
    onSubmit({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      isActive: true, // ✅ Selalu aktif setelah disimpan
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldSet>
        <FieldLegend>Profile Information</FieldLegend>
        <FieldDescription>This appears on your public profile.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              name="username"
              value={formData.username || ''}
              onChange={handleChange}
              placeholder="Masukkan username Anda"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password || ''}
              onChange={handleChange}
              placeholder="Masukkan password Anda"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="isActive">Active Status</FieldLabel>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {formData.isActive ? 'Aktif' : 'Nonaktif'}
            </div>
            <FieldDescription>
              Status akan otomatis menjadi <span className="font-medium">Aktif</span> setelah profil disimpan.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>

      {/* ✅ Tambahkan margin atas agar tidak menghimpit */}
      <div>
        <Button type="submit" className="w-full p-3">
          {initialData ? 'Update Profile' : 'Save Profile'}
        </Button>
      </div>
    </form>
  );
}