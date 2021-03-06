/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/routesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a Routes. */
export class Routes {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a Routes.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified route from a route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {string} routeName The name of the route.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, routeTableName, routeName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified route from a route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {string} routeName The name of the route.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, routeTableName: string, routeName: string): Promise<Models.RoutesGetResponse>;
  get(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase): Promise<Models.RoutesGetResponse>;
  get(resourceGroupName: string, routeTableName: string, routeName: string, callback: msRest.ServiceCallback<Models.Route>): void;
  get(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Route>): void;
  get(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Route>): Promise<Models.RoutesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeTableName,
        routeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RoutesGetResponse>;
  }


  /**
   * Creates or updates a route in the specified route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {string} routeName The name of the route.
   *
   * @param {Route} routeParameters Parameters supplied to the create or update route operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options?: msRest.RequestOptionsBase): Promise<Models.RoutesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, routeTableName, routeName, routeParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RoutesCreateOrUpdateResponse>;
  }

  /**
   * Gets all routes in a route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, routeTableName: string): Promise<Models.RoutesListResponse>;
  list(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase): Promise<Models.RoutesListResponse>;
  list(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
  list(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
  list(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteListResult>): Promise<Models.RoutesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeTableName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RoutesListResponse>;
  }

  /**
   * Deletes the specified route from a route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {string} routeName The name of the route.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeTableName,
        routeName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a route in the specified route table.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeTableName The name of the route table.
   *
   * @param {string} routeName The name of the route.
   *
   * @param {Route} routeParameters Parameters supplied to the create or update route operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeTableName,
        routeName,
        routeParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all routes in a route table.
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
  listNext(nextPageLink: string): Promise<Models.RoutesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RoutesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteListResult>): Promise<Models.RoutesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RoutesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.routeName,
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
      bodyMapper: Mappers.Route
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
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
      bodyMapper: Mappers.RouteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.routeName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeTableName,
    Parameters.routeName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "routeParameters",
    mapper: {
      ...Mappers.Route,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Route
    },
    201: {
      bodyMapper: Mappers.Route
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
      bodyMapper: Mappers.RouteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
