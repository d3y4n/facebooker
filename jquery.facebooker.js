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

        $('<img />').attr('src', unescape('https://www.facebook.com/badge.php?id=4'))
        .load(function() {
            callback(true);
        })
        .error(function() {
            callback(false);
        });
                
    }
    
})(jQuery);