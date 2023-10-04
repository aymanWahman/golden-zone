import Image from "next/image";

export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 p-5 mx-auto rounded-xl items-center text-center mt-32">

        <div className=" bg-yellow-600 rounded-xl">
          <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/image/slahSh.png"
            alt="Logo"
            width={360}
            height={130}
            priority
          />
          <h2 className="p-3 font-bold ">المهندس/ صلاح شحاتة</h2>
        </div>


        <div className="col-span-2 w-full py-16 rounded-xl space-y-4 border-2 border-yellow-600">
        
          <h2 className="text-2xl md:text-6xl font-bold mb-9 text-yellow-600">Golden Zone</h2>
          <p className="text-xl md:text-2xl">أكبر سوق تجاري بمحافظة بورسعيد</p>
          <p className="text-xl md:text-2xl">مجمع حمامات سباحة عالمي</p>
          <p className="text-xl md:text-2xl">أكبر قاعة أفراح ومؤتمرات</p>
          <p className="text-xl md:text-2xl">حضانة تعليمية ترفيهية</p>
          <p className="text-xl md:text-2xl">أحدث جيم رجالي وحريمي</p>
        </div>

      </div>

    </>
  );
};

export default Page;
