const manageFnButton = (state={number:0},action) => {
    switch(action.type) {
        case 'INCREASE':
        console.log("INCREASE",state.number + 1);
            return {number:state.number + 1}
        case 'DECREASE':
        console.log("DECREASE",state.number - 1);
            return {number:state.number - 1}
        default:
        console.log("other");
            return state 
    }
}

export default manageFnButton;
