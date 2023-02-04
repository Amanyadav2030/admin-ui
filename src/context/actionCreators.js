export const GET_USERS_LOADING ={type:"GET_USERS_REQUEST"};
export const GET_USERS_ERROR ={type:'GET_USERS_ERROR'};
export const funSuccessUsers =(data)=>{ 
    return{
        type:"GET_USERS_SUCCESS",
        payload:data
    } 
}  
export const funAddSuccessPageData =(data)=>{ 
    return{
        type:"ADD_PAGE_SUCCESS",
        payload:data
    }
}
