
import { useNavigate } from "react-router-dom";

export function ClientesCard({ cliente }) {

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate('/cliente/'+cliente.identificacion)
            }}
        >
            <div>
                <h1 className="font-bold uppercase p-3">{cliente.nombres} {cliente.apellidos}</h1>
                <hr className="font-bold uppercase p-3"></hr>
                <p className="text-slate-400" ><strong>Identificación: </strong> {cliente.tipoIdentificacion}  - {cliente.identificacion}</p>
                <p className="text-slate-400" ><strong>Fecha Nacimiento:</strong> {cliente.fechaNacimiento}</p>
                <p className="text-slate-400" ><strong>Número de Celular:</strong> {cliente.numeroCelular}</p>
                <p className="text-slate-400" ><strong>Correo:</strong> {cliente.correoElectronico}</p>
            </div>
        </div>
    )
}

