var resolver = (function() {

    'use strict';

    var MODULE_NAME_REGEX = /(\S+?)\.(\S+)/;

    return function resolve(target, name, options) {

        var parse, hasSubmodule;
        options = options || {action: 'get'};

        if (!name) {
            throw new Error('module name must be specified.');
        }

        parse = MODULE_NAME_REGEX.exec(name);
        hasSubmodule = parse !== null;

        if (hasSubmodule) {

            target[parse[1]] = target[parse[1]] || {};
            return resolve(target[parse[1]], parse[2], options);
        }

        if (options.action === 'get') {
            return target[name];
        } else if (options.action === 'set') {

            if (typeof options.obj === undefined) {
                throw new Error('Set action with an empty object.');
            }
            target[name] = options.obj;
        } else {
            throw new Error('Failed to resolve.');
        }

    };

}());
