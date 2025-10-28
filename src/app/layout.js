import { GoogleTagManager } from "@next/third-parties/google";
import { Abel, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const abel = Abel({
  subsets: ["latin"],
  variable: "--font-abel",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900", "300"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${abel.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <head>
        {/* Meta Pixel Code con Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '864233115587766');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=864233115587766&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-WJ345W3" />
      </body>
    </html>
  );
}
