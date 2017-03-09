var fs = require('fs'),
    path = require('path'),
    NetworkMgr = require('./js/NetworkMgr');

// name application class accordingly
function cApplication() {
    //=============================================================================
    // Public Methods
    //=============================================================================
    this.start = function() {
        m_oNetworkMgr.startServer();
    };

    //=============================================================================
    this.stop = function() {
        m_oNetworkMgr.stopServer();
    };

    //=============================================================================
    this.handleAPIRequest = function(i_oAPIInfos, i_oCallback) {
        i_oCallback("API Request Handled! " + JSON.stringify(i_oAPIInfos));
    };

    //=============================================================================
    // Private Methods
    //=============================================================================

    //=============================================================================
    function _constructor_() {
        m_oNetworkMgr = new NetworkMgr(m_oInterface);
    }

    //=============================================================================
    // Private Members
    //=============================================================================
    var m_oInterface = this,
        m_oNetworkMgr;

    _constructor_();
}

//=============================================================================
function main() {
    var l_oApplication = new cApplication();
    l_oApplication.start();
}

// bootstrap application
main();
