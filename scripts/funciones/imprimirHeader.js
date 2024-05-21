//trayendo datos de footer.json
function TraerFooter() {
    return fetch("./scripts/Json/footer.json")
    .then((Response) => {
        if (!Response.ok) {
            throw new Error('Sin respuesta');
        }
        return Response.json();
    })
    .then((data) => {
        return data.footer;
    })
    .catch((error) => {
        console.error('Hubo un problema con el fetch:', error)
        throw error
    })
    
}