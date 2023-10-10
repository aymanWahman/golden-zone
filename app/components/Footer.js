import Link from 'next/link';

const Footer = () => {
  return (
    <div className='justify-center bg-transparent rounded-t-xl border-2 border-yellow-600 shadow-2xl w-full'>
    <div className='flex gap-x-2 md:gap-x-6 text-sm md:text-xl p-5 justify-center  '>
      
            {/* <div className=" flex gap-2 md:gap-4 md:m-7 justify-center items-center text-xs md:text-xl font-bold border-2 border-yellow-600 rounded-xl  py-5 mb-4 mx-auto"> */}
        <Link className="text-blue-800 font-bold mr-2 md:mr-20 cursor-pointer" href="https://www.facebook.com/goldenzoneportsaid/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">Facebook</Link>
        <p>01200871113</p>
        <p>01200871115</p>
        <p className="text-blue-800 font-bold">للإستعلام</p>  

    </div>
    <div><p className='text-xs text-center text-gray-300'>Designed and developed by Ayman Aly</p></div>
    </div>
  );
}

export default Footer;
