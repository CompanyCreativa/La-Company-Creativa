import Link from "next/link";
import React from "react";
import IconContainer from "./iconContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-9 pb-5 px-5 relative">
      <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-20 max-w-[850px] lg:flex-row mx-auto lg:items-start lg:pt-10 lg:pb-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-white font-montserrat text-xs lg:text-sm tracking-[5px] lg:tracking-[8px] font-light text-center">
            Somos una agencia creativa
          </h1>
          <div className="relative text-line w-full flex justify-center items-center gap-2 mt-1">
            <div className="w-full h-px bg-white"></div>
            <h1 className="text-white relative font-montserrat text-sm tracking-[8px] font-light pl-2">
              con
            </h1>
            <div className="w-full h-px bg-white"></div>
          </div>
          <h1 className="text-[29px] text-companySalmon">35 años</h1>
          <h1 className="text-white font-montserrat text-sm tracking-[8px] font-bold mt-2">
            de experiencia
          </h1>
        </div>
        <div className="flex flex-col items-center gap-3 mt-5 lg:mt-0 lg:gap-[17px]">
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Cra. 48 # 20-34
          </span>
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Centro Empresarial Ciudad de Río
          </span>
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Torre 1 - Oficina 901
          </span>
          <Link href="https://wa.link/omjp5g" target="_blank">
            <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
              321 6393413
            </span>
          </Link>
          <div className="flex items-center gap-8 mt-5 mb-20">
            <Link
              href="https://co.linkedin.com/company/companycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://www.behance.net/lacompanycrea" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faBehance}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://wa.link/omjp5g" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.instagram.com/lacompanycrea/?hl=es"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.facebook.com/lacompanycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <svg
          width="45"
          height="32"
          viewBox="0 0 45 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4258 22.2968C26.4258 22.2676 26.4301 22.2395 26.4315 22.2105H24.7361C23.3238 26.5759 19.1725 29.4001 14.1228 29.4001C6.97587 29.4001 2.09718 23.8796 2.09718 15.7058C2.09718 7.53194 6.97587 1.96863 14.1228 1.96863C18.5791 1.96863 22.2326 4.2704 23.9717 8.04641H26.3598C24.5421 3.15883 19.8706 0 14.251 0C5.82011 0 0 6.41922 0 15.7058C0 24.9495 5.77736 31.369 14.0797 31.369C19.9311 31.369 24.8812 28.1408 26.6814 23.2317C26.6025 23.0957 26.5365 22.9522 26.4926 22.7958C26.4703 22.6294 26.4482 22.4633 26.4258 22.2968Z"
            fill="#FFF8EA"
          />
          <path
            d="M34.8141 9.8418C40.677 9.8418 44.9993 14.4209 44.9993 20.6261C44.9993 26.8313 40.677 31.4104 34.8141 31.4104C28.9512 31.4104 24.6289 26.8313 24.6289 20.6261C24.6289 14.4209 28.9515 9.8418 34.8141 9.8418ZM34.8141 29.6131C39.6073 29.6131 42.9882 25.8899 42.9882 20.6261C42.9882 15.3624 39.6073 11.6391 34.8141 11.6391C30.0209 11.6391 26.6403 15.3624 26.6403 20.6261C26.6403 25.8899 30.0212 29.6131 34.8141 29.6131Z"
            fill="#FFF8EA"
          />
          <path
            d="M10.9941 16.4376C10.9941 14.5662 12.44 13.3754 14.8218 13.184L18.3304 12.9074V12.5247C18.3304 10.2281 16.9695 9.569 15.3535 9.569C13.4609 9.569 12.3341 10.4622 12.3341 11.9505H11.356C11.356 9.95176 12.972 8.67578 15.375 8.67578C17.5652 8.67578 19.3091 9.73886 19.3091 12.3758V19.1379H18.5224L18.331 17.224C17.6294 18.6062 16.2045 19.3929 14.4396 19.3929C12.2486 19.3932 10.9941 18.181 10.9941 16.4376ZM18.3301 14.2684V13.7154L14.9064 13.9918C12.844 14.1619 11.972 15.1613 11.972 16.416C11.972 17.8194 13.0354 18.5213 14.5661 18.5213C16.9692 18.5213 18.3301 16.7776 18.3301 14.2684Z"
            fill="#FFF8EA"
          />
          <path
            d="M14.4375 19.4585C13.3652 19.4585 12.4706 19.1678 11.8508 18.6181C11.2471 18.0826 10.9277 17.3286 10.9277 16.438C10.9277 15.5046 11.2887 14.7072 11.9716 14.1316C12.6439 13.5652 13.6269 13.2151 14.8151 13.1199L18.264 12.8482V12.5254C18.264 11.4815 17.9751 10.7111 17.4049 10.2359C16.9257 9.83681 16.2351 9.63424 15.3519 9.63424C13.5018 9.63424 12.3974 10.5002 12.3974 11.9509V12.0158H11.2893V11.9509C11.2893 10.9547 11.6809 10.1117 12.4218 9.51344C13.1526 8.92322 14.1732 8.61133 15.3732 8.61133C16.5413 8.61133 17.5197 8.91433 18.2032 9.48762C18.9787 10.1384 19.3721 11.1102 19.3721 12.3762V19.2031H18.4617L18.2855 17.4411C17.5441 18.7262 16.1545 19.4585 14.4375 19.4585ZM15.3519 9.50455C17.3705 9.50455 18.3937 10.5209 18.3937 12.5254V12.9681L14.8254 13.2493C13.6645 13.3425 12.7067 13.682 12.0551 14.2309C11.4023 14.7809 11.0574 15.5442 11.0574 16.438C11.0574 17.2907 11.3616 18.0109 11.9366 18.5211C12.5323 19.0496 13.3971 19.3288 14.4372 19.3288C16.1852 19.3288 17.5822 18.5512 18.2706 17.1952L18.371 16.9975L18.5788 19.0734H19.2421V12.3762C19.2421 11.1504 18.8645 10.2118 18.1197 9.58718C17.46 9.03369 16.5103 8.74102 15.3732 8.74102C14.2033 8.74102 13.2108 9.04316 12.5033 9.61444C11.81 10.1742 11.4362 10.9587 11.4195 11.8861H12.2683C12.2843 11.1636 12.5684 10.5648 13.0923 10.151C13.628 9.72806 14.4094 9.50455 15.3519 9.50455ZM14.5652 18.5865C12.9001 18.5865 11.9062 17.7753 11.9062 16.4164C11.9062 15.7467 12.1535 15.1703 12.6215 14.7494C13.1362 14.2863 13.9029 14.0097 14.9003 13.9276L18.394 13.6455V14.2688C18.394 15.5404 18.0494 16.6156 17.3977 17.3782C16.722 18.1687 15.7427 18.5865 14.5652 18.5865ZM18.264 13.7864L14.9106 14.0573C13.9425 14.137 13.2014 14.4027 12.7081 14.8463C12.262 15.2475 12.0359 15.776 12.0359 16.4167C12.0359 17.0749 12.2706 17.5888 12.7334 17.9441C13.1707 18.2795 13.8039 18.4568 14.5652 18.4568C15.7034 18.4568 16.6489 18.0548 17.2988 17.2942C17.9303 16.5553 18.264 15.5092 18.264 14.2688V13.7864Z"
            fill="#FFF8EA"
          />
          <path
            d="M9.0756 21.7444H19.4338V22.829H7.89258V7.69141H9.07588V21.7444H9.0756Z"
            fill="#FFF8EA"
          />
        </svg>
      </div>
    </footer>
  );
}
