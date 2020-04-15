import update from 'immutability-helper'

import { MODIFICAR_BOTON, MODIFICAR_PALANCA, MODIFICAR_LLAVE } from './actions'

import estadoInicial from './estadoInicial'

function panel(state = estadoInicial, action){
    switch (action.type){
        case MODIFICAR_BOTON:
            return update(state, {botones: {[action.boton]: {$set: action.valor}}})
        case MODIFICAR_PALANCA:
            return update(state, {palancas: {[action.palanca]: {$set: action.valor}}})
        case MODIFICAR_LLAVE:
            return update(state, {llave: {$set: action.valor}})
        default:
            return state
    }
}

export default panel