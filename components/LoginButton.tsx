import { FaG } from 'react-icons/fa6';
import { signIn } from '@/auth';

export function LoginGoogleButton() {
    return (
        <form
            action={async () => {
                'use server';
                await signIn('google');
            }}>
            <button className='flex items-center justify-center gap-2 w-full text-white font-medium py-3 px-6 text-base rounded-sm bg-blue-700 hover:bg-blue-600 cursor-pointer hover:rounded-lg'>
                <FaG className='size-6' />
                Sign In With Google
            </button>
        </form>
    );
}
