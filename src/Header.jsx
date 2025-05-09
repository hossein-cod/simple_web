import React from "react";
import logo from "./images/logo.png";

function Header() {
    return (



    <header className="bg-amber-50 flex items-center justify-between rounded-[2rem] px-2 mx-4 flex-wrap py-2 mt-4 ">
             
        

            {/* logo */}
            <a href="" className='w-16  '   >
                <img src={logo} alt="logo" />
            </a>
            {/* nav bar */}
            

            <nav>
                <ul className="flex gap-8  ">
                    <li>
                        <a href="#" className="hover:text-blue-400" >
                            <i className="fas fa-home ml-1.5  "></i>
                            صفحه اصلی
                        </a>
                    </li>
                    <li>
                        <a href="#"className="hover:text-blue-400">
                            <i className="fas fa-list ml-1.5"></i>
                            محصولات
                        </a>
                    </li>
                    <li>
                        <a href="#"className="hover:text-blue-400 ">
                            <i className="fas fa-blog ml-1.5"></i>
                            وب لاگ
                        </a>
                    </li>
                </ul>
            </nav>


            {/* contact link */}
            <a href="#" className='bg-blue-800 color text-amber-300  p-3   rounded-2xl hover:bg-blue-600 hover:text-amber-200 ' >
                ارتباط با ما
                <i className="fas fa-phone mr-2 "></i>
            </a>
        </header>
    );
}

export default Header;
