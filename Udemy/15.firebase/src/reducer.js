export const initalData ={
    movie : [],
    isLoading : false,
    error : null
}

export const actionType = {
    DATABASE_REPONSE : 'DATABASE_REPONSE',


}

export const reducer = (state , action) =>{
    switch(action.type){
        case actionType.DATABASE_REPONSE : 
            return {...state , isLoading : true };
        case 'DATABASE_REPONSE_COMPLETE' :
            return {...state , isLoading : false};
        case 'FETCH_SUCESSES' :
            return {...state , isLoading : false , movie : action.payload};
        case 'FETCH_FALSE' :
            return {...state , isLoading : false , error : action.payload};
        default :
            return  state;
    }

}