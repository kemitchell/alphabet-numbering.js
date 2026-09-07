```javascript
import alpabetnumbering from 'alphabet-numbering'
import assert from 'node:assert'

// Like CSS' lower-alpha

const englishAlphaNumbering = alpabetnumbering([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
])

assert.equal(englishAlphaNumbering(1), 'a')

assert.equal(englishAlphaNumbering(28), 'ab')

assert.equal(englishAlphaNumbering(18432), 'aafx')

// A made-up alphabet numbering

const xyzAlphaNumbering = alpabetnumbering([ 'x', 'y', 'z' ])

assert.equal(xyzAlphaNumbering(1), 'x')

assert.equal(xyzAlphaNumbering(5), 'xy')

assert.equal(xyzAlphaNumbering(500), 'xyzxxy')
```
