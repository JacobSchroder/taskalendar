import { Card, CardTitle } from '@/components/ui/card';

// TODO: use schema type def.
type Task = {
  id: number;
  title: string;
  text: string;
};

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card className='p-2.5'>
      <div>
        <CardTitle className='mb-2'>{task.title}</CardTitle>
        <p className='text-xs'>{task.text}</p>
      </div>
    </Card>
  );
}
