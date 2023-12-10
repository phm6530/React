export const initalData ={
    movie : [],
    isLoading : false,
    error : null,
    isDelete : false
}

export const actionType = {
    DATABASE_REPONSE : 'DATABASE_REPONSE',


}

export const reducer = (state , action) =>{
    switch(action.type){
        case actionType.DATABASE_REPONSE : 
            return {...state , isLoading : true , isDelete : false};
        case 'DATABASE_REPONSE_COMPLETE' :
            return {...state , isLoading : false};
        case 'ADD' :
            return {...state , isLoading : false};
        case 'FETCH_SUCESSES' :
            return {...state , isLoading : false , movie : action.payload};
        case 'FETCH_FALSE' :
            return {...state , isLoading : false , error : action.payload};
        case 'DELETE_ING' :
            return {...state  , isDelete : true};
        case 'DELETE_SUCESSES' :
            return {...state  , isDelete : false};
        default :
            return  state;
    }
}