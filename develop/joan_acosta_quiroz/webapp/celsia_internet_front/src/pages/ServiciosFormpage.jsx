import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getServicio, crearServicio, eliminarServicio, actualizarServicio } from "../api/Servicios.api";
import { getAllClientes } from "../api/Clientes.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ServiciosFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();
    const [clientes, setClientes] = useState([]);

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await actualizarServicio(params.id, data);
            toast.success('Servicio Actualizado', {
                position: 'bottom-right'
            })
        } else {
            await crearServicio(data);
            toast.success('Servicio Creado', {
                position: 'bottom-right'
            })
        }
        navigate("/serviciosPage");
    })

    useEffect(() => {
        async function cargarServicio() {
            if (params.id) {
                const { data } = await getServicio(params.id);
                setValue('identificacionCliente', data.identificacionCliente)
                setValue('servicio', data.servicio)
                setValue('fechaInicio', data.fechaInicio)
                setValue('ultimaFacturacion', data.ultimaFacturacion)
                setValue('ultimoPago', data.ultimoPago)
            }
        }

        async function cargarClientes() {
            const { data } = await getAllClientes();
            setClientes(data);
        }

        cargarServicio();
        cargarClientes();
    }, [])

    return (
        <><h1 className="text-2xl font-bold text-white mb-4 p-4">Crear Servicio</h1><hr className="p-3"></hr>
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                {/* Campo de Cliente */}
                <div className="mb-3">
                    <label htmlFor="identificacionCliente" className="block text-sm font-medium text-gray-300 mb-1">
                        Cliente
                    </label>
                    <select
                        id="identificacionCliente"
                        name="identificacionCliente"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("identificacionCliente", {
                            required: true,
                            validate: value => value !== ""
                        })}
                    >
                        <option value="">Seleccione un cliente</option>
                        {clientes.map(cliente => (
                            <option key={cliente.identificacion} value={cliente.identificacion}>
                                {cliente.nombres} {cliente.apellidos}
                            </option>
                        ))}
                    </select>
                    {errors.identificacionCliente && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">Debe seleccionar un cliente</span>}
                </div>

                {/* Campo de Servicio */}
                <div className="mb-3">
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-300 mb-1">
                        Servicio
                    </label>
                    <select
                        id="servicio"
                        name="servicio"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("servicio", { required: true })}
                    >
                        <option value="1">Internet 200 MB</option>
                        <option value="2">Internet 400 MB</option>
                        <option value="3">Internet 600 MB</option>
                        <option value="4">Directv Go</option>
                        <option value="5">Paramount+</option>
                        <option value="6">Win+</option>
                    </select>
                    {errors.servicio && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">Debe seleccionar un servicio</span>}
                </div>

                {/* Campo de Fecha de Inicio */}
                <div className="mb-3">
                    <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-300 mb-1">
                        Fecha de Inicio
                    </label>
                    <input
                        type="date"
                        id="fechaInicio"
                        {...register("fechaInicio", {
                            required: true,
                            validate: value => !isNaN(new Date(value).getTime())
                        })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full" />
                    {errors.fechaInicio && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">Debe ingresar una fecha válida</span>}
                </div>

                {/* Campo de Última Facturación */}
                <div className="mb-3">
                    <label htmlFor="ultimaFacturacion" className="block text-sm font-medium text-gray-300 mb-1">
                        Última Facturación
                    </label>
                    <input
                        type="date"
                        id="ultimaFacturacion"
                        {...register("ultimaFacturacion", {
                            required: true,
                            validate: value => !isNaN(new Date(value).getTime())
                        })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full" />
                    {errors.ultimaFacturacion && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">Debe ingresar una fecha válida</span>}
                </div>

                {/* Campo de Último Pago */}
                <div className="mb-3">
                    <label htmlFor="ultimoPago" className="block text-sm font-medium text-gray-300 mb-1">
                        Último Pago
                    </label>
                    <input
                        type="text"
                        id="ultimoPago"
                        placeholder="Ultimo Pago"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("ultimoPago", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+(\.[0-9]{1,2})?$/, // Validación numérica con dos decimales opcionales
                            }
                        })} />
                    {errors.ultimoPago && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">Debe ingresar un valor numérico válido</span>}
                </div>

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
            </form>


            {params.id && (
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg block w-full mt-3"
                        onClick={async () => {
                            const validar = window.confirm("¿Está seguro?");
                            if (validar) {
                                await eliminarServicio(params.id);
                                toast.success('Servicio Eliminado', {
                                    position: 'bottom-right'
                                });
                                navigate("/serviciosPage");
                            }
                        } }> Eliminar </button>
                </div>
            )}
        </div><br></br></>
    )
}