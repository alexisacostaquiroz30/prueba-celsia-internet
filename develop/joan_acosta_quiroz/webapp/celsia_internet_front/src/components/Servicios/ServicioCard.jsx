
import { useNavigate } from "react-router-dom";

export function ServiciosCard({ servicio }) {

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/servicio/'+servicio.id)
            }}
        >
            <div>
                <h1 className="font-bold uppercase p-3">{servicio.nombre_cliente} {servicio.apellidos_cliente}</h1>
                <hr className="font-bold uppercase p-3"></hr>
                <p className="text-slate-400" ><strong>Servicio:</strong> {servicio.servicio}</p>
                <p className="text-slate-400" ><strong>Fecha inicio:</strong> {servicio.fechaInicio}</p>
                <p className="text-slate-400" ><strong>Ult. Facturación:</strong> {servicio.ultimaFacturacion}</p>
                <p className="text-slate-400" ><strong>ult. Pago:</strong> {servicio.ultimoPago}</p>
            </div>
        </div>
    )
}

