/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/availableEndpointServicesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AvailableEndpointServices. */
export class AvailableEndpointServices {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AvailableEndpointServices.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * List what values of endpoint services are available for use.
   *
   * @param {string} location The location to check available endpoint services.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EndpointServicesListResult>> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec);
  }

  /**
   * List what values of endpoint services are available for use.
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
  listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EndpointServicesListResult>> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec);
  }

  /**
   * List what values of endpoint services are available for use.
   *
   * @param {string} location The location to check available endpoint services.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.EndpointServicesListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.EndpointServicesListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(location: string): Promise<Models.EndpointServicesListResult>;
  list(location: string, options: msRest.RequestOptionsBase): Promise<Models.EndpointServicesListResult>;
  list(location: string, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.EndpointServicesListResult>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), location, options, callback);
  }

  /**
   * List what values of endpoint services are available for use.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.EndpointServicesListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.EndpointServicesListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink: string): Promise<Models.EndpointServicesListResult>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.EndpointServicesListResult>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.EndpointServicesListResult>): any {
    return msRest.responseToBody(this.listNextWithHttpOperationResponse.bind(this), nextPageLink, options, callback);
  }

}

// Operation Specifications
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/virtualNetworkAvailableEndpointServices",
  urlParameters: [
    Parameters.location0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EndpointServicesListResult
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
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EndpointServicesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
