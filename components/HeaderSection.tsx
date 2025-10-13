import Image from 'next/image';

export default function HeaderSection({ title, subtitle }: { title?: string; subtitle?: string }) {
	return (
		<header className='relative h-[260px] w-full'>
			<div className='absolute inset-0'>
				<Image
					src='/hero.jpg'
					alt='Header Image'
					fill
					className='object-cover object-center w-full h-full'
				/>
				<div className='absolute inset-0 flex bg-black opacity-50'></div>
			</div>
			<div className='relative flex flex-col justify-center items-center h-60 text-center pt-14'>
				<h1 className='text-5xl font-bold leading-tight capitalize  text-white'>{title}</h1>
				<p className='text-xl text-gray-300'>{subtitle}</p>
			</div>
		</header>
	);
}
