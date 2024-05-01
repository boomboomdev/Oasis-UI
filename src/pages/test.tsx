import { FC } from "react";
// components
// assets
interface Props{

}
const Test:FC<Props>=()=>{
  return (
    <>
      <footer className="w-full flex flex-col justify-center mt-12">
        <div className="container mx-auto flex flex-col sm:flex-row px-6 py-12 sm:py-24 gap-24">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold font-manrope">Others</p>
            <hr className="shrink-0 bg-divider border-none w-full h-divider"></hr>
            <a className="relative inline-flex tap-highlight-transparent outline-none no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full text-xl sm:text-2xl gap-3 items-center text-[#a1a1aa]"></a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Test