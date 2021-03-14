let initialState ={
    postToggle:false,
    postEditToggle:false,
    posts:[]
}
const postReducer = (state=initialState,action) =>{
     switch(action.type){
         case 'POST_CLOSE':
             return{
                 ...state,postToggle:false 
             }
         case 'POST_OPEN':
             return{
                ...state,postToggle:true
            }
         case 'POST_SAVE':
             return{
                 ...state,
                 posts:[...state.posts,action.payload] 
             }
         case 'POST_DELETE':
             return{
                 ...state,
                 posts:state.posts.filter(post=>post.date !== action.payload) 
             }
         case 'POST_EDIT_OPEN':
             return{
                 ...state,postEditToggle:true
             }
         case 'POST_EDIT_CLOSE':
         return{
                ...state,postEditToggle:false
             }
         case 'POST_EDIT':
             const {title,body,categories,date} = action.payload
             for(let i in state.posts){
                 if(parseInt(state.posts[i].date)=== parseInt(date)){
                     state.posts[i] = {title,body,categories,date}
                     break
                 }
             }
             return {
                 ...state,
                 posts: state.posts 
             }
         default:
             return state
     }
}
export default postReducer