/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/availableEndpointServicesMappers";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a AvailableEndpointServices. */
export class AvailableEndpointServices {
  private readonly client: NetworkManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
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
  async listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EndpointServicesListResult>> {
    let apiVersion = '2018-04-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          location,
          apiVersion,
          "this.client.subscriptionId": this.client.subscriptionId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/virtualNetworkAvailableEndpointServices",
          urlParameters: [
            {
              parameterPath: "location",
              mapper: {
                required: true,
                serializedName: "location",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "this.client.subscriptionId",
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
              parameterPath: "this.client.acceptLanguage",
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
              bodyMapper: Mappers.EndpointServicesListResult
            },
            default: {
              bodyMapper: Mappers.CloudError
            }
          },
          serializer: this.serializer
        });
      // Deserialize Response
      let statusCode = operationRes.status;
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse != undefined) {
            const resultMapper = Mappers.EndpointServicesListResult;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
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
  async listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EndpointServicesListResult>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          nextPageLink,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
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
              parameterPath: "this.client.acceptLanguage",
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
              bodyMapper: Mappers.EndpointServicesListResult
            },
            default: {
              bodyMapper: Mappers.CloudError
            }
          },
          serializer: this.serializer
        });
      // Deserialize Response
      let statusCode = operationRes.status;
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse != undefined) {
            const resultMapper = Mappers.EndpointServicesListResult;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
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
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.EndpointServicesListResult>;
    if (!callback) {
      return this.listWithHttpOperationResponse(location, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.EndpointServicesListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(location, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.EndpointServicesListResult;
        return cb(err, result, data.request, data);
      });
    }
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
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.EndpointServicesListResult>;
    if (!callback) {
      return this.listNextWithHttpOperationResponse(nextPageLink, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.EndpointServicesListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.EndpointServicesListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

}
