describe('resolver', function() {
    it('should be a function', function() {
        expect(typeof resolver).toBe('function');
    });
});
describe('should resolve correctly', function() {

    var root, obj = {a: [], b: false};

    beforeEach(function() {
        root = {name: 'root element'};
        resolver(root, 'foo.bar.foobar', {action: 'set', obj: obj});
    });

    it('should resolve correctly', function() {
        var rst = resolver(root, 'foo.bar.foobar', {action: 'get'});
        var rst1 = resolver(root, 'foo', {action: 'get'});
        expect(rst).toEqual(obj);
        expect(rst1.bar.foobar).toEqual(obj);
    });
});
