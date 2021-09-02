import redux from 'redux';

const createStore = redux.createStore;
// ACTIONS
const BUY_CAKE ='BUY_CAKE';

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfcakes: 10
}

// REDUCER
const reducer =(state=initialState, action)=> {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,  //for making copy of state incase of multiple states
            numOfcakes: state.numOfcakes -1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log("Initial State", store.getState())
store.subscribe(()=>console.log('Updated Store ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
