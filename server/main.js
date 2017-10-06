var fs = require('fs'),
    path = require('path'),
    NetworkMgr = require('./js/NetworkMgr'),
    APILoader = require('./js/APILoader');

// name application class accordingly
function cApplication() {
    //=============================================================================
    // Public Methods
    //=============================================================================
    this.start = function() {
        m_oAPILoader = new APILoader();
        m_oAPILoader.load();
        m_oNetworkMgr.startServer();
    };

    //=============================================================================
    this.stop = function() {
        m_oNetworkMgr.stopServer();
    };

    //=============================================================================
    this.handleAPIRequest = function(i_oRequest, i_oAPIInfos, i_oCallback) {
        var l_sRootRestSection = i_oAPIInfos.restChunks[0];

        switch (l_sRootRestSection) {
            case "greetings":
                _handleGreetings(i_oAPIInfos, i_oCallback);
                break;
            default:
                m_oAPILoader.process(i_oRequest, i_oAPIInfos, i_oCallback);
        }
    };

    //=============================================================================
    // Private Methods
    //=============================================================================

    //=============================================================================
    function _handleAPISection1(i_oAPIInfos, i_oCallback) {
        i_oCallback("You have reached API Section1");
    }

    //=============================================================================
    function _handleAPISection2(i_oAPIInfos, i_oCallback) {
        i_oCallback("You have reached API Section2");
    }

    //=============================================================================
    function _handleGreetings(i_oAPIInfos, i_oCallback) {
        var l_aPossibleGreetings = ["¡Hola", "Hallo", "Hi", "Bonjour", "Привіт", "Hej", "Oy", "ハイ", "สวัสดี"],
            l_sName = decodeURIComponent(i_oAPIInfos.restChunks[1]) || "John Doe",
            l_nRandomIndex = Math.round(Math.random() * (l_aPossibleGreetings.length - 1)),
            l_sGreeting;

        l_sName = l_sName
            .split(/\s+/)
            .map(i_sChunk => i_sChunk[0].toUpperCase() + i_sChunk.slice(1))
            .join(' ');

        l_sGreeting = l_aPossibleGreetings[l_nRandomIndex] + " " + l_sName;
        i_oCallback(l_sGreeting);
    }

    //=============================================================================
    function _constructor_() {
        m_oNetworkMgr = new NetworkMgr(m_oInterface);
    }

    //=============================================================================
    // Private Members
    //=============================================================================
    var m_oInterface = this,
        m_oAPILoader,
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
