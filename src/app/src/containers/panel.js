import { connect } from 'react-redux'

import { modificarBoton, modificarLlave, modificarPalanca } from '../redux/actions'

import Panel from '../components/panel/panel'

const mapStateToProps = ( state, props ) => {
    return {
        botones: state.botones,
        palancas: state.palancas,
        llave: state.llave
    }
}

const mapDispatchToProps = ( dispatch, props ) => {
    return {
        onButtonChange: (boton, valor) => {
            dispatch(modificarBoton(boton, valor))
        },
        onKeyChange: (valor) => {
            dispatch(modificarLlave(valor))
        },
        onPalancaChange: (palanca, valor) => {
            dispatch(modificarPalanca(palanca, Number(valor.target.value)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)