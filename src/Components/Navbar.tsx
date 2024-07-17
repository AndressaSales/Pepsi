import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){

    const [menu, setMenu] = useState<boolean>(false)

    const toogleMenu = () =>{
        setMenu(!menu)
    }

    return(
        <main>
            <div 
            id="navbar" 
            className="flex flex-wrap py-7 justify-between items-center text-white border-2 border-white border-t-transparent border-l-transparent border-r-transparent"
            >
                <div className="flex items-center flex-shrink-0 text-white p-6">
                    <Link href={'/'}>
                            <Image 
                                src="/assets/logo.png" 
                                alt="home"
                                width={80}
                                height={70}
                                className="img"
                            />
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button onClick={toogleMenu} className="bg-[#0025ff] p-2 rounded-full mr-6">
                        {menu ? (
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                         </svg>
                        ): (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="sm:hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-center flex  lg:flex-row">
                        <Link className="hover:text-[#0025ff]  lg:ml-80 lg:mr-32 pt-4" href={'/Produtos'}>PRODUTOS</Link>
                        <Link className="hover:text-[#0025ff] lg:mr-32 lg:pt-4" href={'/Passatempo'}>PASSATEMPOS</Link>
                        <Link className="hover:text-[#0025ff] lg:pt-4" href={'/Contatos'}>CONTATOS</Link>
                    </div>
                </div>
            </div>
            {menu && (
                    <div className="lg:hidden w-full block flex-grow ">
                       <div className="text-center flex flex-col bg-[0,0,0,.9]">
                           <Link className="hover:text-[#0025ff] text-2xl sm:p-4" href={'/Produtos'}>PRODUTOS</Link>
                           <Link className="hover:text-[#0025ff] text-2xl  sm:pb-4" href={'/Passatempo'}>PASSATEMPOS</Link>
                           <Link className="hover:text-[#0025ff] text-2xl " href={'/Contatos'}>CONTATOS</Link>
                       </div>
                   </div>
            )}
        </main>
    )
}
