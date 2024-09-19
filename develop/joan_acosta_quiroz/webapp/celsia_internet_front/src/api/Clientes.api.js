import axios from "axios";

// axios.create({
//     baseURL: 'http://localhost:8000/'
// })

export const getAllClientes = () => {
    return axios.get('http://localhost:8000/api/clientes/')
}

export const getCliente = (id) => {
    return axios.get('http://localhost:8000/api/clientes/'+id+'/')
}

export const crearCliente = (Cliente) => {
    return axios.post('http://localhost:8000/api/clientes/', Cliente)
}

export const eliminarCliente = (id) => {
    return axios.delete('http://localhost:8000/api/clientes/'+ id+'/')
}

export const actualizarCliente = (id, cliente) => {
    return axios.put('http://localhost:8000/api/clientes/'+ id+'/',cliente)
}


