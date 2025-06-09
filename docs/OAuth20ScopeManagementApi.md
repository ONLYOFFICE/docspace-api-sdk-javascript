# Api.OAuth20ScopeManagementApi

All URIs are relative to *http://http:*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScopes**](OAuth20ScopeManagementApi.md#getScopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes



## getScopes

> ScopeResponse getScopes()

Get available OAuth2 scopes

Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the &#39;openid&#39; scope always appearing first.

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new Api.OAuth20ScopeManagementApi();
apiInstance.getScopes((error, data, response) => {
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

[**ScopeResponse**](ScopeResponse.md)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

