# Api.SettingsLoginSettingsApi

All URIs are relative to *http://http:*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLoginSettings**](SettingsLoginSettingsApi.md#getLoginSettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings
[**setDefaultLoginSettings**](SettingsLoginSettingsApi.md#setDefaultLoginSettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings
[**updateLoginSettings**](SettingsLoginSettingsApi.md#updateLoginSettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings



## getLoginSettings

> LoginSettingsWrapper getLoginSettings()

Get the login settings

Returns the portal login settings.

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

let apiInstance = new Api.SettingsLoginSettingsApi();
apiInstance.getLoginSettings((error, data, response) => {
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

[**LoginSettingsWrapper**](LoginSettingsWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setDefaultLoginSettings

> LoginSettingsWrapper setDefaultLoginSettings()

Reset the login settings

Resets the portal login settings to default.

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

let apiInstance = new Api.SettingsLoginSettingsApi();
apiInstance.setDefaultLoginSettings((error, data, response) => {
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

[**LoginSettingsWrapper**](LoginSettingsWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLoginSettings

> LoginSettingsWrapper updateLoginSettings(opts)

Update the login settings

Updates the login settings with the parameters specified in the request.

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

let apiInstance = new Api.SettingsLoginSettingsApi();
let opts = {
  'loginSettingsRequestDto': new Api.LoginSettingsRequestDto() // LoginSettingsRequestDto | 
};
apiInstance.updateLoginSettings(opts, (error, data, response) => {
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
 **loginSettingsRequestDto** | [**LoginSettingsRequestDto**](LoginSettingsRequestDto.md)|  | [optional] 

### Return type

[**LoginSettingsWrapper**](LoginSettingsWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

