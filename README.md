# angular-smile
I have programmed a a "directive" which can display smileys ":) :-) :( :-(" as images when attached to a "&lt;p/>" tag.
the smiley images do not look so good at the moment  :D

# Install
$ bower install angular-smile

# Use
``` HTML
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>angular smile test</title>
</head>
<body ng-app="test">

<p smile>:) :(  :=( :=) :*)</p>

<p smile>:-) :-(</p>

<script src="../bower_components/angular/angular.min.js"></script>
<script src="../lib/angular-smile.js"></script>
<script>
    var app = angular.module('test', ['angular-smile'])
            .config(function(smileProvider){
                smileProvider
                        .add(
                        [':)',':-)',':=)'],
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVDhP3YtRCoAwDEO9/3F3AZ3QxeyVIvXT8EDzmh3n+A57C/YW62PRDXjCVIeMJ0x1yHjCVIeMJ4xuwEcV7OJnj10+ym0FZpud0SGTB/a3IiMU+q28xcf3Hn2Sg4Fgb8Hegr3BOC7xyXcU33fSxgAAAABJRU5ErkJggg=='
                        )
                        .add(
                        [':(',':-(',':=('],
                        'http://icons.iconarchive.com/icons/hopstarter/keriyo-emoticons/24/Smiley-sorry-icon.png'
                        )
                        .add(
                        ':*)',
                        'http://icons.iconarchive.com/icons/hopstarter/keriyo-emoticons/24/Smiley-love-icon.png'
                        );
            });
</script>
</body>
</html>
```


# License
MIT 
2015 (c) Sebastian Kreissl
