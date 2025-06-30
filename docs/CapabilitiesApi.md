# DocspaceApiTypescript.CapabilitiesApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPortalCapabilities**](CapabilitiesApi.md#getPortalCapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities



## getPortalCapabilities

> CapabilitiesWrapper getPortalCapabilities()

Get portal capabilities

Returns the information about portal capabilities.

### Example

```javascript
import DocspaceApiTypescript from 'docspace-api-typescript';

let apiInstance = new DocspaceApiTypescript.CapabilitiesApi();
apiInstance.getPortalCapabilities((error, data, response) => {
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

[**CapabilitiesWrapper**](CapabilitiesWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

