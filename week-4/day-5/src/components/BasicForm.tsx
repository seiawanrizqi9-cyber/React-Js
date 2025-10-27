// src/components/forms/BasicForm.tsx
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
  username: z
    .string()
    .min(3, "Username minimal 3 karakter")
    .max(20, "Maksimal 20 karakter"),
  email: z.string().min(1, "Isi email dulu").email("Email tidak valid"),
  pass: z.string().min(6, "Password minimal 6 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function BasicForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", email: "", pass: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Basic:", data);
  };

  return (
    <Card className="p-6 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center text-blue-800 dark:text-blue-200">
        1. Basic Form
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="pass"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Daftar
          </Button>
        </form>
      </Form>
    </Card>
  );
}
