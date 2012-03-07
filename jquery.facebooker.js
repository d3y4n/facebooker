(function($){

/*
 * @author Dejan Marjanovic <dejan.marjanovic@gmail.com>
 * @name Facebook Login Detect (jQuery)
 * @param Callback function with one argument
 * @return Boolean
 */

    $.fn.facebooker = function(callback) {

        if (typeof callback !== 'function')
            return;

        $('<img />').attr('src', unescape('%68%74%74%70%73%3A%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%62%61%64%67%65%2E%70%68%70%3F%69%64%3D%34'))
        .load(function() {
            callback(true);
        })
        .error(function() {
            callback(false);
        });
                
    }
    
})(jQuery);