var resolver = (function() {

    var MODULE_NAME_REGEX = /(\S+?)\.(\S+)/;

    return function resolve(target, name, options) {

        // TODO: check name

        var parse = MODULE_NAME_REGEX.exec(name);
        var hasSubmodule = parse !== null;

        if (hasSubmodule) {
            target[parse[1]] = target[parse[1]] || {};
            return resolve(target[parse[1]], parse[2], options);
        }

        if (options.action === 'get') {
            return target[name];
        } else if (options.action === 'set') {
            target[name] = options.obj;
        } else {
            throw new Error('Failed to resolve.');
        }

    };

}());
