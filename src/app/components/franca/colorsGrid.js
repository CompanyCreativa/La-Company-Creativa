import ColorContainer from "./colorContainer";

export default function ColorsGrid() {
  return (
    <div className="grid grid-cols-4">
      <ColorContainer bgColor={"bg-[#009339]"} textColor={"text-white"}>
        <span className="font-medium text-base lg:text-[27px]">#009339</span>
        <span className="font-medium text-[20px] hidden lg:block">
          C:100 :0 Y:61 K:42
        </span>
        <span className="font-medium text-[20px] hidden lg:block">
          R:0 G:147 B:57
        </span>
      </ColorContainer>
      <ColorContainer bgColor={"bg-[#C2D952]"} textColor={"text-[#009339]"}>
        <span className="font-medium text-base lg:text-[27px]">#009339</span>
        <span className="font-medium text-[20px] hidden lg:block">
          C:100 :0 Y:61 K:42
        </span>
        <span className="font-medium text-[20px] hidden lg:block">
          R:0 G:147 B:57
        </span>
      </ColorContainer>
      <ColorContainer bgColor={"bg-[#DDE078]"} textColor={"text-[#009339]"}>
        <span className="font-medium text-base lg:text-[27px]">#009339</span>
        <span className="font-medium text-[20px] hidden lg:block">
          C:100 :0 Y:61 K:42
        </span>
        <span className="font-medium text-[20px] hidden lg:block">
          R:0 G:147 B:57
        </span>
      </ColorContainer>
      <ColorContainer bgColor={"bg-[#E8E6D2]"} textColor={"text-[#009339]"}>
        <span className="font-medium text-base lg:text-[27px]">#009339</span>
        <span className="font-medium text-[20px] hidden lg:block">
          C:100 :0 Y:61 K:42
        </span>
        <span className="font-medium text-[20px] hidden lg:block">
          R:0 G:147 B:57
        </span>
      </ColorContainer>
    </div>
  );
}
