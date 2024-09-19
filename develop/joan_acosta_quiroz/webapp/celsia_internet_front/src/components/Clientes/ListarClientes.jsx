import { useEffect, useState } from "react";
import { getAllClientes } from "../../api/Clientes.api";
import { ClientesCard } from "./ClientesCard";

export function ListarClientes() {
    
    const [clientes, setClientes] = useState([])


    useEffect(() => { 

        async function getClientes() {
            const res = await getAllClientes();
            setClientes(res.data);
        }

        getClientes();

    }, [])


    return (

        <><h1 className="text-2xl font-bold text-white mb-4 p-4">Lista de Clientes</h1><hr className="p-3"></hr>
        <div className="grid grid-cols-3 gap-3">
            {clientes.map(cliente => (
                <ClientesCard key={cliente.identificacion} cliente={cliente} />
            ))}
        </div></>
    )
}