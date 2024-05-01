import { FC } from "react"
// assets
import join_us from '../../src/assets/home/join_us.png';
import nft_grid_1 from '../../src/assets/home/nft_grid_1.png';
import nft_grid_2 from '../../src/assets/home/nft_grid_2.png';
import nft_grid_3 from '../../src/assets/home/nft_grid_3.png';
import nft_grid_4 from '../../src/assets/home/nft_grid_4.png';
import nft_grid_5 from '../../src/assets/home/nft_grid_5.png';
import nft_grid_6 from '../../src/assets/home/nft_grid_6.png';
import nft_1 from '../assets/home/categories/nft-1.png';
import nft_2 from '../assets/home/categories/nft-2.png';
import nft_3 from '../assets/home/categories/nft-3.png';
import nft_4 from '../assets/home/categories/nft-4.png';
import nft_5 from '../assets/home/categories/nft-5.png';
import nft_6 from '../assets/home/categories/nft-6.png';
import curve from '../assets/home/curve.png';
// components
import About from "../components/home/about";
import Featured from "../components/home/featured";
import Ongoing from "../components/home/ongoing";
import Community from "../components/home/community";
import Footer from "../components/layouts/footer";
import Card from "../components/home/card";
interface Props{

}
const IndexPage:FC<Props>=()=>{
    return (
        <>
            <div className="w-full mt-[100px] md:container mx-auto px-4 py-3 mb-24" >
                <div className="flex flex-row" >
                    <div className="basis-1/2 mt-4" >
                        <p className="text-white text-7xl leading-relaxed" >Welcome to Your</p>
                        <div className="flex">
                            <div>
                                <p className="text-white text-7xl leading-relaxed" >Gateway to&nbsp;</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-7xl leading-relaxed" style={{"background": "-webkit-linear-gradient(top, #E73583, #7C65FF, #50B4FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>NFT</p>
                                <img src={curve} className="mt-[-25px]" />
                            </div>
                        </div>
                        <p className="text-white text-7xl leading-relaxed" >Creativity</p>
                        <p className="text-white text-lg mb-4">Discover a vibrant community where artists and collectors meet to create, trade, and celebrate digital art. Whether you're here to mint your first NFT or to find unique artworks, our platform provides all the tools you need for a seamless and enriching experience</p>
                        
                        <img className=""  src={join_us}  />
                    </div>
                    <div className="basis-1/2" >
                        <div className="flex flex-col">
                            <div className="basis-1/3 flex m-4 mb-0">
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full z-10 relative"  src={nft_grid_1}  />
                                </div>
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full z-10 relative"  src={nft_grid_2}  />
                                </div>
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full z-10 relative"  src={nft_grid_3}  />
                                </div>
                            </div>
                            <div className="basis-2/3 flex m-4">
                                <div className="basis-2/3 m-4">
                                    <img className="w-full h-full z-10 relative"  src={nft_grid_4}  />
                                </div>
                                <div className="basis-1/3 flex flex-col">
                                    <div className="basis-1/2 m-4">
                                        <img className="w-full h-full z-10 relative"  src={nft_grid_5}  />
                                    </div>
                                    <div className="basis-1/2 m-4">
                                        <img className="w-full h-full z-10 relative"  src={nft_grid_6}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <div className="flex space-x-6 ml-[-65px]">
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_1} />
                    </div>
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_2} />
                    </div>
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_3} />
                    </div>
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_4} />
                    </div>
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_5} />
                    </div>
                    <div className="w-[16.2%] flex-none">
                        <Card image={nft_6} />
                    </div>
                </div>
            </div>
            <div className="w-full md:container mx-auto px-4 py-3 mb-24" >
                <div className="flex items-center flex-col relative">
                    <About />
                </div>
                <div className="flex items-center flex-col relative">
                    <Featured />
                </div>
                <div className="flex items-center flex-col relative">
                    <Ongoing />
                </div>
                <div className="flex items-center flex-col relative">
                    <Community />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default IndexPage