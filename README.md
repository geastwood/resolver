resolver
=======

Tiny piece of code to resolve name space.

## As Setter
```javascript
var root = {name: 'root object'};
resolver(root, 'foo.bar.foobar', {action: 'set', obj: function() {
    return 'register a function under root.foo.bar.foobar';
}});

```

## As Getter
```js
var fn = resolver(root, 'foo.bar.foobar');
fn(); // log 'register a function under root.foo.bar.foobar'
```

## "exports" function
```js
var exports = function(target, name, obj) {
    return resolver(target, name, {action: 'set', obj: obj});
}
```
