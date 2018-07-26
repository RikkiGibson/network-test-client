/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/applicationSecurityGroupsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ApplicationSecurityGroups. */
export class ApplicationSecurityGroups {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ApplicationSecurityGroups.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified application security group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationSecurityGroupName The name of the application security group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginDeleteMethod(resourceGroupName, applicationSecurityGroupName, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {

        // Deserialize Response
        return operationRes;
      });
  }

  /**
   * Gets information about the specified application security group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationSecurityGroupName The name of the application security group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroup>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        options
      },
      getOperationSpec);
  }


  /**
   * Creates or updates an application security group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationSecurityGroupName The name of the application security group.
   *
   * @param {ApplicationSecurityGroup} parameters Parameters supplied to the create or update
   * ApplicationSecurityGroup operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, applicationSecurityGroupName, parameters, options)
      .then(initialResult => this.client.getLongRunningOperationResult(initialResult, options))
      .then(operationRes => {
        let httpRequest = operationRes.request;

        // Deserialize Response
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        if (parsedResponse != undefined) {
          try {
            const serializer = new msRest.Serializer(Mappers);
            operationRes.parsedBody = serializer.deserialize(Mappers.ApplicationSecurityGroup, parsedResponse, "operationRes.parsedBody")
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
   * Gets all application security groups in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroupListResult>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec);
  }

  /**
   * Gets all the application security groups in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroupListResult>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec);
  }

  /**
   * Deletes the specified application security group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationSecurityGroupName The name of the application security group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        options
      },
      beginDeleteMethodOperationSpec);
  }

  /**
   * Creates or updates an application security group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationSecurityGroupName The name of the application security group.
   *
   * @param {ApplicationSecurityGroup} parameters Parameters supplied to the create or update
   * ApplicationSecurityGroup operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroup>> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec);
  }

  /**
   * Gets all application security groups in a subscription.
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
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroupListResult>> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec);
  }

  /**
   * Gets all the application security groups in a resource group.
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
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ApplicationSecurityGroupListResult>> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
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
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationSecurityGroups",
  urlParameters: [
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
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplicationSecurityGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    201: {
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
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
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
