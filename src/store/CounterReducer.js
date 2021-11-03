
const initstate = { size: 0, sum: 0 }

const counterReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'updateCounterSize':
            return {size:action.payload, ...state}
        case 'resetSum':
            return {...state, counterSum: 0}

        default:
            return state
    }
}

export default counterReducer;