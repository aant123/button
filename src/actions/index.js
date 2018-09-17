import React from 'react'
const INCREASE_BUTTON = 'INCREASE'
const DECREASE_BUTTON = 'DECREASE'

export const increaseButton = () => {
    return {
        type:INCREASE_BUTTON
    }

}

export const decreaseButton = () => {
    return {
        type:DECREASE_BUTTON
    }
}
