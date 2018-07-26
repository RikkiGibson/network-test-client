# Azure ARM Network Example Client
This is an example client generated using https://github.com/azure/autorest.typescript.

# Samples

Samples can be found under [samples/](samples/).

First replace the placeholders (token, subscription, resource group) with actual values in [samples/auth.ts](samples/auth.ts).

## Browser

You can bundle all the samples by running `npm run build:browser`, or bundle browser samples individually with

```sh
webpack --config-name context
webpack --config-name monolithic
```

You can then run the samples in browser by loading `index-context.html` or `index-monolithic.html` (open the inspector to see results).

## Node
Run the samples in node with the following commands:
```sh
npm run build:node
node ./dist/samples/context.js
node ./dist/samples/monolithic.js
```

# Concepts

## Monolithic
The existing "monolithic" pattern that we intend to continue supporting for users migrating from azure-sdk-for-node is shown in [samples/monolithic.ts](samples/monolithic.ts).

The user experience of this pattern is slightly simpler because there are fewer modules you need to track down and import directly, but the bundle size can be vastly bigger, as you should see when you `npm run build:browser`.

## Context
The new pattern which we are encouraging all browser users to adopt is called the "context" pattern shown in [samples/context.ts](samples/context.ts). This requires users to track down the operation groups they're actually interested in but has the benefit of reduced bundle size.

## Generator settings

You can regenerate the client by running the following command:
```sh
autorest --typescript \
  --azure-arm \
  --use=@microsoft.azure/autorest.typescript@preview \
  --output-folder=./lib \
  --model-enum-as-union=true \
  --generate-body-methods=false \
  https://raw.githubusercontent.com/Azure/azure-rest-api-specs/3a5b54168f823c5d14eafd5e18e89c2e54c92469/specification/network/resource-manager/readme.md
```

# Related projects
 - [autorest.typescript](https://github.com/Azure/autorest.typescript)
 - [ms-rest-js](https://github.com/Azure/ms-rest-js)
 - [ms-rest-azure-js](https://github.com/Azure/ms-rest-azure-js)
