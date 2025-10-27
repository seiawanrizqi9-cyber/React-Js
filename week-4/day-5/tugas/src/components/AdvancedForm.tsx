// src/components/forms/AdvancedForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  web: z.string().url().or(z.literal("")).optional(),
});

type FormData = z.infer<typeof schema>;

export default function AdvancedForm() {
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { email: "", web: "" },
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Data:", data);
    console.log("Foto:", fotoPreview);
  };

  return (
    <Card className="p-6 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center text-blue-800 dark:text-blue-200">
        4. Advanced Integration
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormItem>
            <FormControl>
              <div className="flex flex-col items-center">
                {fotoPreview ? (
                  <img
                    src={fotoPreview}
                    alt="Foto"
                    className="w-20 h-20 rounded-full object-cover mb-3 border"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center mb-3 border border-dashed">
                    📷
                  </div>
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="w-full"
                />
              </div>
            </FormControl>
          </FormItem>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    onChange={(e) =>
                      field.onChange(e.target.value.toLowerCase())
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="web"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Website (opsional)"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Kirim
          </Button>
        </form>
      </Form>
    </Card>
  );
}
