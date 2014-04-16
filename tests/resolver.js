describe('resolver', function() {
    it('should be a function', function() {
        expect(typeof resolver).toBe('function');
    });
    it('should pass a name to resolve', function() {
        expect(resolver).toThrow();
    });
});

describe('should resolve correctly', function() {

    var root, obj = {a: [], b: false};

    beforeEach(function() {
        root = {name: 'root element'};
        resolver(root, 'foo.bar.foobar', obj);
        resolver(root, 'f@#.ba(.foobar', obj);
    });

    it('should resolve correctly', function() {
        expect(root.name).toBe('root element');

        var rst = resolver(root, 'foo.bar.foobar');
        var rst1 = resolver(root, 'foo');
        var rst2 = resolver(root, 'f@#');
        expect(rst).toEqual(obj);
        expect(rst1.bar.foobar).toEqual(obj);
        expect(rst2['ba('].foobar).toEqual(obj);
    });
});
