# DocspaceApiTypescript.SettingsMessagesApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enableAdminMessageSettings**](SettingsMessagesApi.md#enableAdminMessageSettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
[**sendAdminMail**](SettingsMessagesApi.md#sendAdminMail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
[**sendJoinInviteMail**](SettingsMessagesApi.md#sendJoinInviteMail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email



## enableAdminMessageSettings

> StringWrapper enableAdminMessageSettings(opts)

Enable the administrator message settings

Displays the contact form on the \&quot;Sign In\&quot; page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';
let defaultClient = DocspaceApiTypescript.ApiClient.instance;
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

let apiInstance = new DocspaceApiTypescript.SettingsMessagesApi();
let opts = {
  'turnOnAdminMessageSettingsRequestDto': new DocspaceApiTypescript.TurnOnAdminMessageSettingsRequestDto() // TurnOnAdminMessageSettingsRequestDto | 
};
apiInstance.enableAdminMessageSettings(opts, (error, data, response) => {
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
 **turnOnAdminMessageSettingsRequestDto** | [**TurnOnAdminMessageSettingsRequestDto**](TurnOnAdminMessageSettingsRequestDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendAdminMail

> StringWrapper sendAdminMail(opts)

Send a message to the administrator

Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';

let apiInstance = new DocspaceApiTypescript.SettingsMessagesApi();
let opts = {
  'adminMessageSettingsRequestsDto': new DocspaceApiTypescript.AdminMessageSettingsRequestsDto() // AdminMessageSettingsRequestsDto | 
};
apiInstance.sendAdminMail(opts, (error, data, response) => {
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
 **adminMessageSettingsRequestsDto** | [**AdminMessageSettingsRequestsDto**](AdminMessageSettingsRequestsDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendJoinInviteMail

> StringWrapper sendJoinInviteMail(opts)

Sends an invitation email

Sends an invitation email with a link to the DocSpace.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';

let apiInstance = new DocspaceApiTypescript.SettingsMessagesApi();
let opts = {
  'adminMessageBaseSettingsRequestsDto': new DocspaceApiTypescript.AdminMessageBaseSettingsRequestsDto() // AdminMessageBaseSettingsRequestsDto | 
};
apiInstance.sendJoinInviteMail(opts, (error, data, response) => {
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
 **adminMessageBaseSettingsRequestsDto** | [**AdminMessageBaseSettingsRequestsDto**](AdminMessageBaseSettingsRequestsDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

