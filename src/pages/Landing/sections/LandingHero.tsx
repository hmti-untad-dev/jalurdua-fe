import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";

export default function LandingHero() {
  return (
    <div className="my-10 flex w-full flex-col items-center px-4 md:px-16 md:pb-4">
      <div className="svg-container relative flex w-full">
        <img className="pointer-none: md:invisible md:w-0" src="./img/Swappy.png" alt="" />
        <div className="invisible md:visible md:w-full">
          <svg className="z-10 h-auto w-full" viewBox="0 0 1284 661" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36 68.8904C16.1177 68.8904 0 85.0081 0 104.89V612.179C0 638.688 21.4903 660.179 48 660.179H928.832C955.342 660.179 976.832 638.688 976.832 612.179V586.031V547.442C976.832 520.932 998.323 499.442 1024.83 499.442H1109.23H1236C1262.51 499.442 1284 477.952 1284 451.442V88.6771C1284 80.9451 1277.73 74.6771 1270 74.6771H1207.72C1199.99 74.6771 1193.72 68.4091 1193.72 60.6771V36C1193.72 16.1177 1177.6 0 1157.72 0H373.693C353.811 0 337.693 16.1177 337.693 36V40.8904C337.693 56.3543 325.157 68.8904 309.693 68.8904H36ZM1207.72 30.3385C1207.72 47.094 1221.3 60.6771 1238.06 60.6771H1240.6C1256.84 60.6771 1270 47.5161 1270 31.2813C1270 22.32 1266.53 14.1684 1260.87 8.0946C1259.02 6.10934 1256.71 4.60064 1254.2 3.57058C1248.59 1.26898 1242.44 0 1236 0C1220.38 0 1207.72 12.6619 1207.72 28.2812V30.3385Z"
              fill="#3E3F90"
            />
            <image href="./img/heroism.png" x="41" y="80" height="464" width="832" />
            <image href="./img/gifin1.gif" x="965" y="90" height="405" width="326" />
            <image href="./img/logo-hmti.png" x="0" y="0" height="64" width="64" />
            <text x="86" y="45" className="montserrat responsive-text fill-[#3E3F90] text-4xl font-black">
              HMTI UNTAD
            </text>
            <foreignObject x="1000" y="520" width="268" height="146">
              <a href="#about">
                <button className="h-full w-auto transform transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-145">
                  <svg width="238" height="116" viewBox="0 0 268 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M236.579 31.5088C243.305 31.5088 246.571 23.8775 243.213 18.0497C239.643 11.8571 234.285 6.82637 227.842 3.66416C221.354 0.479218 213.228 4.19295 213.228 11.4211C213.228 22.5152 222.222 31.5088 233.316 31.5088H236.579ZM248 53.0922C248 47.4566 242.215 43.5088 236.579 43.5088H233.316C215.594 43.5088 201.228 29.1426 201.228 11.4211C201.228 5.78535 197.28 0 191.645 0H36C16.1178 0 0 16.1178 0 36V71.3657C0 77.4296 6.62029 81.579 12.6842 81.579H22.1228C38.1391 81.579 51.1228 94.5627 51.1228 110.579V116.754C51.1228 120.967 54.146 125.088 58.359 125.088H212C231.882 125.088 248 108.97 248 89.0877V53.0922ZM41.1228 116.754C41.1228 118.612 40.8561 120.408 40.3589 122.105C39.808 123.986 37.9598 125.088 36 125.088C23.0445 125.088 11.6874 118.244 5.3465 107.975C1.12194 101.133 4.64323 91.579 12.6842 91.579H22.1228C32.6162 91.579 41.1228 100.086 41.1228 110.579V116.754Z"
                      fill="#5154B9"
                    />
                    <path
                      d="M69.5752 91.886C64.5543 91.886 60.9293 90.636 58.7002 88.136C56.4918 85.636 55.3877 81.6568 55.3877 76.1985V70.8235H66.2627V77.6985C66.2627 78.9693 66.4502 79.9693 66.8252 80.6985C67.221 81.4068 67.8981 81.761 68.8564 81.761C69.8564 81.761 70.5439 81.4693 70.9189 80.886C71.3148 80.3027 71.5127 79.3443 71.5127 78.011C71.5127 76.3235 71.346 74.9172 71.0127 73.7922C70.6793 72.6464 70.096 71.5631 69.2627 70.5422C68.4502 69.5006 67.3148 68.2922 65.8564 66.9172L60.9189 62.2297C57.2314 58.7506 55.3877 54.7714 55.3877 50.2922C55.3877 45.6047 56.471 42.0318 58.6377 39.5735C60.8252 37.1152 63.9814 35.886 68.1064 35.886C73.1481 35.886 76.721 37.2297 78.8252 39.9172C80.9502 42.6047 82.0127 46.6881 82.0127 52.1672H70.8252V48.386C70.8252 47.636 70.6064 47.0527 70.1689 46.636C69.7523 46.2193 69.1793 46.011 68.4502 46.011C67.5752 46.011 66.9293 46.261 66.5127 46.761C66.1168 47.2402 65.9189 47.8652 65.9189 48.636C65.9189 49.4068 66.1273 50.2402 66.5439 51.136C66.9606 52.0318 67.7835 53.0631 69.0127 54.2297L75.3564 60.3235C76.6273 61.5318 77.7939 62.8131 78.8564 64.1672C79.9189 65.5006 80.7731 67.0631 81.4189 68.8547C82.0648 70.6256 82.3877 72.7922 82.3877 75.3547C82.3877 80.5214 81.4293 84.5735 79.5127 87.511C77.6168 90.4277 74.3043 91.886 69.5752 91.886ZM90.7939 91.386V46.9485H84.2627V36.386H108.325V46.9485H101.794V91.386H90.7939ZM109.075 91.386L114.388 36.386H133.044L138.263 91.386H127.856L127.075 82.511H120.45L119.763 91.386H109.075ZM121.231 73.7297H126.231L123.825 45.761H123.325L121.231 73.7297ZM141.638 91.386V36.386H158.513C161.325 36.386 163.45 37.0318 164.888 38.3235C166.325 39.5943 167.284 41.386 167.763 43.6985C168.263 45.9902 168.513 48.6881 168.513 51.7922C168.513 54.7922 168.127 57.1881 167.356 58.9797C166.606 60.7714 165.179 62.011 163.075 62.6985C164.804 63.0527 166.013 63.9172 166.7 65.2922C167.409 66.6464 167.763 68.4068 167.763 70.5735V91.386H156.919V69.8547C156.919 68.2506 156.586 67.261 155.919 66.886C155.273 66.4902 154.221 66.2922 152.763 66.2922V91.386H141.638ZM152.825 56.761H155.481C157.002 56.761 157.763 55.1047 157.763 51.7922C157.763 49.6464 157.596 48.2402 157.263 47.5735C156.929 46.9068 156.304 46.5735 155.388 46.5735H152.825V56.761ZM176.856 91.386V46.9485H170.325V36.386H194.388V46.9485H187.856V91.386H176.856Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </button>
              </a>
            </foreignObject>

            <foreignObject x="280" y="580" width="580" height="100">
              <div className="flex items-center gap-5">
                <p className="text-2xl font-bold text-[#f2f2f2] select-none">FOLLOW US!</p>
                <a
                  href="https://www.instagram.com/hmtiuntad/"
                  target="_blank"
                  className="flex scale-90 transform items-center justify-center rounded-full bg-[#f2f2f2] p-2.5 transition-all duration-200 ease-in-out hover:scale-100 hover:brightness-145"
                >
                  <InstagramLogo size={24} color="#3E3F90" weight="fill" />
                </a>
                <a
                  href="https://www.tiktok.com/@hmtiuntad"
                  target="_blank"
                  className="flex scale-90 transform items-center justify-center rounded-full bg-[#f2f2f2] p-2.5 transition-all duration-200 ease-in-out hover:scale-100 hover:brightness-145"
                >
                  <TiktokLogo size={24} color="#3E3F90" weight="fill" />
                </a>
                <a
                  href="https://www.facebook.com/hmti.untad/?locale=id_ID"
                  target="_blank"
                  className="flex scale-90 transform items-center justify-center rounded-full bg-[#f2f2f2] p-2.5 transition-all duration-200 ease-in-out hover:scale-100 hover:brightness-145"
                >
                  <FacebookLogo size={24} color="#3E3F90" weight="fill" />
                </a>
                <a
                  href="https://www.youtube.com/@hmtiuntad8514"
                  target="_blank"
                  className="flex scale-90 transform items-center justify-center rounded-full bg-[#f2f2f2] p-2.5 transition-all duration-200 ease-in-out hover:scale-100 hover:brightness-145"
                >
                  <YoutubeLogo size={24} color="#3E3F90" weight="fill" />
                </a>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
