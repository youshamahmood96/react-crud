export const postModalClose = () =>{
    return{
        type:'POST_CLOSE'
    }
}
export const postModalOpen = () =>{
    return{
        type:'POST_OPEN'
    }
}
export const postSave = (content) =>{
    return{
        type:'POST_SAVE',
        payload:content
    }
}
export const postDelete = (content) =>{
    return{
        type:'POST_DELETE',
        payload:content
    }
}
export const postEditModalOpen = () =>{
    return{
        type:'POST_EDIT_OPEN'
    }
}
export const postEditModalClose = () =>{
    return{
        type:'POST_EDIT_CLOSE'
    }
}
export const postEdit = (content) =>{
    return{
        type:'POST_EDIT',
        payload:content
    }
}