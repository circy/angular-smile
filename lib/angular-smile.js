/*
           MIT License http://www.opensource.org/licenses/mit-license.php
           Author & (c) 2015 Sebastian Kreissl
           https://github.com/circy
 */
(function(window,angular,undefined){
    angular.module('angular-smile', [])
        .provider('smile', function(){
            var items = [];
            var add = function(type,url){
                if(Object.prototype.toString.call( type ) === '[object Array]' || type.length < 0)
                {
                    type.forEach(function(item){
                        if(typeof item === 'string'){
                            addToItems(item, url);
                        }else {
                            throw new Error("The type must be a String or a Array of Strings");
                        }
                    });
                }else if(typeof type === 'string'){
                    addToItems(type,url);
                }else{
                    throw new Error("The type must be a String or a Array of Strings");
                }
                return {
                    add: add
                }
            };
            var addToItems = function(type,url){
                items.push({
                    'type': getRegex(type),
                    'url': url
                });
            };
            var getRegex = function(type){
                var escapeString = type.replace(/[\-\[\]\/\{\}\(\)\:\:\=\-\_\*\+\?\.\\\^\$\|]/g, "\\$&");
                return new RegExp('/' + escapeString.substr(1,escapeString.length) + '/g');
            };
            return {
                add: add,
                $get: function () {
                    return {
                        items: items
                    };
                }
            };
        })
        .directive('smile',function(smileImages, smile ){
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    if(smile.items.length > 0) {
                        var temp = element.html();
                        smile.items.forEach(function (item) {
                            temp = temp.replace(item.type,'<img src="' + item.url + '"></img>');
                        });
                        element.html(temp);
                    }else{
                        // If nothing has been configured
                        var temp = element.html()
                            .replace(/:\)/g,'<img src="' + smileImages.getImage(':)') + '"></img>')
                            .replace(/:\(/g,'<img src="' + smileImages.getImage(':(') + '"></img>')
                            .replace(/:\-\(/g,'<img src="' + smileImages.getImage(':(') + '"></img>')
                            .replace(/:\-\)/g,'<img src="' + smileImages.getImage(':)') + '"></img>');
                        element.html(temp);
                    }
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
})(window,window.angular);
