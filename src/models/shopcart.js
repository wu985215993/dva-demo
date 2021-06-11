export default {
    namespace: 'shopcart',
    state:{
        list:[],
    },
    reducers:{
        setList(state,action){
            return {
                ...state,
                list: action.payload
            }
        }
    }
}