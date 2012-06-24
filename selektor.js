/**
 * Selektor, a simple JavaScript selector
 * 
 * https://github.com/emi420/selektor
 * 
 * Selektor is licensed under the terms of either the MIT License or the GNU General Public License (GPL) Version 3.
 * 
 * (c) 2012 Emilio Mariscal
 * 
 */

(function(){
    "use strict";
    
	var $ = function (query) {
		return new Selektor(query);
	},
	
	Selektor = function (query) {
		var query_type = typeof query,
			el;

        // Get element from query
        if (query_type === "string") {

            if (query.indexOf("#") > -1) {
                query = query.replace("#", "");
                el = document.getElementById(query);

            } else if (query.indexOf(".") > -1) {
                query = query.replace(".", "");
                el = document.getElementsByClassName(query);

            }
            
        } else if (query_type === "object") {
            el = query;
        }

        // Instance properties
        this.query = (function () {
            return query;
        }());
        this.el = (function () {
            return el;
        }());
        
        if (el !== null) {
            $.extend($.prototype, el.constructor.prototype);
        }
        return el;
    };

    // Extend function
    $.extend = function (obj, target) {
        var i;
        if (target === undefined) {
            target = $.prototype;
        }
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
    };        
    
    // Go public!
    if (!window.$ || typeof ($) !== "function") {
        window.$ = $;
    }

}());


