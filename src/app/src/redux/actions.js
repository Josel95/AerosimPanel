export const MODIFICAR_BOTON = 'MODIFICAR_BOTON'

export const MODIFICAR_LLAVE = 'MODIFICAR_LLAVE'

export const MODIFICAR_PALANCA = 'MODIFICAR_PALANCA'

export function modificarBoton(boton, valor){
    return {
        type: MODIFICAR_BOTON,
        boton,
        valor
    }
}

export function modificarLlave(valor){
    return {
        type: MODIFICAR_LLAVE,
        valor
    }
}

export function modificarPalanca(palanca, valor){
    return {
        type: MODIFICAR_PALANCA,
        palanca,
        valor
    }
}
