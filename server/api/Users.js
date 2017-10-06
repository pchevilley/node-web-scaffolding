const QUERIES = {
    getAll: 'SELECT * FROM users',
    getByEmail: 'SELECT * FROM users WHERE email=?'
};

class UserAPI {
    constructor(db){
        this.db = db;
        this.db.connect();        
    }
    
    get(i_oRequest, i_oAPIInfos, i_oCallback){
        if(i_oAPIInfos.restChunks.length > 1){
            this.db.query(QUERIES.getByEmail, [i_oAPIInfos.restChunks[1]], (i_oError, i_aResults) => {
                i_oCallback(i_aResults);
            });            
        } else {
            this.db.query(QUERIES.getAll, (i_oError, i_aResults) => {
                i_oCallback(i_aResults);
            });
        }
    }

    post(){

    }    
}

module.exports = UserAPI;