Selektor, a simple JavaScript selector

Selektor is licensed under the terms of either the MIT License or the GNU General Public License (GPL) Version 3.

(c) 2012 Emilio Mariscal

# Usage

Selector:

* $("#myId") - return an element 
* $(".myClass") - return an array of elements

You can add your custom methods or properties, using the $.extend function:

    $.extend({
        cuack: function() {
            var i = 0;
            if(Object.prototype.toString.call( this ) === '[object NodeList]') {
                for (i = this.length; i--;) {
                    this[i].innerHTML += " - cuack!";
                }
            } else {
                this.innerHTML += " - cuack!";                    
            }
        } 
    });
    
    $("#myId").cuack();
    $(".myClass").cuack();
