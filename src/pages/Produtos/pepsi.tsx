import Image from "next/image"
import Navbar from "@/Components/Navbar"

export default function Pepsi(){
    return(
            <main>
                <Navbar />
                <div className="lg:flex lg:float-ledt grid grid-col-1 gap-7 mx-auto p-2 max-w-5xl mb-16 mt-10">
                    <div className="items-center flex justify-center">
                        <Image
                            src="/assets/PEP-REGULAR-.png"
                            width={400}
                            height={300}
                            alt="pepsiZero"
                            className="lg:w-[900px]"
                        />
                    </div>

                    <div>
                        <h1 className="font text3 font-bold text-[#0891b2] lg:text-left text-7xl text-center lg:text-6xl pb-5">PEPSI<sup>®</sup></h1>
                        <p className="font font-mono text-left text-2xl text-center lg:text-lg">SABOR ORIGINAL</p>
                        <div className="font font-bold text-center text-[#0891b2] text-3xl p-3">INGREDIENTS</div>
                        <p className="lg:text-left text-center text-2xl text-sm font">
                            Água gaseificada, açúcar, corante: E 150d, aromas (contém cafeína), acidificante: ácido fosfórico, edulcorantes (acessulfame K, sucralose). Não contém alérgenos que devem ser declarados.
                        </p>
                        <h1 className="lg:text-left text-[#0891b2] text-center font font-bold p-3 text-3xl">TAMANHOS</h1>

                        <div className="flex itrems-center justify-center">
                            <Image 
                                src="/assets/tamanho.png"
                                width={600}
                                height={300}
                                alt="tamanhos"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="lg:text-left font text-[#0891b2] text-center font-bold p-3 text-3xl">Declaração Nutricioanal</h3>
                        <div>
                            <div>
                                <table className="borda border-2 border-[#0025ff] w-full rounded">
                                    <thead>
                                        <tr>
                                            <th className="">&nbsp;</th>
                                            <th className="border-[#0891b2] border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">100 ml</th>
                                            <th className="border-[#0891b2] border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">200 ml</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Energia</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">78KJ/18kcal</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">196KJ/46kcal (2%*)</td>
                                        </tr>
                                        <tr className="">
                                            <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Lípidios</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g (0%*)</td>
                                        </tr>
                                        <tr>
                                            <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais saturados</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">4,6g</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">12g (4%*)</td>
                                        </tr>
                                        <tr>
                                            <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Hidratados de carbono</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">4,6g</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">11g (13%*)</td>
                                        </tr>
                                        <tr>
                                            <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais açúcares</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0 g</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0% (0%*)</td>
                                        </tr>
                                        <tr>
                                            <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Proteína</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                            <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g (0%*)</td>
                                        </tr>
                                        <tr>
                                            <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">sal</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                            <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">	0,01g (-1%*)</td>
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