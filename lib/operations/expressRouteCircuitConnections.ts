/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/expressRouteCircuitConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCircuitConnections. */
export class ExpressRouteCircuitConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCircuitConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, circuitName, peeringName, connectionName, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {

        // Deserialize Response
        return operationRes;
      });
  }

  /**
   * Gets the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitConnection>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        options
      },
      getOperationSpec);
  }


  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {ExpressRouteCircuitConnection} expressRouteCircuitConnectionParameters Parameters
   * supplied to the create or update express route circuit circuit connection operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, circuitName, peeringName, connectionName, expressRouteCircuitConnectionParameters, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {
        let httpRequest = operationRes.request;

        // Deserialize Response
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        if (parsedResponse != undefined) {
          try {
            const serializer = new msRest.Serializer(Mappers);
            operationRes.parsedBody = serializer.deserialize(Mappers.ExpressRouteCircuitConnection, parsedResponse, "operationRes.parsedBody")
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
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        options
      },
      beginDeleteMethodOperationSpec);
  }

  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {ExpressRouteCircuitConnection} expressRouteCircuitConnectionParameters Parameters
   * supplied to the create or update express route circuit circuit connection operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ExpressRouteCircuitConnection>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        expressRouteCircuitConnectionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec);
  }

  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
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
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string): Promise<void>;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase): Promise<void>;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, connectionName, options, callback);
  }

  /**
   * Gets the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitConnection} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitConnection} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string): Promise<Models.ExpressRouteCircuitConnection>;
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitConnection>;
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): any {
    return msRest.responseToBody(this.getWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, connectionName, options, callback);
  }

  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {ExpressRouteCircuitConnection} expressRouteCircuitConnectionParameters Parameters
   * supplied to the create or update express route circuit circuit connection operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitConnection} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitConnection} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection): Promise<Models.ExpressRouteCircuitConnection>;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitConnection>;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): any {
    return msRest.responseToBody(this.createOrUpdateWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, connectionName, expressRouteCircuitConnectionParameters, options, callback);
  }

  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
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
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string): Promise<void>;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase): Promise<void>;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, callback: msRest.ServiceCallback<void>): void;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.beginDeleteMethodWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, connectionName, options, callback);
  }

  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} peeringName The name of the peering.
   *
   * @param {string} connectionName The name of the express route circuit connection.
   *
   * @param {ExpressRouteCircuitConnection} expressRouteCircuitConnectionParameters Parameters
   * supplied to the create or update express route circuit circuit connection operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ExpressRouteCircuitConnection} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ExpressRouteCircuitConnection} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection): Promise<Models.ExpressRouteCircuitConnection>;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitConnection>;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): any {
    return msRest.responseToBody(this.beginCreateOrUpdateWithHttpOperationResponse.bind(this), resourceGroupName, circuitName, peeringName, connectionName, expressRouteCircuitConnectionParameters, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
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
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "expressRouteCircuitConnectionParameters",
    mapper: {
      ...Mappers.ExpressRouteCircuitConnection,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
