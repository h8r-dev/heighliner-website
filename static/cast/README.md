## Cast file

The file ended with `.cast` come from [Asciinema](https://asciinema.org/) library which records and display terminal sessions. 

## Usage
1. Cast file can be imported as a module: 
   
```js
import hlnListStacksCast from "/static/cast/hlnListStacks.cast";
```

2. `asciinema-player` will consume this cast file and you can 
encapsulated it into a component:

```js
  import("asciinema-player").then((player) => {
    player.create(hlnListStacksCast, data, {
      /** Code */
    }
  }
```

⛳️ More specific detail please refer this component: `/src/components/Asciinema/index.tsx`.

3. Just import this encapsulated component wherever you want (`.tsx` or `.mdx`):

```js
import AsciinemaPlayer from "@site/src/components/Asciinema";

```
