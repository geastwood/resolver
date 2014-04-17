resolver
=======

Tiny piece of code to resolve name space.

```javascript

var root = {name: 'root object'};
resolver(root, 'foo.bar.foobar', function() {
    return 'register a function under root.foo.bar.foobar';
};

var fn = resolver(root, 'foo.bar.foobar'); // return defined function
```
