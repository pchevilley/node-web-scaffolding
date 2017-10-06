const fs = require('fs');

// var test = require('../api/User');

class APILoader {
    constructor(db){
        this.apis = {};
        this.db = db;
    }

    load() {
        fs.readdir('./api/', (err, files) => {
            files.forEach(file => {
                let filename = file.replace('.js', '');
                let ctor = require('../api/' + filename);
                this.apis[filename.toLowerCase()] = new ctor(this.db);
            });
        })
    }

    process(i_oRequest, i_oAPIInfos, i_oCallback){
        var l_sAPIName = (i_oAPIInfos.restChunks[0] || "" ).toLowerCase(),
            l_sMethod = i_oRequest.method.toLowerCase(),
            l_oAPI = this.apis[l_sAPIName];
        if(l_oAPI){
            l_oAPI[l_sMethod](i_oRequest, i_oAPIInfos, i_oCallback);
        } else {
            console.error("Invalid API: ", i_oRequest, i_oAPIInfos);
            i_oCallback();
        }
    }
}

module.exports = APILoader;