import BasicForm from '@/components/BasicForm';
import MultiStepForm from '@/components/MultiStepForm';
import DynamicForm from '@/components/DynamicForm';
import AdvancedForm from '@/components/AdvancedForm';

export default function AllFormsPage() {
  return (
    <div className="p-4 space-y-10 max-w-3xl mx-auto">
      <BasicForm />
      <MultiStepForm />
      <DynamicForm />
      <AdvancedForm />
    </div>
  );
}