// src/components/forms/DynamicForm.tsx
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card } from '@/components/ui/card';

const schema = z.object({
  list: z.array(z.object({ name: z.string().min(1, 'Skill tidak boleh kosong') })).min(1, 'Minimal 1 skill'),
});

type FormData = z.infer<typeof schema>;

export default function DynamicForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { list: [{ name: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'list',
  });

  const onSubmit = (data: FormData) => {
  console.log('Skill:', data);
};

  return (
    <Card className="p-6 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center text-blue-800 dark:text-blue-200">3. Dynamic Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {fields.map((field, i) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`list.${i}.name`}
              render={({ field: f }) => (
                <FormItem className="flex gap-2">
                  <FormControl>
                    <Input placeholder="Skill" {...f} />
                  </FormControl>
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => remove(i)} 
                    disabled={fields.length === 1}
                  >
                    Hapus
                  </Button>
                  <FormMessage className="col-span-2 mt-1" />
                </FormItem>
              )}
            />
          ))}
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => append({ name: '' })} 
            disabled={fields.length >= 10} 
            className="w-full border-dashed"
          >
            + Tambah Skill
          </Button>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Simpan</Button>
        </form>
      </Form>
    </Card>
  );
}