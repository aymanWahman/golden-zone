import Image from 'next/image'
import data from './components/data';
import datarooms from './components/datarooms';
import Slideshow from './components/Slideshow';

export const metadata = {
  title: "Golden Zone",
};

export default function Home() {

  return (
  <div className='mt-36'>
    <div className='mx-5'>
  <h1 className='text-center font-bold my-4 text-xl md:text-4xl'>Welcome to our resort</h1>
<p className='text-center'>At our resort, we are dedicated to providing our guests with exceptional service and an unforgettable experience.</p>
<p className='text-center'>Our spacious guest rooms feature modern amenities including air conditioning, free Wi-Fi, smart screen TVs, and mini-fridges.</p>
<p className='text-center'>Our resort also features a variety of on-site facilities such as a fitness center, spa, outdoor pool, restaurants, and event rooms.</p>
</div>
  <Slideshow/>
    
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-yellow-700'>Our Rooms</h2>

    {datarooms&& datarooms.map((d) => (
    <main key={d.id} className="grid grid-cols-1 md:grid-cols-3 mb-3 items-center justify-between gap-2">

    <div className='my-5 ml-auto mr-auto'>
    <Image
      className="rounded shadow-2xl shadow-black"
      src={d.image}
      alt="Logo"
      width={360}
      height={130}
      priority
    />
    </div>
    
    <div className='col-span-2 p-3 md:mr-9 shadow-2xl shadow-black space-y-3 md:h-64 '>
    <h1 className='text-center font-bold text-lg md:text-2xl mt-4'>{d.title}</h1>
    <p className='text-center text-xl'>{d.description}</p>
    </div>
    
    
    </main>
   ))}


  
<h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-yellow-700'>Our Pools</h2>
  
  {data&& data.map((d) => (
    <main key={d.id} className="grid grid-cols-1 md:grid-cols-3 mb-3 items-center justify-between gap-2">

    <div className='my-5 ml-auto mr-auto'>
    <Image
      className="rounded shadow-2xl shadow-black"
      src={d.image}
      alt="Logo"
      width={360}
      height={130}
      priority
    />
    </div>
    
    <div className='col-span-2 p-3 md:mr-9 shadow-2xl shadow-black space-y-3 md:h-64'>
    
    <h1 className='text-center font-bold  text-lg md:text-2xl mt-4'>{d.title}</h1>
    <p className='text-center text-xl'>{d.description}</p>
    {/* <p className='text-center text-2xl'>{d.desArbic}</p> */}
    
    </div>
    
    </main>
   ))}
  </div>
  )
}

// export async function getStaticProps(){
//   const filePath = path.join(process.cwd(),"data", "db.json")
//   const dataJson = await fs.readFile(filePath)
//   const data = JSON.parse(dataJson)
//   return {
//     props: {
//       products: data.products
//     }
//   }
// }