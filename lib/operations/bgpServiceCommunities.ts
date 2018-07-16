/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/bgpServiceCommunitiesMappers";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a BgpServiceCommunities. */
export class BgpServiceCommunities {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a BgpServiceCommunities.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the available bgp service communities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.BgpServiceCommunityListResult>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec);
  }

  /**
   * Gets all the available bgp service communities.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.BgpServiceCommunityListResult>> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec);
  }

  /**
   * Gets all the available bgp service communities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.BgpServiceCommunityListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.BgpServiceCommunityListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(): Promise<Models.BgpServiceCommunityListResult>;
  list(options: msRest.RequestOptionsBase): Promise<Models.BgpServiceCommunityListResult>;
  list(callback: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): void;
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Gets all the available bgp service communities.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.BgpServiceCommunityListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.BgpServiceCommunityListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink: string): Promise<Models.BgpServiceCommunityListResult>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.BgpServiceCommunityListResult>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BgpServiceCommunityListResult>): any {
    return msRest.responseToBody(this.listNextWithHttpOperationResponse.bind(this), nextPageLink, options, callback);
  }

}

// Operation Specifications
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/bgpServiceCommunities",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "apiVersion",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2018-04-01',
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BgpServiceCommunityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    {
      parameterPath: "nextPageLink",
      skipEncoding: true,
      mapper: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BgpServiceCommunityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
