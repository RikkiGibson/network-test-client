import { NetworkManagementClientContext } from '../lib/networkManagementClientContext';
import { NetworkInterfaces } from '../lib/operations/networkInterfaces';
import { TokenCredentials } from 'ms-rest-js';

const creds = new TokenCredentials("<your_token_here>");
const context = new NetworkManagementClientContext(creds, "<your_subscription_here>");
const networkInterfaces = new NetworkInterfaces(context);
networkInterfaces.list("<your_resource_group_here>")
  .then(res => console.log(res))
  .catch(err => console.error(err));
