export const categoryModalOpen = () =>{
    return{
        type:'CATEGORY_OPEN'
    }
}
export const categoryModalClose = () =>{
    return{
        type:'CATEGORY_CLOSE'
    }
}
export const categorySave = (content) =>{
    return{
        type:'CATEGORY_SAVE',
        payload:content
    }
}
export const categoryDelete = (content) =>{
    return{
        type:'CATEGORY_DELETE',
        payload:content
    }
}
export const categoryEdit = (content) =>{
    return{
        type:'CATEGORY_EDIT',
        payload:content
    }
}