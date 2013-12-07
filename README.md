Blue Screen of Death
--------------------

Make sure you hit F11 for a more fulfilling blue screen of death experience!

To run it stand-alone just do
```bash
$ git clone https://github.com/AndreZSanchez/BlueScreenOfDeath.git
$ cd BlueScreenOfDeath
$ node server.js
```

Integrate it into your Express app!

Run
```bash
$ npm install --save bluescreenofdeath
```

eg
```javascript
var express = require('express')
var bluescreen = require('bluescreenofdeath')

app = express()
app.use('/bluescreen', bluescreen())

app.listen(80)
```
