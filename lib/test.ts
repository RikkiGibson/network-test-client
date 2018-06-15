

// Old way
// import { NetworkManagementClient } from './networkManagementClient';
// import { TokenCredentials } from 'ms-rest-js';
// const client = new NetworkManagementClient(new TokenCredentials("foo-bar"), "my-subscription");
// client.networkInterfaces.get("resource-group", "interface-name")
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// New way
// import { NetworkManagementClientContext } from './networkManagementClientContext';
// import { NetworkInterfaces } from './operations/networkInterfaces';
// import { TokenCredentials } from 'ms-rest-js';

// const context = new NetworkManagementClientContext(new TokenCredentials("foo-bar"), "my-subscription");
// const networkInterfaces = new NetworkInterfaces(context);
// networkInterfaces.get("resource-group", "interface-name")
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
