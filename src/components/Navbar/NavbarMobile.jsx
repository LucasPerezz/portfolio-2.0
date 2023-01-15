import React from 'react'

const NavbarMobile = () => {



  return (
    <div className="h-16 w-full bg-black shadow-2xl shadow-[#2675FF] rounded-t-2xl mt-6 bottom-0 flex items-center fixed z-50 md:hidden">
      <ul className="w-full flex justify-evenly items-center">
        <li>
          <a href="#presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 bi bi-house-door-fill animate-pulse`}
              fill="#2675FF"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 bi bi-house-door-fill animate-pulse"
                fill="#2675FF"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a href="#recentProyects">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 bi bi-house-door-fill animate-pulse"
                fill="#2675FF"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMobile