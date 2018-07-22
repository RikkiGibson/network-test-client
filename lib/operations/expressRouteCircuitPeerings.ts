/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/expressRouteCircuitPeeringsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCircuitPeerings. */
export class ExpressRouteCircuitPeerings {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCircuitPeerings.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified peering from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, circuitName, peeringName, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {

        // Deserialize Response
        return operationRes;
      });
  }

  /**
   * Gets the specified authorization from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitPeering>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        options
      },
      getOperationSpec);
  }


  /**
   * Creates or updates a peering in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to the create or
   * update express route circuit peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, circuitName, peeringName, peeringParameters, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {
        let httpRequest = operationRes.request;

        // Deserialize Response
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        if (parsedResponse != undefined) {
          try {
            const serializer = new msRest.Serializer(Mappers);
            operationRes.parsedBody = serializer.deserialize(Mappers.ExpressRouteCircuitPeering, parsedResponse, "operationRes.parsedBody")
          } catch (error) {
            const deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
            deserializationError.request = msRest.stripRequest(httpRequest);
            deserializationError.response = msRest.stripResponse(operationRes);
            throw deserializationError;
          }
        }
        return operationRes;
      });
  }

  /**
   * Gets all peerings in a specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitPeeringListResult>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        options
      },
      listOperationSpec);
  }

  /**
   * Deletes the specified peering from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        options
      },
      beginDeleteMethodOperationSpec);
  }

  /**
   * Creates or updates a peering in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to the create or
   * update express route circuit peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitPeering>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        peeringParameters,
        options
      },
      beginCreateOrUpdateOperationSpec);
  }

  /**
   * Gets all peerings in a specified express route circuit.
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
  listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitPeeringListResult>> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec);
  }

  /**
   * Deletes the specified peering from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string): Promise<void>;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, options, callback);
  }

  /**
   * Gets the specified authorization from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitPeering} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName: string, circuitName: string, peeringName: string): Promise<Models.ExpressRouteCircuitPeering>;
  get(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
  get(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  get(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  get(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): any {
    return msRest.responseToBody(this.getWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, options, callback);
  }

  /**
   * Creates or updates a peering in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to the create or
   * update express route circuit peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitPeering} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering): Promise<Models.ExpressRouteCircuitPeering>;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): any {
    return msRest.responseToBody(this.createOrUpdateWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, peeringParameters, options, callback);
  }

  /**
   * Gets all peerings in a specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitPeeringListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitPeeringListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string, circuitName: string): Promise<Models.ExpressRouteCircuitPeeringListResult>;
  list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeeringListResult>;
  list(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
  list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
  list(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, options, callback);
  }

  /**
   * Deletes the specified peering from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string): Promise<void>;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<void>): void;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.beginDeleteMethodWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, options, callback);
  }

  /**
   * Creates or updates a peering in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to the create or
   * update express route circuit peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitPeering} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering): Promise<Models.ExpressRouteCircuitPeering>;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): any {
    return msRest.responseToBody(this.beginCreateOrUpdateWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, peeringParameters, options, callback);
  }

  /**
   * Gets all peerings in a specified express route circuit.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitPeeringListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitPeeringListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink: string): Promise<Models.ExpressRouteCircuitPeeringListResult>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeeringListResult>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): any {
    return msRest.responseToBody(this.listNextWithHttpOperationResponse.bind(this), nextPageLink, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
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
      bodyMapper: Mappers.ExpressRouteCircuitPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      bodyMapper: Mappers.ExpressRouteCircuitPeeringListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "peeringParameters",
    mapper: {
      ...Mappers.ExpressRouteCircuitPeering,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitPeering
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
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
      bodyMapper: Mappers.ExpressRouteCircuitPeeringListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
