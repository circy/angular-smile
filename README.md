# angular-smile
I have programmed a ":) :-) :( :-(" as images when attached to a "&lt;p/>" tag.
the smiley images do not look so good at the moment  :D

# Install
$ bower install angular-smile
or
Clone git Repo

# Using
``` HTML
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>angular smile test</title>
</head>
<body ng-app="test">

<p smile>:) :(</p>

<p smile>:-) :-(</p>

<script src="../bower_components/angular/angular.min.js"></script>
<script src="../lib/angular-smile.js"></script>
<script>
    var app = angular.module('test', ['angular-smile'])
</script>
</body>
</html>
```


# Licens
MIT 
2015 (c) Sebastian Kreissl