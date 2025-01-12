import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
}

export default function Sidebar() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Toggle Dark mode' },
    { id: '2', title: 'Project Deadline' },
    { id: '3', title: 'Lunch with Client' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: newTask.trim() }]);
      setNewTask('');
    }
  };

  return (
    <div className='w-64 h-full bg-background border-r p-4 flex flex-col'>
      <h2 className='text-lg font-semibold mb-4'>Tasks</h2>
      <div className='flex mb-4'>
        <Input
          type='text'
          placeholder='New task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='mr-2'
        />
        <Button onClick={addTask} size='icon'>
          <PlusCircle className='h-4 w-4' />
        </Button>
      </div>
      <div className='flex-grow overflow-auto'>
        {tasks.map((task) => (
          <div key={task.id} className='bg-secondary p-2 mb-2 rounded cursor-move' draggable>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
