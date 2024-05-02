import { FC, ReactNode } from "react"
// assets
interface Props {
  children: ReactNode;
  [key: string]: any;
  footer?: boolean;
}
const AWrapper:FC<Props>=(props)=>{
  return (
    <>
      <a className={`relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity ${props.footer ? "gap-3 w-full text-[#A1A1AA]" : ""}`} {...props}>
        {props.children}
      </a>
    </>
  )
}
export default AWrapper