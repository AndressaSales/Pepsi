import Image from "next/image";
import Link from "next/link";

export default function Banner(){
    return(
        <main>
           <div className="w-full h-screen grid grid-col-1 lg:flex lg:float-left">
                <div className="items-center flex justify-center md:p-20">
                    <Image 
                        src="/assets/logo.png"
                        alt="banner"
                        width={400}
                        height={200}
                        className="lg:w-[700px] img"
                    />
                </div>
                <div>
                    <div className="text-6xl lg:pt-40 text-[#84cc16] sm:pb-10 sm:text-center font font-bold text2">Venha conhecer nossos novos sabores! </div>
                    <div className="text-2xl lg:pt-20 font sm:text-center"> 
                        Sabia que a <mark className="bg-transparent text-white underline decoration-[#84cc16]">Pepsi</mark> foi estudar na universidade? Sim, e agora ela é uma <mark className="bg-transparent text-white underline decoration-[#84cc16]">'Doutoranda'</mark> em refrescar pessoas! Experimente e sinta a diferença. 
                        Seja no calor ou no frio, a <mark className="bg-transparent text-white underline decoration-[#84cc16]">Pepsi</mark> está aqui para refrescar você!
                        <br />
                        <div className="pt-20 justify-center items-center flex">
                            <Link 
                                href={'/Produtos'}
                                className="bg-gradient-to-r from-sky-500 to-blue-500 p-4 rounded-lg sm:text-3xl"
                            >Saiba Mais!</Link>
                        </div>
                    </div>
                </div>
    
           </div>
        </main>
    )
}