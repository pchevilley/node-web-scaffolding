class UserAPI {

    get(i_oRequest, i_oAPIInfos, i_oCallback){
        i_oCallback(i_oAPIInfos.restChunks[0]);
    }

    post(){

    }

    
}

module.exports = UserAPI;