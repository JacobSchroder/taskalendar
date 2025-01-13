import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignOut } from './sign-out';
import UserAvatar from './user-avatar';

export default function UserDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center px-2'>
        <div className='h-8 w-8'>
          <UserAvatar />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side='bottom' align='end'>
        <DropdownMenuItem>
          <SignOut>Sign Out</SignOut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
