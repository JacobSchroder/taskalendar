import { NewTask } from '@/components/new-task';

export default function AddTaskPage() {
  return (
    <div className='container mx-auto p-4 flex justify-center'>
      <div className='w-full max-w-lg mt-4 lg:mt-12'>
        <h1 className='text-2xl font-bold mb-4'>Add new task</h1>
        <NewTask />
      </div>
    </div>
  );
}
