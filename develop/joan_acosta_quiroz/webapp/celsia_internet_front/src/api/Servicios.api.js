import axios from "axios";

export const getAllServicios = () => {
    return axios.get('http://localhost:8000/api/servicios/')
}

export const getServicio = (id) => {
    return axios.get('http://localhost:8000/api/servicios/'+id+'/')
}

export const crearServicio = (Servicio) => {
    return axios.post('http://localhost:8000/api/servicios/', Servicio)
}

export const eliminarServicio = (id) => {
    return axios.delete('http://localhost:8000/api/servicios/'+ id+'/')
}

export const actualizarServicio = (id, Servicio) => {
    return axios.put('http://localhost:8000/api/servicios/'+ id+'/',Servicio)
}


