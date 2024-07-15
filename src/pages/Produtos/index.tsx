import Navbar from "@/Components/Navbar"
import Produtro from "@/Components/Produto"

export default function Produtos(){
    return(
        <main>
            <Navbar />
            <div>
                <h1 className="font text-white text-center py-10 font-bold text-3xl lg:text-7xl font-sans">OS NOSSOS PRODUTOS</h1>
                <Produtro />
            </div>
        </main>
    )
}