# Api.SecurityAuditTrailDataApi

All URIs are relative to *http://http:*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuditTrailReport**](SecurityAuditTrailDataApi.md#createAuditTrailReport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report
[**getAuditEventsByFilter**](SecurityAuditTrailDataApi.md#getAuditEventsByFilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data
[**getAuditSettings**](SecurityAuditTrailDataApi.md#getAuditSettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings
[**getAuditTrailMappers**](SecurityAuditTrailDataApi.md#getAuditTrailMappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers
[**getAuditTrailTypes**](SecurityAuditTrailDataApi.md#getAuditTrailTypes) | **GET** /api/2.0/security/audit/types | Get audit trail types
[**getLastAuditEvents**](SecurityAuditTrailDataApi.md#getLastAuditEvents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data
[**setAuditSettings**](SecurityAuditTrailDataApi.md#setAuditSettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings



## createAuditTrailReport

> StringWrapper createAuditTrailReport()

Generate the audit trail report

Generates the audit trail report.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SecurityAuditTrailDataApi();
apiInstance.createAuditTrailReport((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditEventsByFilter

> AuditEventArrayWrapper getAuditEventsByFilter(opts)

Get filtered audit trail data

Returns a list of the audit events by the parameters specified in the request.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SecurityAuditTrailDataApi();
let opts = {
  'userId': "aae1e103-bca5-9fa1-ba8c-42058b4abf28", // String | The ID of the user who triggered the audit event.
  'productType': new Api.ProductType(), // ProductType | The type of product related to the audit event.
  'moduleType': new Api.ModuleType(), // ModuleType | The module within the product where the audit event occurred.
  'actionType': new Api.ActionType(), // ActionType | The type of action performed in the audit event (e.g., Create, Update, Delete).
  'action': new Api.MessageAction(), // MessageAction | The specific action that occurred within the audit event.
  'entryType': new Api.EntryType(), // EntryType | The type of audit entry (e.g., Folder, User, File).
  'target': "some text", // String | The target object affected by the audit event (e.g., document ID, user account).
  'from': new Api.ApiDateTime(), // ApiDateTime | The starting date and time for filtering audit events.
  'to': new Api.ApiDateTime(), // ApiDateTime | The ending date and time for filtering audit events.
  'count': 1234, // Number | The maximum number of audit event records to retrieve.
  'startIndex': 1234 // Number | The index of the first audit event record to retrieve in a paged query.
};
apiInstance.getAuditEventsByFilter(opts, (error, data, response) => {
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
 **userId** | **String**| The ID of the user who triggered the audit event. | [optional] 
 **productType** | [**ProductType**](.md)| The type of product related to the audit event. | [optional] 
 **moduleType** | [**ModuleType**](.md)| The module within the product where the audit event occurred. | [optional] 
 **actionType** | [**ActionType**](.md)| The type of action performed in the audit event (e.g., Create, Update, Delete). | [optional] 
 **action** | [**MessageAction**](.md)| The specific action that occurred within the audit event. | [optional] 
 **entryType** | [**EntryType**](.md)| The type of audit entry (e.g., Folder, User, File). | [optional] 
 **target** | **String**| The target object affected by the audit event (e.g., document ID, user account). | [optional] 
 **from** | [**ApiDateTime**](.md)| The starting date and time for filtering audit events. | [optional] 
 **to** | [**ApiDateTime**](.md)| The ending date and time for filtering audit events. | [optional] 
 **count** | **Number**| The maximum number of audit event records to retrieve. | [optional] 
 **startIndex** | **Number**| The index of the first audit event record to retrieve in a paged query. | [optional] 

### Return type

[**AuditEventArrayWrapper**](AuditEventArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditSettings

> TenantAuditSettingsWrapper getAuditSettings()

Get the audit trail settings

Returns the audit trail settings.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SecurityAuditTrailDataApi();
apiInstance.getAuditSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TenantAuditSettingsWrapper**](TenantAuditSettingsWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditTrailMappers

> ObjectWrapper getAuditTrailMappers(opts)

Get audit trail mappers

Returns the mappers for the audit trail types.

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.SecurityAuditTrailDataApi();
let opts = {
  'productType': new Api.ProductType(), // ProductType | The type of product related to the audit trail.
  'moduleType': new Api.ModuleType() // ModuleType | The module within the product associated with the audit trail.
};
apiInstance.getAuditTrailMappers(opts, (error, data, response) => {
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
 **productType** | [**ProductType**](.md)| The type of product related to the audit trail. | [optional] 
 **moduleType** | [**ModuleType**](.md)| The module within the product associated with the audit trail. | [optional] 

### Return type

[**ObjectWrapper**](ObjectWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditTrailTypes

> ObjectWrapper getAuditTrailTypes()

Get audit trail types

Returns all the available audit trail types.

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.SecurityAuditTrailDataApi();
apiInstance.getAuditTrailTypes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectWrapper**](ObjectWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLastAuditEvents

> AuditEventArrayWrapper getLastAuditEvents()

Get audit trail data

Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SecurityAuditTrailDataApi();
apiInstance.getLastAuditEvents((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuditEventArrayWrapper**](AuditEventArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setAuditSettings

> TenantAuditSettingsWrapper setAuditSettings(opts)

Set the audit trail settings

Sets the audit trail settings for the current portal.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SecurityAuditTrailDataApi();
let opts = {
  'tenantAuditSettingsWrapper': new Api.TenantAuditSettingsWrapper() // TenantAuditSettingsWrapper | 
};
apiInstance.setAuditSettings(opts, (error, data, response) => {
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
 **tenantAuditSettingsWrapper** | [**TenantAuditSettingsWrapper**](TenantAuditSettingsWrapper.md)|  | [optional] 

### Return type

[**TenantAuditSettingsWrapper**](TenantAuditSettingsWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

