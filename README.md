Firebolt-js/sdk test issues

I am currently working on an app which needs to use the firebolt-sdk and I'm hitting severe problems when it comes to testing.

I'm using v0.6.1

Adding 
``` import { Metrics, Discovery } from "@firebolt-js/sdk"; ```
makes every single test fail due to the .mjs imports. 

I tried v0.6.0 – this compiled to .js not .mjs but caused a different issue, it threw an Error saying global had been declared twice.

The application builds correctly via WebPack and the functionality appears to work correctly from the console.logs.

Our app requires node >15 – I have tried higher version but had the same results.

I have tried every permutation, altering: jest.config; babel.config; version of Node; importing via absolute paths with the '.mjs' suffix, you name it, nothing works.

To run 

```
npm test
```

or 

```
yarn test
```

