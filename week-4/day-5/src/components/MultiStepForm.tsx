// src/components/forms/MultiStepForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

const PersonalInfoSchema = z.object({
  first: z.string().min(1, 'Nama depan wajib'),
  last: z.string().min(1, 'Nama belakang wajib'),
  email: z.string().email('Email salah'),
});

const WorkInfoSchema = z.object({
  phone: z.string().min(1, 'Nomor telepon wajib'),
  company: z.string().min(1, 'Perusahaan wajib'),
  pos: z.string().min(1, 'Posisi wajib'),
});

const BioInfoSchema = z.object({
  bio: z.string().max(300).optional(),
  web: z.string().url().or(z.literal('')).optional(),
});

type PersonalInfoData = z.infer<typeof PersonalInfoSchema>;
type WorkInfoData = z.infer<typeof WorkInfoSchema>;
type BioInfoData = z.infer<typeof BioInfoSchema>;
type MultiStepData = PersonalInfoData & WorkInfoData & BioInfoData;
type StepData = PersonalInfoData | WorkInfoData;

function PersonalInfo({ onNext, dataAwal }: { 
  onNext: (data: PersonalInfoData) => void; 
  dataAwal: Partial<MultiStepData> 
}) {
  const form = useForm<PersonalInfoData>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {
      first: dataAwal.first || '',
      last: dataAwal.last || '',
      email: dataAwal.email || '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <FormField control={form.control} name="first" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Nama depan" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="last" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Nama belakang" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Email" {...field} onChange={e => field.onChange(e.target.value.toLowerCase())} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Lanjut →</Button>
      </form>
    </Form>
  );
}

function WorkInfo({ onNext, onBack, dataAwal }: { 
  onNext: (data: WorkInfoData) => void; 
  onBack: () => void; 
  dataAwal: Partial<MultiStepData> 
}) {
  const form = useForm<WorkInfoData>({
    resolver: zodResolver(WorkInfoSchema),
    defaultValues: {
      phone: dataAwal.phone || '',
      company: dataAwal.company || '',
      pos: dataAwal.pos || '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <FormField control={form.control} name="phone" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="No. HP" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="company" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Perusahaan" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="pos" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Posisi" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>← Balik</Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Lanjut →</Button>
        </div>
      </form>
    </Form>
  );
}

function BioInfo({ onBack, onSubmit, dataAwal }: { 
  onBack: () => void; 
  onSubmit: () => void; 
  dataAwal: Partial<MultiStepData> 
}) {
  const form = useForm<BioInfoData>({
    resolver: zodResolver(BioInfoSchema),
    defaultValues: {
      bio: dataAwal.bio || '',
      web: dataAwal.web || '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="bio" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Bio (opsional)" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="web" render={({ field }) => (
          <FormItem><FormControl><Input placeholder="Website (opsional)" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>← Balik</Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Kirim</Button>
        </div>
      </form>
    </Form>
  );
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<MultiStepData>>({});
  const progress = (currentStep / 3) * 100;

  const simpanDanLanjut = (data: StepData) => {
    setFormData(prev => ({ ...prev, ...data }));
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const kembali = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const kirimSemua = () => {
    console.log('Data lengkap:', formData);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1: return <PersonalInfo onNext={simpanDanLanjut} dataAwal={formData} />;
      case 2: return <WorkInfo onNext={simpanDanLanjut} onBack={kembali} dataAwal={formData} />;
      case 3: return <BioInfo onBack={kembali} onSubmit={kirimSemua} dataAwal={formData} />;
      default: return null;
    }
  };

  return (
    <Card className="p-6 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center text-blue-800 dark:text-blue-200">2. Multi-Step Form</h2>
      <div className="space-y-4">
        <Progress value={progress} className="h-2 [&>div]:bg-blue-600" />
        <p className="text-sm text-blue-700 dark:text-blue-300 text-center">Langkah {currentStep} dari 3</p>
        {renderForm()}
      </div>
    </Card>
  );
}