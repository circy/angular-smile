/*
           MIT License http://www.opensource.org/licenses/mit-license.php
           Author & (c) 2015 Sebastian Kreissl
           https://github.com/circy
 */
(function(window,angular,undefined){
    angular.module('angular-smile', [])
        .directive('smile',function(smileImages){
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var temp = element.html()
                        .replace(/:\)/g,'<img src="' + smileImages.getImage(':)') + '"></img>')
                        .replace(/:\(/g,'<img src="' + smileImages.getImage(':(') + '"></img>')
                        .replace(/:\-\(/g,'<img src="' + smileImages.getImage(':(') + '"></img>')
                        .replace(/:\-\)/g,'<img src="' + smileImages.getImage(':)') + '"></img>');
                    element.html(temp);
                }
            };
        })
        .factory('smileImages',function(){
            return {
                'getImage' : function(type){
                    switch(type) {
                        case ':)':
                            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVDhP3YtRCoAwDEO9/3F3AZ3QxeyVIvXT8EDzmh3n+A57C/YW62PRDXjCVIeMJ0x1yHjCVIeMJ4xuwEcV7OJnj10+ym0FZpud0SGTB/a3IiMU+q28xcf3Hn2Sg4Fgb8Hegr3BOC7xyXcU33fSxgAAAABJRU5ErkJggg==";
                        case ':(':
                            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACRSURBVDhPY/z/iYFswASlyQIUaYY6m5EPzAMDXB7BVDNwzqaGnzEBxIf4I3KI+pk0zTv2MCjqgIIDiIAMUJAQRNvXMSjIQfWjADR1cDR/Og4NyABZA04bUEFGMlQ9CdrgeuAIn7aIEIbvr9A1ICMGCXGoUjjAtAEXYuDggOoBAuK1QRBTfQVC2/R+sBlEAgYGANw6qM5VgO54AAAAAElFTkSuQmCC";
                    }
                }
            };
        });
})(window,angular);
