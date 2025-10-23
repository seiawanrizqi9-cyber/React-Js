import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Field, FieldGroup, FieldLabel } from '../components/ui/field';
import { Input } from '../components/ui/input';
import { Textarea } from  '../components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Hubungi Kami</CardTitle>
          <CardDescription>Kirim pesan atau temukan kami di media sosial</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel>Nama</FieldLabel>
                <Input placeholder="Nama Anda" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="email@contoh.com" />
              </Field>
              <Field>
                <FieldLabel>Pesan</FieldLabel>
                <Textarea placeholder="Tulis pesan Anda di sini..." />
              </Field>
            </FieldGroup>
            <Button type="submit" className="w-full p-2">Kirim Pesan</Button>
          </form>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-medium mb-3">Temukan Kami</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Email: <a href="mailto:support@bluedash.com" className="text-blue-600 hover:underline">support@bluedash.com</a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}