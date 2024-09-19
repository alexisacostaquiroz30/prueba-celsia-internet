import { useEffect, useState } from "react";
import { getAllServicios } from "../../api/Servicios.api";
import { ServiciosCard } from "./ServicioCard";

export function ListarServicios() {
    
    const [Servicios, setServicios] = useState([])


    useEffect(() => { 

        async function getServicios() {
            const res = await getAllServicios();
            setServicios(res.data);
        }

        getServicios();

    }, [])


    return (

        <><h1 className="text-2xl font-bold text-white mb-4 p-4">Lista de Servicios</h1><hr className="p-3"></hr>
        <div className="grid grid-cols-3 gap-3">
            {Servicios.map(servicio => (
                <ServiciosCard key={servicio.servicio} servicio={servicio} />
            ))}
        </div>
        </>
    )
}