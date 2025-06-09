# Api.PeopleProfilesApi

All URIs are relative to *http://http:*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMember**](PeopleProfilesApi.md#addMember) | **POST** /api/2.0/people | Add a user
[**deleteMember**](PeopleProfilesApi.md#deleteMember) | **DELETE** /api/2.0/people/{userid} | Delete a user
[**deleteProfile**](PeopleProfilesApi.md#deleteProfile) | **DELETE** /api/2.0/people/@self | Delete my profile
[**getAllProfiles**](PeopleProfilesApi.md#getAllProfiles) | **GET** /api/2.0/people | Get profiles
[**getClaims**](PeopleProfilesApi.md#getClaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.
[**getProfileByEmail**](PeopleProfilesApi.md#getProfileByEmail) | **GET** /api/2.0/people/email | Get a profile by user email
[**getProfileByUserId**](PeopleProfilesApi.md#getProfileByUserId) | **GET** /api/2.0/people/{userid} | Get a profile by user name
[**getSelfProfile**](PeopleProfilesApi.md#getSelfProfile) | **GET** /api/2.0/people/@self | Get my profile
[**inviteUsers**](PeopleProfilesApi.md#inviteUsers) | **POST** /api/2.0/people/invite | Invite users
[**removeUsers**](PeopleProfilesApi.md#removeUsers) | **PUT** /api/2.0/people/delete | Delete users
[**resendUserInvites**](PeopleProfilesApi.md#resendUserInvites) | **PUT** /api/2.0/people/invite | Resend activation emails
[**sendEmailChangeInstructions**](PeopleProfilesApi.md#sendEmailChangeInstructions) | **POST** /api/2.0/people/email | Send instructions to change email
[**updateMember**](PeopleProfilesApi.md#updateMember) | **PUT** /api/2.0/people/{userid} | Update a user
[**updateMemberCulture**](PeopleProfilesApi.md#updateMemberCulture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code



## addMember

> EmployeeFullWrapper addMember(opts)

Add a user

Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'memberRequestDto': new Api.MemberRequestDto() // MemberRequestDto | 
};
apiInstance.addMember(opts, (error, data, response) => {
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
 **memberRequestDto** | [**MemberRequestDto**](MemberRequestDto.md)|  | [optional] 

### Return type

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMember

> EmployeeFullWrapper deleteMember(userid)

Delete a user

Deletes a user with the ID specified in the request from the portal.

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

let apiInstance = new Api.PeopleProfilesApi();
let userid = "9846"; // String | The user ID.
apiInstance.deleteMember(userid, (error, data, response) => {
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

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProfile

> EmployeeFullWrapper deleteProfile()

Delete my profile

Deletes the current user profile.

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

let apiInstance = new Api.PeopleProfilesApi();
apiInstance.deleteProfile((error, data, response) => {
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

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllProfiles

> EmployeeFullArrayWrapper getAllProfiles(opts)

Get profiles

Returns a list of profiles for all the portal users.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'count': 1234, // Number | The maximum number of items to be retrieved in the response.
  'startIndex': 1234, // Number | The zero-based index of the first item to be retrieved in a filtered result set.
  'filterBy': "some text", // String | Specifies the filter criteria for user-related queries.
  'sortBy': "some text", // String | Specifies the property or field name by which the results should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterSeparator': "some text", // String | The character or string used to separate multiple filter values in a filtering query.
  'filterValue': "some text" // String | The text value used as an additional filter criterion for profiles retrieval.
};
apiInstance.getAllProfiles(opts, (error, data, response) => {
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
 **count** | **Number**| The maximum number of items to be retrieved in the response. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first item to be retrieved in a filtered result set. | [optional] 
 **filterBy** | **String**| Specifies the filter criteria for user-related queries. | [optional] 
 **sortBy** | **String**| Specifies the property or field name by which the results should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterSeparator** | **String**| The character or string used to separate multiple filter values in a filtering query. | [optional] 
 **filterValue** | **String**| The text value used as an additional filter criterion for profiles retrieval. | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClaims

> ObjectWrapper getClaims()

Returns the user claims.

Returns the user claims.

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

let apiInstance = new Api.PeopleProfilesApi();
apiInstance.getClaims((error, data, response) => {
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

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfileByEmail

> EmployeeFullWrapper getProfileByEmail(opts)

Get a profile by user email

Returns the detailed information about a profile of the user with the email specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'email': "Sydney_Roberts4@hotmail.com", // String | The user email address.
  'culture': "some text" // String | Culture
};
apiInstance.getProfileByEmail(opts, (error, data, response) => {
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
 **email** | **String**| The user email address. | [optional] 
 **culture** | **String**| Culture | [optional] 

### Return type

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfileByUserId

> EmployeeFullWrapper getProfileByUserId(userid)

Get a profile by user name

Returns the detailed information about a profile of the user with the name specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let userid = "9846"; // String | The user ID.
apiInstance.getProfileByUserId(userid, (error, data, response) => {
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

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfProfile

> EmployeeFullWrapper getSelfProfile()

Get my profile

Returns the detailed information about the current user profile.

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

let apiInstance = new Api.PeopleProfilesApi();
apiInstance.getSelfProfile((error, data, response) => {
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

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUsers

> EmployeeArrayWrapper inviteUsers(opts)

Invite users

Invites users specified in the request to the current portal.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'inviteUsersRequestDto': new Api.InviteUsersRequestDto() // InviteUsersRequestDto | 
};
apiInstance.inviteUsers(opts, (error, data, response) => {
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
 **inviteUsersRequestDto** | [**InviteUsersRequestDto**](InviteUsersRequestDto.md)|  | [optional] 

### Return type

[**EmployeeArrayWrapper**](EmployeeArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeUsers

> EmployeeFullArrayWrapper removeUsers(opts)

Delete users

Deletes a list of the users with the IDs specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | 
};
apiInstance.removeUsers(opts, (error, data, response) => {
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
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)|  | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendUserInvites

> EmployeeFullArrayWrapper resendUserInvites(opts)

Resend activation emails

Resends emails to the users who have not activated their emails.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | 
};
apiInstance.resendUserInvites(opts, (error, data, response) => {
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
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)|  | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendEmailChangeInstructions

> StringWrapper sendEmailChangeInstructions(opts)

Send instructions to change email

Sends a message to the user email with the instructions to change the email address connected to the portal.

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

let apiInstance = new Api.PeopleProfilesApi();
let opts = {
  'updateMemberRequestDto': new Api.UpdateMemberRequestDto() // UpdateMemberRequestDto | 
};
apiInstance.sendEmailChangeInstructions(opts, (error, data, response) => {
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
 **updateMemberRequestDto** | [**UpdateMemberRequestDto**](UpdateMemberRequestDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMember

> EmployeeFullWrapper updateMember(userid, opts)

Update a user

Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let userid = "9846"; // String | The user ID.
let opts = {
  'updateMemberRequestDto': new Api.UpdateMemberRequestDto() // UpdateMemberRequestDto | The request parameters for updating the user information.
};
apiInstance.updateMember(userid, opts, (error, data, response) => {
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
 **updateMemberRequestDto** | [**UpdateMemberRequestDto**](UpdateMemberRequestDto.md)| The request parameters for updating the user information. | [optional] 

### Return type

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMemberCulture

> EmployeeFullWrapper updateMemberCulture(userid, opts)

Update a user culture code

Updates the user culture code with the parameters specified in the request.

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

let apiInstance = new Api.PeopleProfilesApi();
let userid = "9846"; // String | The user ID.
let opts = {
  'culture': new Api.Culture() // Culture | The culture code parameters.
};
apiInstance.updateMemberCulture(userid, opts, (error, data, response) => {
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
 **culture** | [**Culture**](Culture.md)| The culture code parameters. | [optional] 

### Return type

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

