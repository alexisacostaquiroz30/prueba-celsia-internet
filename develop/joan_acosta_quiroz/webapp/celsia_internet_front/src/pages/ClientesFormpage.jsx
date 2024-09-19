import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getCliente, crearCliente, eliminarCliente, actualizarCliente } from "../api/Clientes.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ClientesFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        try {
            if (params.id) {
                await actualizarCliente(params.id, data);
                toast.success('Cliente Actualizado', {
                    position: 'bottom-right'
                });
            } else {
                await crearCliente(data);
                toast.success('Cliente Creado', {
                    position: 'bottom-right'
                });
            }
            navigate("/");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.identificacion) {
                toast.error(`Error: El número de cedula ya esta registrado`, {
                    position: 'bottom-right'
                });
            } else {
                toast.error('Error al procesar la solicitud', {
                    position: 'bottom-right'
                });
            }
        }
    });
    

    useEffect(() => {

        async function cargarCliente() {
            if (params.id) {
                const { data } = await getCliente(params.id);
                setValue('identificacion', data.identificacion)
                setValue('nombres', data.nombres)
                setValue('apellidos', data.apellidos)
                setValue('tipoIdentificacion', data.tipoIdentificacion)
                setValue('fechaNacimiento', data.fechaNacimiento)
                setValue('numeroCelular', data.numeroCelular)
                setValue('correoElectronico', data.correoElectronico)
            }
        }

        cargarCliente();

    }, [])


    return (
        <><h1 className="text-2xl font-bold text-white mb-4 p-4">Crear Cliente</h1><hr className="p-3"></hr><div className="max-w-xl mx-auto">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="tipoIdentificacion" className="block text-sm font-medium text-gray-300 mb-1">
                        Tipo de Identificación
                    </label>
                    <select
                        id="tipoIdentificacion"
                        name="tipoIdentificacion"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("tipoIdentificacion", {
                            required: "El campo Tipo de Identificación es requerido"
                        })}
                    >
                        <option value="">Seleccione tipo de identificación</option>
                        <option value="CC">Cédula</option>
                        <option value="TI">Tarjeta de identidad</option>
                        <option value="CE">Cédula Extranjería</option>
                        <option value="RC">Registro Civil</option>
                    </select>
                    {errors.tipoIdentificacion && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.tipoIdentificacion.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="identificacion" className="block text-sm font-medium text-gray-300 mb-1">
                        Número de ID
                    </label>
                    <input
                        id="identificacion"
                        type="text"
                        placeholder="Número de ID"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("identificacion", {
                            required: "El campo Número de ID es requerido",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "El Número de ID debe contener solo números"
                            }
                        })} />
                    {errors.identificacion && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.identificacion.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-300 mb-1">
                        Nombres
                    </label>
                    <input
                        id="nombres"
                        type="text"
                        placeholder="Nombres"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("nombres", {
                            required: "El campo Nombres es requerido",
                            pattern: {
                                value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,
                                message: "Los Nombres deben contener solo letras y espacios"
                            }
                        })} />
                    {errors.nombres && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.nombres.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="apellidos" className="block text-sm font-medium text-gray-300 mb-1">
                        Apellidos
                    </label>
                    <input
                        id="apellidos"
                        type="text"
                        placeholder="Apellidos"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("apellidos", {
                            required: "El campo Apellidos es requerido",
                            pattern: {
                                value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,
                                message: "Los Apellidos deben contener solo letras y espacios"
                            }
                        })} />
                    {errors.apellidos && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.apellidos.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-300 mb-1">
                        Fecha de Nacimiento
                    </label>
                    <input
                        id="fechaNacimiento"
                        type="date"
                        placeholder="Fecha de Nacimiento"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("fechaNacimiento", {
                            required: "El campo Fecha de Nacimiento es requerido",
                            validate: (value) => {
                                const date = new Date(value);
                                const now = new Date();
                                return date < now || "La fecha de nacimiento no puede ser futura";
                            }
                        })} />
                    {errors.fechaNacimiento && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.fechaNacimiento.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="numeroCelular" className="block text-sm font-medium text-gray-300 mb-1">
                        Número de Celular
                    </label>
                    <input
                        id="numeroCelular"
                        type="tel"
                        placeholder="Número de Celular"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("numeroCelular", {
                            required: "El campo Número de Celular es requerido",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "El número de celular debe tener 10 dígitos"
                            }
                        })} />
                    {errors.numeroCelular && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.numeroCelular.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-300 mb-1">
                        Correo Electrónico
                    </label>
                    <input
                        id="correoElectronico"
                        type="email"
                        placeholder="Correo Electrónico"
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                        {...register("correoElectronico", {
                            required: "El campo Correo Electrónico es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Dirección de correo electrónico inválida"
                            }
                        })} />
                    {errors.correoElectronico && <span className="bg-red-500 text-white text-sm p-1 rounded-lg block w-full mt-1">{errors.correoElectronico.message}</span>}
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
                                await eliminarCliente(params.id);
                                await actualizarCliente(params.id, data);
                                toast.success('Cliente Eliminado', {
                                    position: 'bottom-right'
                                });
                                navigate("/");
                            }
                        } }
                    >Eliminar</button>
                </div>
            )}
        </div><br></br></>

    )
}