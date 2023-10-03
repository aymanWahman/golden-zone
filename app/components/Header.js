import Image from 'next/image';
import Link from 'next/link';
import { LanguageIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='flex fixed top-0 w-full p-3 z-50 justify-between  rounded-b-2xl border border-yellow-600 shadow-2xl '>
      
    <div className='flex bg-transparent items-center gap-2 md:gap-3 '>
      
    <Image
              src="/image/logo.png"
              alt="Logo"
              className='rounded-full'
              width={90}
              height={20}
              priority
            />
            <h1 className='font-extrabold text-xl md:text-6xl text-yellow-600 font-serif'>Golden Zone</h1>
    </div>

    <ul className='flex mr-3 gap-2 md:gap-9 items-center text-yellow-600'>
    <li className='text-xs md:text-xl '><Link href="/arbic"><LanguageIcon className="w-6 h-6" /></Link></li>
        <li className='text-xs md:text-xl '><Link href="/">Home</Link></li>
        <li className='text-xs md:text-xl '><Link href="/about">About</Link></li>
        </ul>
  
    </div>
  );
}

export default Header;
