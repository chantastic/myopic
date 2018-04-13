# myopic 🤓
A function for crafting thoughts that don't age well

## usage

```js
myopic("The render prop pattern", "cloneElement")
// => "The render prop pattern replaces cloneElement. I don't see any reason to use cloneElement anymore."

myopic("The new Context API", "Redux")
// => "The new Context API replaces Redux. I don't see any reason to use Redux anymore."
```

## installation

### Node

```bash
npm i myopic
```

*Module*
```js
import myopic from "myopic";
```

*CommonJS*
```js
const myopic = require("myopic");
```

### Browser
```html
<script src="https://unpkg.com/myopic"></script>
```