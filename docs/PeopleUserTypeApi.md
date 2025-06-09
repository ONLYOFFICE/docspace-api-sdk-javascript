# Api.PeopleUserTypeApi

All URIs are relative to *http://http:*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserTypeUpdateProgress**](PeopleUserTypeApi.md#getUserTypeUpdateProgress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type
[**starUserTypetUpdate**](PeopleUserTypeApi.md#starUserTypetUpdate) | **POST** /api/2.0/people/type | Update user type
[**terminateUserTypeUpdate**](PeopleUserTypeApi.md#terminateUserTypeUpdate) | **PUT** /api/2.0/people/type/terminate | Terminate update user type
[**updateUserType**](PeopleUserTypeApi.md#updateUserType) | **PUT** /api/2.0/people/type/{type} | Change a user type



## getUserTypeUpdateProgress

> TaskProgressResponseWrapper getUserTypeUpdateProgress(userid)

Get the progress of updating user type

Returns the progress of updating the user type.

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

let apiInstance = new Api.PeopleUserTypeApi();
let userid = "aae1e103-bca5-9fa1-ba8c-42058b4abf28"; // String | The user ID.
apiInstance.getUserTypeUpdateProgress(userid, (error, data, response) => {
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
 **userid** | **String**| The user ID. | 

### Return type

[**TaskProgressResponseWrapper**](TaskProgressResponseWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## starUserTypetUpdate

> TaskProgressResponseWrapper starUserTypetUpdate(opts)

Update user type

Starts updating the type of the user or guest when reassigning rooms and shared files.

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

let apiInstance = new Api.PeopleUserTypeApi();
let opts = {
  'startUpdateUserTypeDto': new Api.StartUpdateUserTypeDto() // StartUpdateUserTypeDto | 
};
apiInstance.starUserTypetUpdate(opts, (error, data, response) => {
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
 **startUpdateUserTypeDto** | [**StartUpdateUserTypeDto**](StartUpdateUserTypeDto.md)|  | [optional] 

### Return type

[**TaskProgressResponseWrapper**](TaskProgressResponseWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## terminateUserTypeUpdate

> TaskProgressResponseWrapper terminateUserTypeUpdate(opts)

Terminate update user type

Terminates the process of updating the type of the user or guest.

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

let apiInstance = new Api.PeopleUserTypeApi();
let opts = {
  'terminateRequestDto': new Api.TerminateRequestDto() // TerminateRequestDto | 
};
apiInstance.terminateUserTypeUpdate(opts, (error, data, response) => {
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
 **terminateRequestDto** | [**TerminateRequestDto**](TerminateRequestDto.md)|  | [optional] 

### Return type

[**TaskProgressResponseWrapper**](TaskProgressResponseWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserType

> EmployeeFullArrayWrapper updateUserType(type, opts)

Change a user type

Changes a type of the users with the IDs specified in the request.

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

let apiInstance = new Api.PeopleUserTypeApi();
let type = new Api.EmployeeType(); // EmployeeType | The new user type.
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | The request parameters for updating the user information.
};
apiInstance.updateUserType(type, opts, (error, data, response) => {
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
 **type** | [**EmployeeType**](.md)| The new user type. | 
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)| The request parameters for updating the user information. | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

