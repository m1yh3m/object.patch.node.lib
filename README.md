# @m1yh3m/object.patch.node.lib

Patches Object.prototype with functions.

## usage

```javascript
const { patch, depatch } = require("@m1yh3m/object.patch.node.lib");

patch();

var x = { a: "b", c: "d" };

x.toKeyValueArray();
// [ { key: 'a', value: 'b' }, { key: 'c', value: 'd' } ]

x.keys();
// [ 'a', 'c' ]

x.values();
// [ 'b', 'd' ]
depatch();

x.toKeyValueArray();
// TypeError: x.toKeyValueArray is not a function
```
