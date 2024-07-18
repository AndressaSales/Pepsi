import Image from "next/image"
import Navbar from "@/Components/Navbar"
import Link from "next/link"

export default function PepsiZeroAcuraLima(){
    return(
        <main>
            <Navbar />
             <div className="pl-20 pt-10">
                <Link href={'/Produtos'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
            <div className="lg:flex lg:float-ledt grid grid-col-1 gap-7 mx-auto p-2 max-w-5xl mb-16 mt-10">
                <div className="items-center flex justify-center">
                    <Image
                        src="/assets/PEP-LIMA.png"
                        width={400}
                        height={300}
                        alt="pepsiZero"
                        className="lg:w-[900px]"
                    />
                </div>

                <div>
                    <h1 className="text2 font font-bold text-[#65a30d] lg:text-left text-7xl text-center lg:text-6xl pb-5">PEPSI ZERO AÇÚCAR LIMA <sup>®</sup></h1>
                    <p className="font font-mono text-left text-2xl text-center lg:text-lg">MÁXIMO SABOR, ZERO AÇÚCAR COM UM REFRESCANTE TOQUE DE LIMA</p>
                    <div className="font font-bold text-center text-[#65a30d] text-3xl p-3">INGREDIENTS</div>
                    <p className="lg:text-left text-2xl text-center text-sm font">
                        Água gaseificada, corante: E 150d, acidificantes: ácido cítrico e ácido fosfórico, aromas (incluindo aroma natural de lima com outros aromas naturais, cafeína), edulcorantes: aspartame e acessulfame K, regulador de acidez: citrato de sódio.
                        Contém uma fonte de fenilalanina.
                    </p>
                    <h1 className="lg:text-left text-[#65a30d] text-center font font-bold p-3 text-3xl">TAMANHOS</h1>

                    <div className="flex itrems-center justify-center">
                        <Image 
                            src="/assets/TApepsiLima.png"
                            width={600}
                            height={300}
                            alt="tamanhos"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="lg:text-left text-center font text-[#65a30d] font-bold p-3 text-3xl">Declaração Nutricioanal</h3>
                    <div>
                        <div>
                            <table className="borda border-2 border-[#0025ff] w-full rounded">
                                <thead>
                                    <tr>
                                        <th className="">&nbsp;</th>
                                        <th className="border-2 border-[#65a30d] border-t-transparent border-b-transparent border-r-transparent text-xs">100 ml</th>
                                        <th className="border-2 border-[#65a30d] border-t-transparent border-b-transparent border-r-transparent text-xs">200 ml</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Energia</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">	3 kJ/0,7 kcal</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">7 kJ/2 kcal (-1%*)</td>
                                    </tr>
                                    <tr className="">
                                        <td className="border-[#65a30d] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Lípidios</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0,0 g (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais saturados</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0,0 g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0,0 g (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#65a30d] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Hidratados de carbono</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0,1 g</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0,2 g (-1%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais açúcares</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">	0,0 g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0% (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#65a30d] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Proteína</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0,1g</td>
                                        <td className="border-[#65a30d] border-2 border-t-transparent border-r-transparent text-center">0,2g (-1%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-b-transparent border-r-transparent text-left pl-4">sal</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent border-b-transparent text-center">0,03g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent border-b-transparent text-center">0,07g  (1%*)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-xs p-5">
                        *DR= Dose de Referência para um adulto médio (8400 kJ / 2000 kcal).
                        As necessidades individuais podem variar dependendo da prática de exercício físico e outros fatores.
                    </p>
                    <p className="text-xs p-4">
                        250ml= dose média.
                    </p>
                </div>
            </div>
        </main>
    )
}
