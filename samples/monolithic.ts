import { NetworkManagementClient } from '../lib/networkManagementClient';
import { TokenCredentials } from 'ms-rest-js';
import { token, subscriptionId, resourceGroupId } from "./auth";

const creds = new TokenCredentials(token);
const client = new NetworkManagementClient(creds, subscriptionId);
client.networkInterfaces.list(resourceGroupId)
  .then(res => console.log(res))
  .catch(err => console.error(err));
