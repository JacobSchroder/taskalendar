'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createTask } from '@/server/actions/task';
import { ListTasksResponse } from '@/server/resolvers/tasks/list-tasks';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function NewTask({ onSuccess }: { onSuccess?: () => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      const tempId = Date.now() * -1;
      queryClient.setQueryData(['tasks'], (oldData: ListTasksResponse) => {
        return [
          {
            id: tempId,
            title,
            text: description,
            draft: false,
            loading: true,
          },
          ...oldData,
        ];
      });
      onSuccess?.();
      // optimistic update
      await createTask({ title, text: description, draft: false }).then((id) => {
        queryClient.setQueryData(['tasks'], (oldData: ListTasksResponse) => {
          return oldData.map((t) => (t.id === tempId ? { ...t, id, loading: false } : t));
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <Label htmlFor='title'>Title</Label>
        <Input id='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor='description'>Description</Label>
        <Textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type='submit'>Add Task</Button>
    </form>
  );
}
