describe('resolver', function() {
    it('should be a function', function() {
        expect(typeof resolver).toBe('function');
    });
    it('should pass a name to resolve', function() {
        expect(resolver).toThrow();
    });
});

describe('should resolve correctly', function() {

    var root, obj = {a: [{name: 'another object'}], b: false};

    beforeEach(function() {
        root = {name: 'root element'};
        resolver(root, 'foo.bar.foobar', {action: 'set', obj: obj});
        resolver(root, 'f@#.ba(.foobar', {action: 'set', obj: obj});
        resolver(root, 'foo..bar', {action: 'set', obj: obj});
    });

    it('should resolve correctly', function() {
        expect(root.name).toBe('root element');

        var rst = resolver(root, 'foo.bar.foobar', {action: 'get'});
        var rst1 = resolver(root, 'foo');
        expect(rst).toEqual(obj);
        expect(rst1.bar.foobar).toEqual(obj);
        expect(rst1.bar.foobar.b).toBe(false);
    });

    it('should resolve correctly with special module name', function() {
        var rst2 = resolver(root, 'f@#');
        var rst3 = resolver(root, 'foo');
        expect(rst2['ba('].foobar).toEqual(obj);
        expect(rst3['.bar']).toEqual(obj);
        expect(rst3['.bar'].a[0].name).toBe('another object');
    });

});
