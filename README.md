# @onlyoffice/docspace-api-sdk-javascript

The ONLYOFFICE DocSpace SDK for JavaScript is a library that provides tools for integrating and managing DocSpace features within your applications. It simplifies interaction with the DocSpace TypeScript API by offering ready-to-use methods and models.

- API version: 3.2.0
- SDK version: 1.0.0

For more information, please visit [https://helpdesk.onlyoffice.com/hc/en-us](https://helpdesk.onlyoffice.com/hc/en-us)

## Installation

### Using [Node.js](https://nodejs.org/)

#### npm

To publish the library as an [npm](https://www.npmjs.com/) package, please follow the instructions [here](https://docs.npmjs.com/getting-started/publishing-npm-packages).

To install the package, run:

```shell
npm install @onlyoffice/docspace-api-sdk-javascript --save
```

Finally, build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing it to a remote npm registry:

1. Navigate to the directory containing `package.json` (and this `README.md` file). Let's refer to this path as `JAVASCRIPT_CLIENT_DIR`.

2. Install dependencies:

```shell
npm install
```

3. Link the package globally:

```shell
npm link
```

4. Switch to the directory you want to use your @onlyoffice/docspace-api-sdk-javascript from.

5. To use the link defined in your project, run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

6. Build the module:

```shell
npm run build
```

#### Git

If the library is hosted in a Git repository (e.g., https://github.com/GIT_USER_ID/GIT_REPO_ID), you can install it directly:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### Using browser

The library also works in the browser environment via npm and [Browserify](http://browserify.org/):

1. Follow the instructions from the [Using Node.js](https://nodejs.org/en) section. 

2. Install Browserify:

```shell
npm install -g browserify
```

3. Assuming `main.js` is your entry file, bundle the code:

```shell
browserify main.js > bundle.js
```

4. Include `bundle.js` in the HTML pages.

### Webpack Configuration

When using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module". You should probably disable the AMD loader. Add/merge
the following section to your Webpack configuration:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Documentation for Authorization


Authentication schemes defined for the API:
### asc_auth_key


- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: Cookie

### Basic

- **Type**: HTTP basic authentication

### Bearer

- **Type**: Bearer authentication (JWT)

### ApiKeyBearer


- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Token Url**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources

### OpenId

- **Type**: OpenId Connect
- **OpenId Connect URL**: 

### x-signature


- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: Cookie


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Api = require('@onlyoffice/docspace-api-sdk-javascript');

var defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: ApiKeyBearer
var ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix['ApiKeyBearer'] = "Token"
// Configure API key authorization: asc_auth_key
var asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix['asc_auth_key'] = "Token"
// Configure Bearer (JWT) access token for authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

var api = new Api.ApiKeysApi()
var opts = {
  'createApiKeyRequestDto': new Api.CreateApiKeyRequestDto() // {CreateApiKeyRequestDto} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createApiKey(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8092*

<details><summary>API Endoints table</summary>
Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Api.ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createApiKey) | **POST** /api/2.0/keys | Create a user API key
*Api.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteApiKey) | **DELETE** /api/2.0/keys/{keyId} | Delete a user API key
*Api.ApiKeysApi* | [**getAllPermissions**](docs/ApiKeysApi.md#getAllPermissions) | **GET** /api/2.0/keys/permissions | Get API key permissions
*Api.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getApiKey) | **GET** /api/2.0/keys/@self | Get user API key info
*Api.ApiKeysApi* | [**getApiKeys**](docs/ApiKeysApi.md#getApiKeys) | **GET** /api/2.0/keys | Get user API keys
*Api.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateApiKey) | **PUT** /api/2.0/keys/{keyId} | Update an API key
*Api.AuthenticationApi* | [**authenticateMe**](docs/AuthenticationApi.md#authenticateMe) | **POST** /api/2.0/authentication | Authenticate a user
*Api.AuthenticationApi* | [**authenticateMeFromBodyWithCode**](docs/AuthenticationApi.md#authenticateMeFromBodyWithCode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code
*Api.AuthenticationApi* | [**checkConfirm**](docs/AuthenticationApi.md#checkConfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL
*Api.AuthenticationApi* | [**getIsAuthentificated**](docs/AuthenticationApi.md#getIsAuthentificated) | **GET** /api/2.0/authentication | Check authentication
*Api.AuthenticationApi* | [**logout**](docs/AuthenticationApi.md#logout) | **POST** /api/2.0/authentication/logout | Log out
*Api.AuthenticationApi* | [**saveMobilePhone**](docs/AuthenticationApi.md#saveMobilePhone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone
*Api.AuthenticationApi* | [**sendSmsCode**](docs/AuthenticationApi.md#sendSmsCode) | **POST** /api/2.0/authentication/sendsms | Send SMS code
*Api.BackupApi* | [**createBackupSchedule**](docs/BackupApi.md#createBackupSchedule) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule
*Api.BackupApi* | [**deleteBackup**](docs/BackupApi.md#deleteBackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Delete the backup
*Api.BackupApi* | [**deleteBackupHistory**](docs/BackupApi.md#deleteBackupHistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history
*Api.BackupApi* | [**deleteBackupSchedule**](docs/BackupApi.md#deleteBackupSchedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule
*Api.BackupApi* | [**getBackupHistory**](docs/BackupApi.md#getBackupHistory) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history
*Api.BackupApi* | [**getBackupProgress**](docs/BackupApi.md#getBackupProgress) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress
*Api.BackupApi* | [**getBackupSchedule**](docs/BackupApi.md#getBackupSchedule) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule
*Api.BackupApi* | [**getRestoreProgress**](docs/BackupApi.md#getRestoreProgress) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress
*Api.BackupApi* | [**startBackup**](docs/BackupApi.md#startBackup) | **POST** /api/2.0/backup/startbackup | Start the backup
*Api.BackupApi* | [**startBackupRestore**](docs/BackupApi.md#startBackupRestore) | **POST** /api/2.0/backup/startrestore | Start the restoring process
*Api.CapabilitiesApi* | [**getPortalCapabilities**](docs/CapabilitiesApi.md#getPortalCapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities
*Api.FilesFilesApi* | [**addTemplates**](docs/FilesFilesApi.md#addTemplates) | **POST** /api/2.0/files/templates | Add template files
*Api.FilesFilesApi* | [**changeVersionHistory**](docs/FilesFilesApi.md#changeVersionHistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history
*Api.FilesFilesApi* | [**checkFillFormDraft**](docs/FilesFilesApi.md#checkFillFormDraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling
*Api.FilesFilesApi* | [**copyFileAs**](docs/FilesFilesApi.md#copyFileAs) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file
*Api.FilesFilesApi* | [**createEditSession**](docs/FilesFilesApi.md#createEditSession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session
*Api.FilesFilesApi* | [**createFile**](docs/FilesFilesApi.md#createFile) | **POST** /api/2.0/files/{folderId}/file | Create a file
*Api.FilesFilesApi* | [**createFileInMyDocuments**](docs/FilesFilesApi.md#createFileInMyDocuments) | **POST** /api/2.0/files/@my/file | Create a file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createHtmlFile**](docs/FilesFilesApi.md#createHtmlFile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file
*Api.FilesFilesApi* | [**createHtmlFileInMyDocuments**](docs/FilesFilesApi.md#createHtmlFileInMyDocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createPrimaryExternalLink**](docs/FilesFilesApi.md#createPrimaryExternalLink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link
*Api.FilesFilesApi* | [**createTextFile**](docs/FilesFilesApi.md#createTextFile) | **POST** /api/2.0/files/{folderId}/text | Create a text file
*Api.FilesFilesApi* | [**createTextFileInMyDocuments**](docs/FilesFilesApi.md#createTextFileInMyDocuments) | **POST** /api/2.0/files/@my/text | Create a text file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createThumbnails**](docs/FilesFilesApi.md#createThumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails
*Api.FilesFilesApi* | [**deleteFile**](docs/FilesFilesApi.md#deleteFile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file
*Api.FilesFilesApi* | [**deleteRecent**](docs/FilesFilesApi.md#deleteRecent) | **DELETE** /api/2.0/files/recent | Delete recent files
*Api.FilesFilesApi* | [**deleteTemplates**](docs/FilesFilesApi.md#deleteTemplates) | **DELETE** /api/2.0/files/templates | Delete template files
*Api.FilesFilesApi* | [**getAllFormRoles**](docs/FilesFilesApi.md#getAllFormRoles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles
*Api.FilesFilesApi* | [**getEditDiffUrl**](docs/FilesFilesApi.md#getEditDiffUrl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL
*Api.FilesFilesApi* | [**getEditHistory**](docs/FilesFilesApi.md#getEditHistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history
*Api.FilesFilesApi* | [**getFileHistory**](docs/FilesFilesApi.md#getFileHistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history
*Api.FilesFilesApi* | [**getFileInfo**](docs/FilesFilesApi.md#getFileInfo) | **GET** /api/2.0/files/file/{fileId} | Get file information
*Api.FilesFilesApi* | [**getFileLinks**](docs/FilesFilesApi.md#getFileLinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links
*Api.FilesFilesApi* | [**getFilePrimaryExternalLink**](docs/FilesFilesApi.md#getFilePrimaryExternalLink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link
*Api.FilesFilesApi* | [**getFileVersionInfo**](docs/FilesFilesApi.md#getFileVersionInfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions
*Api.FilesFilesApi* | [**getFillResult**](docs/FilesFilesApi.md#getFillResult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result
*Api.FilesFilesApi* | [**getPresignedFileUri**](docs/FilesFilesApi.md#getPresignedFileUri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously
*Api.FilesFilesApi* | [**getPresignedUri**](docs/FilesFilesApi.md#getPresignedUri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link
*Api.FilesFilesApi* | [**getProtectedFileUsers**](docs/FilesFilesApi.md#getProtectedFileUsers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file
*Api.FilesFilesApi* | [**getReferenceData**](docs/FilesFilesApi.md#getReferenceData) | **POST** /api/2.0/files/file/referencedata | Get reference data
*Api.FilesFilesApi* | [**isFormPDF**](docs/FilesFilesApi.md#isFormPDF) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file
*Api.FilesFilesApi* | [**lockFile**](docs/FilesFilesApi.md#lockFile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file
*Api.FilesFilesApi* | [**manageFormFilling**](docs/FilesFilesApi.md#manageFormFilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action
*Api.FilesFilesApi* | [**openEditFile**](docs/FilesFilesApi.md#openEditFile) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration
*Api.FilesFilesApi* | [**restoreFileVersion**](docs/FilesFilesApi.md#restoreFileVersion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version
*Api.FilesFilesApi* | [**saveEditingFileFromForm**](docs/FilesFilesApi.md#saveEditingFileFromForm) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits
*Api.FilesFilesApi* | [**saveFileAsPdf**](docs/FilesFilesApi.md#saveFileAsPdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF
*Api.FilesFilesApi* | [**saveFormRoleMapping**](docs/FilesFilesApi.md#saveFormRoleMapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping
*Api.FilesFilesApi* | [**setCustomFilterTag**](docs/FilesFilesApi.md#setCustomFilterTag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode
*Api.FilesFilesApi* | [**setExternalLink**](docs/FilesFilesApi.md#setExternalLink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link
*Api.FilesFilesApi* | [**setFileOrder**](docs/FilesFilesApi.md#setFileOrder) | **PUT** /api/2.0/files/{fileId}/order | Set file order
*Api.FilesFilesApi* | [**setFilesOrder**](docs/FilesFilesApi.md#setFilesOrder) | **PUT** /api/2.0/files/order | Set order of files
*Api.FilesFilesApi* | [**startEditFile**](docs/FilesFilesApi.md#startEditFile) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing
*Api.FilesFilesApi* | [**startFillingFile**](docs/FilesFilesApi.md#startFillingFile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling
*Api.FilesFilesApi* | [**trackEditFile**](docs/FilesFilesApi.md#trackEditFile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing
*Api.FilesFilesApi* | [**updateFile**](docs/FilesFilesApi.md#updateFile) | **PUT** /api/2.0/files/file/{fileId} | Update a file
*Api.FilesFoldersApi* | [**checkUpload**](docs/FilesFoldersApi.md#checkUpload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads
*Api.FilesFoldersApi* | [**createFolder**](docs/FilesFoldersApi.md#createFolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder
*Api.FilesFoldersApi* | [**deleteFolder**](docs/FilesFoldersApi.md#deleteFolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder
*Api.FilesFoldersApi* | [**getFilesUsedSpace**](docs/FilesFoldersApi.md#getFilesUsedSpace) | **GET** /api/2.0/files/filesusedspace | Get used space of files
*Api.FilesFoldersApi* | [**getFolder**](docs/FilesFoldersApi.md#getFolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter
*Api.FilesFoldersApi* | [**getFolderByFolderId**](docs/FilesFoldersApi.md#getFolderByFolderId) | **GET** /api/2.0/files/{folderId} | Get a folder by ID
*Api.FilesFoldersApi* | [**getFolderHistory**](docs/FilesFoldersApi.md#getFolderHistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history
*Api.FilesFoldersApi* | [**getFolderInfo**](docs/FilesFoldersApi.md#getFolderInfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information
*Api.FilesFoldersApi* | [**getFolderPath**](docs/FilesFoldersApi.md#getFolderPath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path
*Api.FilesFoldersApi* | [**getFolderPrimaryExternalLink**](docs/FilesFoldersApi.md#getFolderPrimaryExternalLink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link
*Api.FilesFoldersApi* | [**getFolders**](docs/FilesFoldersApi.md#getFolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders
*Api.FilesFoldersApi* | [**getMyFolder**](docs/FilesFoldersApi.md#getMyFolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section
*Api.FilesFoldersApi* | [**getNewFolderItems**](docs/FilesFoldersApi.md#getNewFolderItems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items
*Api.FilesFoldersApi* | [**getPrivacyFolder**](docs/FilesFoldersApi.md#getPrivacyFolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section
*Api.FilesFoldersApi* | [**getRootFolders**](docs/FilesFoldersApi.md#getRootFolders) | **GET** /api/2.0/files/@root | Get filtered sections
*Api.FilesFoldersApi* | [**getTrashFolder**](docs/FilesFoldersApi.md#getTrashFolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section
*Api.FilesFoldersApi* | [**insertFile**](docs/FilesFoldersApi.md#insertFile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file
*Api.FilesFoldersApi* | [**insertFileToMyFromBody**](docs/FilesFoldersApi.md#insertFileToMyFromBody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section
*Api.FilesFoldersApi* | [**renameFolder**](docs/FilesFoldersApi.md#renameFolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder
*Api.FilesFoldersApi* | [**setFolderOrder**](docs/FilesFoldersApi.md#setFolderOrder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set folder order
*Api.FilesFoldersApi* | [**uploadFile**](docs/FilesFoldersApi.md#uploadFile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file
*Api.FilesFoldersApi* | [**uploadFileToMy**](docs/FilesFoldersApi.md#uploadFileToMy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section
*Api.FilesOperationsApi* | [**bulkDownload**](docs/FilesOperationsApi.md#bulkDownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download
*Api.FilesOperationsApi* | [**checkConversionStatus**](docs/FilesOperationsApi.md#checkConversionStatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Get conversion status
*Api.FilesOperationsApi* | [**checkMoveOrCopyBatchItems**](docs/FilesOperationsApi.md#checkMoveOrCopyBatchItems) | **GET** /api/2.0/files/fileops/move | Check and move or copy to a folder
*Api.FilesOperationsApi* | [**checkMoveOrCopyDestFolder**](docs/FilesOperationsApi.md#checkMoveOrCopyDestFolder) | **GET** /api/2.0/files/fileops/checkdestfolder | Check for moving or copying to a folder
*Api.FilesOperationsApi* | [**copyBatchItems**](docs/FilesOperationsApi.md#copyBatchItems) | **PUT** /api/2.0/files/fileops/copy | Copy to the folder
*Api.FilesOperationsApi* | [**createUploadSession**](docs/FilesOperationsApi.md#createUploadSession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Chunked upload
*Api.FilesOperationsApi* | [**deleteBatchItems**](docs/FilesOperationsApi.md#deleteBatchItems) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders
*Api.FilesOperationsApi* | [**deleteFileVersions**](docs/FilesOperationsApi.md#deleteFileVersions) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions
*Api.FilesOperationsApi* | [**duplicateBatchItems**](docs/FilesOperationsApi.md#duplicateBatchItems) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders
*Api.FilesOperationsApi* | [**emptyTrash**](docs/FilesOperationsApi.md#emptyTrash) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the \&quot;Trash\&quot; folder
*Api.FilesOperationsApi* | [**getOperationStatuses**](docs/FilesOperationsApi.md#getOperationStatuses) | **GET** /api/2.0/files/fileops | Get active file operations
*Api.FilesOperationsApi* | [**getOperationStatusesByType**](docs/FilesOperationsApi.md#getOperationStatusesByType) | **GET** /api/2.0/files/fileops/{operationType} | Get file operation statuses
*Api.FilesOperationsApi* | [**markAsRead**](docs/FilesOperationsApi.md#markAsRead) | **PUT** /api/2.0/files/fileops/markasread | Mark as read
*Api.FilesOperationsApi* | [**moveBatchItems**](docs/FilesOperationsApi.md#moveBatchItems) | **PUT** /api/2.0/files/fileops/move | Move or copy to a folder
*Api.FilesOperationsApi* | [**startFileConversion**](docs/FilesOperationsApi.md#startFileConversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Start file conversion
*Api.FilesOperationsApi* | [**terminateTasks**](docs/FilesOperationsApi.md#terminateTasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Finish active operations
*Api.FilesOperationsApi* | [**updateFileComment**](docs/FilesOperationsApi.md#updateFileComment) | **PUT** /api/2.0/files/file/{fileId}/comment | Update a comment
*Api.FilesQuotaApi* | [**resetRoomQuota**](docs/FilesQuotaApi.md#resetRoomQuota) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit
*Api.FilesQuotaApi* | [**updateRoomsQuota**](docs/FilesQuotaApi.md#updateRoomsQuota) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit
*Api.FilesSettingsApi* | [**changeAccessToThirdparty**](docs/FilesSettingsApi.md#changeAccessToThirdparty) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access
*Api.FilesSettingsApi* | [**changeAutomaticallyCleanUp**](docs/FilesSettingsApi.md#changeAutomaticallyCleanUp) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting
*Api.FilesSettingsApi* | [**changeDefaultAccessRights**](docs/FilesSettingsApi.md#changeDefaultAccessRights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights
*Api.FilesSettingsApi* | [**changeDeleteConfirm**](docs/FilesSettingsApi.md#changeDeleteConfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Confirm the file deletion
*Api.FilesSettingsApi* | [**changeDownloadZipFromBody**](docs/FilesSettingsApi.md#changeDownloadZipFromBody) | **PUT** /api/2.0/files/settings/downloadtargz | Change the archive format (using body parameters)
*Api.FilesSettingsApi* | [**checkDocServiceUrl**](docs/FilesSettingsApi.md#checkDocServiceUrl) | **PUT** /api/2.0/files/docservice | Check the document service URL
*Api.FilesSettingsApi* | [**displayFileExtension**](docs/FilesSettingsApi.md#displayFileExtension) | **PUT** /api/2.0/files/displayfileextension | Display a file extension
*Api.FilesSettingsApi* | [**externalShare**](docs/FilesSettingsApi.md#externalShare) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability
*Api.FilesSettingsApi* | [**externalShareSocialMedia**](docs/FilesSettingsApi.md#externalShareSocialMedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks
*Api.FilesSettingsApi* | [**forcesave**](docs/FilesSettingsApi.md#forcesave) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability
*Api.FilesSettingsApi* | [**getAutomaticallyCleanUp**](docs/FilesSettingsApi.md#getAutomaticallyCleanUp) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting
*Api.FilesSettingsApi* | [**getDocServiceUrl**](docs/FilesSettingsApi.md#getDocServiceUrl) | **GET** /api/2.0/files/docservice | Get the document service URL
*Api.FilesSettingsApi* | [**getFilesModule**](docs/FilesSettingsApi.md#getFilesModule) | **GET** /api/2.0/files/info | Get the \&quot;Documents\&quot; information
*Api.FilesSettingsApi* | [**getFilesSettings**](docs/FilesSettingsApi.md#getFilesSettings) | **GET** /api/2.0/files/settings | Get file settings
*Api.FilesSettingsApi* | [**hideConfirmCancelOperation**](docs/FilesSettingsApi.md#hideConfirmCancelOperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations
*Api.FilesSettingsApi* | [**hideConfirmConvert**](docs/FilesSettingsApi.md#hideConfirmConvert) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting
*Api.FilesSettingsApi* | [**hideConfirmRoomLifetime**](docs/FilesSettingsApi.md#hideConfirmRoomLifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings
*Api.FilesSettingsApi* | [**isAvailablePrivacyRoomSettings**](docs/FilesSettingsApi.md#isAvailablePrivacyRoomSettings) | **GET** /api/2.0/files/@privacy/available | Check the \&quot;Private Room\&quot; availability
*Api.FilesSettingsApi* | [**keepNewFileName**](docs/FilesSettingsApi.md#keepNewFileName) | **PUT** /api/2.0/files/keepnewfilename | Ask a new file name
*Api.FilesSettingsApi* | [**setOpenEditorInSameTab**](docs/FilesSettingsApi.md#setOpenEditorInSameTab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab
*Api.FilesSettingsApi* | [**storeForcesave**](docs/FilesSettingsApi.md#storeForcesave) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files
*Api.FilesSettingsApi* | [**storeOriginal**](docs/FilesSettingsApi.md#storeOriginal) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats
*Api.FilesSettingsApi* | [**updateFileIfExist**](docs/FilesSettingsApi.md#updateFileIfExist) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists
*Api.FilesSharingApi* | [**applyExternalSharePassword**](docs/FilesSharingApi.md#applyExternalSharePassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password
*Api.FilesSharingApi* | [**changeFileOwner**](docs/FilesSharingApi.md#changeFileOwner) | **POST** /api/2.0/files/owner | Change the file owner
*Api.FilesSharingApi* | [**getExternalShareData**](docs/FilesSharingApi.md#getExternalShareData) | **GET** /api/2.0/files/share/{key} | Get the external data
*Api.FilesSharingApi* | [**getSharedUsers**](docs/FilesSharingApi.md#getSharedUsers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID
*Api.FilesSharingApi* | [**sendEditorNotify**](docs/FilesSharingApi.md#sendEditorNotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message
*Api.FilesThirdPartyIntegrationApi* | [**deleteThirdParty**](docs/FilesThirdPartyIntegrationApi.md#deleteThirdParty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | Remove a third-party account
*Api.FilesThirdPartyIntegrationApi* | [**getAllProviders**](docs/FilesThirdPartyIntegrationApi.md#getAllProviders) | **GET** /api/2.0/files/thirdparty/providers | Get all providers
*Api.FilesThirdPartyIntegrationApi* | [**getBackupThirdPartyAccount**](docs/FilesThirdPartyIntegrationApi.md#getBackupThirdPartyAccount) | **GET** /api/2.0/files/thirdparty/backup | Get a third-party account backup
*Api.FilesThirdPartyIntegrationApi* | [**getCapabilities**](docs/FilesThirdPartyIntegrationApi.md#getCapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | Get providers
*Api.FilesThirdPartyIntegrationApi* | [**getCommonThirdPartyFolders**](docs/FilesThirdPartyIntegrationApi.md#getCommonThirdPartyFolders) | **GET** /api/2.0/files/thirdparty/common | Get the common third-party services
*Api.FilesThirdPartyIntegrationApi* | [**getThirdPartyAccounts**](docs/FilesThirdPartyIntegrationApi.md#getThirdPartyAccounts) | **GET** /api/2.0/files/thirdparty | Get the third-party accounts
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdParty**](docs/FilesThirdPartyIntegrationApi.md#saveThirdParty) | **POST** /api/2.0/files/thirdparty | Save a third-party account
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdPartyBackup**](docs/FilesThirdPartyIntegrationApi.md#saveThirdPartyBackup) | **POST** /api/2.0/files/thirdparty/backup | Save a third-party account backup
*Api.GroupApi* | [**addGroup**](docs/GroupApi.md#addGroup) | **POST** /api/2.0/group | Add a new group
*Api.GroupApi* | [**addMembersTo**](docs/GroupApi.md#addMembersTo) | **PUT** /api/2.0/group/{id}/members | Add group members
*Api.GroupApi* | [**deleteGroup**](docs/GroupApi.md#deleteGroup) | **DELETE** /api/2.0/group/{id} | Delete a group
*Api.GroupApi* | [**getGroup**](docs/GroupApi.md#getGroup) | **GET** /api/2.0/group/{id} | Get a group
*Api.GroupApi* | [**getGroupByUserId**](docs/GroupApi.md#getGroupByUserId) | **GET** /api/2.0/group/user/{userid} | Get user groups
*Api.GroupApi* | [**getGroups**](docs/GroupApi.md#getGroups) | **GET** /api/2.0/group | Get groups
*Api.GroupApi* | [**moveMembersTo**](docs/GroupApi.md#moveMembersTo) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Move group members
*Api.GroupApi* | [**removeMembersFrom**](docs/GroupApi.md#removeMembersFrom) | **DELETE** /api/2.0/group/{id}/members | Remove group members
*Api.GroupApi* | [**setGroupManager**](docs/GroupApi.md#setGroupManager) | **PUT** /api/2.0/group/{id}/manager | Set a group manager
*Api.GroupApi* | [**setMembersTo**](docs/GroupApi.md#setMembersTo) | **POST** /api/2.0/group/{id}/members | Replace group members
*Api.GroupApi* | [**updateGroup**](docs/GroupApi.md#updateGroup) | **PUT** /api/2.0/group/{id} | Update a group
*Api.GroupRoomsApi* | [**getGroupsWithShared**](docs/GroupRoomsApi.md#getGroupsWithShared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings
*Api.MigrationApi* | [**cancelMigration**](docs/MigrationApi.md#cancelMigration) | **POST** /api/2.0/migration/cancel | Cancel migration
*Api.MigrationApi* | [**clearMigration**](docs/MigrationApi.md#clearMigration) | **POST** /api/2.0/migration/clear | Clear migration
*Api.MigrationApi* | [**finishMigration**](docs/MigrationApi.md#finishMigration) | **POST** /api/2.0/migration/finish | Finish migration
*Api.MigrationApi* | [**getMigrationLogs**](docs/MigrationApi.md#getMigrationLogs) | **GET** /api/2.0/migration/logs | Get migration logs
*Api.MigrationApi* | [**getMigrationStatus**](docs/MigrationApi.md#getMigrationStatus) | **GET** /api/2.0/migration/status | Get migration status
*Api.MigrationApi* | [**listMigrations**](docs/MigrationApi.md#listMigrations) | **GET** /api/2.0/migration/list | Get migrations
*Api.MigrationApi* | [**startMigration**](docs/MigrationApi.md#startMigration) | **POST** /api/2.0/migration/migrate | Start migration
*Api.MigrationApi* | [**uploadAndInitializeMigration**](docs/MigrationApi.md#uploadAndInitializeMigration) | **POST** /api/2.0/migration/init/{migratorName} | Upload and initialize migration
*Api.OAuth20AuthorizationApi* | [**authorizeOAuth**](docs/OAuth20AuthorizationApi.md#authorizeOAuth) | **GET** /oauth2/authorize | OAuth2 authorization endpoint
*Api.OAuth20AuthorizationApi* | [**exchangeToken**](docs/OAuth20AuthorizationApi.md#exchangeToken) | **POST** /oauth2/token | OAuth2 token endpoint
*Api.OAuth20AuthorizationApi* | [**submitConsent**](docs/OAuth20AuthorizationApi.md#submitConsent) | **POST** /oauth2/authorize | OAuth2 consent endpoint
*Api.OAuth20ClientManagementApi* | [**changeActivation**](docs/OAuth20ClientManagementApi.md#changeActivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status
*Api.OAuth20ClientManagementApi* | [**createClient**](docs/OAuth20ClientManagementApi.md#createClient) | **POST** /api/2.0/clients | Create a new OAuth2 client
*Api.OAuth20ClientManagementApi* | [**deleteClient**](docs/OAuth20ClientManagementApi.md#deleteClient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client
*Api.OAuth20ClientManagementApi* | [**regenerateSecret**](docs/OAuth20ClientManagementApi.md#regenerateSecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret
*Api.OAuth20ClientManagementApi* | [**revokeUserClient**](docs/OAuth20ClientManagementApi.md#revokeUserClient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent
*Api.OAuth20ClientManagementApi* | [**updateClient**](docs/OAuth20ClientManagementApi.md#updateClient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client
*Api.OAuth20ClientQueryingApi* | [**getClient**](docs/OAuth20ClientQueryingApi.md#getClient) | **GET** /api/2.0/clients/{clientId} | Get client details
*Api.OAuth20ClientQueryingApi* | [**getClientInfo**](docs/OAuth20ClientQueryingApi.md#getClientInfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information
*Api.OAuth20ClientQueryingApi* | [**getClients**](docs/OAuth20ClientQueryingApi.md#getClients) | **GET** /api/2.0/clients | Get clients
*Api.OAuth20ClientQueryingApi* | [**getClientsInfo**](docs/OAuth20ClientQueryingApi.md#getClientsInfo) | **GET** /api/2.0/clients/info | Get detailed information of clients
*Api.OAuth20ClientQueryingApi* | [**getConsents**](docs/OAuth20ClientQueryingApi.md#getConsents) | **GET** /api/2.0/clients/consents | Get user consents
*Api.OAuth20ClientQueryingApi* | [**getPublicClientInfo**](docs/OAuth20ClientQueryingApi.md#getPublicClientInfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information
*Api.OAuth20ScopeManagementApi* | [**getScopes**](docs/OAuth20ScopeManagementApi.md#getScopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes
*Api.PeopleGuestsApi* | [**approveGuestShareLink**](docs/PeopleGuestsApi.md#approveGuestShareLink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link
*Api.PeopleGuestsApi* | [**deleteGuests**](docs/PeopleGuestsApi.md#deleteGuests) | **DELETE** /api/2.0/people/guests | Delete guests
*Api.PeoplePasswordApi* | [**changeUserPassword**](docs/PeoplePasswordApi.md#changeUserPassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password
*Api.PeoplePasswordApi* | [**sendUserPassword**](docs/PeoplePasswordApi.md#sendUserPassword) | **POST** /api/2.0/people/password | Remind a user password
*Api.PeoplePhotosApi* | [**createMemberPhotoThumbnails**](docs/PeoplePhotosApi.md#createMemberPhotoThumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Create photo thumbnails
*Api.PeoplePhotosApi* | [**deleteMemberPhoto**](docs/PeoplePhotosApi.md#deleteMemberPhoto) | **DELETE** /api/2.0/people/{userid}/photo | Delete a user photo
*Api.PeoplePhotosApi* | [**getMemberPhoto**](docs/PeoplePhotosApi.md#getMemberPhoto) | **GET** /api/2.0/people/{userid}/photo | Get a user photo
*Api.PeoplePhotosApi* | [**updateMemberPhoto**](docs/PeoplePhotosApi.md#updateMemberPhoto) | **PUT** /api/2.0/people/{userid}/photo | Update a user photo
*Api.PeoplePhotosApi* | [**uploadMemberPhoto**](docs/PeoplePhotosApi.md#uploadMemberPhoto) | **POST** /api/2.0/people/{userid}/photo | Upload a user photo
*Api.PeopleProfilesApi* | [**addMember**](docs/PeopleProfilesApi.md#addMember) | **POST** /api/2.0/people | Add a user
*Api.PeopleProfilesApi* | [**deleteMember**](docs/PeopleProfilesApi.md#deleteMember) | **DELETE** /api/2.0/people/{userid} | Delete a user
*Api.PeopleProfilesApi* | [**deleteProfile**](docs/PeopleProfilesApi.md#deleteProfile) | **DELETE** /api/2.0/people/@self | Delete my profile
*Api.PeopleProfilesApi* | [**getAllProfiles**](docs/PeopleProfilesApi.md#getAllProfiles) | **GET** /api/2.0/people | Get profiles
*Api.PeopleProfilesApi* | [**getClaims**](docs/PeopleProfilesApi.md#getClaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.
*Api.PeopleProfilesApi* | [**getProfileByEmail**](docs/PeopleProfilesApi.md#getProfileByEmail) | **GET** /api/2.0/people/email | Get a profile by user email
*Api.PeopleProfilesApi* | [**getProfileByUserId**](docs/PeopleProfilesApi.md#getProfileByUserId) | **GET** /api/2.0/people/{userid} | Get a profile by user name
*Api.PeopleProfilesApi* | [**getSelfProfile**](docs/PeopleProfilesApi.md#getSelfProfile) | **GET** /api/2.0/people/@self | Get my profile
*Api.PeopleProfilesApi* | [**inviteUsers**](docs/PeopleProfilesApi.md#inviteUsers) | **POST** /api/2.0/people/invite | Invite users
*Api.PeopleProfilesApi* | [**removeUsers**](docs/PeopleProfilesApi.md#removeUsers) | **PUT** /api/2.0/people/delete | Delete users
*Api.PeopleProfilesApi* | [**resendUserInvites**](docs/PeopleProfilesApi.md#resendUserInvites) | **PUT** /api/2.0/people/invite | Resend activation emails
*Api.PeopleProfilesApi* | [**sendEmailChangeInstructions**](docs/PeopleProfilesApi.md#sendEmailChangeInstructions) | **POST** /api/2.0/people/email | Send instructions to change email
*Api.PeopleProfilesApi* | [**updateMember**](docs/PeopleProfilesApi.md#updateMember) | **PUT** /api/2.0/people/{userid} | Update a user
*Api.PeopleProfilesApi* | [**updateMemberCulture**](docs/PeopleProfilesApi.md#updateMemberCulture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code
*Api.PeopleQuotaApi* | [**resetUsersQuota**](docs/PeopleQuotaApi.md#resetUsersQuota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit
*Api.PeopleQuotaApi* | [**updateUserQuota**](docs/PeopleQuotaApi.md#updateUserQuota) | **PUT** /api/2.0/people/userquota | Change a user quota limit
*Api.PeopleSearchApi* | [**getAccountsEntriesWithShared**](docs/PeopleSearchApi.md#getAccountsEntriesWithShared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries
*Api.PeopleSearchApi* | [**getSearch**](docs/PeopleSearchApi.md#getSearch) | **GET** /api/2.0/people/@search/{query} | Search users
*Api.PeopleSearchApi* | [**getSimpleByFilter**](docs/PeopleSearchApi.md#getSimpleByFilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter
*Api.PeopleSearchApi* | [**getUsersWithRoomShared**](docs/PeopleSearchApi.md#getUsersWithRoomShared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings
*Api.PeopleSearchApi* | [**searchUsersByExtendedFilter**](docs/PeopleSearchApi.md#searchUsersByExtendedFilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter
*Api.PeopleSearchApi* | [**searchUsersByQuery**](docs/PeopleSearchApi.md#searchUsersByQuery) | **GET** /api/2.0/people/search | Search users (using query parameters)
*Api.PeopleSearchApi* | [**searchUsersByStatus**](docs/PeopleSearchApi.md#searchUsersByStatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter
*Api.PeopleThemeApi* | [**changePortalTheme**](docs/PeopleThemeApi.md#changePortalTheme) | **PUT** /api/2.0/people/theme | Change the portal theme
*Api.PeopleThemeApi* | [**getPortalTheme**](docs/PeopleThemeApi.md#getPortalTheme) | **GET** /api/2.0/people/theme | Get the portal theme
*Api.PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](docs/PeopleThirdPartyAccountsApi.md#getThirdPartyAuthProviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts
*Api.PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#linkThirdPartyAccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account
*Api.PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#signupThirdPartyAccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account
*Api.PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#unlinkThirdPartyAccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account
*Api.PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](docs/PeopleUserDataApi.md#getDeletePersonalFolderProgress) | **GET** /api/2.0/people/delete/personal/progress | Get the progress of deleting the personal folder
*Api.PeopleUserDataApi* | [**getReassignProgress**](docs/PeopleUserDataApi.md#getReassignProgress) | **GET** /api/2.0/people/reassign/progress/{userid} | Get the reassignment progress
*Api.PeopleUserDataApi* | [**getRemoveProgress**](docs/PeopleUserDataApi.md#getRemoveProgress) | **GET** /api/2.0/people/remove/progress/{userid} | Get the deletion progress
*Api.PeopleUserDataApi* | [**necessaryReassign**](docs/PeopleUserDataApi.md#necessaryReassign) | **GET** /api/2.0/people/reassign/necessary | Check the data reassignment need
*Api.PeopleUserDataApi* | [**sendInstructionsToDelete**](docs/PeopleUserDataApi.md#sendInstructionsToDelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions
*Api.PeopleUserDataApi* | [**startDeletePersonalFolder**](docs/PeopleUserDataApi.md#startDeletePersonalFolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder
*Api.PeopleUserDataApi* | [**startReassign**](docs/PeopleUserDataApi.md#startReassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment
*Api.PeopleUserDataApi* | [**startRemove**](docs/PeopleUserDataApi.md#startRemove) | **POST** /api/2.0/people/remove/start | Start the data deletion
*Api.PeopleUserDataApi* | [**terminateReassign**](docs/PeopleUserDataApi.md#terminateReassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment
*Api.PeopleUserDataApi* | [**terminateRemove**](docs/PeopleUserDataApi.md#terminateRemove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion
*Api.PeopleUserStatusApi* | [**getByStatus**](docs/PeopleUserStatusApi.md#getByStatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status
*Api.PeopleUserStatusApi* | [**updateUserActivationStatus**](docs/PeopleUserStatusApi.md#updateUserActivationStatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users
*Api.PeopleUserStatusApi* | [**updateUserStatus**](docs/PeopleUserStatusApi.md#updateUserStatus) | **PUT** /api/2.0/people/status/{status} | Change a user status
*Api.PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](docs/PeopleUserTypeApi.md#getUserTypeUpdateProgress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type
*Api.PeopleUserTypeApi* | [**starUserTypetUpdate**](docs/PeopleUserTypeApi.md#starUserTypetUpdate) | **POST** /api/2.0/people/type | Update user type
*Api.PeopleUserTypeApi* | [**terminateUserTypeUpdate**](docs/PeopleUserTypeApi.md#terminateUserTypeUpdate) | **PUT** /api/2.0/people/type/terminate | Terminate update user type
*Api.PeopleUserTypeApi* | [**updateUserType**](docs/PeopleUserTypeApi.md#updateUserType) | **PUT** /api/2.0/people/type/{type} | Change a user type
*Api.PortalGuestsApi* | [**getGuestSharingLink**](docs/PortalGuestsApi.md#getGuestSharingLink) | **GET** /api/2.0/people/guests/{userid}/share | Get a guest sharing link
*Api.PortalPaymentApi* | [**calculateWalletPayment**](docs/PortalPaymentApi.md#calculateWalletPayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate amount of the wallet payment
*Api.PortalPaymentApi* | [**createCustomerOperationsReport**](docs/PortalPaymentApi.md#createCustomerOperationsReport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Generate the customer operations report
*Api.PortalPaymentApi* | [**getCheckoutSetupUrl**](docs/PortalPaymentApi.md#getCheckoutSetupUrl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Get the checkout setup page URL
*Api.PortalPaymentApi* | [**getCustomerBalance**](docs/PortalPaymentApi.md#getCustomerBalance) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance
*Api.PortalPaymentApi* | [**getCustomerInfo**](docs/PortalPaymentApi.md#getCustomerInfo) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer info
*Api.PortalPaymentApi* | [**getCustomerOperations**](docs/PortalPaymentApi.md#getCustomerOperations) | **GET** /api/2.0/portal/payment/customer/operations | Get the customer operations
*Api.PortalPaymentApi* | [**getPaymentAccount**](docs/PortalPaymentApi.md#getPaymentAccount) | **GET** /api/2.0/portal/payment/account | Get the payment account
*Api.PortalPaymentApi* | [**getPaymentCurrencies**](docs/PortalPaymentApi.md#getPaymentCurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies
*Api.PortalPaymentApi* | [**getPaymentQuotas**](docs/PortalPaymentApi.md#getPaymentQuotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas
*Api.PortalPaymentApi* | [**getPaymentUrl**](docs/PortalPaymentApi.md#getPaymentUrl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL
*Api.PortalPaymentApi* | [**getPortalPrices**](docs/PortalPaymentApi.md#getPortalPrices) | **GET** /api/2.0/portal/payment/prices | Get prices
*Api.PortalPaymentApi* | [**getQuotaPaymentInformation**](docs/PortalPaymentApi.md#getQuotaPaymentInformation) | **GET** /api/2.0/portal/payment/quota | Get quota payment information
*Api.PortalPaymentApi* | [**getTenantWalletSettings**](docs/PortalPaymentApi.md#getTenantWalletSettings) | **GET** /api/2.0/portal/payment/topupsettings | Get wallet auto top up settings
*Api.PortalPaymentApi* | [**sendPaymentRequest**](docs/PortalPaymentApi.md#sendPaymentRequest) | **POST** /api/2.0/portal/payment/request | Send a payment request
*Api.PortalPaymentApi* | [**setTenantWalletSettings**](docs/PortalPaymentApi.md#setTenantWalletSettings) | **POST** /api/2.0/portal/payment/topupsettings | Set wallet auto top up settings
*Api.PortalPaymentApi* | [**topUpDeposit**](docs/PortalPaymentApi.md#topUpDeposit) | **POST** /api/2.0/portal/payment/deposit | Put money on deposit
*Api.PortalPaymentApi* | [**updatePayment**](docs/PortalPaymentApi.md#updatePayment) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity
*Api.PortalPaymentApi* | [**updateWalletPayment**](docs/PortalPaymentApi.md#updateWalletPayment) | **PUT** /api/2.0/portal/payment/updatewallet | Update the wallet payment quantity
*Api.PortalQuotaApi* | [**getPortalQuota**](docs/PortalQuotaApi.md#getPortalQuota) | **GET** /api/2.0/portal/quota | Get a portal quota
*Api.PortalQuotaApi* | [**getPortalTariff**](docs/PortalQuotaApi.md#getPortalTariff) | **GET** /api/2.0/portal/tariff | Get a portal tariff
*Api.PortalQuotaApi* | [**getPortalUsedSpace**](docs/PortalQuotaApi.md#getPortalUsedSpace) | **GET** /api/2.0/portal/usedspace | Get the portal used space
*Api.PortalQuotaApi* | [**getRightQuota**](docs/PortalQuotaApi.md#getRightQuota) | **GET** /api/2.0/portal/quota/right | Get the recommended quota
*Api.PortalSettingsApi* | [**continuePortal**](docs/PortalSettingsApi.md#continuePortal) | **PUT** /api/2.0/portal/continue | Restore a portal
*Api.PortalSettingsApi* | [**deletePortal**](docs/PortalSettingsApi.md#deletePortal) | **DELETE** /api/2.0/portal/delete | Delete a portal
*Api.PortalSettingsApi* | [**getPortalInformation**](docs/PortalSettingsApi.md#getPortalInformation) | **GET** /api/2.0/portal | Get a portal
*Api.PortalSettingsApi* | [**getPortalPath**](docs/PortalSettingsApi.md#getPortalPath) | **GET** /api/2.0/portal/path | Get a path to the portal
*Api.PortalSettingsApi* | [**sendDeleteInstructions**](docs/PortalSettingsApi.md#sendDeleteInstructions) | **POST** /api/2.0/portal/delete | Send removal instructions
*Api.PortalSettingsApi* | [**sendSuspendInstructions**](docs/PortalSettingsApi.md#sendSuspendInstructions) | **POST** /api/2.0/portal/suspend | Send suspension instructions
*Api.PortalSettingsApi* | [**suspendPortal**](docs/PortalSettingsApi.md#suspendPortal) | **PUT** /api/2.0/portal/suspend | Deactivate a portal
*Api.PortalUsersApi* | [**getInvitationLink**](docs/PortalUsersApi.md#getInvitationLink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link
*Api.PortalUsersApi* | [**getPortalUsersCount**](docs/PortalUsersApi.md#getPortalUsersCount) | **GET** /api/2.0/portal/userscount | Get a number of portal users
*Api.PortalUsersApi* | [**getUserById**](docs/PortalUsersApi.md#getUserById) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID
*Api.PortalUsersApi* | [**markGiftMessageAsRead**](docs/PortalUsersApi.md#markGiftMessageAsRead) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read
*Api.PortalUsersApi* | [**sendCongratulations**](docs/PortalUsersApi.md#sendCongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations
*Api.RoomsApi* | [**addRoomTags**](docs/RoomsApi.md#addRoomTags) | **PUT** /api/2.0/files/rooms/{id}/tags | Add the room tags
*Api.RoomsApi* | [**archiveRoom**](docs/RoomsApi.md#archiveRoom) | **PUT** /api/2.0/files/rooms/{id}/archive | Archive a room
*Api.RoomsApi* | [**changeRoomCover**](docs/RoomsApi.md#changeRoomCover) | **POST** /api/2.0/files/rooms/{id}/cover | Change the room cover
*Api.RoomsApi* | [**createRoom**](docs/RoomsApi.md#createRoom) | **POST** /api/2.0/files/rooms | Create a room
*Api.RoomsApi* | [**createRoomFromTemplate**](docs/RoomsApi.md#createRoomFromTemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template
*Api.RoomsApi* | [**createRoomLogo**](docs/RoomsApi.md#createRoomLogo) | **POST** /api/2.0/files/rooms/{id}/logo | Create a room logo
*Api.RoomsApi* | [**createRoomTag**](docs/RoomsApi.md#createRoomTag) | **POST** /api/2.0/files/tags | Create a tag
*Api.RoomsApi* | [**createRoomTemplate**](docs/RoomsApi.md#createRoomTemplate) | **POST** /api/2.0/files/roomtemplate | Start creating room template
*Api.RoomsApi* | [**createRoomThirdParty**](docs/RoomsApi.md#createRoomThirdParty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Create a third-party room
*Api.RoomsApi* | [**deleteCustomTags**](docs/RoomsApi.md#deleteCustomTags) | **DELETE** /api/2.0/files/tags | Delete tags
*Api.RoomsApi* | [**deleteRoom**](docs/RoomsApi.md#deleteRoom) | **DELETE** /api/2.0/files/rooms/{id} | Remove a room
*Api.RoomsApi* | [**deleteRoomLogo**](docs/RoomsApi.md#deleteRoomLogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Remove a room logo
*Api.RoomsApi* | [**deleteRoomTags**](docs/RoomsApi.md#deleteRoomTags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Remove the room tags
*Api.RoomsApi* | [**getNewRoomItems**](docs/RoomsApi.md#getNewRoomItems) | **GET** /api/2.0/files/rooms/{id}/news | Get the new room items
*Api.RoomsApi* | [**getPublicSettings**](docs/RoomsApi.md#getPublicSettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Get public settings
*Api.RoomsApi* | [**getRoomCovers**](docs/RoomsApi.md#getRoomCovers) | **GET** /api/2.0/files/rooms/covers | Get covers
*Api.RoomsApi* | [**getRoomCreatingStatus**](docs/RoomsApi.md#getRoomCreatingStatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress
*Api.RoomsApi* | [**getRoomIndexExport**](docs/RoomsApi.md#getRoomIndexExport) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export
*Api.RoomsApi* | [**getRoomInfo**](docs/RoomsApi.md#getRoomInfo) | **GET** /api/2.0/files/rooms/{id} | Get room information
*Api.RoomsApi* | [**getRoomLinks**](docs/RoomsApi.md#getRoomLinks) | **GET** /api/2.0/files/rooms/{id}/links | Get the room links
*Api.RoomsApi* | [**getRoomSecurityInfo**](docs/RoomsApi.md#getRoomSecurityInfo) | **GET** /api/2.0/files/rooms/{id}/share | Get the room access rights
*Api.RoomsApi* | [**getRoomTagsInfo**](docs/RoomsApi.md#getRoomTagsInfo) | **GET** /api/2.0/files/tags | Get tags
*Api.RoomsApi* | [**getRoomTemplateCreatingStatus**](docs/RoomsApi.md#getRoomTemplateCreatingStatus) | **GET** /api/2.0/files/roomtemplate/status | Get status of room template creation
*Api.RoomsApi* | [**getRoomsFolder**](docs/RoomsApi.md#getRoomsFolder) | **GET** /api/2.0/files/rooms | Get rooms
*Api.RoomsApi* | [**getRoomsNewItems**](docs/RoomsApi.md#getRoomsNewItems) | **GET** /api/2.0/files/rooms/news | Get the room new items
*Api.RoomsApi* | [**getRoomsPrimaryExternalLink**](docs/RoomsApi.md#getRoomsPrimaryExternalLink) | **GET** /api/2.0/files/rooms/{id}/link | Get the room primary external link
*Api.RoomsApi* | [**pinRoom**](docs/RoomsApi.md#pinRoom) | **PUT** /api/2.0/files/rooms/{id}/pin | Pin a room
*Api.RoomsApi* | [**reorderRoom**](docs/RoomsApi.md#reorderRoom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Reorder the room
*Api.RoomsApi* | [**resendEmailInvitations**](docs/RoomsApi.md#resendEmailInvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Resend the room invitations
*Api.RoomsApi* | [**setPublicSettings**](docs/RoomsApi.md#setPublicSettings) | **PUT** /api/2.0/files/roomtemplate/public | Set public settings
*Api.RoomsApi* | [**setRoomLink**](docs/RoomsApi.md#setRoomLink) | **PUT** /api/2.0/files/rooms/{id}/links | Set the room external or invitation link
*Api.RoomsApi* | [**setRoomSecurity**](docs/RoomsApi.md#setRoomSecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Set the room access rights
*Api.RoomsApi* | [**startRoomIndexExport**](docs/RoomsApi.md#startRoomIndexExport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Start the room index export
*Api.RoomsApi* | [**terminateRoomIndexExport**](docs/RoomsApi.md#terminateRoomIndexExport) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export
*Api.RoomsApi* | [**unarchiveRoom**](docs/RoomsApi.md#unarchiveRoom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Unarchive a room
*Api.RoomsApi* | [**unpinRoom**](docs/RoomsApi.md#unpinRoom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Unpin a room
*Api.RoomsApi* | [**updateRoom**](docs/RoomsApi.md#updateRoom) | **PUT** /api/2.0/files/rooms/{id} | Update a room
*Api.RoomsApi* | [**uploadRoomLogo**](docs/RoomsApi.md#uploadRoomLogo) | **POST** /api/2.0/files/logos | Upload a room logo image
*Api.SecurityAccessToDevToolsApi* | [**setTenantDevToolsAccessSettings**](docs/SecurityAccessToDevToolsApi.md#setTenantDevToolsAccessSettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings
*Api.SecurityActiveConnectionsApi* | [**getAllActiveConnections**](docs/SecurityActiveConnectionsApi.md#getAllActiveConnections) | **GET** /api/2.0/security/activeconnections | Get active connections
*Api.SecurityActiveConnectionsApi* | [**logOutActiveConnection**](docs/SecurityActiveConnectionsApi.md#logOutActiveConnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Log out from the connection
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsChangePassword**](docs/SecurityActiveConnectionsApi.md#logOutAllActiveConnectionsChangePassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Log out and change password
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsForUser**](docs/SecurityActiveConnectionsApi.md#logOutAllActiveConnectionsForUser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Log out for the user by ID
*Api.SecurityActiveConnectionsApi* | [**logOutAllExceptThisConnection**](docs/SecurityActiveConnectionsApi.md#logOutAllExceptThisConnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Log out from all connections except the current one
*Api.SecurityAuditTrailDataApi* | [**createAuditTrailReport**](docs/SecurityAuditTrailDataApi.md#createAuditTrailReport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report
*Api.SecurityAuditTrailDataApi* | [**getAuditEventsByFilter**](docs/SecurityAuditTrailDataApi.md#getAuditEventsByFilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data
*Api.SecurityAuditTrailDataApi* | [**getAuditSettings**](docs/SecurityAuditTrailDataApi.md#getAuditSettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailMappers**](docs/SecurityAuditTrailDataApi.md#getAuditTrailMappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailTypes**](docs/SecurityAuditTrailDataApi.md#getAuditTrailTypes) | **GET** /api/2.0/security/audit/types | Get audit trail types
*Api.SecurityAuditTrailDataApi* | [**getLastAuditEvents**](docs/SecurityAuditTrailDataApi.md#getLastAuditEvents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data
*Api.SecurityAuditTrailDataApi* | [**setAuditSettings**](docs/SecurityAuditTrailDataApi.md#setAuditSettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings
*Api.SecurityBannersVisibilityApi* | [**setTenantBannerSettings**](docs/SecurityBannersVisibilityApi.md#setTenantBannerSettings) | **POST** /api/2.0/settings/banner | Set the promotional banners visibility settings
*Api.SecurityCSPApi* | [**configureCsp**](docs/SecurityCSPApi.md#configureCsp) | **POST** /api/2.0/security/csp | Configure CSP settings
*Api.SecurityCSPApi* | [**getCspSettings**](docs/SecurityCSPApi.md#getCspSettings) | **GET** /api/2.0/security/csp | Get CSP settings
*Api.SecurityFirebaseApi* | [**docRegisterPusnNotificationDevice**](docs/SecurityFirebaseApi.md#docRegisterPusnNotificationDevice) | **POST** /api/2.0/settings/push/docregisterdevice | Save the Documents Firebase device token
*Api.SecurityFirebaseApi* | [**subscribeDocumentsPushNotification**](docs/SecurityFirebaseApi.md#subscribeDocumentsPushNotification) | **PUT** /api/2.0/settings/push/docsubscribe | Subscribe to Documents push notification
*Api.SecurityLoginHistoryApi* | [**createLoginHistoryReport**](docs/SecurityLoginHistoryApi.md#createLoginHistoryReport) | **POST** /api/2.0/security/audit/login/report | Generate the login history report
*Api.SecurityLoginHistoryApi* | [**getLastLoginEvents**](docs/SecurityLoginHistoryApi.md#getLastLoginEvents) | **GET** /api/2.0/security/audit/login/last | Get login history
*Api.SecurityLoginHistoryApi* | [**getLoginEventsByFilter**](docs/SecurityLoginHistoryApi.md#getLoginEventsByFilter) | **GET** /api/2.0/security/audit/login/filter | Get filtered login events
*Api.SecurityOAuth2Api* | [**generateJwtToken**](docs/SecurityOAuth2Api.md#generateJwtToken) | **GET** /api/2.0/security/oauth2/token | Generate JWT token
*Api.SecuritySMTPSettingsApi* | [**getSmtpOperationStatus**](docs/SecuritySMTPSettingsApi.md#getSmtpOperationStatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Get the SMTP testing process status
*Api.SecuritySMTPSettingsApi* | [**getSmtpSettings**](docs/SecuritySMTPSettingsApi.md#getSmtpSettings) | **GET** /api/2.0/smtpsettings/smtp | Get the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**resetSmtpSettings**](docs/SecuritySMTPSettingsApi.md#resetSmtpSettings) | **DELETE** /api/2.0/smtpsettings/smtp | Reset the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**saveSmtpSettings**](docs/SecuritySMTPSettingsApi.md#saveSmtpSettings) | **POST** /api/2.0/smtpsettings/smtp | Save the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**testSmtpSettings**](docs/SecuritySMTPSettingsApi.md#testSmtpSettings) | **GET** /api/2.0/smtpsettings/smtp/test | Test the SMTP settings
*Api.SettingsAccessToDevToolsApi* | [**getTenantAccessDevToolsSettings**](docs/SettingsAccessToDevToolsApi.md#getTenantAccessDevToolsSettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings
*Api.SettingsAuthorizationApi* | [**getAuthServices**](docs/SettingsAuthorizationApi.md#getAuthServices) | **GET** /api/2.0/settings/authservice | Get the authorization services
*Api.SettingsAuthorizationApi* | [**saveAuthKeys**](docs/SettingsAuthorizationApi.md#saveAuthKeys) | **POST** /api/2.0/settings/authservice | Save the authorization keys
*Api.SettingsBannersVisibilityApi* | [**getTenantBannerSettings**](docs/SettingsBannersVisibilityApi.md#getTenantBannerSettings) | **GET** /api/2.0/settings/banner | Get the promotional banners visibility settings
*Api.SettingsCommonSettingsApi* | [**closeAdminHelper**](docs/SettingsCommonSettingsApi.md#closeAdminHelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper
*Api.SettingsCommonSettingsApi* | [**completeWizard**](docs/SettingsCommonSettingsApi.md#completeWizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings
*Api.SettingsCommonSettingsApi* | [**configureDeepLink**](docs/SettingsCommonSettingsApi.md#configureDeepLink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings
*Api.SettingsCommonSettingsApi* | [**deletePortalColorTheme**](docs/SettingsCommonSettingsApi.md#deletePortalColorTheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme
*Api.SettingsCommonSettingsApi* | [**getDeepLinkSettings**](docs/SettingsCommonSettingsApi.md#getDeepLinkSettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings
*Api.SettingsCommonSettingsApi* | [**getPaymentSettings**](docs/SettingsCommonSettingsApi.md#getPaymentSettings) | **GET** /api/2.0/settings/payment | Get the payment settings
*Api.SettingsCommonSettingsApi* | [**getPortalColorTheme**](docs/SettingsCommonSettingsApi.md#getPortalColorTheme) | **GET** /api/2.0/settings/colortheme | Get a color theme
*Api.SettingsCommonSettingsApi* | [**getPortalHostname**](docs/SettingsCommonSettingsApi.md#getPortalHostname) | **GET** /api/2.0/settings/machine | Get hostname
*Api.SettingsCommonSettingsApi* | [**getPortalLogo**](docs/SettingsCommonSettingsApi.md#getPortalLogo) | **GET** /api/2.0/settings/logo | Get a portal logo
*Api.SettingsCommonSettingsApi* | [**getPortalSettings**](docs/SettingsCommonSettingsApi.md#getPortalSettings) | **GET** /api/2.0/settings | Get the portal settings
*Api.SettingsCommonSettingsApi* | [**getSocketSettings**](docs/SettingsCommonSettingsApi.md#getSocketSettings) | **GET** /api/2.0/settings/socket | Get the socket settings
*Api.SettingsCommonSettingsApi* | [**getSupportedCultures**](docs/SettingsCommonSettingsApi.md#getSupportedCultures) | **GET** /api/2.0/settings/cultures | Get supported languages
*Api.SettingsCommonSettingsApi* | [**getTenantUserInvitationSettings**](docs/SettingsCommonSettingsApi.md#getTenantUserInvitationSettings) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings
*Api.SettingsCommonSettingsApi* | [**getTimeZones**](docs/SettingsCommonSettingsApi.md#getTimeZones) | **GET** /api/2.0/settings/timezones | Get time zones
*Api.SettingsCommonSettingsApi* | [**saveDnsSettings**](docs/SettingsCommonSettingsApi.md#saveDnsSettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings
*Api.SettingsCommonSettingsApi* | [**saveMailDomainSettings**](docs/SettingsCommonSettingsApi.md#saveMailDomainSettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings
*Api.SettingsCommonSettingsApi* | [**savePortalColorTheme**](docs/SettingsCommonSettingsApi.md#savePortalColorTheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme
*Api.SettingsCommonSettingsApi* | [**updateEmailActivationSettings**](docs/SettingsCommonSettingsApi.md#updateEmailActivationSettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings
*Api.SettingsCommonSettingsApi* | [**updateInvitationSettings**](docs/SettingsCommonSettingsApi.md#updateInvitationSettings) | **PUT** /api/2.0/settings/invitationsettings | Update user invitation settings
*Api.SettingsCookiesApi* | [**getCookieSettings**](docs/SettingsCookiesApi.md#getCookieSettings) | **GET** /api/2.0/settings/cookiesettings | Get cookies lifetime
*Api.SettingsCookiesApi* | [**updateCookieSettings**](docs/SettingsCookiesApi.md#updateCookieSettings) | **PUT** /api/2.0/settings/cookiesettings | Update cookies lifetime
*Api.SettingsCustomNavigationApi* | [**createCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#createCustomNavigationItem) | **POST** /api/2.0/settings/customnavigation/create | Add a custom navigation item
*Api.SettingsCustomNavigationApi* | [**deleteCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#deleteCustomNavigationItem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Delete a custom navigation item
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Get a custom navigation item by ID
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItemSample**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItemSample) | **GET** /api/2.0/settings/customnavigation/getsample | Get a custom navigation item sample
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItems**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItems) | **GET** /api/2.0/settings/customnavigation/getall | Get the custom navigation items
*Api.SettingsEncryptionApi* | [**getStorageEncryptionProgress**](docs/SettingsEncryptionApi.md#getStorageEncryptionProgress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress
*Api.SettingsEncryptionApi* | [**getStorageEncryptionSettings**](docs/SettingsEncryptionApi.md#getStorageEncryptionSettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings
*Api.SettingsEncryptionApi* | [**startStorageEncryption**](docs/SettingsEncryptionApi.md#startStorageEncryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption process
*Api.SettingsGreetingSettingsApi* | [**getGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getGreetingSettings) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings
*Api.SettingsGreetingSettingsApi* | [**getIsDefaultGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getIsDefaultGreetingSettings) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings
*Api.SettingsGreetingSettingsApi* | [**restoreGreetingSettings**](docs/SettingsGreetingSettingsApi.md#restoreGreetingSettings) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings
*Api.SettingsGreetingSettingsApi* | [**saveGreetingSettings**](docs/SettingsGreetingSettingsApi.md#saveGreetingSettings) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings
*Api.SettingsIPRestrictionsApi* | [**getIpRestrictions**](docs/SettingsIPRestrictionsApi.md#getIpRestrictions) | **GET** /api/2.0/settings/iprestrictions | Get the IP portal restrictions
*Api.SettingsIPRestrictionsApi* | [**readIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#readIpRestrictionsSettings) | **GET** /api/2.0/settings/iprestrictions/settings | Get the IP restriction settings
*Api.SettingsIPRestrictionsApi* | [**saveIpRestrictions**](docs/SettingsIPRestrictionsApi.md#saveIpRestrictions) | **PUT** /api/2.0/settings/iprestrictions | Update the IP restrictions
*Api.SettingsIPRestrictionsApi* | [**updateIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#updateIpRestrictionsSettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Update the IP restriction settings
*Api.SettingsLicenseApi* | [**acceptLicense**](docs/SettingsLicenseApi.md#acceptLicense) | **POST** /api/2.0/settings/license/accept | Activate a license
*Api.SettingsLicenseApi* | [**getIsLicenseRequired**](docs/SettingsLicenseApi.md#getIsLicenseRequired) | **GET** /api/2.0/settings/license/required | Request a license
*Api.SettingsLicenseApi* | [**refreshLicense**](docs/SettingsLicenseApi.md#refreshLicense) | **GET** /api/2.0/settings/license/refresh | Refresh the license
*Api.SettingsLicenseApi* | [**uploadLicense**](docs/SettingsLicenseApi.md#uploadLicense) | **POST** /api/2.0/settings/license | Upload a license
*Api.SettingsLoginSettingsApi* | [**getLoginSettings**](docs/SettingsLoginSettingsApi.md#getLoginSettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings
*Api.SettingsLoginSettingsApi* | [**setDefaultLoginSettings**](docs/SettingsLoginSettingsApi.md#setDefaultLoginSettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings
*Api.SettingsLoginSettingsApi* | [**updateLoginSettings**](docs/SettingsLoginSettingsApi.md#updateLoginSettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings
*Api.SettingsMessagesApi* | [**enableAdminMessageSettings**](docs/SettingsMessagesApi.md#enableAdminMessageSettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
*Api.SettingsMessagesApi* | [**sendAdminMail**](docs/SettingsMessagesApi.md#sendAdminMail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
*Api.SettingsMessagesApi* | [**sendJoinInviteMail**](docs/SettingsMessagesApi.md#sendJoinInviteMail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email
*Api.SettingsNotificationsApi* | [**getNotificationSettings**](docs/SettingsNotificationsApi.md#getNotificationSettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability
*Api.SettingsNotificationsApi* | [**getRoomsNotificationSettings**](docs/SettingsNotificationsApi.md#getRoomsNotificationSettings) | **GET** /api/2.0/settings/notification/rooms | Get room notification settings
*Api.SettingsNotificationsApi* | [**setNotificationSettings**](docs/SettingsNotificationsApi.md#setNotificationSettings) | **POST** /api/2.0/settings/notification | Enable notifications
*Api.SettingsNotificationsApi* | [**setRoomsNotificationStatus**](docs/SettingsNotificationsApi.md#setRoomsNotificationStatus) | **POST** /api/2.0/settings/notification/rooms | Set room notification status
*Api.SettingsOwnerApi* | [**sendOwnerChangeInstructions**](docs/SettingsOwnerApi.md#sendOwnerChangeInstructions) | **POST** /api/2.0/settings/owner | Send the owner change instructions
*Api.SettingsOwnerApi* | [**updatePortalOwner**](docs/SettingsOwnerApi.md#updatePortalOwner) | **PUT** /api/2.0/settings/owner | Update the portal owner
*Api.SettingsQuotaApi* | [**getUserQuotaSettings**](docs/SettingsQuotaApi.md#getUserQuotaSettings) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings
*Api.SettingsQuotaApi* | [**saveRoomQuotaSettings**](docs/SettingsQuotaApi.md#saveRoomQuotaSettings) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings
*Api.SettingsQuotaApi* | [**setTenantQuotaSettings**](docs/SettingsQuotaApi.md#setTenantQuotaSettings) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings
*Api.SettingsRebrandingApi* | [**deleteAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteAdditionalWhiteLabelSettings) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings
*Api.SettingsRebrandingApi* | [**deleteCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteCompanyWhiteLabelSettings) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings
*Api.SettingsRebrandingApi* | [**getAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getAdditionalWhiteLabelSettings) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings
*Api.SettingsRebrandingApi* | [**getCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getCompanyWhiteLabelSettings) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings
*Api.SettingsRebrandingApi* | [**getEnableWhitelabel**](docs/SettingsRebrandingApi.md#getEnableWhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getIsDefaultWhiteLabelLogoText) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default white label logo text
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getIsDefaultWhiteLabelLogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos
*Api.SettingsRebrandingApi* | [**getLicensorData**](docs/SettingsRebrandingApi.md#getLicensorData) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getWhiteLabelLogoText) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getWhiteLabelLogos) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#restoreWhiteLabelLogoText) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogos**](docs/SettingsRebrandingApi.md#restoreWhiteLabelLogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos
*Api.SettingsRebrandingApi* | [**saveAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveAdditionalWhiteLabelSettings) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings
*Api.SettingsRebrandingApi* | [**saveCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveCompanyWhiteLabelSettings) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings
*Api.SettingsRebrandingApi* | [**saveWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#saveWhiteLabelLogoText) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text settings
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveWhiteLabelSettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettingsFromFiles**](docs/SettingsRebrandingApi.md#saveWhiteLabelSettingsFromFiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the white label logos from files
*Api.SettingsSSOApi* | [**getDefaultSsoSettingsV2**](docs/SettingsSSOApi.md#getDefaultSsoSettingsV2) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings
*Api.SettingsSSOApi* | [**getSsoSettingsV2**](docs/SettingsSSOApi.md#getSsoSettingsV2) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings
*Api.SettingsSSOApi* | [**getSsoSettingsV2Constants**](docs/SettingsSSOApi.md#getSsoSettingsV2Constants) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants
*Api.SettingsSSOApi* | [**resetSsoSettingsV2**](docs/SettingsSSOApi.md#resetSsoSettingsV2) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings
*Api.SettingsSSOApi* | [**saveSsoSettingsV2**](docs/SettingsSSOApi.md#saveSsoSettingsV2) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings
*Api.SettingsSecurityApi* | [**getEnabledModules**](docs/SettingsSecurityApi.md#getEnabledModules) | **GET** /api/2.0/settings/security/modules | Get the enabled modules
*Api.SettingsSecurityApi* | [**getIsProductAdministrator**](docs/SettingsSecurityApi.md#getIsProductAdministrator) | **GET** /api/2.0/settings/security/administrator | Check a product administrator
*Api.SettingsSecurityApi* | [**getPasswordSettings**](docs/SettingsSecurityApi.md#getPasswordSettings) | **GET** /api/2.0/settings/security/password | Get the password settings
*Api.SettingsSecurityApi* | [**getProductAdministrators**](docs/SettingsSecurityApi.md#getProductAdministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Get the product administrators
*Api.SettingsSecurityApi* | [**getWebItemSecurityInfo**](docs/SettingsSecurityApi.md#getWebItemSecurityInfo) | **GET** /api/2.0/settings/security/{id} | Get the module availability
*Api.SettingsSecurityApi* | [**getWebItemSettingsSecurityInfo**](docs/SettingsSecurityApi.md#getWebItemSettingsSecurityInfo) | **GET** /api/2.0/settings/security | Get the security settings
*Api.SettingsSecurityApi* | [**setAccessToWebItems**](docs/SettingsSecurityApi.md#setAccessToWebItems) | **PUT** /api/2.0/settings/security/access | Set the security settings to modules
*Api.SettingsSecurityApi* | [**setProductAdministrator**](docs/SettingsSecurityApi.md#setProductAdministrator) | **PUT** /api/2.0/settings/security/administrator | Set a product administrator
*Api.SettingsSecurityApi* | [**setWebItemSecurity**](docs/SettingsSecurityApi.md#setWebItemSecurity) | **PUT** /api/2.0/settings/security | Set the module security settings
*Api.SettingsSecurityApi* | [**updatePasswordSettings**](docs/SettingsSecurityApi.md#updatePasswordSettings) | **PUT** /api/2.0/settings/security/password | Set the password settings
*Api.SettingsStatisticsApi* | [**getSpaceUsageStatistics**](docs/SettingsStatisticsApi.md#getSpaceUsageStatistics) | **GET** /api/2.0/settings/statistics/spaceusage/{id} | Get the space usage statistics
*Api.SettingsStorageApi* | [**getAllBackupStorages**](docs/SettingsStorageApi.md#getAllBackupStorages) | **GET** /api/2.0/settings/storage/backup | Get the backup storages
*Api.SettingsStorageApi* | [**getAllCdnStorages**](docs/SettingsStorageApi.md#getAllCdnStorages) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages
*Api.SettingsStorageApi* | [**getAllStorages**](docs/SettingsStorageApi.md#getAllStorages) | **GET** /api/2.0/settings/storage | Get storages
*Api.SettingsStorageApi* | [**getAmazonS3Regions**](docs/SettingsStorageApi.md#getAmazonS3Regions) | **GET** /api/2.0/settings/storage/s3/regions | Get Amazon regions
*Api.SettingsStorageApi* | [**getStorageProgress**](docs/SettingsStorageApi.md#getStorageProgress) | **GET** /api/2.0/settings/storage/progress | Get the storage progress
*Api.SettingsStorageApi* | [**resetCdnToDefault**](docs/SettingsStorageApi.md#resetCdnToDefault) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings
*Api.SettingsStorageApi* | [**resetStorageToDefault**](docs/SettingsStorageApi.md#resetStorageToDefault) | **DELETE** /api/2.0/settings/storage | Reset the storage settings
*Api.SettingsStorageApi* | [**updateCdnStorage**](docs/SettingsStorageApi.md#updateCdnStorage) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage
*Api.SettingsStorageApi* | [**updateStorage**](docs/SettingsStorageApi.md#updateStorage) | **PUT** /api/2.0/settings/storage | Update a storage
*Api.SettingsTFASettingsApi* | [**getTfaAppCodes**](docs/SettingsTFASettingsApi.md#getTfaAppCodes) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA codes
*Api.SettingsTFASettingsApi* | [**getTfaConfirmUrl**](docs/SettingsTFASettingsApi.md#getTfaConfirmUrl) | **GET** /api/2.0/settings/tfaapp/confirm | Get confirmation email
*Api.SettingsTFASettingsApi* | [**getTfaSettings**](docs/SettingsTFASettingsApi.md#getTfaSettings) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings
*Api.SettingsTFASettingsApi* | [**tfaAppGenerateSetupCode**](docs/SettingsTFASettingsApi.md#tfaAppGenerateSetupCode) | **GET** /api/2.0/settings/tfaapp/setup | Generate setup code
*Api.SettingsTFASettingsApi* | [**tfaValidateAuthCode**](docs/SettingsTFASettingsApi.md#tfaValidateAuthCode) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code
*Api.SettingsTFASettingsApi* | [**unlinkTfaApp**](docs/SettingsTFASettingsApi.md#unlinkTfaApp) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application
*Api.SettingsTFASettingsApi* | [**updateTfaAppCodes**](docs/SettingsTFASettingsApi.md#updateTfaAppCodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Update the TFA codes
*Api.SettingsTFASettingsApi* | [**updateTfaSettings**](docs/SettingsTFASettingsApi.md#updateTfaSettings) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings
*Api.SettingsTFASettingsApi* | [**updateTfaSettingsLink**](docs/SettingsTFASettingsApi.md#updateTfaSettingsLink) | **PUT** /api/2.0/settings/tfaappwithlink | Get a confirmation email for updating TFA settings
*Api.SettingsWebhooksApi* | [**createWebhook**](docs/SettingsWebhooksApi.md#createWebhook) | **POST** /api/2.0/settings/webhook | Create a webhook
*Api.SettingsWebhooksApi* | [**enableWebhook**](docs/SettingsWebhooksApi.md#enableWebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook
*Api.SettingsWebhooksApi* | [**getTenantWebhooks**](docs/SettingsWebhooksApi.md#getTenantWebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks
*Api.SettingsWebhooksApi* | [**getWebhookTriggers**](docs/SettingsWebhooksApi.md#getWebhookTriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers
*Api.SettingsWebhooksApi* | [**getWebhooksLogs**](docs/SettingsWebhooksApi.md#getWebhooksLogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs
*Api.SettingsWebhooksApi* | [**removeWebhook**](docs/SettingsWebhooksApi.md#removeWebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook
*Api.SettingsWebhooksApi* | [**retryWebhook**](docs/SettingsWebhooksApi.md#retryWebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook
*Api.SettingsWebhooksApi* | [**retryWebhooks**](docs/SettingsWebhooksApi.md#retryWebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks
*Api.SettingsWebhooksApi* | [**updateWebhook**](docs/SettingsWebhooksApi.md#updateWebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook
*Api.SettingsWebpluginsApi* | [**addWebPluginFromFile**](docs/SettingsWebpluginsApi.md#addWebPluginFromFile) | **POST** /api/2.0/settings/webplugins | Add a web plugin
*Api.SettingsWebpluginsApi* | [**deleteWebPlugin**](docs/SettingsWebpluginsApi.md#deleteWebPlugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Delete a web plugin
*Api.SettingsWebpluginsApi* | [**getWebPlugin**](docs/SettingsWebpluginsApi.md#getWebPlugin) | **GET** /api/2.0/settings/webplugins/{name} | Get a web plugin by name
*Api.SettingsWebpluginsApi* | [**getWebPlugins**](docs/SettingsWebpluginsApi.md#getWebPlugins) | **GET** /api/2.0/settings/webplugins | Get web plugins
*Api.SettingsWebpluginsApi* | [**updateWebPlugin**](docs/SettingsWebpluginsApi.md#updateWebPlugin) | **PUT** /api/2.0/settings/webplugins/{name} | Update a web plugin
*Api.ThirdPartyApi* | [**getThirdPartyCode**](docs/ThirdPartyApi.md#getThirdPartyCode) | **GET** /api/2.0/thirdparty/{provider} | Get the code request

</details>

## Documentation for Models

<details><summary>Models list</summary>
 - [Api.AccountInfoArrayWrapper](docs/AccountInfoArrayWrapper.md)
 - [Api.AccountInfoDto](docs/AccountInfoDto.md)
 - [Api.AccountLoginType](docs/AccountLoginType.md)
 - [Api.AceShortWrapper](docs/AceShortWrapper.md)
 - [Api.AceShortWrapperArrayWrapper](docs/AceShortWrapperArrayWrapper.md)
 - [Api.ActionConfig](docs/ActionConfig.md)
 - [Api.ActionLinkConfig](docs/ActionLinkConfig.md)
 - [Api.ActionType](docs/ActionType.md)
 - [Api.ActiveConnectionsDto](docs/ActiveConnectionsDto.md)
 - [Api.ActiveConnectionsItemDto](docs/ActiveConnectionsItemDto.md)
 - [Api.ActiveConnectionsWrapper](docs/ActiveConnectionsWrapper.md)
 - [Api.ActiveConnectionsWrapperLinksInner](docs/ActiveConnectionsWrapperLinksInner.md)
 - [Api.AdditionalWhiteLabelSettings](docs/AdditionalWhiteLabelSettings.md)
 - [Api.AdditionalWhiteLabelSettingsDto](docs/AdditionalWhiteLabelSettingsDto.md)
 - [Api.AdditionalWhiteLabelSettingsWrapper](docs/AdditionalWhiteLabelSettingsWrapper.md)
 - [Api.AdminMessageBaseSettingsRequestsDto](docs/AdminMessageBaseSettingsRequestsDto.md)
 - [Api.AdminMessageSettingsRequestsDto](docs/AdminMessageSettingsRequestsDto.md)
 - [Api.AnonymousConfigDto](docs/AnonymousConfigDto.md)
 - [Api.ApiDateTime](docs/ApiDateTime.md)
 - [Api.ApiKeyResponseArrayWrapper](docs/ApiKeyResponseArrayWrapper.md)
 - [Api.ApiKeyResponseDto](docs/ApiKeyResponseDto.md)
 - [Api.ApiKeyResponseWrapper](docs/ApiKeyResponseWrapper.md)
 - [Api.ApplyFilterOption](docs/ApplyFilterOption.md)
 - [Api.ArchiveRoomRequest](docs/ArchiveRoomRequest.md)
 - [Api.Area](docs/Area.md)
 - [Api.ArrayArrayWrapper](docs/ArrayArrayWrapper.md)
 - [Api.AuditEventArrayWrapper](docs/AuditEventArrayWrapper.md)
 - [Api.AuditEventDto](docs/AuditEventDto.md)
 - [Api.AuthData](docs/AuthData.md)
 - [Api.AuthKey](docs/AuthKey.md)
 - [Api.AuthRequestsDto](docs/AuthRequestsDto.md)
 - [Api.AuthServiceRequestsArrayWrapper](docs/AuthServiceRequestsArrayWrapper.md)
 - [Api.AuthServiceRequestsDto](docs/AuthServiceRequestsDto.md)
 - [Api.AuthenticationTokenDto](docs/AuthenticationTokenDto.md)
 - [Api.AuthenticationTokenWrapper](docs/AuthenticationTokenWrapper.md)
 - [Api.AutoCleanUpData](docs/AutoCleanUpData.md)
 - [Api.AutoCleanUpDataWrapper](docs/AutoCleanUpDataWrapper.md)
 - [Api.AutoCleanupRequestDto](docs/AutoCleanupRequestDto.md)
 - [Api.BackupDto](docs/BackupDto.md)
 - [Api.BackupHistoryRecord](docs/BackupHistoryRecord.md)
 - [Api.BackupHistoryRecordArrayWrapper](docs/BackupHistoryRecordArrayWrapper.md)
 - [Api.BackupPeriod](docs/BackupPeriod.md)
 - [Api.BackupProgress](docs/BackupProgress.md)
 - [Api.BackupProgressEnum](docs/BackupProgressEnum.md)
 - [Api.BackupProgressWrapper](docs/BackupProgressWrapper.md)
 - [Api.BackupRestoreDto](docs/BackupRestoreDto.md)
 - [Api.BackupScheduleDto](docs/BackupScheduleDto.md)
 - [Api.BackupStorageType](docs/BackupStorageType.md)
 - [Api.Balance](docs/Balance.md)
 - [Api.BalanceWrapper](docs/BalanceWrapper.md)
 - [Api.BaseBatchRequestDto](docs/BaseBatchRequestDto.md)
 - [Api.BaseBatchRequestDtoFolderIdsInner](docs/BaseBatchRequestDtoFolderIdsInner.md)
 - [Api.BatchRequestDto](docs/BatchRequestDto.md)
 - [Api.BatchRequestDtoDestFolderId](docs/BatchRequestDtoDestFolderId.md)
 - [Api.BatchTagsRequestDto](docs/BatchTagsRequestDto.md)
 - [Api.BooleanWrapper](docs/BooleanWrapper.md)
 - [Api.CapabilitiesDto](docs/CapabilitiesDto.md)
 - [Api.CapabilitiesWrapper](docs/CapabilitiesWrapper.md)
 - [Api.CdnStorageSettings](docs/CdnStorageSettings.md)
 - [Api.CdnStorageSettingsWrapper](docs/CdnStorageSettingsWrapper.md)
 - [Api.ChangeClientActivationRequest](docs/ChangeClientActivationRequest.md)
 - [Api.ChangeHistory](docs/ChangeHistory.md)
 - [Api.ChangeOwnerRequestDto](docs/ChangeOwnerRequestDto.md)
 - [Api.CheckConversionRequestDtoInteger](docs/CheckConversionRequestDtoInteger.md)
 - [Api.CheckDestFolderDto](docs/CheckDestFolderDto.md)
 - [Api.CheckDestFolderResult](docs/CheckDestFolderResult.md)
 - [Api.CheckDestFolderWrapper](docs/CheckDestFolderWrapper.md)
 - [Api.CheckDocServiceUrlRequestDto](docs/CheckDocServiceUrlRequestDto.md)
 - [Api.CheckFillFormDraft](docs/CheckFillFormDraft.md)
 - [Api.CheckUploadRequest](docs/CheckUploadRequest.md)
 - [Api.ClientInfoResponse](docs/ClientInfoResponse.md)
 - [Api.ClientResponse](docs/ClientResponse.md)
 - [Api.ClientSecretResponse](docs/ClientSecretResponse.md)
 - [Api.CoEditingConfig](docs/CoEditingConfig.md)
 - [Api.CoEditingConfigMode](docs/CoEditingConfigMode.md)
 - [Api.CompanyWhiteLabelSettings](docs/CompanyWhiteLabelSettings.md)
 - [Api.CompanyWhiteLabelSettingsArrayWrapper](docs/CompanyWhiteLabelSettingsArrayWrapper.md)
 - [Api.CompanyWhiteLabelSettingsDto](docs/CompanyWhiteLabelSettingsDto.md)
 - [Api.CompanyWhiteLabelSettingsWrapper](docs/CompanyWhiteLabelSettingsWrapper.md)
 - [Api.ConfigurationDtoInteger](docs/ConfigurationDtoInteger.md)
 - [Api.ConfigurationIntegerWrapper](docs/ConfigurationIntegerWrapper.md)
 - [Api.ConfirmData](docs/ConfirmData.md)
 - [Api.ConfirmDto](docs/ConfirmDto.md)
 - [Api.ConfirmType](docs/ConfirmType.md)
 - [Api.ConfirmWrapper](docs/ConfirmWrapper.md)
 - [Api.Contact](docs/Contact.md)
 - [Api.ContentDisposition](docs/ContentDisposition.md)
 - [Api.ContentType](docs/ContentType.md)
 - [Api.ConversationResultArrayWrapper](docs/ConversationResultArrayWrapper.md)
 - [Api.ConversationResultDto](docs/ConversationResultDto.md)
 - [Api.CookieSettingsDto](docs/CookieSettingsDto.md)
 - [Api.CookieSettingsRequestsDto](docs/CookieSettingsRequestsDto.md)
 - [Api.CookieSettingsWrapper](docs/CookieSettingsWrapper.md)
 - [Api.CopyAsJsonElement](docs/CopyAsJsonElement.md)
 - [Api.CopyAsJsonElementDestFolderId](docs/CopyAsJsonElementDestFolderId.md)
 - [Api.CoverRequestDto](docs/CoverRequestDto.md)
 - [Api.CoversResultArrayWrapper](docs/CoversResultArrayWrapper.md)
 - [Api.CoversResultDto](docs/CoversResultDto.md)
 - [Api.CreateApiKeyRequestDto](docs/CreateApiKeyRequestDto.md)
 - [Api.CreateClientRequest](docs/CreateClientRequest.md)
 - [Api.CreateFileJsonElement](docs/CreateFileJsonElement.md)
 - [Api.CreateFileJsonElementTemplateId](docs/CreateFileJsonElementTemplateId.md)
 - [Api.CreateFolder](docs/CreateFolder.md)
 - [Api.CreateRoomFromTemplateDto](docs/CreateRoomFromTemplateDto.md)
 - [Api.CreateRoomRequestDto](docs/CreateRoomRequestDto.md)
 - [Api.CreateTagRequestDto](docs/CreateTagRequestDto.md)
 - [Api.CreateTextOrHtmlFile](docs/CreateTextOrHtmlFile.md)
 - [Api.CreateThirdPartyRoom](docs/CreateThirdPartyRoom.md)
 - [Api.CreateWebhooksConfigRequestsDto](docs/CreateWebhooksConfigRequestsDto.md)
 - [Api.Cron](docs/Cron.md)
 - [Api.CronParams](docs/CronParams.md)
 - [Api.CspDto](docs/CspDto.md)
 - [Api.CspRequestsDto](docs/CspRequestsDto.md)
 - [Api.CspWrapper](docs/CspWrapper.md)
 - [Api.Culture](docs/Culture.md)
 - [Api.CultureSpecificExternalResource](docs/CultureSpecificExternalResource.md)
 - [Api.CultureSpecificExternalResources](docs/CultureSpecificExternalResources.md)
 - [Api.CurrenciesArrayWrapper](docs/CurrenciesArrayWrapper.md)
 - [Api.CurrenciesDto](docs/CurrenciesDto.md)
 - [Api.CurrentLicenseInfo](docs/CurrentLicenseInfo.md)
 - [Api.CustomColorThemesSettingsColorItem](docs/CustomColorThemesSettingsColorItem.md)
 - [Api.CustomColorThemesSettingsDto](docs/CustomColorThemesSettingsDto.md)
 - [Api.CustomColorThemesSettingsItem](docs/CustomColorThemesSettingsItem.md)
 - [Api.CustomColorThemesSettingsRequestsDto](docs/CustomColorThemesSettingsRequestsDto.md)
 - [Api.CustomColorThemesSettingsWrapper](docs/CustomColorThemesSettingsWrapper.md)
 - [Api.CustomFilterParameters](docs/CustomFilterParameters.md)
 - [Api.CustomNavigationItem](docs/CustomNavigationItem.md)
 - [Api.CustomNavigationItemArrayWrapper](docs/CustomNavigationItemArrayWrapper.md)
 - [Api.CustomNavigationItemWrapper](docs/CustomNavigationItemWrapper.md)
 - [Api.CustomerConfigDto](docs/CustomerConfigDto.md)
 - [Api.CustomerInfoDto](docs/CustomerInfoDto.md)
 - [Api.CustomerInfoWrapper](docs/CustomerInfoWrapper.md)
 - [Api.CustomerOperationsReportRequestDto](docs/CustomerOperationsReportRequestDto.md)
 - [Api.CustomizationConfigDto](docs/CustomizationConfigDto.md)
 - [Api.DarkThemeSettings](docs/DarkThemeSettings.md)
 - [Api.DarkThemeSettingsRequestDto](docs/DarkThemeSettingsRequestDto.md)
 - [Api.DarkThemeSettingsType](docs/DarkThemeSettingsType.md)
 - [Api.DarkThemeSettingsWrapper](docs/DarkThemeSettingsWrapper.md)
 - [Api.DateToAutoCleanUp](docs/DateToAutoCleanUp.md)
 - [Api.DbTenant](docs/DbTenant.md)
 - [Api.DbTenantPartner](docs/DbTenantPartner.md)
 - [Api.DeepLinkConfigurationRequestsDto](docs/DeepLinkConfigurationRequestsDto.md)
 - [Api.DeepLinkDto](docs/DeepLinkDto.md)
 - [Api.DeepLinkHandlingMode](docs/DeepLinkHandlingMode.md)
 - [Api.Delete](docs/Delete.md)
 - [Api.DeleteBatchRequestDto](docs/DeleteBatchRequestDto.md)
 - [Api.DeleteFolder](docs/DeleteFolder.md)
 - [Api.DeleteRoomRequest](docs/DeleteRoomRequest.md)
 - [Api.DeleteVersionBatchRequestDto](docs/DeleteVersionBatchRequestDto.md)
 - [Api.DisplayRequestDto](docs/DisplayRequestDto.md)
 - [Api.DistributedTaskStatus](docs/DistributedTaskStatus.md)
 - [Api.DnsSettingsRequestsDto](docs/DnsSettingsRequestsDto.md)
 - [Api.DocServiceUrlDto](docs/DocServiceUrlDto.md)
 - [Api.DocServiceUrlWrapper](docs/DocServiceUrlWrapper.md)
 - [Api.DocumentBuilderTaskDto](docs/DocumentBuilderTaskDto.md)
 - [Api.DocumentBuilderTaskWrapper](docs/DocumentBuilderTaskWrapper.md)
 - [Api.DocumentConfigDto](docs/DocumentConfigDto.md)
 - [Api.DoubleWrapper](docs/DoubleWrapper.md)
 - [Api.DownloadRequestDto](docs/DownloadRequestDto.md)
 - [Api.DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [Api.DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [Api.DraftLocationInteger](docs/DraftLocationInteger.md)
 - [Api.DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [Api.EditHistoryArrayWrapper](docs/EditHistoryArrayWrapper.md)
 - [Api.EditHistoryAuthor](docs/EditHistoryAuthor.md)
 - [Api.EditHistoryChangesWrapper](docs/EditHistoryChangesWrapper.md)
 - [Api.EditHistoryDataDto](docs/EditHistoryDataDto.md)
 - [Api.EditHistoryDataWrapper](docs/EditHistoryDataWrapper.md)
 - [Api.EditHistoryDto](docs/EditHistoryDto.md)
 - [Api.EditHistoryUrl](docs/EditHistoryUrl.md)
 - [Api.EditorConfigurationDto](docs/EditorConfigurationDto.md)
 - [Api.EditorType](docs/EditorType.md)
 - [Api.EmailActivationSettings](docs/EmailActivationSettings.md)
 - [Api.EmailActivationSettingsWrapper](docs/EmailActivationSettingsWrapper.md)
 - [Api.EmailMemberRequestDto](docs/EmailMemberRequestDto.md)
 - [Api.EmailValidationKeyModel](docs/EmailValidationKeyModel.md)
 - [Api.EmbeddedConfig](docs/EmbeddedConfig.md)
 - [Api.EmployeeActivationStatus](docs/EmployeeActivationStatus.md)
 - [Api.EmployeeArrayWrapper](docs/EmployeeArrayWrapper.md)
 - [Api.EmployeeDto](docs/EmployeeDto.md)
 - [Api.EmployeeFullArrayWrapper](docs/EmployeeFullArrayWrapper.md)
 - [Api.EmployeeFullDto](docs/EmployeeFullDto.md)
 - [Api.EmployeeFullWrapper](docs/EmployeeFullWrapper.md)
 - [Api.EmployeeStatus](docs/EmployeeStatus.md)
 - [Api.EmployeeType](docs/EmployeeType.md)
 - [Api.EncryprtionStatus](docs/EncryprtionStatus.md)
 - [Api.EncryptionKeysConfig](docs/EncryptionKeysConfig.md)
 - [Api.EncryptionSettings](docs/EncryptionSettings.md)
 - [Api.EncryptionSettingsWrapper](docs/EncryptionSettingsWrapper.md)
 - [Api.EntryType](docs/EntryType.md)
 - [Api.ErrorResponse](docs/ErrorResponse.md)
 - [Api.ExchangeToken200Response](docs/ExchangeToken200Response.md)
 - [Api.ExternalShareDto](docs/ExternalShareDto.md)
 - [Api.ExternalShareRequestParam](docs/ExternalShareRequestParam.md)
 - [Api.ExternalShareWrapper](docs/ExternalShareWrapper.md)
 - [Api.FeatureUsedDto](docs/FeatureUsedDto.md)
 - [Api.FeedbackConfig](docs/FeedbackConfig.md)
 - [Api.FileConflictResolveType](docs/FileConflictResolveType.md)
 - [Api.FileDtoInteger](docs/FileDtoInteger.md)
 - [Api.FileDtoIntegerSecurity](docs/FileDtoIntegerSecurity.md)
 - [Api.FileDtoIntegerViewAccessibility](docs/FileDtoIntegerViewAccessibility.md)
 - [Api.FileEntryArrayWrapper](docs/FileEntryArrayWrapper.md)
 - [Api.FileEntryDto](docs/FileEntryDto.md)
 - [Api.FileEntryType](docs/FileEntryType.md)
 - [Api.FileEntryWrapper](docs/FileEntryWrapper.md)
 - [Api.FileIntegerArrayWrapper](docs/FileIntegerArrayWrapper.md)
 - [Api.FileIntegerWrapper](docs/FileIntegerWrapper.md)
 - [Api.FileLink](docs/FileLink.md)
 - [Api.FileLinkRequest](docs/FileLinkRequest.md)
 - [Api.FileLinkWrapper](docs/FileLinkWrapper.md)
 - [Api.FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [Api.FileOperationDto](docs/FileOperationDto.md)
 - [Api.FileOperationType](docs/FileOperationType.md)
 - [Api.FileOperationWrapper](docs/FileOperationWrapper.md)
 - [Api.FileReference](docs/FileReference.md)
 - [Api.FileReferenceData](docs/FileReferenceData.md)
 - [Api.FileReferenceWrapper](docs/FileReferenceWrapper.md)
 - [Api.FileShare](docs/FileShare.md)
 - [Api.FileShareArrayWrapper](docs/FileShareArrayWrapper.md)
 - [Api.FileShareDto](docs/FileShareDto.md)
 - [Api.FileShareParams](docs/FileShareParams.md)
 - [Api.FileShareWrapper](docs/FileShareWrapper.md)
 - [Api.FileStatus](docs/FileStatus.md)
 - [Api.FileType](docs/FileType.md)
 - [Api.FileUploadResultDto](docs/FileUploadResultDto.md)
 - [Api.FileUploadResultWrapper](docs/FileUploadResultWrapper.md)
 - [Api.FilesSettingsDto](docs/FilesSettingsDto.md)
 - [Api.FilesSettingsDtoInternalFormats](docs/FilesSettingsDtoInternalFormats.md)
 - [Api.FilesSettingsWrapper](docs/FilesSettingsWrapper.md)
 - [Api.FilesStatisticsFolder](docs/FilesStatisticsFolder.md)
 - [Api.FilesStatisticsResultDto](docs/FilesStatisticsResultDto.md)
 - [Api.FilesStatisticsResultWrapper](docs/FilesStatisticsResultWrapper.md)
 - [Api.FillingFormResultDtoInteger](docs/FillingFormResultDtoInteger.md)
 - [Api.FillingFormResultIntegerWrapper](docs/FillingFormResultIntegerWrapper.md)
 - [Api.FilterType](docs/FilterType.md)
 - [Api.FinishDto](docs/FinishDto.md)
 - [Api.FireBaseUser](docs/FireBaseUser.md)
 - [Api.FireBaseUserWrapper](docs/FireBaseUserWrapper.md)
 - [Api.FirebaseDto](docs/FirebaseDto.md)
 - [Api.FirebaseRequestsDto](docs/FirebaseRequestsDto.md)
 - [Api.FolderContentDtoInteger](docs/FolderContentDtoInteger.md)
 - [Api.FolderContentIntegerArrayWrapper](docs/FolderContentIntegerArrayWrapper.md)
 - [Api.FolderContentIntegerWrapper](docs/FolderContentIntegerWrapper.md)
 - [Api.FolderDtoInteger](docs/FolderDtoInteger.md)
 - [Api.FolderDtoString](docs/FolderDtoString.md)
 - [Api.FolderIntegerArrayWrapper](docs/FolderIntegerArrayWrapper.md)
 - [Api.FolderIntegerWrapper](docs/FolderIntegerWrapper.md)
 - [Api.FolderStringArrayWrapper](docs/FolderStringArrayWrapper.md)
 - [Api.FolderStringWrapper](docs/FolderStringWrapper.md)
 - [Api.FolderType](docs/FolderType.md)
 - [Api.FormFillingManageAction](docs/FormFillingManageAction.md)
 - [Api.FormFillingStatus](docs/FormFillingStatus.md)
 - [Api.FormGalleryDto](docs/FormGalleryDto.md)
 - [Api.FormRole](docs/FormRole.md)
 - [Api.FormRoleArrayWrapper](docs/FormRoleArrayWrapper.md)
 - [Api.FormRoleWrapper](docs/FormRoleWrapper.md)
 - [Api.FormsItemArrayWrapper](docs/FormsItemArrayWrapper.md)
 - [Api.FormsItemDto](docs/FormsItemDto.md)
 - [Api.GetReferenceDataDtoInteger](docs/GetReferenceDataDtoInteger.md)
 - [Api.GobackConfig](docs/GobackConfig.md)
 - [Api.GreetingSettingsRequestsDto](docs/GreetingSettingsRequestsDto.md)
 - [Api.GroupArrayWrapper](docs/GroupArrayWrapper.md)
 - [Api.GroupDto](docs/GroupDto.md)
 - [Api.GroupRequestDto](docs/GroupRequestDto.md)
 - [Api.GroupSummaryArrayWrapper](docs/GroupSummaryArrayWrapper.md)
 - [Api.GroupSummaryDto](docs/GroupSummaryDto.md)
 - [Api.GroupWrapper](docs/GroupWrapper.md)
 - [Api.HideConfirmConvertRequestDto](docs/HideConfirmConvertRequestDto.md)
 - [Api.HistoryAction](docs/HistoryAction.md)
 - [Api.HistoryArrayWrapper](docs/HistoryArrayWrapper.md)
 - [Api.HistoryData](docs/HistoryData.md)
 - [Api.HistoryDto](docs/HistoryDto.md)
 - [Api.ICompressWrapper](docs/ICompressWrapper.md)
 - [Api.IMagickGeometry](docs/IMagickGeometry.md)
 - [Api.IPRestriction](docs/IPRestriction.md)
 - [Api.IPRestrictionArrayWrapper](docs/IPRestrictionArrayWrapper.md)
 - [Api.IPRestrictionsSettings](docs/IPRestrictionsSettings.md)
 - [Api.IPRestrictionsSettingsWrapper](docs/IPRestrictionsSettingsWrapper.md)
 - [Api.InfoConfigDto](docs/InfoConfigDto.md)
 - [Api.Int64Wrapper](docs/Int64Wrapper.md)
 - [Api.InviteUsersRequestDto](docs/InviteUsersRequestDto.md)
 - [Api.IpRestrictionBase](docs/IpRestrictionBase.md)
 - [Api.IpRestrictionsDto](docs/IpRestrictionsDto.md)
 - [Api.IpRestrictionsWrapper](docs/IpRestrictionsWrapper.md)
 - [Api.IsDefaultWhiteLabelLogosArrayWrapper](docs/IsDefaultWhiteLabelLogosArrayWrapper.md)
 - [Api.IsDefaultWhiteLabelLogosDto](docs/IsDefaultWhiteLabelLogosDto.md)
 - [Api.IsDefaultWhiteLabelLogosWrapper](docs/IsDefaultWhiteLabelLogosWrapper.md)
 - [Api.ItemKeyValuePairObjectObject](docs/ItemKeyValuePairObjectObject.md)
 - [Api.ItemKeyValuePairStringBoolean](docs/ItemKeyValuePairStringBoolean.md)
 - [Api.ItemKeyValuePairStringLogoRequestsDto](docs/ItemKeyValuePairStringLogoRequestsDto.md)
 - [Api.ItemKeyValuePairStringString](docs/ItemKeyValuePairStringString.md)
 - [Api.KeyValuePairBooleanString](docs/KeyValuePairBooleanString.md)
 - [Api.KeyValuePairBooleanStringWrapper](docs/KeyValuePairBooleanStringWrapper.md)
 - [Api.KeyValuePairStringStringValues](docs/KeyValuePairStringStringValues.md)
 - [Api.LinkAccountRequestDto](docs/LinkAccountRequestDto.md)
 - [Api.LinkType](docs/LinkType.md)
 - [Api.LockFileParameters](docs/LockFileParameters.md)
 - [Api.LoginEventArrayWrapper](docs/LoginEventArrayWrapper.md)
 - [Api.LoginEventDto](docs/LoginEventDto.md)
 - [Api.LoginProvider](docs/LoginProvider.md)
 - [Api.LoginSettingsDto](docs/LoginSettingsDto.md)
 - [Api.LoginSettingsRequestDto](docs/LoginSettingsRequestDto.md)
 - [Api.LoginSettingsWrapper](docs/LoginSettingsWrapper.md)
 - [Api.Logo](docs/Logo.md)
 - [Api.LogoConfigDto](docs/LogoConfigDto.md)
 - [Api.LogoCover](docs/LogoCover.md)
 - [Api.LogoRequest](docs/LogoRequest.md)
 - [Api.LogoRequestsDto](docs/LogoRequestsDto.md)
 - [Api.MailDomainSettingsRequestsDto](docs/MailDomainSettingsRequestsDto.md)
 - [Api.ManageFormFillingDtoInteger](docs/ManageFormFillingDtoInteger.md)
 - [Api.MemberBaseRequestDto](docs/MemberBaseRequestDto.md)
 - [Api.MemberRequestDto](docs/MemberRequestDto.md)
 - [Api.MembersRequest](docs/MembersRequest.md)
 - [Api.MentionMessageWrapper](docs/MentionMessageWrapper.md)
 - [Api.MentionWrapper](docs/MentionWrapper.md)
 - [Api.MentionWrapperArrayWrapper](docs/MentionWrapperArrayWrapper.md)
 - [Api.MessageAction](docs/MessageAction.md)
 - [Api.MigratingApiFiles](docs/MigratingApiFiles.md)
 - [Api.MigratingApiGroup](docs/MigratingApiGroup.md)
 - [Api.MigratingApiUser](docs/MigratingApiUser.md)
 - [Api.MigrationApiInfo](docs/MigrationApiInfo.md)
 - [Api.MigrationStatusDto](docs/MigrationStatusDto.md)
 - [Api.MigrationStatusWrapper](docs/MigrationStatusWrapper.md)
 - [Api.MobilePhoneActivationStatus](docs/MobilePhoneActivationStatus.md)
 - [Api.MobileRequestsDto](docs/MobileRequestsDto.md)
 - [Api.Module](docs/Module.md)
 - [Api.ModuleType](docs/ModuleType.md)
 - [Api.ModuleWrapper](docs/ModuleWrapper.md)
 - [Api.NewItemsDtoFileEntryDto](docs/NewItemsDtoFileEntryDto.md)
 - [Api.NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [Api.NewItemsFileEntryArrayWrapper](docs/NewItemsFileEntryArrayWrapper.md)
 - [Api.NewItemsRoomNewItemsArrayWrapper](docs/NewItemsRoomNewItemsArrayWrapper.md)
 - [Api.NoContentResult](docs/NoContentResult.md)
 - [Api.NoContentResultWrapper](docs/NoContentResultWrapper.md)
 - [Api.NotificationSettingsDto](docs/NotificationSettingsDto.md)
 - [Api.NotificationSettingsRequestsDto](docs/NotificationSettingsRequestsDto.md)
 - [Api.NotificationSettingsWrapper](docs/NotificationSettingsWrapper.md)
 - [Api.NotificationType](docs/NotificationType.md)
 - [Api.OAuth20Token](docs/OAuth20Token.md)
 - [Api.ObjectArrayWrapper](docs/ObjectArrayWrapper.md)
 - [Api.ObjectWrapper](docs/ObjectWrapper.md)
 - [Api.OperationDto](docs/OperationDto.md)
 - [Api.Options](docs/Options.md)
 - [Api.OrderBy](docs/OrderBy.md)
 - [Api.OrderRequestDto](docs/OrderRequestDto.md)
 - [Api.OrdersItemRequestDtoInteger](docs/OrdersItemRequestDtoInteger.md)
 - [Api.OrdersRequestDtoInteger](docs/OrdersRequestDtoInteger.md)
 - [Api.OwnerChangeInstructionsDto](docs/OwnerChangeInstructionsDto.md)
 - [Api.OwnerChangeInstructionsWrapper](docs/OwnerChangeInstructionsWrapper.md)
 - [Api.OwnerIdSettingsRequestDto](docs/OwnerIdSettingsRequestDto.md)
 - [Api.PageableModificationResponse](docs/PageableModificationResponse.md)
 - [Api.PageableResponse](docs/PageableResponse.md)
 - [Api.PageableResponseClientInfoResponse](docs/PageableResponseClientInfoResponse.md)
 - [Api.Paragraph](docs/Paragraph.md)
 - [Api.PasswordHasher](docs/PasswordHasher.md)
 - [Api.PasswordSettingsDto](docs/PasswordSettingsDto.md)
 - [Api.PasswordSettingsRequestsDto](docs/PasswordSettingsRequestsDto.md)
 - [Api.PasswordSettingsWrapper](docs/PasswordSettingsWrapper.md)
 - [Api.PaymentCalculation](docs/PaymentCalculation.md)
 - [Api.PaymentCalculationWrapper](docs/PaymentCalculationWrapper.md)
 - [Api.PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [Api.PaymentSettingsDto](docs/PaymentSettingsDto.md)
 - [Api.PaymentSettingsWrapper](docs/PaymentSettingsWrapper.md)
 - [Api.PaymentUrlRequestsDto](docs/PaymentUrlRequestsDto.md)
 - [Api.Payments](docs/Payments.md)
 - [Api.PermissionsConfig](docs/PermissionsConfig.md)
 - [Api.PluginsConfig](docs/PluginsConfig.md)
 - [Api.PluginsDto](docs/PluginsDto.md)
 - [Api.PriceDto](docs/PriceDto.md)
 - [Api.ProductAdministratorDto](docs/ProductAdministratorDto.md)
 - [Api.ProductAdministratorWrapper](docs/ProductAdministratorWrapper.md)
 - [Api.ProductQuantityType](docs/ProductQuantityType.md)
 - [Api.ProductType](docs/ProductType.md)
 - [Api.ProviderArrayWrapper](docs/ProviderArrayWrapper.md)
 - [Api.ProviderDto](docs/ProviderDto.md)
 - [Api.ProviderFilter](docs/ProviderFilter.md)
 - [Api.QuantityRequestDto](docs/QuantityRequestDto.md)
 - [Api.Quota](docs/Quota.md)
 - [Api.QuotaArrayWrapper](docs/QuotaArrayWrapper.md)
 - [Api.QuotaDto](docs/QuotaDto.md)
 - [Api.QuotaFilter](docs/QuotaFilter.md)
 - [Api.QuotaSettingsRequestsDto](docs/QuotaSettingsRequestsDto.md)
 - [Api.QuotaSettingsRequestsDtoDefaultQuota](docs/QuotaSettingsRequestsDtoDefaultQuota.md)
 - [Api.QuotaState](docs/QuotaState.md)
 - [Api.QuotaWrapper](docs/QuotaWrapper.md)
 - [Api.RecaptchaType](docs/RecaptchaType.md)
 - [Api.RecentConfig](docs/RecentConfig.md)
 - [Api.ReportDto](docs/ReportDto.md)
 - [Api.ReportWrapper](docs/ReportWrapper.md)
 - [Api.ReviewConfig](docs/ReviewConfig.md)
 - [Api.RoomDataLifetimeDto](docs/RoomDataLifetimeDto.md)
 - [Api.RoomDataLifetimePeriod](docs/RoomDataLifetimePeriod.md)
 - [Api.RoomFromTemplateStatusDto](docs/RoomFromTemplateStatusDto.md)
 - [Api.RoomFromTemplateStatusWrapper](docs/RoomFromTemplateStatusWrapper.md)
 - [Api.RoomInvitation](docs/RoomInvitation.md)
 - [Api.RoomInvitationRequest](docs/RoomInvitationRequest.md)
 - [Api.RoomLinkRequest](docs/RoomLinkRequest.md)
 - [Api.RoomNewItemsDto](docs/RoomNewItemsDto.md)
 - [Api.RoomSecurityDto](docs/RoomSecurityDto.md)
 - [Api.RoomSecurityError](docs/RoomSecurityError.md)
 - [Api.RoomSecurityWrapper](docs/RoomSecurityWrapper.md)
 - [Api.RoomTemplateDto](docs/RoomTemplateDto.md)
 - [Api.RoomTemplateStatusDto](docs/RoomTemplateStatusDto.md)
 - [Api.RoomTemplateStatusWrapper](docs/RoomTemplateStatusWrapper.md)
 - [Api.RoomType](docs/RoomType.md)
 - [Api.RoomsNotificationSettingsDto](docs/RoomsNotificationSettingsDto.md)
 - [Api.RoomsNotificationSettingsWrapper](docs/RoomsNotificationSettingsWrapper.md)
 - [Api.RoomsNotificationsSettingsRequestDto](docs/RoomsNotificationsSettingsRequestDto.md)
 - [Api.Run](docs/Run.md)
 - [Api.STRINGArrayWrapper](docs/STRINGArrayWrapper.md)
 - [Api.SalesRequestsDto](docs/SalesRequestsDto.md)
 - [Api.SaveAsPdfInteger](docs/SaveAsPdfInteger.md)
 - [Api.SaveFormRoleMappingDtoInteger](docs/SaveFormRoleMappingDtoInteger.md)
 - [Api.Schedule](docs/Schedule.md)
 - [Api.ScheduleWrapper](docs/ScheduleWrapper.md)
 - [Api.ScopeResponse](docs/ScopeResponse.md)
 - [Api.SearchArea](docs/SearchArea.md)
 - [Api.SecurityArrayWrapper](docs/SecurityArrayWrapper.md)
 - [Api.SecurityDto](docs/SecurityDto.md)
 - [Api.SecurityRequestsDto](docs/SecurityRequestsDto.md)
 - [Api.SessionRequest](docs/SessionRequest.md)
 - [Api.SetManagerRequest](docs/SetManagerRequest.md)
 - [Api.SetPublicDto](docs/SetPublicDto.md)
 - [Api.SettingsDto](docs/SettingsDto.md)
 - [Api.SettingsRequestDto](docs/SettingsRequestDto.md)
 - [Api.SettingsWrapper](docs/SettingsWrapper.md)
 - [Api.SetupCode](docs/SetupCode.md)
 - [Api.SetupCodeWrapper](docs/SetupCodeWrapper.md)
 - [Api.SexEnum](docs/SexEnum.md)
 - [Api.ShareFilterType](docs/ShareFilterType.md)
 - [Api.SignupAccountRequestDto](docs/SignupAccountRequestDto.md)
 - [Api.SmtpOperationStatusRequestsDto](docs/SmtpOperationStatusRequestsDto.md)
 - [Api.SmtpOperationStatusRequestsWrapper](docs/SmtpOperationStatusRequestsWrapper.md)
 - [Api.SmtpSettingsDto](docs/SmtpSettingsDto.md)
 - [Api.SmtpSettingsWrapper](docs/SmtpSettingsWrapper.md)
 - [Api.SortOrder](docs/SortOrder.md)
 - [Api.SortedByType](docs/SortedByType.md)
 - [Api.SsoCertificate](docs/SsoCertificate.md)
 - [Api.SsoFieldMapping](docs/SsoFieldMapping.md)
 - [Api.SsoIdpCertificateAdvanced](docs/SsoIdpCertificateAdvanced.md)
 - [Api.SsoIdpSettings](docs/SsoIdpSettings.md)
 - [Api.SsoSettingsRequestsDto](docs/SsoSettingsRequestsDto.md)
 - [Api.SsoSettingsV2](docs/SsoSettingsV2.md)
 - [Api.SsoSettingsV2Wrapper](docs/SsoSettingsV2Wrapper.md)
 - [Api.SsoSpCertificateAdvanced](docs/SsoSpCertificateAdvanced.md)
 - [Api.StartEdit](docs/StartEdit.md)
 - [Api.StartFillingForm](docs/StartFillingForm.md)
 - [Api.StartFillingMode](docs/StartFillingMode.md)
 - [Api.StartReassignRequestDto](docs/StartReassignRequestDto.md)
 - [Api.StartUpdateUserTypeDto](docs/StartUpdateUserTypeDto.md)
 - [Api.Status](docs/Status.md)
 - [Api.StorageArrayWrapper](docs/StorageArrayWrapper.md)
 - [Api.StorageDto](docs/StorageDto.md)
 - [Api.StorageEncryptionRequestsDto](docs/StorageEncryptionRequestsDto.md)
 - [Api.StorageFilter](docs/StorageFilter.md)
 - [Api.StorageRequestsDto](docs/StorageRequestsDto.md)
 - [Api.StorageSettings](docs/StorageSettings.md)
 - [Api.StorageSettingsWrapper](docs/StorageSettingsWrapper.md)
 - [Api.StringWrapper](docs/StringWrapper.md)
 - [Api.SubAccount](docs/SubAccount.md)
 - [Api.SubjectFilter](docs/SubjectFilter.md)
 - [Api.SubjectType](docs/SubjectType.md)
 - [Api.SubmitForm](docs/SubmitForm.md)
 - [Api.Tariff](docs/Tariff.md)
 - [Api.TariffState](docs/TariffState.md)
 - [Api.TariffWrapper](docs/TariffWrapper.md)
 - [Api.TaskProgressResponseDto](docs/TaskProgressResponseDto.md)
 - [Api.TaskProgressResponseWrapper](docs/TaskProgressResponseWrapper.md)
 - [Api.TemplatesConfig](docs/TemplatesConfig.md)
 - [Api.TemplatesRequestDto](docs/TemplatesRequestDto.md)
 - [Api.TenantAuditSettings](docs/TenantAuditSettings.md)
 - [Api.TenantAuditSettingsWrapper](docs/TenantAuditSettingsWrapper.md)
 - [Api.TenantBannerSettings](docs/TenantBannerSettings.md)
 - [Api.TenantBannerSettingsDto](docs/TenantBannerSettingsDto.md)
 - [Api.TenantBannerSettingsWrapper](docs/TenantBannerSettingsWrapper.md)
 - [Api.TenantDeepLinkSettings](docs/TenantDeepLinkSettings.md)
 - [Api.TenantDeepLinkSettingsWrapper](docs/TenantDeepLinkSettingsWrapper.md)
 - [Api.TenantDevToolsAccessSettings](docs/TenantDevToolsAccessSettings.md)
 - [Api.TenantDevToolsAccessSettingsDto](docs/TenantDevToolsAccessSettingsDto.md)
 - [Api.TenantDevToolsAccessSettingsWrapper](docs/TenantDevToolsAccessSettingsWrapper.md)
 - [Api.TenantDomainValidator](docs/TenantDomainValidator.md)
 - [Api.TenantDto](docs/TenantDto.md)
 - [Api.TenantEntityQuotaSettings](docs/TenantEntityQuotaSettings.md)
 - [Api.TenantIndustry](docs/TenantIndustry.md)
 - [Api.TenantQuota](docs/TenantQuota.md)
 - [Api.TenantQuotaFeatureDto](docs/TenantQuotaFeatureDto.md)
 - [Api.TenantQuotaSettings](docs/TenantQuotaSettings.md)
 - [Api.TenantQuotaSettingsRequestsDto](docs/TenantQuotaSettingsRequestsDto.md)
 - [Api.TenantQuotaSettingsWrapper](docs/TenantQuotaSettingsWrapper.md)
 - [Api.TenantQuotaWrapper](docs/TenantQuotaWrapper.md)
 - [Api.TenantRoomQuotaSettings](docs/TenantRoomQuotaSettings.md)
 - [Api.TenantRoomQuotaSettingsWrapper](docs/TenantRoomQuotaSettingsWrapper.md)
 - [Api.TenantStatus](docs/TenantStatus.md)
 - [Api.TenantTrustedDomainsType](docs/TenantTrustedDomainsType.md)
 - [Api.TenantUserInvitationSettingsDto](docs/TenantUserInvitationSettingsDto.md)
 - [Api.TenantUserInvitationSettingsRequestDto](docs/TenantUserInvitationSettingsRequestDto.md)
 - [Api.TenantUserInvitationSettingsWrapper](docs/TenantUserInvitationSettingsWrapper.md)
 - [Api.TenantUserQuotaSettings](docs/TenantUserQuotaSettings.md)
 - [Api.TenantUserQuotaSettingsWrapper](docs/TenantUserQuotaSettingsWrapper.md)
 - [Api.TenantWalletSettings](docs/TenantWalletSettings.md)
 - [Api.TenantWalletSettingsWrapper](docs/TenantWalletSettingsWrapper.md)
 - [Api.TenantWrapper](docs/TenantWrapper.md)
 - [Api.TerminateRequestDto](docs/TerminateRequestDto.md)
 - [Api.TfaRequestsDto](docs/TfaRequestsDto.md)
 - [Api.TfaRequestsDtoType](docs/TfaRequestsDtoType.md)
 - [Api.TfaSettingsArrayWrapper](docs/TfaSettingsArrayWrapper.md)
 - [Api.TfaSettingsDto](docs/TfaSettingsDto.md)
 - [Api.TfaValidateRequestsDto](docs/TfaValidateRequestsDto.md)
 - [Api.ThirdPartyBackupRequestDto](docs/ThirdPartyBackupRequestDto.md)
 - [Api.ThirdPartyParams](docs/ThirdPartyParams.md)
 - [Api.ThirdPartyParamsArrayWrapper](docs/ThirdPartyParamsArrayWrapper.md)
 - [Api.ThirdPartyRequestDto](docs/ThirdPartyRequestDto.md)
 - [Api.Thumbnail](docs/Thumbnail.md)
 - [Api.ThumbnailsDataDto](docs/ThumbnailsDataDto.md)
 - [Api.ThumbnailsDataWrapper](docs/ThumbnailsDataWrapper.md)
 - [Api.ThumbnailsRequest](docs/ThumbnailsRequest.md)
 - [Api.TimezonesRequestsArrayWrapper](docs/TimezonesRequestsArrayWrapper.md)
 - [Api.TimezonesRequestsDto](docs/TimezonesRequestsDto.md)
 - [Api.TopUpDepositRequestDto](docs/TopUpDepositRequestDto.md)
 - [Api.TurnOnAdminMessageSettingsRequestDto](docs/TurnOnAdminMessageSettingsRequestDto.md)
 - [Api.UnknownWrapper](docs/UnknownWrapper.md)
 - [Api.UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [Api.UpdateClientRequest](docs/UpdateClientRequest.md)
 - [Api.UpdateComment](docs/UpdateComment.md)
 - [Api.UpdateFile](docs/UpdateFile.md)
 - [Api.UpdateGroupRequest](docs/UpdateGroupRequest.md)
 - [Api.UpdateMemberRequestDto](docs/UpdateMemberRequestDto.md)
 - [Api.UpdateMembersQuotaRequestDto](docs/UpdateMembersQuotaRequestDto.md)
 - [Api.UpdateMembersQuotaRequestDtoQuota](docs/UpdateMembersQuotaRequestDtoQuota.md)
 - [Api.UpdateMembersRequestDto](docs/UpdateMembersRequestDto.md)
 - [Api.UpdatePhotoMemberRequest](docs/UpdatePhotoMemberRequest.md)
 - [Api.UpdateRoomRequest](docs/UpdateRoomRequest.md)
 - [Api.UpdateRoomsQuotaRequestDtoInteger](docs/UpdateRoomsQuotaRequestDtoInteger.md)
 - [Api.UpdateRoomsRoomIdsRequestDtoInteger](docs/UpdateRoomsRoomIdsRequestDtoInteger.md)
 - [Api.UpdateWebhooksConfigRequestsDto](docs/UpdateWebhooksConfigRequestsDto.md)
 - [Api.UploadRequestDto](docs/UploadRequestDto.md)
 - [Api.UploadResultDto](docs/UploadResultDto.md)
 - [Api.UploadResultWrapper](docs/UploadResultWrapper.md)
 - [Api.UsageSpaceStatItemArrayWrapper](docs/UsageSpaceStatItemArrayWrapper.md)
 - [Api.UsageSpaceStatItemDto](docs/UsageSpaceStatItemDto.md)
 - [Api.UserConfig](docs/UserConfig.md)
 - [Api.UserInfo](docs/UserInfo.md)
 - [Api.UserInfoWrapper](docs/UserInfoWrapper.md)
 - [Api.UserInvitation](docs/UserInvitation.md)
 - [Api.UserInvitationRequestDto](docs/UserInvitationRequestDto.md)
 - [Api.ValidationResult](docs/ValidationResult.md)
 - [Api.WalletQuantityRequestDto](docs/WalletQuantityRequestDto.md)
 - [Api.WatermarkAdditions](docs/WatermarkAdditions.md)
 - [Api.WatermarkDto](docs/WatermarkDto.md)
 - [Api.WatermarkOnDraw](docs/WatermarkOnDraw.md)
 - [Api.WatermarkRequestDto](docs/WatermarkRequestDto.md)
 - [Api.WebItemSecurityRequestsDto](docs/WebItemSecurityRequestsDto.md)
 - [Api.WebItemsSecurityRequestsDto](docs/WebItemsSecurityRequestsDto.md)
 - [Api.WebPluginArrayWrapper](docs/WebPluginArrayWrapper.md)
 - [Api.WebPluginDto](docs/WebPluginDto.md)
 - [Api.WebPluginRequests](docs/WebPluginRequests.md)
 - [Api.WebPluginWrapper](docs/WebPluginWrapper.md)
 - [Api.WebhookGroupStatus](docs/WebhookGroupStatus.md)
 - [Api.WebhookRetryRequestsDto](docs/WebhookRetryRequestsDto.md)
 - [Api.WebhookTrigger](docs/WebhookTrigger.md)
 - [Api.WebhooksConfigDto](docs/WebhooksConfigDto.md)
 - [Api.WebhooksConfigWithStatusArrayWrapper](docs/WebhooksConfigWithStatusArrayWrapper.md)
 - [Api.WebhooksConfigWithStatusDto](docs/WebhooksConfigWithStatusDto.md)
 - [Api.WebhooksConfigWrapper](docs/WebhooksConfigWrapper.md)
 - [Api.WebhooksLogArrayWrapper](docs/WebhooksLogArrayWrapper.md)
 - [Api.WebhooksLogDto](docs/WebhooksLogDto.md)
 - [Api.WebhooksLogWrapper](docs/WebhooksLogWrapper.md)
 - [Api.WhiteLabelItemArrayWrapper](docs/WhiteLabelItemArrayWrapper.md)
 - [Api.WhiteLabelItemDto](docs/WhiteLabelItemDto.md)
 - [Api.WhiteLabelItemPathDto](docs/WhiteLabelItemPathDto.md)
 - [Api.WhiteLabelRequestsDto](docs/WhiteLabelRequestsDto.md)
 - [Api.WizardRequestsDto](docs/WizardRequestsDto.md)
 - [Api.WizardSettings](docs/WizardSettings.md)
 - [Api.WizardSettingsWrapper](docs/WizardSettingsWrapper.md)

</details>
