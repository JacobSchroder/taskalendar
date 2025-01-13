'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTasks } from '@/hooks/useTasks';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const { tasks } = useTasks();

  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    console.log('addTask', newTask);
    setNewTask('');
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
        {tasks.data?.map((task) => (
          <div key={task.id} className='bg-secondary p-2 mb-2 rounded cursor-move' draggable>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
