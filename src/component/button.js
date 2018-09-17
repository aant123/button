import React from 'react'
import reducer from '../reducer/manageFnButton'
import {increaseButton,decreaseButton} from '../actions/index'
import {connect} from 'react-redux'

const button =({number,increase,decrease}) => (
    <div>
        <label type="text">{number}</label>
        <button type="button" onClick={increase}>Increase</button>
        <button type="button" onClick={decrease}>Decrease</button>
    </div>
)

const mapStateToProps = state => ({
    number : state.number
})

const mapDispatchToProps = dispatch => ({
    increase : () => dispatch(increaseButton()),
    decrease : () => dispatch(decreaseButton())
})

export default connect (mapStateToProps,mapDispatchToProps)(button)