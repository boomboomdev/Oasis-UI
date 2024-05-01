import { FC } from "react";
import styled from "styled-components";
interface Props {
  image: string;
  title: string;
  description: string;
  active?: boolean;
}

const StyledDiv = styled.div`
  height: 181px;
  width: 100%;
  border-radius: 0.25rem;
  display: flex;
  padding: 0.75rem;
  position: relative;
  &::before {
    content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.5rem; 
  padding: 2px; 
  background:linear-gradient(45deg,red,blue); 
  -webkit-mask: 
     -webkit-linear-gradient(left, #E73583, #7C65FF, #50B4FF) content-box, 
     -webkit-linear-gradient(left, #E73583, #7C65FF, #50B4FF);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
  }
`;

const Card:FC<Props>=(props)=>{
    return (
        <>
          {
            props.active ? (
              <StyledDiv>
                <div className="flex-none mr-4 ml-3 mt-5">
                  <img className=""  src={props.image}  />
                </div>
                <div className="flex-auto">
                    <p className="text-3xl" style={{"background": "-webkit-linear-gradient(left, #E73583, #7C65FF, #50B4FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>{props.title}</p>
                  <p className="text-white text-lg">{props.description}</p>
                </div>
              </StyledDiv>
            ) : (
              <div className="h-[181px] w-full border-2 border-[#848383] rounded-lg flex p-3">
                <div className="flex-none mr-4 ml-3 mt-5">
                  <img className=""  src={props.image}  />
                </div>
                <div className="flex-auto">
                  <p className="text-[#BCBBBB] text-3xl">{props.title}</p>
                  <p className="text-white text-lg">{props.description}</p>
                </div>
              </div>
            )
          }
        </>
    )
}
export default Card