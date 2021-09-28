const _ = require('lodash');

export default function withPrefix(url) {
    if (!url) {
        return url;
    }

    if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
        return url;
    }
    const basePath = _.trim('/', '/');
    return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
