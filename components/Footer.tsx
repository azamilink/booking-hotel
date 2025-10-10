import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div className='max-w-screen mx-auto px-4 py-10 md:py-16 w-full '>
                <div className='grid  md:grid-cols-3 gap-7'>
                    <div>
                        <Link
                            href='/'
                            className='mb-10 block'>
                            <Image
                                src='/logo.png'
                                width={128}
                                height={49}
                                alt='logo'
                            />
                        </Link>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet similique, accusantium voluptatum culpa dolor amet!</p>
                    </div>
                    <div>
                        <div className='flex gap-20'>
                            <div className='flex-1 md:flex-none'>
                                <h4 className='mb-8 text-xl fon-semibold text-white'>Links</h4>
                                <ul className='list-item space-y-5 text-gray-400'>
                                    <li>
                                        <Link href='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href='/room'>Rooms</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex-1 md:flex-none'>
                                <h4 className='mb-8 text-xl fon-semibold text-white'>Links</h4>
                                <ul className='list-item space-y-5 text-gray-400'>
                                    <li>
                                        <Link href='#'>Legal</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Term & Condition</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Payment Method</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Privacy Poicy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='mb-8 text-xl font-semibold text-white'>Newsletter</h4>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <form action="" className='mt-5'>
                            <div className="mb-5">
                                <input 
                                type="email" 
                                className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none bg-white" 
                                placeholder="jhondoe@gmail.com" 
                                />
                            </div>
                            <button className='w-full bg-orange-400 p-3  hover:bg-orang-500 text-white text-center rounded-sm '>
                                Suscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='max-w-screen mx-auto px-4 py-8 border-t border-gray-500 text-center text-base text-gray-500'>&copy; Copyright {new Date().getFullYear()} | Hotel Booking | All rights reserved.</div>
        </footer>
    );
}

export default Footer;
