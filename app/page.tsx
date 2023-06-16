import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='relative w-full aspect-[16/9]'>
        <Image src='/assets/images/hero.png' alt='hero' fill priority />
      </div>
    </main>
  );
}
