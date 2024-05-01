import { FC } from "react"
// components
// assets
interface Props{
}
const Transaction:FC<Props>=()=>{
  return (
    <>
      <div className="mt-8 mb-12">
        <p className="text-lg text-white mb-2">Transaction & Payout Details</p>

        <div className="border border-[#848383] rounded-md overflow-hidden">
          <table className="border-collapse w-full text-white">
            <tbody>
              <tr className="text-[#E73583]">
                <td className="p-4 border-b-2 border-[#848383]">#</td>
                <td className="p-4 border-b-2 border-[#848383]">Transaction ID</td>
                <td className="p-4 border-b-2 border-[#848383]">Wallet Address</td>
                <td className="p-4 border-b-2 border-[#848383]">Amount</td>
                <td className="p-4 border-b-2 border-[#848383]">Status</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">Date</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#22A800]">Claimed</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#E38124]">Pending</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#FF2E00]">Failed</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#22A800]">Claimed</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#E38124]">Pending</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#FF2E00]">Failed</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#22A800]">Claimed</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
              <tr>
                <td className="p-4 border-b-2 border-[#848383]">1</td>
                <td className="p-4 border-b-2 border-[#848383]">34763565</td>
                <td className="p-4 border-b-2 border-[#848383]">BCX894.....48HFKSG</td>
                <td className="p-4 border-b-2 border-[#848383]">$0.0345</td>
                <td className="p-4 border-b-2 border-[#848383] text-[#E38124]">Pending</td>
                <td className="p-4 border-b-2 border-[#848383] text-right">23 OCT 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Transaction