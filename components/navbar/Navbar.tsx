import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';

export default function Navbar() {
    return (
        <div className="fixed top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" className="h-8 mr-3" alt="Logo" width={128} height={49} priority />
                </Link>
                <Navlink />
            </div>
        </div>
    );
}
