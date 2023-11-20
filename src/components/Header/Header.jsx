import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import './styles.css'

const Header = () => {
  // State to manage modal visibility
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const linkedin = () => {
    window.open('https://www.linkedin.com/in/nnasr', '_blank', 'noopener,noreferrer');
  };

  const github = () => {
    window.open('https://github.com/NaderNasr', '_blank', 'noopener,noreferrer');
  };

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <>
      <nav className="sticky top-0 z-[1000] pb-2 pt-2 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-14" alt="Logo" />
          </div>
          <button onClick={toggleNav} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isNavCollapsed ? 'hidden' : ''} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 md:rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <div className="flex flex-col md:p-0 text-white  md:bg-transparent md:text-blue-700 md:dark:bg-transparent" aria-current="page">
                  <button type="button" onClick={github} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium md:rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                    </svg>
                    Github
                  </button>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:p-0 text-white md:bg-transparent md:text-blue-700" aria-current="page">
                  <button type="button" onClick={linkedin} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium md:rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                    <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg"
                      width="26" height="26" viewBox="0 0 192 192">
                      {
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                          <path d="M0,192v-192h192v192z" fill="none"></path>
                          <g fill="#ffffff"><g id="surface1">
                            <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                          </g>
                          </g>
                        </g>
                      }
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header