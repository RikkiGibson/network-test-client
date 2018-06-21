import { NetworkManagementClient } from '../lib/networkManagementClient';
import { TokenCredentials } from 'ms-rest-js';

const creds = new TokenCredentials("<your_token_here>");
const client = new NetworkManagementClient(creds, "<your_subscription_here>");
client.networkInterfaces.list("<your_resource_group_here>")
  .then(res => console.log(res))
  .catch(err => console.error(err));
