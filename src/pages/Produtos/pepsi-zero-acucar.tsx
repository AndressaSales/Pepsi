import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function PepsiZeroAcura(){
    return(
        <main>
            <Navbar />
            <div className="lg:flex lg:float-ledt grid grid-col-1 gap-7 mx-auto p-2 max-w-5xl mb-16 mt-10">
                <div className="items-center flex justify-center">
                    <Image
                        src="/assets/PEP-ZERO.png"
                        width={400}
                        height={300}
                        alt="pepsiZero"
                        className="lg:w-[900px]"
                    />
                </div>

                <div>
                    <h1 className="font text1 font-bold text-7xl text-center lg:text-left lg:text-6xl pb-5">PEPSI ZERO AÇÚCAR<sup>®</sup></h1>
                    <p className="font font-mono text-center text-2xl lg:text-left lg:text-lg">MÁXIMO SABOR, ZERO AÇÚCAR</p>
                    <div className="font font-bold text-center text-3xl p-3">INGREDIENTS</div>
                    <p className="lg:text-left text-center text-2xl text-sm font">Água gaseificada, corante: E 150d, reguladores de acidez: ácido fosfórico, citrato de sódio e ácido cítrico, edulcorantes: aspartame e acessulfame K, aromas (cafeína, extratos e aromas naturais).
                    Contém uma fonte de fenilalanina.</p>
                    <h1 className="lg:text-left font text-center font-bold p-3 text-3xl">TAMANHOS</h1>

                    <div className="flex items-center justify-center pl-10">
                        <Image 
                            src="/assets/tamanho.png"
                            width={300}
                            height={300}
                            alt="tamanhos"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="lg:text-left font text-center font-bold p-3 text-3xl">Declaração Nutricioanal</h3>
                    <div>
                        <div>
                            <table className="borda border-2 border-white w-full rounded">
                                <thead>
                                    <tr >
                                        <th className="">&nbsp;</th>
                                        <th className="border-white border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">100 ml</th>
                                        <th className="border-white border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">200 ml</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Energia</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">2kj/0.5kcal</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">5kj/1kcal</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Lípidios</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais saturados</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Hidratados de carbono</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center ">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center ">0g (-1%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais açúcares</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0%</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0% (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Proteína</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (-1%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">sal</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0,01g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0,03g</td>
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