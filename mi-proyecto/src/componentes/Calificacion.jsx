import Entradas from "./Navegacion";
import foto from "../assets/QR.png"
import Footer from "./Footer";

const Calificacion =()=>{

    return(
        <>
        <Entradas/>
        <div className="w-5/6 mx-auto h-3/6">
        <img src={foto} alt="" className="h-[700px] mx-auto" />
        </div>
        <Footer/>
        </>
    )
}
export default Calificacion;