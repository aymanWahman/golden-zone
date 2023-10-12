'use client'
import Image from 'next/image'
import data from '../components/data';
import datarooms from '../components/datarooms';
import Slideshow from '../components/Slideshow';



export default function Arbic() {


  return (
  <div className='mt-36 '>

     <div className=' mx-5'>
  <h1 className='text-center font-bold mt-5 text-2xl'>مرحبا بكم في منتجعنا</h1>
  <p className='text-center mt-5'>في منتجعنا، نحن ملتزمون بتزويد ضيوفنا بخدمة استثنائية وتجربة لا تنسى</p>
  <p className='text-center'>تتميز غرف الضيوف الفسيحة لدينا بوسائل الراحة الحديثة بما في ذلك تكييف الهواء وخدمة الواي فاي المجانية وأجهزة تلفزيون بشاشات ذكية وثلاجات صغيرة</p>
  <p className='text-center'>يتميز منتجعنا أيضًا بمجموعة متنوعة من المرافق الموجودة في الموقع مثل مركز للياقة البدنية ومنتجع صحي ومسبح خارجي ومطاعم وقاعات للمناسبات</p>
  </div>
  <Slideshow/>
    
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-yellow-700'>الغرف</h2>

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
    
    <h1 className='text-center font-bold text-lg md:text-2xl mt-4'>{d.titleA}</h1>
    {/* <p className='text-center text-xl'>{d.description}</p> */}
    <p className='text-center text-lg md:text-2xl'>{d.desArbic}</p>
    
    </div>
    
    </main>
   ))}


  
<h2 className='text-center font-bold text-2xl md:text-4xl mt-5 text-yellow-700'>حمامات السباحة</h2>
  
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
    
    <h1 className='text-center font-bold text-xl md:text-2xl mt-4'>{d.titleA}</h1>
    {/* <p className='text-center text-xl'>{d.description}</p> */}
    <p className='text-center text-lg md:text-2xl'>{d.desArbic}</p>
    
    </div>
    
    </main>
   ))}
  </div>
  )
}

