import { NetworkManagementClientContext, NetworkInterfaces } from '../lib/networkManagementClient';
import { TokenCredentials } from 'ms-rest-js';
import { token, subscriptionId, resourceGroupId } from "./auth";

const creds = new TokenCredentials(token);
const context = new NetworkManagementClientContext(creds, subscriptionId);
const networkInterfaces = new NetworkInterfaces(context);
networkInterfaces.list(resourceGroupId)
  .then(res => console.log(res))
  .catch(err => console.error(err));
