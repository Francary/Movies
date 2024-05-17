
const formatoFecha= (fecha) => {

    const formatear = new Date(fecha).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })

return formatear
}

export {

    formatoFecha
}