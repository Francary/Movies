 const formatoParrafo = (texto) => {
            // Reemplaza los dobles saltos de línea por etiquetas <p>
            return texto.split('\n\n').map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
            ));
        };
    
export{
    formatoParrafo
}