(function(w){
    w.Resources = {
        init: [],
        doInit: function() {
            for (var i = 0; i < w.Resources.init.length; i++) {
                w.Resources.init[i](w.Resources, w.trans);
            }
        }
    };
})(window);