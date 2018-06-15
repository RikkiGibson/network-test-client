import { NetworkManagementClientContext } from './networkManagementClientContext';
import { NetworkInterfaces } from './operations';
import { TokenCredentials } from 'ms-rest-js';

const creds = new TokenCredentials("abcdefg");

const networkInterfaces = new NetworkInterfaces(new NetworkManagementClientContext({ }, creds, "foo-subscription"));
networkInterfaces.get("foo", "bar")
  .then(res => console.log(res))
  .catch(err => console.error(err));
