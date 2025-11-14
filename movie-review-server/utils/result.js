function createResult(error,data){
    if(data){
        return createSuccess(data)
    }
    else 
        return createFailed(error)

}
function createSuccess(data){
    return {status :"success",data:data}
}
function createFailed(error){
    return {status:"error",error :error}
}

module.exports = {createResult ,createSuccess ,createFailed}