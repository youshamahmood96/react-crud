let initialState ={
    categoryToggle:false,
    categories:['Create New Category...','Sports','International','Fashion']
}
const categoryReducer = (state=initialState,action) =>{
     switch(action.type){
         case 'CATEGORY_CLOSE':
             return {
                 ...state,categoryToggle:false
             }
         case 'CATEGORY_OPEN':
             return {
                ...state,categoryToggle:true
            }
         case 'CATEGORY_SAVE':
             return{
                 ...state,
                 categories:[...state.categories,action.payload]
             }
         case 'CATEGORY_DELETE':
             return{
                 ...state,
                 categories:state.categories.filter(category=>category!==action.payload) 
             }
         case 'CATEGORY_EDIT':
            for(let i in state.categories){
                if(state.categories[i] === action.payload.name){
                    state.categories[i] = action.payload.title
                    break
                }
            }
             return{
                 ...state,
                 categories:state.categories
             }
         default:
             return state
     }
}
export default categoryReducer