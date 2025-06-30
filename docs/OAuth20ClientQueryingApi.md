# DocspaceApiTypescript.OAuth20ClientQueryingApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClient**](OAuth20ClientQueryingApi.md#getClient) | **GET** /api/2.0/clients/{clientId} | Get client details
[**getClientInfo**](OAuth20ClientQueryingApi.md#getClientInfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information
[**getClients**](OAuth20ClientQueryingApi.md#getClients) | **GET** /api/2.0/clients | Get clients
[**getClientsInfo**](OAuth20ClientQueryingApi.md#getClientsInfo) | **GET** /api/2.0/clients/info | Get detailed information of clients
[**getConsents**](OAuth20ClientQueryingApi.md#getConsents) | **GET** /api/2.0/clients/consents | Get user consents
[**getPublicClientInfo**](OAuth20ClientQueryingApi.md#getPublicClientInfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information



## getClient

> ClientResponse getClient(clientId)

Get client details

Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.getClient(clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

[**ClientResponse**](ClientResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientInfo

> ClientInfoResponse getClientInfo(clientId)

Get detailed client information

Retrieves the detailed information for a client with the ID specified in the request.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.getClientInfo(clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

[**ClientInfoResponse**](ClientInfoResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClients

> PageableResponse getClients(limit, opts)

Get clients

Retrieves a paginated list of OAuth2 clients. The results can be paginated using the &#39;limit&#39; parameter and the last seen client ID or creation date.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let limit = 1; // Number | The maximum number of results returned per page.
let opts = {
  'lastClientId': "6c7cf17b-1bd3-47d5-94c6-be2d3570e168", // String | The ID of the last retrieved client.
  'lastCreatedOn': new Date("2024-04-04T12:00:00Z") // Date | The creation date of the last retrieved client.
};
apiInstance.getClients(limit, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of results returned per page. | 
 **lastClientId** | **String**| The ID of the last retrieved client. | [optional] 
 **lastCreatedOn** | **Date**| The creation date of the last retrieved client. | [optional] 

### Return type

[**PageableResponse**](PageableResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientsInfo

> PageableResponseClientInfoResponse getClientsInfo(limit, opts)

Get detailed information of clients

Retrieves a paginated list of information for all clients.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let limit = 1; // Number | The maximum number of results returned per page.
let opts = {
  'lastClientId': "6c7cf17b-1bd3-47d5-94c6-be2d3570e168", // String | The identifier of the last retrieved client.
  'lastCreatedOn': new Date("2024-04-04T12:00:00Z") // Date | The creation date of the last retrieved client.
};
apiInstance.getClientsInfo(limit, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of results returned per page. | 
 **lastClientId** | **String**| The identifier of the last retrieved client. | [optional] 
 **lastCreatedOn** | **Date**| The creation date of the last retrieved client. | [optional] 

### Return type

[**PageableResponseClientInfoResponse**](PageableResponseClientInfoResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConsents

> PageableModificationResponse getConsents(limit, opts)

Get user consents

Retrieves a paginated list of user consents.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let limit = 1; // Number | The maximum number of results returned per page.
let opts = {
  'lastModifiedOn': new Date("2024-04-04T12:00:00Z") // Date | The date when the user consent was last modified.
};
apiInstance.getConsents(limit, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of results returned per page. | 
 **lastModifiedOn** | **Date**| The date when the user consent was last modified. | [optional] 

### Return type

[**PageableModificationResponse**](PageableModificationResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPublicClientInfo

> ClientInfoResponse getPublicClientInfo(clientId)

Get public client information

Returns the public information for a client with the ID secified din the request.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';

let apiInstance = new DocspaceApiTypescript.OAuth20ClientQueryingApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.getPublicClientInfo(clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

[**ClientInfoResponse**](ClientInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

