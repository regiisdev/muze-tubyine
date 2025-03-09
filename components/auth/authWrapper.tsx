import { useSession } from 'next-auth/react';
import Login from './loginScreen';


export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    return (
        <>
            {session ? children : <Login />}
        </>
    )
}