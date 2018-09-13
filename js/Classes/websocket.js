/************************************************************************
 Product    : Home information and control
 Date       : 2017-02-11
 Copyright  : Copyright (C) 2107 Kjeholt Engineering. All rights reserved.
 Contact    : dev@kjeholt.se
 Url        : http://www-dev.kjeholt.se
 Licence    : ---
 ---------------------------------------------------------
 File       : mqtt-service-xml/js/Classes/websocket.js
 Version    : 0.1.0
 Author     : Bjorn Kjeholt
 *************************************************************************/

var websocketBody = function (ci) {
    var self = this;
    this.ci = ci;
    
    
};

exports.create = function(ci) {
    return new websocketBody(ci);
};