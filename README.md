# docspace-api-javascript

The ONLYOFFICE DocSpace SDK for JavaScript is a library that provides tools for integrating and managing DocSpace features within your applications. It simplifies interaction with the DocSpace TypeScript API by offering ready-to-use methods and models.

- API version: 3.2.0
- Package version: 3.2.0

For more information, please visit [https://helpdesk.onlyoffice.com/hc/en-us](https://helpdesk.onlyoffice.com/hc/en-us)

## Installation

### Using [Node.js](https://nodejs.org/)

#### npm

To publish the library as an [npm](https://www.npmjs.com/) package, please follow the instructions ["here"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

To install the package, run:

```shell
npm install docspace-api-javascript --save
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

4. Switch to the directory you want to use your docspace-api-javascript from.

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DocspaceApiJavascript = require('docspace-api-javascript');

var defaultClient = DocspaceApiJavascript.ApiClient.instance;
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

var api = new DocspaceApiJavascript.ApiKeysApi()
var opts = {
  'createApiKeyRequestDto': new DocspaceApiJavascript.CreateApiKeyRequestDto() // {CreateApiKeyRequestDto} 
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

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DocspaceApiJavascript.ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createApiKey) | **POST** /api/2.0/keys | Create a user API key
*DocspaceApiJavascript.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteApiKey) | **DELETE** /api/2.0/keys/{keyId} | Delete a user API key
*DocspaceApiJavascript.ApiKeysApi* | [**getAllPermissions**](docs/ApiKeysApi.md#getAllPermissions) | **GET** /api/2.0/keys/permissions | Get API key permissions
*DocspaceApiJavascript.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getApiKey) | **GET** /api/2.0/keys/@self | Get user API key info
*DocspaceApiJavascript.ApiKeysApi* | [**getApiKeys**](docs/ApiKeysApi.md#getApiKeys) | **GET** /api/2.0/keys | Get user API keys
*DocspaceApiJavascript.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateApiKey) | **PUT** /api/2.0/keys/{keyId} | Update an API key
*DocspaceApiJavascript.AuthenticationApi* | [**authenticateMe**](docs/AuthenticationApi.md#authenticateMe) | **POST** /api/2.0/authentication | Authenticate a user
*DocspaceApiJavascript.AuthenticationApi* | [**authenticateMeFromBodyWithCode**](docs/AuthenticationApi.md#authenticateMeFromBodyWithCode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code
*DocspaceApiJavascript.AuthenticationApi* | [**checkConfirm**](docs/AuthenticationApi.md#checkConfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL
*DocspaceApiJavascript.AuthenticationApi* | [**getIsAuthentificated**](docs/AuthenticationApi.md#getIsAuthentificated) | **GET** /api/2.0/authentication | Check authentication
*DocspaceApiJavascript.AuthenticationApi* | [**logout**](docs/AuthenticationApi.md#logout) | **POST** /api/2.0/authentication/logout | Log out
*DocspaceApiJavascript.AuthenticationApi* | [**saveMobilePhone**](docs/AuthenticationApi.md#saveMobilePhone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone
*DocspaceApiJavascript.AuthenticationApi* | [**sendSmsCode**](docs/AuthenticationApi.md#sendSmsCode) | **POST** /api/2.0/authentication/sendsms | Send SMS code
*DocspaceApiJavascript.BackupApi* | [**createBackupSchedule**](docs/BackupApi.md#createBackupSchedule) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule
*DocspaceApiJavascript.BackupApi* | [**deleteBackup**](docs/BackupApi.md#deleteBackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Delete the backup
*DocspaceApiJavascript.BackupApi* | [**deleteBackupHistory**](docs/BackupApi.md#deleteBackupHistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history
*DocspaceApiJavascript.BackupApi* | [**deleteBackupSchedule**](docs/BackupApi.md#deleteBackupSchedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule
*DocspaceApiJavascript.BackupApi* | [**getBackupHistory**](docs/BackupApi.md#getBackupHistory) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history
*DocspaceApiJavascript.BackupApi* | [**getBackupProgress**](docs/BackupApi.md#getBackupProgress) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress
*DocspaceApiJavascript.BackupApi* | [**getBackupSchedule**](docs/BackupApi.md#getBackupSchedule) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule
*DocspaceApiJavascript.BackupApi* | [**getRestoreProgress**](docs/BackupApi.md#getRestoreProgress) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress
*DocspaceApiJavascript.BackupApi* | [**startBackup**](docs/BackupApi.md#startBackup) | **POST** /api/2.0/backup/startbackup | Start the backup
*DocspaceApiJavascript.BackupApi* | [**startBackupRestore**](docs/BackupApi.md#startBackupRestore) | **POST** /api/2.0/backup/startrestore | Start the restoring process
*DocspaceApiJavascript.CapabilitiesApi* | [**getPortalCapabilities**](docs/CapabilitiesApi.md#getPortalCapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities
*DocspaceApiJavascript.FilesFilesApi* | [**addTemplates**](docs/FilesFilesApi.md#addTemplates) | **POST** /api/2.0/files/templates | Add template files
*DocspaceApiJavascript.FilesFilesApi* | [**changeVersionHistory**](docs/FilesFilesApi.md#changeVersionHistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history
*DocspaceApiJavascript.FilesFilesApi* | [**checkFillFormDraft**](docs/FilesFilesApi.md#checkFillFormDraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling
*DocspaceApiJavascript.FilesFilesApi* | [**copyFileAs**](docs/FilesFilesApi.md#copyFileAs) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file
*DocspaceApiJavascript.FilesFilesApi* | [**createEditSession**](docs/FilesFilesApi.md#createEditSession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session
*DocspaceApiJavascript.FilesFilesApi* | [**createFile**](docs/FilesFilesApi.md#createFile) | **POST** /api/2.0/files/{folderId}/file | Create a file
*DocspaceApiJavascript.FilesFilesApi* | [**createFileInMyDocuments**](docs/FilesFilesApi.md#createFileInMyDocuments) | **POST** /api/2.0/files/@my/file | Create a file in the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesFilesApi* | [**createHtmlFile**](docs/FilesFilesApi.md#createHtmlFile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file
*DocspaceApiJavascript.FilesFilesApi* | [**createHtmlFileInMyDocuments**](docs/FilesFilesApi.md#createHtmlFileInMyDocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesFilesApi* | [**createPrimaryExternalLink**](docs/FilesFilesApi.md#createPrimaryExternalLink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link
*DocspaceApiJavascript.FilesFilesApi* | [**createTextFile**](docs/FilesFilesApi.md#createTextFile) | **POST** /api/2.0/files/{folderId}/text | Create a text file
*DocspaceApiJavascript.FilesFilesApi* | [**createTextFileInMyDocuments**](docs/FilesFilesApi.md#createTextFileInMyDocuments) | **POST** /api/2.0/files/@my/text | Create a text file in the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesFilesApi* | [**createThumbnails**](docs/FilesFilesApi.md#createThumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails
*DocspaceApiJavascript.FilesFilesApi* | [**deleteFile**](docs/FilesFilesApi.md#deleteFile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file
*DocspaceApiJavascript.FilesFilesApi* | [**deleteRecent**](docs/FilesFilesApi.md#deleteRecent) | **DELETE** /api/2.0/files/recent | Delete recent files
*DocspaceApiJavascript.FilesFilesApi* | [**deleteTemplates**](docs/FilesFilesApi.md#deleteTemplates) | **DELETE** /api/2.0/files/templates | Delete template files
*DocspaceApiJavascript.FilesFilesApi* | [**getAllFormRoles**](docs/FilesFilesApi.md#getAllFormRoles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles
*DocspaceApiJavascript.FilesFilesApi* | [**getEditDiffUrl**](docs/FilesFilesApi.md#getEditDiffUrl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL
*DocspaceApiJavascript.FilesFilesApi* | [**getEditHistory**](docs/FilesFilesApi.md#getEditHistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history
*DocspaceApiJavascript.FilesFilesApi* | [**getFileHistory**](docs/FilesFilesApi.md#getFileHistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history
*DocspaceApiJavascript.FilesFilesApi* | [**getFileInfo**](docs/FilesFilesApi.md#getFileInfo) | **GET** /api/2.0/files/file/{fileId} | Get file information
*DocspaceApiJavascript.FilesFilesApi* | [**getFileLinks**](docs/FilesFilesApi.md#getFileLinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links
*DocspaceApiJavascript.FilesFilesApi* | [**getFilePrimaryExternalLink**](docs/FilesFilesApi.md#getFilePrimaryExternalLink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link
*DocspaceApiJavascript.FilesFilesApi* | [**getFileVersionInfo**](docs/FilesFilesApi.md#getFileVersionInfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions
*DocspaceApiJavascript.FilesFilesApi* | [**getFillResult**](docs/FilesFilesApi.md#getFillResult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result
*DocspaceApiJavascript.FilesFilesApi* | [**getPresignedFileUri**](docs/FilesFilesApi.md#getPresignedFileUri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously
*DocspaceApiJavascript.FilesFilesApi* | [**getPresignedUri**](docs/FilesFilesApi.md#getPresignedUri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link
*DocspaceApiJavascript.FilesFilesApi* | [**getProtectedFileUsers**](docs/FilesFilesApi.md#getProtectedFileUsers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file
*DocspaceApiJavascript.FilesFilesApi* | [**getReferenceData**](docs/FilesFilesApi.md#getReferenceData) | **POST** /api/2.0/files/file/referencedata | Get reference data
*DocspaceApiJavascript.FilesFilesApi* | [**isFormPDF**](docs/FilesFilesApi.md#isFormPDF) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file
*DocspaceApiJavascript.FilesFilesApi* | [**lockFile**](docs/FilesFilesApi.md#lockFile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file
*DocspaceApiJavascript.FilesFilesApi* | [**manageFormFilling**](docs/FilesFilesApi.md#manageFormFilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action
*DocspaceApiJavascript.FilesFilesApi* | [**openEditFile**](docs/FilesFilesApi.md#openEditFile) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration
*DocspaceApiJavascript.FilesFilesApi* | [**restoreFileVersion**](docs/FilesFilesApi.md#restoreFileVersion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version
*DocspaceApiJavascript.FilesFilesApi* | [**saveEditingFileFromForm**](docs/FilesFilesApi.md#saveEditingFileFromForm) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits
*DocspaceApiJavascript.FilesFilesApi* | [**saveFileAsPdf**](docs/FilesFilesApi.md#saveFileAsPdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF
*DocspaceApiJavascript.FilesFilesApi* | [**saveFormRoleMapping**](docs/FilesFilesApi.md#saveFormRoleMapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping
*DocspaceApiJavascript.FilesFilesApi* | [**setCustomFilterTag**](docs/FilesFilesApi.md#setCustomFilterTag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode
*DocspaceApiJavascript.FilesFilesApi* | [**setExternalLink**](docs/FilesFilesApi.md#setExternalLink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link
*DocspaceApiJavascript.FilesFilesApi* | [**setFileOrder**](docs/FilesFilesApi.md#setFileOrder) | **PUT** /api/2.0/files/{fileId}/order | Set file order
*DocspaceApiJavascript.FilesFilesApi* | [**setFilesOrder**](docs/FilesFilesApi.md#setFilesOrder) | **PUT** /api/2.0/files/order | Set order of files
*DocspaceApiJavascript.FilesFilesApi* | [**startEditFile**](docs/FilesFilesApi.md#startEditFile) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing
*DocspaceApiJavascript.FilesFilesApi* | [**startFillingFile**](docs/FilesFilesApi.md#startFillingFile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling
*DocspaceApiJavascript.FilesFilesApi* | [**trackEditFile**](docs/FilesFilesApi.md#trackEditFile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing
*DocspaceApiJavascript.FilesFilesApi* | [**updateFile**](docs/FilesFilesApi.md#updateFile) | **PUT** /api/2.0/files/file/{fileId} | Update a file
*DocspaceApiJavascript.FilesFoldersApi* | [**checkUpload**](docs/FilesFoldersApi.md#checkUpload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads
*DocspaceApiJavascript.FilesFoldersApi* | [**createFolder**](docs/FilesFoldersApi.md#createFolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder
*DocspaceApiJavascript.FilesFoldersApi* | [**deleteFolder**](docs/FilesFoldersApi.md#deleteFolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder
*DocspaceApiJavascript.FilesFoldersApi* | [**getFilesUsedSpace**](docs/FilesFoldersApi.md#getFilesUsedSpace) | **GET** /api/2.0/files/filesusedspace | Get used space of files
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolder**](docs/FilesFoldersApi.md#getFolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolderByFolderId**](docs/FilesFoldersApi.md#getFolderByFolderId) | **GET** /api/2.0/files/{folderId} | Get a folder by ID
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolderHistory**](docs/FilesFoldersApi.md#getFolderHistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolderInfo**](docs/FilesFoldersApi.md#getFolderInfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolderPath**](docs/FilesFoldersApi.md#getFolderPath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolderPrimaryExternalLink**](docs/FilesFoldersApi.md#getFolderPrimaryExternalLink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link
*DocspaceApiJavascript.FilesFoldersApi* | [**getFolders**](docs/FilesFoldersApi.md#getFolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders
*DocspaceApiJavascript.FilesFoldersApi* | [**getMyFolder**](docs/FilesFoldersApi.md#getMyFolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesFoldersApi* | [**getNewFolderItems**](docs/FilesFoldersApi.md#getNewFolderItems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items
*DocspaceApiJavascript.FilesFoldersApi* | [**getPrivacyFolder**](docs/FilesFoldersApi.md#getPrivacyFolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section
*DocspaceApiJavascript.FilesFoldersApi* | [**getRootFolders**](docs/FilesFoldersApi.md#getRootFolders) | **GET** /api/2.0/files/@root | Get filtered sections
*DocspaceApiJavascript.FilesFoldersApi* | [**getTrashFolder**](docs/FilesFoldersApi.md#getTrashFolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section
*DocspaceApiJavascript.FilesFoldersApi* | [**insertFile**](docs/FilesFoldersApi.md#insertFile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file
*DocspaceApiJavascript.FilesFoldersApi* | [**insertFileToMyFromBody**](docs/FilesFoldersApi.md#insertFileToMyFromBody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesFoldersApi* | [**renameFolder**](docs/FilesFoldersApi.md#renameFolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder
*DocspaceApiJavascript.FilesFoldersApi* | [**setFolderOrder**](docs/FilesFoldersApi.md#setFolderOrder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set folder order
*DocspaceApiJavascript.FilesFoldersApi* | [**uploadFile**](docs/FilesFoldersApi.md#uploadFile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file
*DocspaceApiJavascript.FilesFoldersApi* | [**uploadFileToMy**](docs/FilesFoldersApi.md#uploadFileToMy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section
*DocspaceApiJavascript.FilesOperationsApi* | [**bulkDownload**](docs/FilesOperationsApi.md#bulkDownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download
*DocspaceApiJavascript.FilesOperationsApi* | [**checkConversionStatus**](docs/FilesOperationsApi.md#checkConversionStatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Get conversion status
*DocspaceApiJavascript.FilesOperationsApi* | [**checkMoveOrCopyBatchItems**](docs/FilesOperationsApi.md#checkMoveOrCopyBatchItems) | **GET** /api/2.0/files/fileops/move | Check and move or copy to a folder
*DocspaceApiJavascript.FilesOperationsApi* | [**checkMoveOrCopyDestFolder**](docs/FilesOperationsApi.md#checkMoveOrCopyDestFolder) | **GET** /api/2.0/files/fileops/checkdestfolder | Check for moving or copying to a folder
*DocspaceApiJavascript.FilesOperationsApi* | [**copyBatchItems**](docs/FilesOperationsApi.md#copyBatchItems) | **PUT** /api/2.0/files/fileops/copy | Copy to the folder
*DocspaceApiJavascript.FilesOperationsApi* | [**createUploadSession**](docs/FilesOperationsApi.md#createUploadSession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Chunked upload
*DocspaceApiJavascript.FilesOperationsApi* | [**deleteBatchItems**](docs/FilesOperationsApi.md#deleteBatchItems) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders
*DocspaceApiJavascript.FilesOperationsApi* | [**deleteFileVersions**](docs/FilesOperationsApi.md#deleteFileVersions) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions
*DocspaceApiJavascript.FilesOperationsApi* | [**duplicateBatchItems**](docs/FilesOperationsApi.md#duplicateBatchItems) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders
*DocspaceApiJavascript.FilesOperationsApi* | [**emptyTrash**](docs/FilesOperationsApi.md#emptyTrash) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the \&quot;Trash\&quot; folder
*DocspaceApiJavascript.FilesOperationsApi* | [**getOperationStatuses**](docs/FilesOperationsApi.md#getOperationStatuses) | **GET** /api/2.0/files/fileops | Get active file operations
*DocspaceApiJavascript.FilesOperationsApi* | [**getOperationStatusesByType**](docs/FilesOperationsApi.md#getOperationStatusesByType) | **GET** /api/2.0/files/fileops/{operationType} | Get file operation statuses
*DocspaceApiJavascript.FilesOperationsApi* | [**markAsRead**](docs/FilesOperationsApi.md#markAsRead) | **PUT** /api/2.0/files/fileops/markasread | Mark as read
*DocspaceApiJavascript.FilesOperationsApi* | [**moveBatchItems**](docs/FilesOperationsApi.md#moveBatchItems) | **PUT** /api/2.0/files/fileops/move | Move or copy to a folder
*DocspaceApiJavascript.FilesOperationsApi* | [**startFileConversion**](docs/FilesOperationsApi.md#startFileConversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Start file conversion
*DocspaceApiJavascript.FilesOperationsApi* | [**terminateTasks**](docs/FilesOperationsApi.md#terminateTasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Finish active operations
*DocspaceApiJavascript.FilesOperationsApi* | [**updateFileComment**](docs/FilesOperationsApi.md#updateFileComment) | **PUT** /api/2.0/files/file/{fileId}/comment | Update a comment
*DocspaceApiJavascript.FilesQuotaApi* | [**resetRoomQuota**](docs/FilesQuotaApi.md#resetRoomQuota) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit
*DocspaceApiJavascript.FilesQuotaApi* | [**updateRoomsQuota**](docs/FilesQuotaApi.md#updateRoomsQuota) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit
*DocspaceApiJavascript.FilesSettingsApi* | [**changeAccessToThirdparty**](docs/FilesSettingsApi.md#changeAccessToThirdparty) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access
*DocspaceApiJavascript.FilesSettingsApi* | [**changeAutomaticallyCleanUp**](docs/FilesSettingsApi.md#changeAutomaticallyCleanUp) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting
*DocspaceApiJavascript.FilesSettingsApi* | [**changeDefaultAccessRights**](docs/FilesSettingsApi.md#changeDefaultAccessRights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights
*DocspaceApiJavascript.FilesSettingsApi* | [**changeDeleteConfirm**](docs/FilesSettingsApi.md#changeDeleteConfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Confirm the file deletion
*DocspaceApiJavascript.FilesSettingsApi* | [**changeDownloadZipFromBody**](docs/FilesSettingsApi.md#changeDownloadZipFromBody) | **PUT** /api/2.0/files/settings/downloadtargz | Change the archive format (using body parameters)
*DocspaceApiJavascript.FilesSettingsApi* | [**checkDocServiceUrl**](docs/FilesSettingsApi.md#checkDocServiceUrl) | **PUT** /api/2.0/files/docservice | Check the document service URL
*DocspaceApiJavascript.FilesSettingsApi* | [**displayFileExtension**](docs/FilesSettingsApi.md#displayFileExtension) | **PUT** /api/2.0/files/displayfileextension | Display a file extension
*DocspaceApiJavascript.FilesSettingsApi* | [**externalShare**](docs/FilesSettingsApi.md#externalShare) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability
*DocspaceApiJavascript.FilesSettingsApi* | [**externalShareSocialMedia**](docs/FilesSettingsApi.md#externalShareSocialMedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks
*DocspaceApiJavascript.FilesSettingsApi* | [**forcesave**](docs/FilesSettingsApi.md#forcesave) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability
*DocspaceApiJavascript.FilesSettingsApi* | [**getAutomaticallyCleanUp**](docs/FilesSettingsApi.md#getAutomaticallyCleanUp) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting
*DocspaceApiJavascript.FilesSettingsApi* | [**getDocServiceUrl**](docs/FilesSettingsApi.md#getDocServiceUrl) | **GET** /api/2.0/files/docservice | Get the document service URL
*DocspaceApiJavascript.FilesSettingsApi* | [**getFilesModule**](docs/FilesSettingsApi.md#getFilesModule) | **GET** /api/2.0/files/info | Get the \&quot;Documents\&quot; information
*DocspaceApiJavascript.FilesSettingsApi* | [**getFilesSettings**](docs/FilesSettingsApi.md#getFilesSettings) | **GET** /api/2.0/files/settings | Get file settings
*DocspaceApiJavascript.FilesSettingsApi* | [**hideConfirmCancelOperation**](docs/FilesSettingsApi.md#hideConfirmCancelOperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations
*DocspaceApiJavascript.FilesSettingsApi* | [**hideConfirmConvert**](docs/FilesSettingsApi.md#hideConfirmConvert) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting
*DocspaceApiJavascript.FilesSettingsApi* | [**hideConfirmRoomLifetime**](docs/FilesSettingsApi.md#hideConfirmRoomLifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings
*DocspaceApiJavascript.FilesSettingsApi* | [**isAvailablePrivacyRoomSettings**](docs/FilesSettingsApi.md#isAvailablePrivacyRoomSettings) | **GET** /api/2.0/files/@privacy/available | Check the \&quot;Private Room\&quot; availability
*DocspaceApiJavascript.FilesSettingsApi* | [**keepNewFileName**](docs/FilesSettingsApi.md#keepNewFileName) | **PUT** /api/2.0/files/keepnewfilename | Ask a new file name
*DocspaceApiJavascript.FilesSettingsApi* | [**setOpenEditorInSameTab**](docs/FilesSettingsApi.md#setOpenEditorInSameTab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab
*DocspaceApiJavascript.FilesSettingsApi* | [**storeForcesave**](docs/FilesSettingsApi.md#storeForcesave) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files
*DocspaceApiJavascript.FilesSettingsApi* | [**storeOriginal**](docs/FilesSettingsApi.md#storeOriginal) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats
*DocspaceApiJavascript.FilesSettingsApi* | [**updateFileIfExist**](docs/FilesSettingsApi.md#updateFileIfExist) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists
*DocspaceApiJavascript.FilesSharingApi* | [**applyExternalSharePassword**](docs/FilesSharingApi.md#applyExternalSharePassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password
*DocspaceApiJavascript.FilesSharingApi* | [**changeFileOwner**](docs/FilesSharingApi.md#changeFileOwner) | **POST** /api/2.0/files/owner | Change the file owner
*DocspaceApiJavascript.FilesSharingApi* | [**getExternalShareData**](docs/FilesSharingApi.md#getExternalShareData) | **GET** /api/2.0/files/share/{key} | Get the external data
*DocspaceApiJavascript.FilesSharingApi* | [**getSharedUsers**](docs/FilesSharingApi.md#getSharedUsers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID
*DocspaceApiJavascript.FilesSharingApi* | [**sendEditorNotify**](docs/FilesSharingApi.md#sendEditorNotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**deleteThirdParty**](docs/FilesThirdPartyIntegrationApi.md#deleteThirdParty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | Remove a third-party account
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**getAllProviders**](docs/FilesThirdPartyIntegrationApi.md#getAllProviders) | **GET** /api/2.0/files/thirdparty/providers | Get all providers
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**getBackupThirdPartyAccount**](docs/FilesThirdPartyIntegrationApi.md#getBackupThirdPartyAccount) | **GET** /api/2.0/files/thirdparty/backup | Get a third-party account backup
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**getCapabilities**](docs/FilesThirdPartyIntegrationApi.md#getCapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | Get providers
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**getCommonThirdPartyFolders**](docs/FilesThirdPartyIntegrationApi.md#getCommonThirdPartyFolders) | **GET** /api/2.0/files/thirdparty/common | Get the common third-party services
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**getThirdPartyAccounts**](docs/FilesThirdPartyIntegrationApi.md#getThirdPartyAccounts) | **GET** /api/2.0/files/thirdparty | Get the third-party accounts
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**saveThirdParty**](docs/FilesThirdPartyIntegrationApi.md#saveThirdParty) | **POST** /api/2.0/files/thirdparty | Save a third-party account
*DocspaceApiJavascript.FilesThirdPartyIntegrationApi* | [**saveThirdPartyBackup**](docs/FilesThirdPartyIntegrationApi.md#saveThirdPartyBackup) | **POST** /api/2.0/files/thirdparty/backup | Save a third-party account backup
*DocspaceApiJavascript.GroupApi* | [**addGroup**](docs/GroupApi.md#addGroup) | **POST** /api/2.0/group | Add a new group
*DocspaceApiJavascript.GroupApi* | [**addMembersTo**](docs/GroupApi.md#addMembersTo) | **PUT** /api/2.0/group/{id}/members | Add group members
*DocspaceApiJavascript.GroupApi* | [**deleteGroup**](docs/GroupApi.md#deleteGroup) | **DELETE** /api/2.0/group/{id} | Delete a group
*DocspaceApiJavascript.GroupApi* | [**getGroup**](docs/GroupApi.md#getGroup) | **GET** /api/2.0/group/{id} | Get a group
*DocspaceApiJavascript.GroupApi* | [**getGroupByUserId**](docs/GroupApi.md#getGroupByUserId) | **GET** /api/2.0/group/user/{userid} | Get user groups
*DocspaceApiJavascript.GroupApi* | [**getGroups**](docs/GroupApi.md#getGroups) | **GET** /api/2.0/group | Get groups
*DocspaceApiJavascript.GroupApi* | [**moveMembersTo**](docs/GroupApi.md#moveMembersTo) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Move group members
*DocspaceApiJavascript.GroupApi* | [**removeMembersFrom**](docs/GroupApi.md#removeMembersFrom) | **DELETE** /api/2.0/group/{id}/members | Remove group members
*DocspaceApiJavascript.GroupApi* | [**setGroupManager**](docs/GroupApi.md#setGroupManager) | **PUT** /api/2.0/group/{id}/manager | Set a group manager
*DocspaceApiJavascript.GroupApi* | [**setMembersTo**](docs/GroupApi.md#setMembersTo) | **POST** /api/2.0/group/{id}/members | Replace group members
*DocspaceApiJavascript.GroupApi* | [**updateGroup**](docs/GroupApi.md#updateGroup) | **PUT** /api/2.0/group/{id} | Update a group
*DocspaceApiJavascript.GroupRoomsApi* | [**getGroupsWithShared**](docs/GroupRoomsApi.md#getGroupsWithShared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings
*DocspaceApiJavascript.MigrationApi* | [**cancelMigration**](docs/MigrationApi.md#cancelMigration) | **POST** /api/2.0/migration/cancel | Cancel migration
*DocspaceApiJavascript.MigrationApi* | [**clearMigration**](docs/MigrationApi.md#clearMigration) | **POST** /api/2.0/migration/clear | Clear migration
*DocspaceApiJavascript.MigrationApi* | [**finishMigration**](docs/MigrationApi.md#finishMigration) | **POST** /api/2.0/migration/finish | Finish migration
*DocspaceApiJavascript.MigrationApi* | [**getMigrationLogs**](docs/MigrationApi.md#getMigrationLogs) | **GET** /api/2.0/migration/logs | Get migration logs
*DocspaceApiJavascript.MigrationApi* | [**getMigrationStatus**](docs/MigrationApi.md#getMigrationStatus) | **GET** /api/2.0/migration/status | Get migration status
*DocspaceApiJavascript.MigrationApi* | [**listMigrations**](docs/MigrationApi.md#listMigrations) | **GET** /api/2.0/migration/list | Get migrations
*DocspaceApiJavascript.MigrationApi* | [**startMigration**](docs/MigrationApi.md#startMigration) | **POST** /api/2.0/migration/migrate | Start migration
*DocspaceApiJavascript.MigrationApi* | [**uploadAndInitializeMigration**](docs/MigrationApi.md#uploadAndInitializeMigration) | **POST** /api/2.0/migration/init/{migratorName} | Upload and initialize migration
*DocspaceApiJavascript.OAuth20AuthorizationApi* | [**authorizeOAuth**](docs/OAuth20AuthorizationApi.md#authorizeOAuth) | **GET** /oauth2/authorize | OAuth2 authorization endpoint
*DocspaceApiJavascript.OAuth20AuthorizationApi* | [**exchangeToken**](docs/OAuth20AuthorizationApi.md#exchangeToken) | **POST** /oauth2/token | OAuth2 token endpoint
*DocspaceApiJavascript.OAuth20AuthorizationApi* | [**submitConsent**](docs/OAuth20AuthorizationApi.md#submitConsent) | **POST** /oauth2/authorize | OAuth2 consent endpoint
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**changeActivation**](docs/OAuth20ClientManagementApi.md#changeActivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**createClient**](docs/OAuth20ClientManagementApi.md#createClient) | **POST** /api/2.0/clients | Create a new OAuth2 client
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**deleteClient**](docs/OAuth20ClientManagementApi.md#deleteClient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**regenerateSecret**](docs/OAuth20ClientManagementApi.md#regenerateSecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**revokeUserClient**](docs/OAuth20ClientManagementApi.md#revokeUserClient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent
*DocspaceApiJavascript.OAuth20ClientManagementApi* | [**updateClient**](docs/OAuth20ClientManagementApi.md#updateClient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getClient**](docs/OAuth20ClientQueryingApi.md#getClient) | **GET** /api/2.0/clients/{clientId} | Get client details
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getClientInfo**](docs/OAuth20ClientQueryingApi.md#getClientInfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getClients**](docs/OAuth20ClientQueryingApi.md#getClients) | **GET** /api/2.0/clients | Get clients
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getClientsInfo**](docs/OAuth20ClientQueryingApi.md#getClientsInfo) | **GET** /api/2.0/clients/info | Get detailed information of clients
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getConsents**](docs/OAuth20ClientQueryingApi.md#getConsents) | **GET** /api/2.0/clients/consents | Get user consents
*DocspaceApiJavascript.OAuth20ClientQueryingApi* | [**getPublicClientInfo**](docs/OAuth20ClientQueryingApi.md#getPublicClientInfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information
*DocspaceApiJavascript.OAuth20ScopeManagementApi* | [**getScopes**](docs/OAuth20ScopeManagementApi.md#getScopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes
*DocspaceApiJavascript.PeopleGuestsApi* | [**approveGuestShareLink**](docs/PeopleGuestsApi.md#approveGuestShareLink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link
*DocspaceApiJavascript.PeopleGuestsApi* | [**deleteGuests**](docs/PeopleGuestsApi.md#deleteGuests) | **DELETE** /api/2.0/people/guests | Delete guests
*DocspaceApiJavascript.PeoplePasswordApi* | [**changeUserPassword**](docs/PeoplePasswordApi.md#changeUserPassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password
*DocspaceApiJavascript.PeoplePasswordApi* | [**sendUserPassword**](docs/PeoplePasswordApi.md#sendUserPassword) | **POST** /api/2.0/people/password | Remind a user password
*DocspaceApiJavascript.PeoplePhotosApi* | [**createMemberPhotoThumbnails**](docs/PeoplePhotosApi.md#createMemberPhotoThumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Create photo thumbnails
*DocspaceApiJavascript.PeoplePhotosApi* | [**deleteMemberPhoto**](docs/PeoplePhotosApi.md#deleteMemberPhoto) | **DELETE** /api/2.0/people/{userid}/photo | Delete a user photo
*DocspaceApiJavascript.PeoplePhotosApi* | [**getMemberPhoto**](docs/PeoplePhotosApi.md#getMemberPhoto) | **GET** /api/2.0/people/{userid}/photo | Get a user photo
*DocspaceApiJavascript.PeoplePhotosApi* | [**updateMemberPhoto**](docs/PeoplePhotosApi.md#updateMemberPhoto) | **PUT** /api/2.0/people/{userid}/photo | Update a user photo
*DocspaceApiJavascript.PeoplePhotosApi* | [**uploadMemberPhoto**](docs/PeoplePhotosApi.md#uploadMemberPhoto) | **POST** /api/2.0/people/{userid}/photo | Upload a user photo
*DocspaceApiJavascript.PeopleProfilesApi* | [**addMember**](docs/PeopleProfilesApi.md#addMember) | **POST** /api/2.0/people | Add a user
*DocspaceApiJavascript.PeopleProfilesApi* | [**deleteMember**](docs/PeopleProfilesApi.md#deleteMember) | **DELETE** /api/2.0/people/{userid} | Delete a user
*DocspaceApiJavascript.PeopleProfilesApi* | [**deleteProfile**](docs/PeopleProfilesApi.md#deleteProfile) | **DELETE** /api/2.0/people/@self | Delete my profile
*DocspaceApiJavascript.PeopleProfilesApi* | [**getAllProfiles**](docs/PeopleProfilesApi.md#getAllProfiles) | **GET** /api/2.0/people | Get profiles
*DocspaceApiJavascript.PeopleProfilesApi* | [**getClaims**](docs/PeopleProfilesApi.md#getClaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.
*DocspaceApiJavascript.PeopleProfilesApi* | [**getProfileByEmail**](docs/PeopleProfilesApi.md#getProfileByEmail) | **GET** /api/2.0/people/email | Get a profile by user email
*DocspaceApiJavascript.PeopleProfilesApi* | [**getProfileByUserId**](docs/PeopleProfilesApi.md#getProfileByUserId) | **GET** /api/2.0/people/{userid} | Get a profile by user name
*DocspaceApiJavascript.PeopleProfilesApi* | [**getSelfProfile**](docs/PeopleProfilesApi.md#getSelfProfile) | **GET** /api/2.0/people/@self | Get my profile
*DocspaceApiJavascript.PeopleProfilesApi* | [**inviteUsers**](docs/PeopleProfilesApi.md#inviteUsers) | **POST** /api/2.0/people/invite | Invite users
*DocspaceApiJavascript.PeopleProfilesApi* | [**removeUsers**](docs/PeopleProfilesApi.md#removeUsers) | **PUT** /api/2.0/people/delete | Delete users
*DocspaceApiJavascript.PeopleProfilesApi* | [**resendUserInvites**](docs/PeopleProfilesApi.md#resendUserInvites) | **PUT** /api/2.0/people/invite | Resend activation emails
*DocspaceApiJavascript.PeopleProfilesApi* | [**sendEmailChangeInstructions**](docs/PeopleProfilesApi.md#sendEmailChangeInstructions) | **POST** /api/2.0/people/email | Send instructions to change email
*DocspaceApiJavascript.PeopleProfilesApi* | [**updateMember**](docs/PeopleProfilesApi.md#updateMember) | **PUT** /api/2.0/people/{userid} | Update a user
*DocspaceApiJavascript.PeopleProfilesApi* | [**updateMemberCulture**](docs/PeopleProfilesApi.md#updateMemberCulture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code
*DocspaceApiJavascript.PeopleQuotaApi* | [**resetUsersQuota**](docs/PeopleQuotaApi.md#resetUsersQuota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit
*DocspaceApiJavascript.PeopleQuotaApi* | [**updateUserQuota**](docs/PeopleQuotaApi.md#updateUserQuota) | **PUT** /api/2.0/people/userquota | Change a user quota limit
*DocspaceApiJavascript.PeopleSearchApi* | [**getAccountsEntriesWithShared**](docs/PeopleSearchApi.md#getAccountsEntriesWithShared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries
*DocspaceApiJavascript.PeopleSearchApi* | [**getSearch**](docs/PeopleSearchApi.md#getSearch) | **GET** /api/2.0/people/@search/{query} | Search users
*DocspaceApiJavascript.PeopleSearchApi* | [**getSimpleByFilter**](docs/PeopleSearchApi.md#getSimpleByFilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter
*DocspaceApiJavascript.PeopleSearchApi* | [**getUsersWithRoomShared**](docs/PeopleSearchApi.md#getUsersWithRoomShared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings
*DocspaceApiJavascript.PeopleSearchApi* | [**searchUsersByExtendedFilter**](docs/PeopleSearchApi.md#searchUsersByExtendedFilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter
*DocspaceApiJavascript.PeopleSearchApi* | [**searchUsersByQuery**](docs/PeopleSearchApi.md#searchUsersByQuery) | **GET** /api/2.0/people/search | Search users (using query parameters)
*DocspaceApiJavascript.PeopleSearchApi* | [**searchUsersByStatus**](docs/PeopleSearchApi.md#searchUsersByStatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter
*DocspaceApiJavascript.PeopleThemeApi* | [**changePortalTheme**](docs/PeopleThemeApi.md#changePortalTheme) | **PUT** /api/2.0/people/theme | Change the portal theme
*DocspaceApiJavascript.PeopleThemeApi* | [**getPortalTheme**](docs/PeopleThemeApi.md#getPortalTheme) | **GET** /api/2.0/people/theme | Get the portal theme
*DocspaceApiJavascript.PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](docs/PeopleThirdPartyAccountsApi.md#getThirdPartyAuthProviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts
*DocspaceApiJavascript.PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#linkThirdPartyAccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account
*DocspaceApiJavascript.PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#signupThirdPartyAccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account
*DocspaceApiJavascript.PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#unlinkThirdPartyAccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account
*DocspaceApiJavascript.PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](docs/PeopleUserDataApi.md#getDeletePersonalFolderProgress) | **GET** /api/2.0/people/delete/personal/progress | Get the progress of deleting the personal folder
*DocspaceApiJavascript.PeopleUserDataApi* | [**getReassignProgress**](docs/PeopleUserDataApi.md#getReassignProgress) | **GET** /api/2.0/people/reassign/progress/{userid} | Get the reassignment progress
*DocspaceApiJavascript.PeopleUserDataApi* | [**getRemoveProgress**](docs/PeopleUserDataApi.md#getRemoveProgress) | **GET** /api/2.0/people/remove/progress/{userid} | Get the deletion progress
*DocspaceApiJavascript.PeopleUserDataApi* | [**necessaryReassign**](docs/PeopleUserDataApi.md#necessaryReassign) | **GET** /api/2.0/people/reassign/necessary | Check the data reassignment need
*DocspaceApiJavascript.PeopleUserDataApi* | [**sendInstructionsToDelete**](docs/PeopleUserDataApi.md#sendInstructionsToDelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions
*DocspaceApiJavascript.PeopleUserDataApi* | [**startDeletePersonalFolder**](docs/PeopleUserDataApi.md#startDeletePersonalFolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder
*DocspaceApiJavascript.PeopleUserDataApi* | [**startReassign**](docs/PeopleUserDataApi.md#startReassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment
*DocspaceApiJavascript.PeopleUserDataApi* | [**startRemove**](docs/PeopleUserDataApi.md#startRemove) | **POST** /api/2.0/people/remove/start | Start the data deletion
*DocspaceApiJavascript.PeopleUserDataApi* | [**terminateReassign**](docs/PeopleUserDataApi.md#terminateReassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment
*DocspaceApiJavascript.PeopleUserDataApi* | [**terminateRemove**](docs/PeopleUserDataApi.md#terminateRemove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion
*DocspaceApiJavascript.PeopleUserStatusApi* | [**getByStatus**](docs/PeopleUserStatusApi.md#getByStatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status
*DocspaceApiJavascript.PeopleUserStatusApi* | [**updateUserActivationStatus**](docs/PeopleUserStatusApi.md#updateUserActivationStatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users
*DocspaceApiJavascript.PeopleUserStatusApi* | [**updateUserStatus**](docs/PeopleUserStatusApi.md#updateUserStatus) | **PUT** /api/2.0/people/status/{status} | Change a user status
*DocspaceApiJavascript.PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](docs/PeopleUserTypeApi.md#getUserTypeUpdateProgress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type
*DocspaceApiJavascript.PeopleUserTypeApi* | [**starUserTypetUpdate**](docs/PeopleUserTypeApi.md#starUserTypetUpdate) | **POST** /api/2.0/people/type | Update user type
*DocspaceApiJavascript.PeopleUserTypeApi* | [**terminateUserTypeUpdate**](docs/PeopleUserTypeApi.md#terminateUserTypeUpdate) | **PUT** /api/2.0/people/type/terminate | Terminate update user type
*DocspaceApiJavascript.PeopleUserTypeApi* | [**updateUserType**](docs/PeopleUserTypeApi.md#updateUserType) | **PUT** /api/2.0/people/type/{type} | Change a user type
*DocspaceApiJavascript.PortalGuestsApi* | [**getGuestSharingLink**](docs/PortalGuestsApi.md#getGuestSharingLink) | **GET** /api/2.0/people/guests/{userid}/share | Get a guest sharing link
*DocspaceApiJavascript.PortalPaymentApi* | [**calculateWalletPayment**](docs/PortalPaymentApi.md#calculateWalletPayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate amount of the wallet payment
*DocspaceApiJavascript.PortalPaymentApi* | [**createCustomerOperationsReport**](docs/PortalPaymentApi.md#createCustomerOperationsReport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Generate the customer operations report
*DocspaceApiJavascript.PortalPaymentApi* | [**getCheckoutSetupUrl**](docs/PortalPaymentApi.md#getCheckoutSetupUrl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Get the checkout setup page URL
*DocspaceApiJavascript.PortalPaymentApi* | [**getCustomerBalance**](docs/PortalPaymentApi.md#getCustomerBalance) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance
*DocspaceApiJavascript.PortalPaymentApi* | [**getCustomerInfo**](docs/PortalPaymentApi.md#getCustomerInfo) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer info
*DocspaceApiJavascript.PortalPaymentApi* | [**getCustomerOperations**](docs/PortalPaymentApi.md#getCustomerOperations) | **GET** /api/2.0/portal/payment/customer/operations | Get the customer operations
*DocspaceApiJavascript.PortalPaymentApi* | [**getPaymentAccount**](docs/PortalPaymentApi.md#getPaymentAccount) | **GET** /api/2.0/portal/payment/account | Get the payment account
*DocspaceApiJavascript.PortalPaymentApi* | [**getPaymentCurrencies**](docs/PortalPaymentApi.md#getPaymentCurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies
*DocspaceApiJavascript.PortalPaymentApi* | [**getPaymentQuotas**](docs/PortalPaymentApi.md#getPaymentQuotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas
*DocspaceApiJavascript.PortalPaymentApi* | [**getPaymentUrl**](docs/PortalPaymentApi.md#getPaymentUrl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL
*DocspaceApiJavascript.PortalPaymentApi* | [**getPortalPrices**](docs/PortalPaymentApi.md#getPortalPrices) | **GET** /api/2.0/portal/payment/prices | Get prices
*DocspaceApiJavascript.PortalPaymentApi* | [**getQuotaPaymentInformation**](docs/PortalPaymentApi.md#getQuotaPaymentInformation) | **GET** /api/2.0/portal/payment/quota | Get quota payment information
*DocspaceApiJavascript.PortalPaymentApi* | [**getTenantWalletSettings**](docs/PortalPaymentApi.md#getTenantWalletSettings) | **GET** /api/2.0/portal/payment/topupsettings | Get wallet auto top up settings
*DocspaceApiJavascript.PortalPaymentApi* | [**sendPaymentRequest**](docs/PortalPaymentApi.md#sendPaymentRequest) | **POST** /api/2.0/portal/payment/request | Send a payment request
*DocspaceApiJavascript.PortalPaymentApi* | [**setTenantWalletSettings**](docs/PortalPaymentApi.md#setTenantWalletSettings) | **POST** /api/2.0/portal/payment/topupsettings | Set wallet auto top up settings
*DocspaceApiJavascript.PortalPaymentApi* | [**topUpDeposit**](docs/PortalPaymentApi.md#topUpDeposit) | **POST** /api/2.0/portal/payment/deposit | Put money on deposit
*DocspaceApiJavascript.PortalPaymentApi* | [**updatePayment**](docs/PortalPaymentApi.md#updatePayment) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity
*DocspaceApiJavascript.PortalPaymentApi* | [**updateWalletPayment**](docs/PortalPaymentApi.md#updateWalletPayment) | **PUT** /api/2.0/portal/payment/updatewallet | Update the wallet payment quantity
*DocspaceApiJavascript.PortalQuotaApi* | [**getPortalQuota**](docs/PortalQuotaApi.md#getPortalQuota) | **GET** /api/2.0/portal/quota | Get a portal quota
*DocspaceApiJavascript.PortalQuotaApi* | [**getPortalTariff**](docs/PortalQuotaApi.md#getPortalTariff) | **GET** /api/2.0/portal/tariff | Get a portal tariff
*DocspaceApiJavascript.PortalQuotaApi* | [**getPortalUsedSpace**](docs/PortalQuotaApi.md#getPortalUsedSpace) | **GET** /api/2.0/portal/usedspace | Get the portal used space
*DocspaceApiJavascript.PortalQuotaApi* | [**getRightQuota**](docs/PortalQuotaApi.md#getRightQuota) | **GET** /api/2.0/portal/quota/right | Get the recommended quota
*DocspaceApiJavascript.PortalSettingsApi* | [**continuePortal**](docs/PortalSettingsApi.md#continuePortal) | **PUT** /api/2.0/portal/continue | Restore a portal
*DocspaceApiJavascript.PortalSettingsApi* | [**deletePortal**](docs/PortalSettingsApi.md#deletePortal) | **DELETE** /api/2.0/portal/delete | Delete a portal
*DocspaceApiJavascript.PortalSettingsApi* | [**getPortalInformation**](docs/PortalSettingsApi.md#getPortalInformation) | **GET** /api/2.0/portal | Get a portal
*DocspaceApiJavascript.PortalSettingsApi* | [**getPortalPath**](docs/PortalSettingsApi.md#getPortalPath) | **GET** /api/2.0/portal/path | Get a path to the portal
*DocspaceApiJavascript.PortalSettingsApi* | [**sendDeleteInstructions**](docs/PortalSettingsApi.md#sendDeleteInstructions) | **POST** /api/2.0/portal/delete | Send removal instructions
*DocspaceApiJavascript.PortalSettingsApi* | [**sendSuspendInstructions**](docs/PortalSettingsApi.md#sendSuspendInstructions) | **POST** /api/2.0/portal/suspend | Send suspension instructions
*DocspaceApiJavascript.PortalSettingsApi* | [**suspendPortal**](docs/PortalSettingsApi.md#suspendPortal) | **PUT** /api/2.0/portal/suspend | Deactivate a portal
*DocspaceApiJavascript.PortalUsersApi* | [**getInvitationLink**](docs/PortalUsersApi.md#getInvitationLink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link
*DocspaceApiJavascript.PortalUsersApi* | [**getPortalUsersCount**](docs/PortalUsersApi.md#getPortalUsersCount) | **GET** /api/2.0/portal/userscount | Get a number of portal users
*DocspaceApiJavascript.PortalUsersApi* | [**getUserById**](docs/PortalUsersApi.md#getUserById) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID
*DocspaceApiJavascript.PortalUsersApi* | [**markGiftMessageAsRead**](docs/PortalUsersApi.md#markGiftMessageAsRead) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read
*DocspaceApiJavascript.PortalUsersApi* | [**sendCongratulations**](docs/PortalUsersApi.md#sendCongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations
*DocspaceApiJavascript.RoomsApi* | [**addRoomTags**](docs/RoomsApi.md#addRoomTags) | **PUT** /api/2.0/files/rooms/{id}/tags | Add the room tags
*DocspaceApiJavascript.RoomsApi* | [**archiveRoom**](docs/RoomsApi.md#archiveRoom) | **PUT** /api/2.0/files/rooms/{id}/archive | Archive a room
*DocspaceApiJavascript.RoomsApi* | [**changeRoomCover**](docs/RoomsApi.md#changeRoomCover) | **POST** /api/2.0/files/rooms/{id}/cover | Change the room cover
*DocspaceApiJavascript.RoomsApi* | [**createRoom**](docs/RoomsApi.md#createRoom) | **POST** /api/2.0/files/rooms | Create a room
*DocspaceApiJavascript.RoomsApi* | [**createRoomFromTemplate**](docs/RoomsApi.md#createRoomFromTemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template
*DocspaceApiJavascript.RoomsApi* | [**createRoomLogo**](docs/RoomsApi.md#createRoomLogo) | **POST** /api/2.0/files/rooms/{id}/logo | Create a room logo
*DocspaceApiJavascript.RoomsApi* | [**createRoomTag**](docs/RoomsApi.md#createRoomTag) | **POST** /api/2.0/files/tags | Create a tag
*DocspaceApiJavascript.RoomsApi* | [**createRoomTemplate**](docs/RoomsApi.md#createRoomTemplate) | **POST** /api/2.0/files/roomtemplate | Start creating room template
*DocspaceApiJavascript.RoomsApi* | [**createRoomThirdParty**](docs/RoomsApi.md#createRoomThirdParty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Create a third-party room
*DocspaceApiJavascript.RoomsApi* | [**deleteCustomTags**](docs/RoomsApi.md#deleteCustomTags) | **DELETE** /api/2.0/files/tags | Delete tags
*DocspaceApiJavascript.RoomsApi* | [**deleteRoom**](docs/RoomsApi.md#deleteRoom) | **DELETE** /api/2.0/files/rooms/{id} | Remove a room
*DocspaceApiJavascript.RoomsApi* | [**deleteRoomLogo**](docs/RoomsApi.md#deleteRoomLogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Remove a room logo
*DocspaceApiJavascript.RoomsApi* | [**deleteRoomTags**](docs/RoomsApi.md#deleteRoomTags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Remove the room tags
*DocspaceApiJavascript.RoomsApi* | [**getNewRoomItems**](docs/RoomsApi.md#getNewRoomItems) | **GET** /api/2.0/files/rooms/{id}/news | Get the new room items
*DocspaceApiJavascript.RoomsApi* | [**getPublicSettings**](docs/RoomsApi.md#getPublicSettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Get public settings
*DocspaceApiJavascript.RoomsApi* | [**getRoomCovers**](docs/RoomsApi.md#getRoomCovers) | **GET** /api/2.0/files/rooms/covers | Get covers
*DocspaceApiJavascript.RoomsApi* | [**getRoomCreatingStatus**](docs/RoomsApi.md#getRoomCreatingStatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress
*DocspaceApiJavascript.RoomsApi* | [**getRoomIndexExport**](docs/RoomsApi.md#getRoomIndexExport) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export
*DocspaceApiJavascript.RoomsApi* | [**getRoomInfo**](docs/RoomsApi.md#getRoomInfo) | **GET** /api/2.0/files/rooms/{id} | Get room information
*DocspaceApiJavascript.RoomsApi* | [**getRoomLinks**](docs/RoomsApi.md#getRoomLinks) | **GET** /api/2.0/files/rooms/{id}/links | Get the room links
*DocspaceApiJavascript.RoomsApi* | [**getRoomSecurityInfo**](docs/RoomsApi.md#getRoomSecurityInfo) | **GET** /api/2.0/files/rooms/{id}/share | Get the room access rights
*DocspaceApiJavascript.RoomsApi* | [**getRoomTagsInfo**](docs/RoomsApi.md#getRoomTagsInfo) | **GET** /api/2.0/files/tags | Get tags
*DocspaceApiJavascript.RoomsApi* | [**getRoomTemplateCreatingStatus**](docs/RoomsApi.md#getRoomTemplateCreatingStatus) | **GET** /api/2.0/files/roomtemplate/status | Get status of room template creation
*DocspaceApiJavascript.RoomsApi* | [**getRoomsFolder**](docs/RoomsApi.md#getRoomsFolder) | **GET** /api/2.0/files/rooms | Get rooms
*DocspaceApiJavascript.RoomsApi* | [**getRoomsNewItems**](docs/RoomsApi.md#getRoomsNewItems) | **GET** /api/2.0/files/rooms/news | Get the room new items
*DocspaceApiJavascript.RoomsApi* | [**getRoomsPrimaryExternalLink**](docs/RoomsApi.md#getRoomsPrimaryExternalLink) | **GET** /api/2.0/files/rooms/{id}/link | Get the room primary external link
*DocspaceApiJavascript.RoomsApi* | [**pinRoom**](docs/RoomsApi.md#pinRoom) | **PUT** /api/2.0/files/rooms/{id}/pin | Pin a room
*DocspaceApiJavascript.RoomsApi* | [**reorderRoom**](docs/RoomsApi.md#reorderRoom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Reorder the room
*DocspaceApiJavascript.RoomsApi* | [**resendEmailInvitations**](docs/RoomsApi.md#resendEmailInvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Resend the room invitations
*DocspaceApiJavascript.RoomsApi* | [**setPublicSettings**](docs/RoomsApi.md#setPublicSettings) | **PUT** /api/2.0/files/roomtemplate/public | Set public settings
*DocspaceApiJavascript.RoomsApi* | [**setRoomLink**](docs/RoomsApi.md#setRoomLink) | **PUT** /api/2.0/files/rooms/{id}/links | Set the room external or invitation link
*DocspaceApiJavascript.RoomsApi* | [**setRoomSecurity**](docs/RoomsApi.md#setRoomSecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Set the room access rights
*DocspaceApiJavascript.RoomsApi* | [**startRoomIndexExport**](docs/RoomsApi.md#startRoomIndexExport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Start the room index export
*DocspaceApiJavascript.RoomsApi* | [**terminateRoomIndexExport**](docs/RoomsApi.md#terminateRoomIndexExport) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export
*DocspaceApiJavascript.RoomsApi* | [**unarchiveRoom**](docs/RoomsApi.md#unarchiveRoom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Unarchive a room
*DocspaceApiJavascript.RoomsApi* | [**unpinRoom**](docs/RoomsApi.md#unpinRoom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Unpin a room
*DocspaceApiJavascript.RoomsApi* | [**updateRoom**](docs/RoomsApi.md#updateRoom) | **PUT** /api/2.0/files/rooms/{id} | Update a room
*DocspaceApiJavascript.RoomsApi* | [**uploadRoomLogo**](docs/RoomsApi.md#uploadRoomLogo) | **POST** /api/2.0/files/logos | Upload a room logo image
*DocspaceApiJavascript.SecurityAccessToDevToolsApi* | [**setTenantDevToolsAccessSettings**](docs/SecurityAccessToDevToolsApi.md#setTenantDevToolsAccessSettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings
*DocspaceApiJavascript.SecurityActiveConnectionsApi* | [**getAllActiveConnections**](docs/SecurityActiveConnectionsApi.md#getAllActiveConnections) | **GET** /api/2.0/security/activeconnections | Get active connections
*DocspaceApiJavascript.SecurityActiveConnectionsApi* | [**logOutActiveConnection**](docs/SecurityActiveConnectionsApi.md#logOutActiveConnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Log out from the connection
*DocspaceApiJavascript.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsChangePassword**](docs/SecurityActiveConnectionsApi.md#logOutAllActiveConnectionsChangePassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Log out and change password
*DocspaceApiJavascript.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsForUser**](docs/SecurityActiveConnectionsApi.md#logOutAllActiveConnectionsForUser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Log out for the user by ID
*DocspaceApiJavascript.SecurityActiveConnectionsApi* | [**logOutAllExceptThisConnection**](docs/SecurityActiveConnectionsApi.md#logOutAllExceptThisConnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Log out from all connections except the current one
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**createAuditTrailReport**](docs/SecurityAuditTrailDataApi.md#createAuditTrailReport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**getAuditEventsByFilter**](docs/SecurityAuditTrailDataApi.md#getAuditEventsByFilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**getAuditSettings**](docs/SecurityAuditTrailDataApi.md#getAuditSettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**getAuditTrailMappers**](docs/SecurityAuditTrailDataApi.md#getAuditTrailMappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**getAuditTrailTypes**](docs/SecurityAuditTrailDataApi.md#getAuditTrailTypes) | **GET** /api/2.0/security/audit/types | Get audit trail types
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**getLastAuditEvents**](docs/SecurityAuditTrailDataApi.md#getLastAuditEvents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data
*DocspaceApiJavascript.SecurityAuditTrailDataApi* | [**setAuditSettings**](docs/SecurityAuditTrailDataApi.md#setAuditSettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings
*DocspaceApiJavascript.SecurityBannersVisibilityApi* | [**setTenantBannerSettings**](docs/SecurityBannersVisibilityApi.md#setTenantBannerSettings) | **POST** /api/2.0/settings/banner | Set the promotional banners visibility settings
*DocspaceApiJavascript.SecurityCSPApi* | [**configureCsp**](docs/SecurityCSPApi.md#configureCsp) | **POST** /api/2.0/security/csp | Configure CSP settings
*DocspaceApiJavascript.SecurityCSPApi* | [**getCspSettings**](docs/SecurityCSPApi.md#getCspSettings) | **GET** /api/2.0/security/csp | Get CSP settings
*DocspaceApiJavascript.SecurityFirebaseApi* | [**docRegisterPusnNotificationDevice**](docs/SecurityFirebaseApi.md#docRegisterPusnNotificationDevice) | **POST** /api/2.0/settings/push/docregisterdevice | Save the Documents Firebase device token
*DocspaceApiJavascript.SecurityFirebaseApi* | [**subscribeDocumentsPushNotification**](docs/SecurityFirebaseApi.md#subscribeDocumentsPushNotification) | **PUT** /api/2.0/settings/push/docsubscribe | Subscribe to Documents push notification
*DocspaceApiJavascript.SecurityLoginHistoryApi* | [**createLoginHistoryReport**](docs/SecurityLoginHistoryApi.md#createLoginHistoryReport) | **POST** /api/2.0/security/audit/login/report | Generate the login history report
*DocspaceApiJavascript.SecurityLoginHistoryApi* | [**getLastLoginEvents**](docs/SecurityLoginHistoryApi.md#getLastLoginEvents) | **GET** /api/2.0/security/audit/login/last | Get login history
*DocspaceApiJavascript.SecurityLoginHistoryApi* | [**getLoginEventsByFilter**](docs/SecurityLoginHistoryApi.md#getLoginEventsByFilter) | **GET** /api/2.0/security/audit/login/filter | Get filtered login events
*DocspaceApiJavascript.SecurityOAuth2Api* | [**generateJwtToken**](docs/SecurityOAuth2Api.md#generateJwtToken) | **GET** /api/2.0/security/oauth2/token | Generate JWT token
*DocspaceApiJavascript.SecuritySMTPSettingsApi* | [**getSmtpOperationStatus**](docs/SecuritySMTPSettingsApi.md#getSmtpOperationStatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Get the SMTP testing process status
*DocspaceApiJavascript.SecuritySMTPSettingsApi* | [**getSmtpSettings**](docs/SecuritySMTPSettingsApi.md#getSmtpSettings) | **GET** /api/2.0/smtpsettings/smtp | Get the SMTP settings
*DocspaceApiJavascript.SecuritySMTPSettingsApi* | [**resetSmtpSettings**](docs/SecuritySMTPSettingsApi.md#resetSmtpSettings) | **DELETE** /api/2.0/smtpsettings/smtp | Reset the SMTP settings
*DocspaceApiJavascript.SecuritySMTPSettingsApi* | [**saveSmtpSettings**](docs/SecuritySMTPSettingsApi.md#saveSmtpSettings) | **POST** /api/2.0/smtpsettings/smtp | Save the SMTP settings
*DocspaceApiJavascript.SecuritySMTPSettingsApi* | [**testSmtpSettings**](docs/SecuritySMTPSettingsApi.md#testSmtpSettings) | **GET** /api/2.0/smtpsettings/smtp/test | Test the SMTP settings
*DocspaceApiJavascript.SettingsAccessToDevToolsApi* | [**getTenantAccessDevToolsSettings**](docs/SettingsAccessToDevToolsApi.md#getTenantAccessDevToolsSettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings
*DocspaceApiJavascript.SettingsAuthorizationApi* | [**getAuthServices**](docs/SettingsAuthorizationApi.md#getAuthServices) | **GET** /api/2.0/settings/authservice | Get the authorization services
*DocspaceApiJavascript.SettingsAuthorizationApi* | [**saveAuthKeys**](docs/SettingsAuthorizationApi.md#saveAuthKeys) | **POST** /api/2.0/settings/authservice | Save the authorization keys
*DocspaceApiJavascript.SettingsBannersVisibilityApi* | [**getTenantBannerSettings**](docs/SettingsBannersVisibilityApi.md#getTenantBannerSettings) | **GET** /api/2.0/settings/banner | Get the promotional banners visibility settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**closeAdminHelper**](docs/SettingsCommonSettingsApi.md#closeAdminHelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**completeWizard**](docs/SettingsCommonSettingsApi.md#completeWizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**configureDeepLink**](docs/SettingsCommonSettingsApi.md#configureDeepLink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**deletePortalColorTheme**](docs/SettingsCommonSettingsApi.md#deletePortalColorTheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getDeepLinkSettings**](docs/SettingsCommonSettingsApi.md#getDeepLinkSettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getPaymentSettings**](docs/SettingsCommonSettingsApi.md#getPaymentSettings) | **GET** /api/2.0/settings/payment | Get the payment settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getPortalColorTheme**](docs/SettingsCommonSettingsApi.md#getPortalColorTheme) | **GET** /api/2.0/settings/colortheme | Get a color theme
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getPortalHostname**](docs/SettingsCommonSettingsApi.md#getPortalHostname) | **GET** /api/2.0/settings/machine | Get hostname
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getPortalLogo**](docs/SettingsCommonSettingsApi.md#getPortalLogo) | **GET** /api/2.0/settings/logo | Get a portal logo
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getPortalSettings**](docs/SettingsCommonSettingsApi.md#getPortalSettings) | **GET** /api/2.0/settings | Get the portal settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getSocketSettings**](docs/SettingsCommonSettingsApi.md#getSocketSettings) | **GET** /api/2.0/settings/socket | Get the socket settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getSupportedCultures**](docs/SettingsCommonSettingsApi.md#getSupportedCultures) | **GET** /api/2.0/settings/cultures | Get supported languages
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getTenantUserInvitationSettings**](docs/SettingsCommonSettingsApi.md#getTenantUserInvitationSettings) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**getTimeZones**](docs/SettingsCommonSettingsApi.md#getTimeZones) | **GET** /api/2.0/settings/timezones | Get time zones
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**saveDnsSettings**](docs/SettingsCommonSettingsApi.md#saveDnsSettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**saveMailDomainSettings**](docs/SettingsCommonSettingsApi.md#saveMailDomainSettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**savePortalColorTheme**](docs/SettingsCommonSettingsApi.md#savePortalColorTheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**updateEmailActivationSettings**](docs/SettingsCommonSettingsApi.md#updateEmailActivationSettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings
*DocspaceApiJavascript.SettingsCommonSettingsApi* | [**updateInvitationSettings**](docs/SettingsCommonSettingsApi.md#updateInvitationSettings) | **PUT** /api/2.0/settings/invitationsettings | Update user invitation settings
*DocspaceApiJavascript.SettingsCookiesApi* | [**getCookieSettings**](docs/SettingsCookiesApi.md#getCookieSettings) | **GET** /api/2.0/settings/cookiesettings | Get cookies lifetime
*DocspaceApiJavascript.SettingsCookiesApi* | [**updateCookieSettings**](docs/SettingsCookiesApi.md#updateCookieSettings) | **PUT** /api/2.0/settings/cookiesettings | Update cookies lifetime
*DocspaceApiJavascript.SettingsCustomNavigationApi* | [**createCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#createCustomNavigationItem) | **POST** /api/2.0/settings/customnavigation/create | Add a custom navigation item
*DocspaceApiJavascript.SettingsCustomNavigationApi* | [**deleteCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#deleteCustomNavigationItem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Delete a custom navigation item
*DocspaceApiJavascript.SettingsCustomNavigationApi* | [**getCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Get a custom navigation item by ID
*DocspaceApiJavascript.SettingsCustomNavigationApi* | [**getCustomNavigationItemSample**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItemSample) | **GET** /api/2.0/settings/customnavigation/getsample | Get a custom navigation item sample
*DocspaceApiJavascript.SettingsCustomNavigationApi* | [**getCustomNavigationItems**](docs/SettingsCustomNavigationApi.md#getCustomNavigationItems) | **GET** /api/2.0/settings/customnavigation/getall | Get the custom navigation items
*DocspaceApiJavascript.SettingsEncryptionApi* | [**getStorageEncryptionProgress**](docs/SettingsEncryptionApi.md#getStorageEncryptionProgress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress
*DocspaceApiJavascript.SettingsEncryptionApi* | [**getStorageEncryptionSettings**](docs/SettingsEncryptionApi.md#getStorageEncryptionSettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings
*DocspaceApiJavascript.SettingsEncryptionApi* | [**startStorageEncryption**](docs/SettingsEncryptionApi.md#startStorageEncryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption process
*DocspaceApiJavascript.SettingsGreetingSettingsApi* | [**getGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getGreetingSettings) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings
*DocspaceApiJavascript.SettingsGreetingSettingsApi* | [**getIsDefaultGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getIsDefaultGreetingSettings) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings
*DocspaceApiJavascript.SettingsGreetingSettingsApi* | [**restoreGreetingSettings**](docs/SettingsGreetingSettingsApi.md#restoreGreetingSettings) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings
*DocspaceApiJavascript.SettingsGreetingSettingsApi* | [**saveGreetingSettings**](docs/SettingsGreetingSettingsApi.md#saveGreetingSettings) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings
*DocspaceApiJavascript.SettingsIPRestrictionsApi* | [**getIpRestrictions**](docs/SettingsIPRestrictionsApi.md#getIpRestrictions) | **GET** /api/2.0/settings/iprestrictions | Get the IP portal restrictions
*DocspaceApiJavascript.SettingsIPRestrictionsApi* | [**readIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#readIpRestrictionsSettings) | **GET** /api/2.0/settings/iprestrictions/settings | Get the IP restriction settings
*DocspaceApiJavascript.SettingsIPRestrictionsApi* | [**saveIpRestrictions**](docs/SettingsIPRestrictionsApi.md#saveIpRestrictions) | **PUT** /api/2.0/settings/iprestrictions | Update the IP restrictions
*DocspaceApiJavascript.SettingsIPRestrictionsApi* | [**updateIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#updateIpRestrictionsSettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Update the IP restriction settings
*DocspaceApiJavascript.SettingsLicenseApi* | [**acceptLicense**](docs/SettingsLicenseApi.md#acceptLicense) | **POST** /api/2.0/settings/license/accept | Activate a license
*DocspaceApiJavascript.SettingsLicenseApi* | [**getIsLicenseRequired**](docs/SettingsLicenseApi.md#getIsLicenseRequired) | **GET** /api/2.0/settings/license/required | Request a license
*DocspaceApiJavascript.SettingsLicenseApi* | [**refreshLicense**](docs/SettingsLicenseApi.md#refreshLicense) | **GET** /api/2.0/settings/license/refresh | Refresh the license
*DocspaceApiJavascript.SettingsLicenseApi* | [**uploadLicense**](docs/SettingsLicenseApi.md#uploadLicense) | **POST** /api/2.0/settings/license | Upload a license
*DocspaceApiJavascript.SettingsLoginSettingsApi* | [**getLoginSettings**](docs/SettingsLoginSettingsApi.md#getLoginSettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings
*DocspaceApiJavascript.SettingsLoginSettingsApi* | [**setDefaultLoginSettings**](docs/SettingsLoginSettingsApi.md#setDefaultLoginSettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings
*DocspaceApiJavascript.SettingsLoginSettingsApi* | [**updateLoginSettings**](docs/SettingsLoginSettingsApi.md#updateLoginSettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings
*DocspaceApiJavascript.SettingsMessagesApi* | [**enableAdminMessageSettings**](docs/SettingsMessagesApi.md#enableAdminMessageSettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
*DocspaceApiJavascript.SettingsMessagesApi* | [**sendAdminMail**](docs/SettingsMessagesApi.md#sendAdminMail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
*DocspaceApiJavascript.SettingsMessagesApi* | [**sendJoinInviteMail**](docs/SettingsMessagesApi.md#sendJoinInviteMail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email
*DocspaceApiJavascript.SettingsNotificationsApi* | [**getNotificationSettings**](docs/SettingsNotificationsApi.md#getNotificationSettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability
*DocspaceApiJavascript.SettingsNotificationsApi* | [**getRoomsNotificationSettings**](docs/SettingsNotificationsApi.md#getRoomsNotificationSettings) | **GET** /api/2.0/settings/notification/rooms | Get room notification settings
*DocspaceApiJavascript.SettingsNotificationsApi* | [**setNotificationSettings**](docs/SettingsNotificationsApi.md#setNotificationSettings) | **POST** /api/2.0/settings/notification | Enable notifications
*DocspaceApiJavascript.SettingsNotificationsApi* | [**setRoomsNotificationStatus**](docs/SettingsNotificationsApi.md#setRoomsNotificationStatus) | **POST** /api/2.0/settings/notification/rooms | Set room notification status
*DocspaceApiJavascript.SettingsOwnerApi* | [**sendOwnerChangeInstructions**](docs/SettingsOwnerApi.md#sendOwnerChangeInstructions) | **POST** /api/2.0/settings/owner | Send the owner change instructions
*DocspaceApiJavascript.SettingsOwnerApi* | [**updatePortalOwner**](docs/SettingsOwnerApi.md#updatePortalOwner) | **PUT** /api/2.0/settings/owner | Update the portal owner
*DocspaceApiJavascript.SettingsQuotaApi* | [**getUserQuotaSettings**](docs/SettingsQuotaApi.md#getUserQuotaSettings) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings
*DocspaceApiJavascript.SettingsQuotaApi* | [**saveRoomQuotaSettings**](docs/SettingsQuotaApi.md#saveRoomQuotaSettings) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings
*DocspaceApiJavascript.SettingsQuotaApi* | [**setTenantQuotaSettings**](docs/SettingsQuotaApi.md#setTenantQuotaSettings) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**deleteAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteAdditionalWhiteLabelSettings) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**deleteCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteCompanyWhiteLabelSettings) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getAdditionalWhiteLabelSettings) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getCompanyWhiteLabelSettings) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getEnableWhitelabel**](docs/SettingsRebrandingApi.md#getEnableWhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getIsDefaultWhiteLabelLogoText) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default white label logo text
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getIsDefaultWhiteLabelLogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getLicensorData**](docs/SettingsRebrandingApi.md#getLicensorData) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getWhiteLabelLogoText) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text
*DocspaceApiJavascript.SettingsRebrandingApi* | [**getWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getWhiteLabelLogos) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos
*DocspaceApiJavascript.SettingsRebrandingApi* | [**restoreWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#restoreWhiteLabelLogoText) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text
*DocspaceApiJavascript.SettingsRebrandingApi* | [**restoreWhiteLabelLogos**](docs/SettingsRebrandingApi.md#restoreWhiteLabelLogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos
*DocspaceApiJavascript.SettingsRebrandingApi* | [**saveAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveAdditionalWhiteLabelSettings) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**saveCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveCompanyWhiteLabelSettings) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**saveWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#saveWhiteLabelLogoText) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text settings
*DocspaceApiJavascript.SettingsRebrandingApi* | [**saveWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveWhiteLabelSettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos
*DocspaceApiJavascript.SettingsRebrandingApi* | [**saveWhiteLabelSettingsFromFiles**](docs/SettingsRebrandingApi.md#saveWhiteLabelSettingsFromFiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the white label logos from files
*DocspaceApiJavascript.SettingsSSOApi* | [**getDefaultSsoSettingsV2**](docs/SettingsSSOApi.md#getDefaultSsoSettingsV2) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings
*DocspaceApiJavascript.SettingsSSOApi* | [**getSsoSettingsV2**](docs/SettingsSSOApi.md#getSsoSettingsV2) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings
*DocspaceApiJavascript.SettingsSSOApi* | [**getSsoSettingsV2Constants**](docs/SettingsSSOApi.md#getSsoSettingsV2Constants) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants
*DocspaceApiJavascript.SettingsSSOApi* | [**resetSsoSettingsV2**](docs/SettingsSSOApi.md#resetSsoSettingsV2) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings
*DocspaceApiJavascript.SettingsSSOApi* | [**saveSsoSettingsV2**](docs/SettingsSSOApi.md#saveSsoSettingsV2) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings
*DocspaceApiJavascript.SettingsSecurityApi* | [**getEnabledModules**](docs/SettingsSecurityApi.md#getEnabledModules) | **GET** /api/2.0/settings/security/modules | Get the enabled modules
*DocspaceApiJavascript.SettingsSecurityApi* | [**getIsProductAdministrator**](docs/SettingsSecurityApi.md#getIsProductAdministrator) | **GET** /api/2.0/settings/security/administrator | Check a product administrator
*DocspaceApiJavascript.SettingsSecurityApi* | [**getPasswordSettings**](docs/SettingsSecurityApi.md#getPasswordSettings) | **GET** /api/2.0/settings/security/password | Get the password settings
*DocspaceApiJavascript.SettingsSecurityApi* | [**getProductAdministrators**](docs/SettingsSecurityApi.md#getProductAdministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Get the product administrators
*DocspaceApiJavascript.SettingsSecurityApi* | [**getWebItemSecurityInfo**](docs/SettingsSecurityApi.md#getWebItemSecurityInfo) | **GET** /api/2.0/settings/security/{id} | Get the module availability
*DocspaceApiJavascript.SettingsSecurityApi* | [**getWebItemSettingsSecurityInfo**](docs/SettingsSecurityApi.md#getWebItemSettingsSecurityInfo) | **GET** /api/2.0/settings/security | Get the security settings
*DocspaceApiJavascript.SettingsSecurityApi* | [**setAccessToWebItems**](docs/SettingsSecurityApi.md#setAccessToWebItems) | **PUT** /api/2.0/settings/security/access | Set the security settings to modules
*DocspaceApiJavascript.SettingsSecurityApi* | [**setProductAdministrator**](docs/SettingsSecurityApi.md#setProductAdministrator) | **PUT** /api/2.0/settings/security/administrator | Set a product administrator
*DocspaceApiJavascript.SettingsSecurityApi* | [**setWebItemSecurity**](docs/SettingsSecurityApi.md#setWebItemSecurity) | **PUT** /api/2.0/settings/security | Set the module security settings
*DocspaceApiJavascript.SettingsSecurityApi* | [**updatePasswordSettings**](docs/SettingsSecurityApi.md#updatePasswordSettings) | **PUT** /api/2.0/settings/security/password | Set the password settings
*DocspaceApiJavascript.SettingsStatisticsApi* | [**getSpaceUsageStatistics**](docs/SettingsStatisticsApi.md#getSpaceUsageStatistics) | **GET** /api/2.0/settings/statistics/spaceusage/{id} | Get the space usage statistics
*DocspaceApiJavascript.SettingsStorageApi* | [**getAllBackupStorages**](docs/SettingsStorageApi.md#getAllBackupStorages) | **GET** /api/2.0/settings/storage/backup | Get the backup storages
*DocspaceApiJavascript.SettingsStorageApi* | [**getAllCdnStorages**](docs/SettingsStorageApi.md#getAllCdnStorages) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages
*DocspaceApiJavascript.SettingsStorageApi* | [**getAllStorages**](docs/SettingsStorageApi.md#getAllStorages) | **GET** /api/2.0/settings/storage | Get storages
*DocspaceApiJavascript.SettingsStorageApi* | [**getAmazonS3Regions**](docs/SettingsStorageApi.md#getAmazonS3Regions) | **GET** /api/2.0/settings/storage/s3/regions | Get Amazon regions
*DocspaceApiJavascript.SettingsStorageApi* | [**getStorageProgress**](docs/SettingsStorageApi.md#getStorageProgress) | **GET** /api/2.0/settings/storage/progress | Get the storage progress
*DocspaceApiJavascript.SettingsStorageApi* | [**resetCdnToDefault**](docs/SettingsStorageApi.md#resetCdnToDefault) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings
*DocspaceApiJavascript.SettingsStorageApi* | [**resetStorageToDefault**](docs/SettingsStorageApi.md#resetStorageToDefault) | **DELETE** /api/2.0/settings/storage | Reset the storage settings
*DocspaceApiJavascript.SettingsStorageApi* | [**updateCdnStorage**](docs/SettingsStorageApi.md#updateCdnStorage) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage
*DocspaceApiJavascript.SettingsStorageApi* | [**updateStorage**](docs/SettingsStorageApi.md#updateStorage) | **PUT** /api/2.0/settings/storage | Update a storage
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**getTfaAppCodes**](docs/SettingsTFASettingsApi.md#getTfaAppCodes) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA codes
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**getTfaConfirmUrl**](docs/SettingsTFASettingsApi.md#getTfaConfirmUrl) | **GET** /api/2.0/settings/tfaapp/confirm | Get confirmation email
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**getTfaSettings**](docs/SettingsTFASettingsApi.md#getTfaSettings) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**tfaAppGenerateSetupCode**](docs/SettingsTFASettingsApi.md#tfaAppGenerateSetupCode) | **GET** /api/2.0/settings/tfaapp/setup | Generate setup code
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**tfaValidateAuthCode**](docs/SettingsTFASettingsApi.md#tfaValidateAuthCode) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**unlinkTfaApp**](docs/SettingsTFASettingsApi.md#unlinkTfaApp) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**updateTfaAppCodes**](docs/SettingsTFASettingsApi.md#updateTfaAppCodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Update the TFA codes
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**updateTfaSettings**](docs/SettingsTFASettingsApi.md#updateTfaSettings) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings
*DocspaceApiJavascript.SettingsTFASettingsApi* | [**updateTfaSettingsLink**](docs/SettingsTFASettingsApi.md#updateTfaSettingsLink) | **PUT** /api/2.0/settings/tfaappwithlink | Get a confirmation email for updating TFA settings
*DocspaceApiJavascript.SettingsWebhooksApi* | [**createWebhook**](docs/SettingsWebhooksApi.md#createWebhook) | **POST** /api/2.0/settings/webhook | Create a webhook
*DocspaceApiJavascript.SettingsWebhooksApi* | [**enableWebhook**](docs/SettingsWebhooksApi.md#enableWebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook
*DocspaceApiJavascript.SettingsWebhooksApi* | [**getTenantWebhooks**](docs/SettingsWebhooksApi.md#getTenantWebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks
*DocspaceApiJavascript.SettingsWebhooksApi* | [**getWebhookTriggers**](docs/SettingsWebhooksApi.md#getWebhookTriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers
*DocspaceApiJavascript.SettingsWebhooksApi* | [**getWebhooksLogs**](docs/SettingsWebhooksApi.md#getWebhooksLogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs
*DocspaceApiJavascript.SettingsWebhooksApi* | [**removeWebhook**](docs/SettingsWebhooksApi.md#removeWebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook
*DocspaceApiJavascript.SettingsWebhooksApi* | [**retryWebhook**](docs/SettingsWebhooksApi.md#retryWebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook
*DocspaceApiJavascript.SettingsWebhooksApi* | [**retryWebhooks**](docs/SettingsWebhooksApi.md#retryWebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks
*DocspaceApiJavascript.SettingsWebhooksApi* | [**updateWebhook**](docs/SettingsWebhooksApi.md#updateWebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook
*DocspaceApiJavascript.SettingsWebpluginsApi* | [**addWebPluginFromFile**](docs/SettingsWebpluginsApi.md#addWebPluginFromFile) | **POST** /api/2.0/settings/webplugins | Add a web plugin
*DocspaceApiJavascript.SettingsWebpluginsApi* | [**deleteWebPlugin**](docs/SettingsWebpluginsApi.md#deleteWebPlugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Delete a web plugin
*DocspaceApiJavascript.SettingsWebpluginsApi* | [**getWebPlugin**](docs/SettingsWebpluginsApi.md#getWebPlugin) | **GET** /api/2.0/settings/webplugins/{name} | Get a web plugin by name
*DocspaceApiJavascript.SettingsWebpluginsApi* | [**getWebPlugins**](docs/SettingsWebpluginsApi.md#getWebPlugins) | **GET** /api/2.0/settings/webplugins | Get web plugins
*DocspaceApiJavascript.SettingsWebpluginsApi* | [**updateWebPlugin**](docs/SettingsWebpluginsApi.md#updateWebPlugin) | **PUT** /api/2.0/settings/webplugins/{name} | Update a web plugin
*DocspaceApiJavascript.ThirdPartyApi* | [**getThirdPartyCode**](docs/ThirdPartyApi.md#getThirdPartyCode) | **GET** /api/2.0/thirdparty/{provider} | Get the code request


## Documentation for Models

 - [DocspaceApiJavascript.AccountInfoArrayWrapper](docs/AccountInfoArrayWrapper.md)
 - [DocspaceApiJavascript.AccountInfoDto](docs/AccountInfoDto.md)
 - [DocspaceApiJavascript.AccountLoginType](docs/AccountLoginType.md)
 - [DocspaceApiJavascript.AceShortWrapper](docs/AceShortWrapper.md)
 - [DocspaceApiJavascript.AceShortWrapperArrayWrapper](docs/AceShortWrapperArrayWrapper.md)
 - [DocspaceApiJavascript.ActionConfig](docs/ActionConfig.md)
 - [DocspaceApiJavascript.ActionLinkConfig](docs/ActionLinkConfig.md)
 - [DocspaceApiJavascript.ActionType](docs/ActionType.md)
 - [DocspaceApiJavascript.ActiveConnectionsDto](docs/ActiveConnectionsDto.md)
 - [DocspaceApiJavascript.ActiveConnectionsItemDto](docs/ActiveConnectionsItemDto.md)
 - [DocspaceApiJavascript.ActiveConnectionsWrapper](docs/ActiveConnectionsWrapper.md)
 - [DocspaceApiJavascript.ActiveConnectionsWrapperLinksInner](docs/ActiveConnectionsWrapperLinksInner.md)
 - [DocspaceApiJavascript.AdditionalWhiteLabelSettings](docs/AdditionalWhiteLabelSettings.md)
 - [DocspaceApiJavascript.AdditionalWhiteLabelSettingsDto](docs/AdditionalWhiteLabelSettingsDto.md)
 - [DocspaceApiJavascript.AdditionalWhiteLabelSettingsWrapper](docs/AdditionalWhiteLabelSettingsWrapper.md)
 - [DocspaceApiJavascript.AdminMessageBaseSettingsRequestsDto](docs/AdminMessageBaseSettingsRequestsDto.md)
 - [DocspaceApiJavascript.AdminMessageSettingsRequestsDto](docs/AdminMessageSettingsRequestsDto.md)
 - [DocspaceApiJavascript.AnonymousConfigDto](docs/AnonymousConfigDto.md)
 - [DocspaceApiJavascript.ApiDateTime](docs/ApiDateTime.md)
 - [DocspaceApiJavascript.ApiKeyResponseArrayWrapper](docs/ApiKeyResponseArrayWrapper.md)
 - [DocspaceApiJavascript.ApiKeyResponseDto](docs/ApiKeyResponseDto.md)
 - [DocspaceApiJavascript.ApiKeyResponseWrapper](docs/ApiKeyResponseWrapper.md)
 - [DocspaceApiJavascript.ApplyFilterOption](docs/ApplyFilterOption.md)
 - [DocspaceApiJavascript.ArchiveRoomRequest](docs/ArchiveRoomRequest.md)
 - [DocspaceApiJavascript.Area](docs/Area.md)
 - [DocspaceApiJavascript.ArrayArrayWrapper](docs/ArrayArrayWrapper.md)
 - [DocspaceApiJavascript.AuditEventArrayWrapper](docs/AuditEventArrayWrapper.md)
 - [DocspaceApiJavascript.AuditEventDto](docs/AuditEventDto.md)
 - [DocspaceApiJavascript.AuthData](docs/AuthData.md)
 - [DocspaceApiJavascript.AuthKey](docs/AuthKey.md)
 - [DocspaceApiJavascript.AuthRequestsDto](docs/AuthRequestsDto.md)
 - [DocspaceApiJavascript.AuthServiceRequestsArrayWrapper](docs/AuthServiceRequestsArrayWrapper.md)
 - [DocspaceApiJavascript.AuthServiceRequestsDto](docs/AuthServiceRequestsDto.md)
 - [DocspaceApiJavascript.AuthenticationTokenDto](docs/AuthenticationTokenDto.md)
 - [DocspaceApiJavascript.AuthenticationTokenWrapper](docs/AuthenticationTokenWrapper.md)
 - [DocspaceApiJavascript.AutoCleanUpData](docs/AutoCleanUpData.md)
 - [DocspaceApiJavascript.AutoCleanUpDataWrapper](docs/AutoCleanUpDataWrapper.md)
 - [DocspaceApiJavascript.AutoCleanupRequestDto](docs/AutoCleanupRequestDto.md)
 - [DocspaceApiJavascript.BackupDto](docs/BackupDto.md)
 - [DocspaceApiJavascript.BackupHistoryRecord](docs/BackupHistoryRecord.md)
 - [DocspaceApiJavascript.BackupHistoryRecordArrayWrapper](docs/BackupHistoryRecordArrayWrapper.md)
 - [DocspaceApiJavascript.BackupPeriod](docs/BackupPeriod.md)
 - [DocspaceApiJavascript.BackupProgress](docs/BackupProgress.md)
 - [DocspaceApiJavascript.BackupProgressEnum](docs/BackupProgressEnum.md)
 - [DocspaceApiJavascript.BackupProgressWrapper](docs/BackupProgressWrapper.md)
 - [DocspaceApiJavascript.BackupRestoreDto](docs/BackupRestoreDto.md)
 - [DocspaceApiJavascript.BackupScheduleDto](docs/BackupScheduleDto.md)
 - [DocspaceApiJavascript.BackupStorageType](docs/BackupStorageType.md)
 - [DocspaceApiJavascript.Balance](docs/Balance.md)
 - [DocspaceApiJavascript.BalanceWrapper](docs/BalanceWrapper.md)
 - [DocspaceApiJavascript.BaseBatchRequestDto](docs/BaseBatchRequestDto.md)
 - [DocspaceApiJavascript.BaseBatchRequestDtoFolderIdsInner](docs/BaseBatchRequestDtoFolderIdsInner.md)
 - [DocspaceApiJavascript.BatchRequestDto](docs/BatchRequestDto.md)
 - [DocspaceApiJavascript.BatchRequestDtoDestFolderId](docs/BatchRequestDtoDestFolderId.md)
 - [DocspaceApiJavascript.BatchTagsRequestDto](docs/BatchTagsRequestDto.md)
 - [DocspaceApiJavascript.BooleanWrapper](docs/BooleanWrapper.md)
 - [DocspaceApiJavascript.CapabilitiesDto](docs/CapabilitiesDto.md)
 - [DocspaceApiJavascript.CapabilitiesWrapper](docs/CapabilitiesWrapper.md)
 - [DocspaceApiJavascript.CdnStorageSettings](docs/CdnStorageSettings.md)
 - [DocspaceApiJavascript.CdnStorageSettingsWrapper](docs/CdnStorageSettingsWrapper.md)
 - [DocspaceApiJavascript.ChangeClientActivationRequest](docs/ChangeClientActivationRequest.md)
 - [DocspaceApiJavascript.ChangeHistory](docs/ChangeHistory.md)
 - [DocspaceApiJavascript.ChangeOwnerRequestDto](docs/ChangeOwnerRequestDto.md)
 - [DocspaceApiJavascript.CheckConversionRequestDtoInteger](docs/CheckConversionRequestDtoInteger.md)
 - [DocspaceApiJavascript.CheckDestFolderDto](docs/CheckDestFolderDto.md)
 - [DocspaceApiJavascript.CheckDestFolderResult](docs/CheckDestFolderResult.md)
 - [DocspaceApiJavascript.CheckDestFolderWrapper](docs/CheckDestFolderWrapper.md)
 - [DocspaceApiJavascript.CheckDocServiceUrlRequestDto](docs/CheckDocServiceUrlRequestDto.md)
 - [DocspaceApiJavascript.CheckFillFormDraft](docs/CheckFillFormDraft.md)
 - [DocspaceApiJavascript.CheckUploadRequest](docs/CheckUploadRequest.md)
 - [DocspaceApiJavascript.ClientInfoResponse](docs/ClientInfoResponse.md)
 - [DocspaceApiJavascript.ClientResponse](docs/ClientResponse.md)
 - [DocspaceApiJavascript.ClientSecretResponse](docs/ClientSecretResponse.md)
 - [DocspaceApiJavascript.CoEditingConfig](docs/CoEditingConfig.md)
 - [DocspaceApiJavascript.CoEditingConfigMode](docs/CoEditingConfigMode.md)
 - [DocspaceApiJavascript.CompanyWhiteLabelSettings](docs/CompanyWhiteLabelSettings.md)
 - [DocspaceApiJavascript.CompanyWhiteLabelSettingsArrayWrapper](docs/CompanyWhiteLabelSettingsArrayWrapper.md)
 - [DocspaceApiJavascript.CompanyWhiteLabelSettingsDto](docs/CompanyWhiteLabelSettingsDto.md)
 - [DocspaceApiJavascript.CompanyWhiteLabelSettingsWrapper](docs/CompanyWhiteLabelSettingsWrapper.md)
 - [DocspaceApiJavascript.ConfigurationDtoInteger](docs/ConfigurationDtoInteger.md)
 - [DocspaceApiJavascript.ConfigurationIntegerWrapper](docs/ConfigurationIntegerWrapper.md)
 - [DocspaceApiJavascript.ConfirmData](docs/ConfirmData.md)
 - [DocspaceApiJavascript.ConfirmDto](docs/ConfirmDto.md)
 - [DocspaceApiJavascript.ConfirmType](docs/ConfirmType.md)
 - [DocspaceApiJavascript.ConfirmWrapper](docs/ConfirmWrapper.md)
 - [DocspaceApiJavascript.Contact](docs/Contact.md)
 - [DocspaceApiJavascript.ContentDisposition](docs/ContentDisposition.md)
 - [DocspaceApiJavascript.ContentType](docs/ContentType.md)
 - [DocspaceApiJavascript.ConversationResultArrayWrapper](docs/ConversationResultArrayWrapper.md)
 - [DocspaceApiJavascript.ConversationResultDto](docs/ConversationResultDto.md)
 - [DocspaceApiJavascript.CookieSettingsDto](docs/CookieSettingsDto.md)
 - [DocspaceApiJavascript.CookieSettingsRequestsDto](docs/CookieSettingsRequestsDto.md)
 - [DocspaceApiJavascript.CookieSettingsWrapper](docs/CookieSettingsWrapper.md)
 - [DocspaceApiJavascript.CopyAsJsonElement](docs/CopyAsJsonElement.md)
 - [DocspaceApiJavascript.CopyAsJsonElementDestFolderId](docs/CopyAsJsonElementDestFolderId.md)
 - [DocspaceApiJavascript.CoverRequestDto](docs/CoverRequestDto.md)
 - [DocspaceApiJavascript.CoversResultArrayWrapper](docs/CoversResultArrayWrapper.md)
 - [DocspaceApiJavascript.CoversResultDto](docs/CoversResultDto.md)
 - [DocspaceApiJavascript.CreateApiKeyRequestDto](docs/CreateApiKeyRequestDto.md)
 - [DocspaceApiJavascript.CreateClientRequest](docs/CreateClientRequest.md)
 - [DocspaceApiJavascript.CreateFileJsonElement](docs/CreateFileJsonElement.md)
 - [DocspaceApiJavascript.CreateFileJsonElementTemplateId](docs/CreateFileJsonElementTemplateId.md)
 - [DocspaceApiJavascript.CreateFolder](docs/CreateFolder.md)
 - [DocspaceApiJavascript.CreateRoomFromTemplateDto](docs/CreateRoomFromTemplateDto.md)
 - [DocspaceApiJavascript.CreateRoomRequestDto](docs/CreateRoomRequestDto.md)
 - [DocspaceApiJavascript.CreateTagRequestDto](docs/CreateTagRequestDto.md)
 - [DocspaceApiJavascript.CreateTextOrHtmlFile](docs/CreateTextOrHtmlFile.md)
 - [DocspaceApiJavascript.CreateThirdPartyRoom](docs/CreateThirdPartyRoom.md)
 - [DocspaceApiJavascript.CreateWebhooksConfigRequestsDto](docs/CreateWebhooksConfigRequestsDto.md)
 - [DocspaceApiJavascript.Cron](docs/Cron.md)
 - [DocspaceApiJavascript.CronParams](docs/CronParams.md)
 - [DocspaceApiJavascript.CspDto](docs/CspDto.md)
 - [DocspaceApiJavascript.CspRequestsDto](docs/CspRequestsDto.md)
 - [DocspaceApiJavascript.CspWrapper](docs/CspWrapper.md)
 - [DocspaceApiJavascript.Culture](docs/Culture.md)
 - [DocspaceApiJavascript.CultureSpecificExternalResource](docs/CultureSpecificExternalResource.md)
 - [DocspaceApiJavascript.CultureSpecificExternalResources](docs/CultureSpecificExternalResources.md)
 - [DocspaceApiJavascript.CurrenciesArrayWrapper](docs/CurrenciesArrayWrapper.md)
 - [DocspaceApiJavascript.CurrenciesDto](docs/CurrenciesDto.md)
 - [DocspaceApiJavascript.CurrentLicenseInfo](docs/CurrentLicenseInfo.md)
 - [DocspaceApiJavascript.CustomColorThemesSettingsColorItem](docs/CustomColorThemesSettingsColorItem.md)
 - [DocspaceApiJavascript.CustomColorThemesSettingsDto](docs/CustomColorThemesSettingsDto.md)
 - [DocspaceApiJavascript.CustomColorThemesSettingsItem](docs/CustomColorThemesSettingsItem.md)
 - [DocspaceApiJavascript.CustomColorThemesSettingsRequestsDto](docs/CustomColorThemesSettingsRequestsDto.md)
 - [DocspaceApiJavascript.CustomColorThemesSettingsWrapper](docs/CustomColorThemesSettingsWrapper.md)
 - [DocspaceApiJavascript.CustomFilterParameters](docs/CustomFilterParameters.md)
 - [DocspaceApiJavascript.CustomNavigationItem](docs/CustomNavigationItem.md)
 - [DocspaceApiJavascript.CustomNavigationItemArrayWrapper](docs/CustomNavigationItemArrayWrapper.md)
 - [DocspaceApiJavascript.CustomNavigationItemWrapper](docs/CustomNavigationItemWrapper.md)
 - [DocspaceApiJavascript.CustomerConfigDto](docs/CustomerConfigDto.md)
 - [DocspaceApiJavascript.CustomerInfoDto](docs/CustomerInfoDto.md)
 - [DocspaceApiJavascript.CustomerInfoWrapper](docs/CustomerInfoWrapper.md)
 - [DocspaceApiJavascript.CustomerOperationsReportRequestDto](docs/CustomerOperationsReportRequestDto.md)
 - [DocspaceApiJavascript.CustomizationConfigDto](docs/CustomizationConfigDto.md)
 - [DocspaceApiJavascript.DarkThemeSettings](docs/DarkThemeSettings.md)
 - [DocspaceApiJavascript.DarkThemeSettingsRequestDto](docs/DarkThemeSettingsRequestDto.md)
 - [DocspaceApiJavascript.DarkThemeSettingsType](docs/DarkThemeSettingsType.md)
 - [DocspaceApiJavascript.DarkThemeSettingsWrapper](docs/DarkThemeSettingsWrapper.md)
 - [DocspaceApiJavascript.DateToAutoCleanUp](docs/DateToAutoCleanUp.md)
 - [DocspaceApiJavascript.DbTenant](docs/DbTenant.md)
 - [DocspaceApiJavascript.DbTenantPartner](docs/DbTenantPartner.md)
 - [DocspaceApiJavascript.DeepLinkConfigurationRequestsDto](docs/DeepLinkConfigurationRequestsDto.md)
 - [DocspaceApiJavascript.DeepLinkDto](docs/DeepLinkDto.md)
 - [DocspaceApiJavascript.DeepLinkHandlingMode](docs/DeepLinkHandlingMode.md)
 - [DocspaceApiJavascript.Delete](docs/Delete.md)
 - [DocspaceApiJavascript.DeleteBatchRequestDto](docs/DeleteBatchRequestDto.md)
 - [DocspaceApiJavascript.DeleteFolder](docs/DeleteFolder.md)
 - [DocspaceApiJavascript.DeleteRoomRequest](docs/DeleteRoomRequest.md)
 - [DocspaceApiJavascript.DeleteVersionBatchRequestDto](docs/DeleteVersionBatchRequestDto.md)
 - [DocspaceApiJavascript.DisplayRequestDto](docs/DisplayRequestDto.md)
 - [DocspaceApiJavascript.DistributedTaskStatus](docs/DistributedTaskStatus.md)
 - [DocspaceApiJavascript.DnsSettingsRequestsDto](docs/DnsSettingsRequestsDto.md)
 - [DocspaceApiJavascript.DocServiceUrlDto](docs/DocServiceUrlDto.md)
 - [DocspaceApiJavascript.DocServiceUrlWrapper](docs/DocServiceUrlWrapper.md)
 - [DocspaceApiJavascript.DocumentBuilderTaskDto](docs/DocumentBuilderTaskDto.md)
 - [DocspaceApiJavascript.DocumentBuilderTaskWrapper](docs/DocumentBuilderTaskWrapper.md)
 - [DocspaceApiJavascript.DocumentConfigDto](docs/DocumentConfigDto.md)
 - [DocspaceApiJavascript.DoubleWrapper](docs/DoubleWrapper.md)
 - [DocspaceApiJavascript.DownloadRequestDto](docs/DownloadRequestDto.md)
 - [DocspaceApiJavascript.DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [DocspaceApiJavascript.DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [DocspaceApiJavascript.DraftLocationInteger](docs/DraftLocationInteger.md)
 - [DocspaceApiJavascript.DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [DocspaceApiJavascript.EditHistoryArrayWrapper](docs/EditHistoryArrayWrapper.md)
 - [DocspaceApiJavascript.EditHistoryAuthor](docs/EditHistoryAuthor.md)
 - [DocspaceApiJavascript.EditHistoryChangesWrapper](docs/EditHistoryChangesWrapper.md)
 - [DocspaceApiJavascript.EditHistoryDataDto](docs/EditHistoryDataDto.md)
 - [DocspaceApiJavascript.EditHistoryDataWrapper](docs/EditHistoryDataWrapper.md)
 - [DocspaceApiJavascript.EditHistoryDto](docs/EditHistoryDto.md)
 - [DocspaceApiJavascript.EditHistoryUrl](docs/EditHistoryUrl.md)
 - [DocspaceApiJavascript.EditorConfigurationDto](docs/EditorConfigurationDto.md)
 - [DocspaceApiJavascript.EditorType](docs/EditorType.md)
 - [DocspaceApiJavascript.EmailActivationSettings](docs/EmailActivationSettings.md)
 - [DocspaceApiJavascript.EmailActivationSettingsWrapper](docs/EmailActivationSettingsWrapper.md)
 - [DocspaceApiJavascript.EmailMemberRequestDto](docs/EmailMemberRequestDto.md)
 - [DocspaceApiJavascript.EmailValidationKeyModel](docs/EmailValidationKeyModel.md)
 - [DocspaceApiJavascript.EmbeddedConfig](docs/EmbeddedConfig.md)
 - [DocspaceApiJavascript.EmployeeActivationStatus](docs/EmployeeActivationStatus.md)
 - [DocspaceApiJavascript.EmployeeArrayWrapper](docs/EmployeeArrayWrapper.md)
 - [DocspaceApiJavascript.EmployeeDto](docs/EmployeeDto.md)
 - [DocspaceApiJavascript.EmployeeFullArrayWrapper](docs/EmployeeFullArrayWrapper.md)
 - [DocspaceApiJavascript.EmployeeFullDto](docs/EmployeeFullDto.md)
 - [DocspaceApiJavascript.EmployeeFullWrapper](docs/EmployeeFullWrapper.md)
 - [DocspaceApiJavascript.EmployeeStatus](docs/EmployeeStatus.md)
 - [DocspaceApiJavascript.EmployeeType](docs/EmployeeType.md)
 - [DocspaceApiJavascript.EncryprtionStatus](docs/EncryprtionStatus.md)
 - [DocspaceApiJavascript.EncryptionKeysConfig](docs/EncryptionKeysConfig.md)
 - [DocspaceApiJavascript.EncryptionSettings](docs/EncryptionSettings.md)
 - [DocspaceApiJavascript.EncryptionSettingsWrapper](docs/EncryptionSettingsWrapper.md)
 - [DocspaceApiJavascript.EntryType](docs/EntryType.md)
 - [DocspaceApiJavascript.ErrorResponse](docs/ErrorResponse.md)
 - [DocspaceApiJavascript.ExchangeToken200Response](docs/ExchangeToken200Response.md)
 - [DocspaceApiJavascript.ExternalShareDto](docs/ExternalShareDto.md)
 - [DocspaceApiJavascript.ExternalShareRequestParam](docs/ExternalShareRequestParam.md)
 - [DocspaceApiJavascript.ExternalShareWrapper](docs/ExternalShareWrapper.md)
 - [DocspaceApiJavascript.FeatureUsedDto](docs/FeatureUsedDto.md)
 - [DocspaceApiJavascript.FeedbackConfig](docs/FeedbackConfig.md)
 - [DocspaceApiJavascript.FileConflictResolveType](docs/FileConflictResolveType.md)
 - [DocspaceApiJavascript.FileDtoInteger](docs/FileDtoInteger.md)
 - [DocspaceApiJavascript.FileDtoIntegerSecurity](docs/FileDtoIntegerSecurity.md)
 - [DocspaceApiJavascript.FileDtoIntegerViewAccessibility](docs/FileDtoIntegerViewAccessibility.md)
 - [DocspaceApiJavascript.FileEntryArrayWrapper](docs/FileEntryArrayWrapper.md)
 - [DocspaceApiJavascript.FileEntryDto](docs/FileEntryDto.md)
 - [DocspaceApiJavascript.FileEntryType](docs/FileEntryType.md)
 - [DocspaceApiJavascript.FileEntryWrapper](docs/FileEntryWrapper.md)
 - [DocspaceApiJavascript.FileIntegerArrayWrapper](docs/FileIntegerArrayWrapper.md)
 - [DocspaceApiJavascript.FileIntegerWrapper](docs/FileIntegerWrapper.md)
 - [DocspaceApiJavascript.FileLink](docs/FileLink.md)
 - [DocspaceApiJavascript.FileLinkRequest](docs/FileLinkRequest.md)
 - [DocspaceApiJavascript.FileLinkWrapper](docs/FileLinkWrapper.md)
 - [DocspaceApiJavascript.FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [DocspaceApiJavascript.FileOperationDto](docs/FileOperationDto.md)
 - [DocspaceApiJavascript.FileOperationType](docs/FileOperationType.md)
 - [DocspaceApiJavascript.FileOperationWrapper](docs/FileOperationWrapper.md)
 - [DocspaceApiJavascript.FileReference](docs/FileReference.md)
 - [DocspaceApiJavascript.FileReferenceData](docs/FileReferenceData.md)
 - [DocspaceApiJavascript.FileReferenceWrapper](docs/FileReferenceWrapper.md)
 - [DocspaceApiJavascript.FileShare](docs/FileShare.md)
 - [DocspaceApiJavascript.FileShareArrayWrapper](docs/FileShareArrayWrapper.md)
 - [DocspaceApiJavascript.FileShareDto](docs/FileShareDto.md)
 - [DocspaceApiJavascript.FileShareParams](docs/FileShareParams.md)
 - [DocspaceApiJavascript.FileShareWrapper](docs/FileShareWrapper.md)
 - [DocspaceApiJavascript.FileStatus](docs/FileStatus.md)
 - [DocspaceApiJavascript.FileType](docs/FileType.md)
 - [DocspaceApiJavascript.FileUploadResultDto](docs/FileUploadResultDto.md)
 - [DocspaceApiJavascript.FileUploadResultWrapper](docs/FileUploadResultWrapper.md)
 - [DocspaceApiJavascript.FilesSettingsDto](docs/FilesSettingsDto.md)
 - [DocspaceApiJavascript.FilesSettingsDtoInternalFormats](docs/FilesSettingsDtoInternalFormats.md)
 - [DocspaceApiJavascript.FilesSettingsWrapper](docs/FilesSettingsWrapper.md)
 - [DocspaceApiJavascript.FilesStatisticsFolder](docs/FilesStatisticsFolder.md)
 - [DocspaceApiJavascript.FilesStatisticsResultDto](docs/FilesStatisticsResultDto.md)
 - [DocspaceApiJavascript.FilesStatisticsResultWrapper](docs/FilesStatisticsResultWrapper.md)
 - [DocspaceApiJavascript.FillingFormResultDtoInteger](docs/FillingFormResultDtoInteger.md)
 - [DocspaceApiJavascript.FillingFormResultIntegerWrapper](docs/FillingFormResultIntegerWrapper.md)
 - [DocspaceApiJavascript.FilterType](docs/FilterType.md)
 - [DocspaceApiJavascript.FinishDto](docs/FinishDto.md)
 - [DocspaceApiJavascript.FireBaseUser](docs/FireBaseUser.md)
 - [DocspaceApiJavascript.FireBaseUserWrapper](docs/FireBaseUserWrapper.md)
 - [DocspaceApiJavascript.FirebaseDto](docs/FirebaseDto.md)
 - [DocspaceApiJavascript.FirebaseRequestsDto](docs/FirebaseRequestsDto.md)
 - [DocspaceApiJavascript.FolderContentDtoInteger](docs/FolderContentDtoInteger.md)
 - [DocspaceApiJavascript.FolderContentIntegerArrayWrapper](docs/FolderContentIntegerArrayWrapper.md)
 - [DocspaceApiJavascript.FolderContentIntegerWrapper](docs/FolderContentIntegerWrapper.md)
 - [DocspaceApiJavascript.FolderDtoInteger](docs/FolderDtoInteger.md)
 - [DocspaceApiJavascript.FolderDtoString](docs/FolderDtoString.md)
 - [DocspaceApiJavascript.FolderIntegerArrayWrapper](docs/FolderIntegerArrayWrapper.md)
 - [DocspaceApiJavascript.FolderIntegerWrapper](docs/FolderIntegerWrapper.md)
 - [DocspaceApiJavascript.FolderStringArrayWrapper](docs/FolderStringArrayWrapper.md)
 - [DocspaceApiJavascript.FolderStringWrapper](docs/FolderStringWrapper.md)
 - [DocspaceApiJavascript.FolderType](docs/FolderType.md)
 - [DocspaceApiJavascript.FormFillingManageAction](docs/FormFillingManageAction.md)
 - [DocspaceApiJavascript.FormFillingStatus](docs/FormFillingStatus.md)
 - [DocspaceApiJavascript.FormGalleryDto](docs/FormGalleryDto.md)
 - [DocspaceApiJavascript.FormRole](docs/FormRole.md)
 - [DocspaceApiJavascript.FormRoleArrayWrapper](docs/FormRoleArrayWrapper.md)
 - [DocspaceApiJavascript.FormRoleWrapper](docs/FormRoleWrapper.md)
 - [DocspaceApiJavascript.FormsItemArrayWrapper](docs/FormsItemArrayWrapper.md)
 - [DocspaceApiJavascript.FormsItemDto](docs/FormsItemDto.md)
 - [DocspaceApiJavascript.GetReferenceDataDtoInteger](docs/GetReferenceDataDtoInteger.md)
 - [DocspaceApiJavascript.GobackConfig](docs/GobackConfig.md)
 - [DocspaceApiJavascript.GreetingSettingsRequestsDto](docs/GreetingSettingsRequestsDto.md)
 - [DocspaceApiJavascript.GroupArrayWrapper](docs/GroupArrayWrapper.md)
 - [DocspaceApiJavascript.GroupDto](docs/GroupDto.md)
 - [DocspaceApiJavascript.GroupRequestDto](docs/GroupRequestDto.md)
 - [DocspaceApiJavascript.GroupSummaryArrayWrapper](docs/GroupSummaryArrayWrapper.md)
 - [DocspaceApiJavascript.GroupSummaryDto](docs/GroupSummaryDto.md)
 - [DocspaceApiJavascript.GroupWrapper](docs/GroupWrapper.md)
 - [DocspaceApiJavascript.HideConfirmConvertRequestDto](docs/HideConfirmConvertRequestDto.md)
 - [DocspaceApiJavascript.HistoryAction](docs/HistoryAction.md)
 - [DocspaceApiJavascript.HistoryArrayWrapper](docs/HistoryArrayWrapper.md)
 - [DocspaceApiJavascript.HistoryData](docs/HistoryData.md)
 - [DocspaceApiJavascript.HistoryDto](docs/HistoryDto.md)
 - [DocspaceApiJavascript.ICompressWrapper](docs/ICompressWrapper.md)
 - [DocspaceApiJavascript.IMagickGeometry](docs/IMagickGeometry.md)
 - [DocspaceApiJavascript.IPRestriction](docs/IPRestriction.md)
 - [DocspaceApiJavascript.IPRestrictionArrayWrapper](docs/IPRestrictionArrayWrapper.md)
 - [DocspaceApiJavascript.IPRestrictionsSettings](docs/IPRestrictionsSettings.md)
 - [DocspaceApiJavascript.IPRestrictionsSettingsWrapper](docs/IPRestrictionsSettingsWrapper.md)
 - [DocspaceApiJavascript.InfoConfigDto](docs/InfoConfigDto.md)
 - [DocspaceApiJavascript.Int64Wrapper](docs/Int64Wrapper.md)
 - [DocspaceApiJavascript.InviteUsersRequestDto](docs/InviteUsersRequestDto.md)
 - [DocspaceApiJavascript.IpRestrictionBase](docs/IpRestrictionBase.md)
 - [DocspaceApiJavascript.IpRestrictionsDto](docs/IpRestrictionsDto.md)
 - [DocspaceApiJavascript.IpRestrictionsWrapper](docs/IpRestrictionsWrapper.md)
 - [DocspaceApiJavascript.IsDefaultWhiteLabelLogosArrayWrapper](docs/IsDefaultWhiteLabelLogosArrayWrapper.md)
 - [DocspaceApiJavascript.IsDefaultWhiteLabelLogosDto](docs/IsDefaultWhiteLabelLogosDto.md)
 - [DocspaceApiJavascript.IsDefaultWhiteLabelLogosWrapper](docs/IsDefaultWhiteLabelLogosWrapper.md)
 - [DocspaceApiJavascript.ItemKeyValuePairObjectObject](docs/ItemKeyValuePairObjectObject.md)
 - [DocspaceApiJavascript.ItemKeyValuePairStringBoolean](docs/ItemKeyValuePairStringBoolean.md)
 - [DocspaceApiJavascript.ItemKeyValuePairStringLogoRequestsDto](docs/ItemKeyValuePairStringLogoRequestsDto.md)
 - [DocspaceApiJavascript.ItemKeyValuePairStringString](docs/ItemKeyValuePairStringString.md)
 - [DocspaceApiJavascript.KeyValuePairBooleanString](docs/KeyValuePairBooleanString.md)
 - [DocspaceApiJavascript.KeyValuePairBooleanStringWrapper](docs/KeyValuePairBooleanStringWrapper.md)
 - [DocspaceApiJavascript.KeyValuePairStringStringValues](docs/KeyValuePairStringStringValues.md)
 - [DocspaceApiJavascript.LinkAccountRequestDto](docs/LinkAccountRequestDto.md)
 - [DocspaceApiJavascript.LinkType](docs/LinkType.md)
 - [DocspaceApiJavascript.LockFileParameters](docs/LockFileParameters.md)
 - [DocspaceApiJavascript.LoginEventArrayWrapper](docs/LoginEventArrayWrapper.md)
 - [DocspaceApiJavascript.LoginEventDto](docs/LoginEventDto.md)
 - [DocspaceApiJavascript.LoginProvider](docs/LoginProvider.md)
 - [DocspaceApiJavascript.LoginSettingsDto](docs/LoginSettingsDto.md)
 - [DocspaceApiJavascript.LoginSettingsRequestDto](docs/LoginSettingsRequestDto.md)
 - [DocspaceApiJavascript.LoginSettingsWrapper](docs/LoginSettingsWrapper.md)
 - [DocspaceApiJavascript.Logo](docs/Logo.md)
 - [DocspaceApiJavascript.LogoConfigDto](docs/LogoConfigDto.md)
 - [DocspaceApiJavascript.LogoCover](docs/LogoCover.md)
 - [DocspaceApiJavascript.LogoRequest](docs/LogoRequest.md)
 - [DocspaceApiJavascript.LogoRequestsDto](docs/LogoRequestsDto.md)
 - [DocspaceApiJavascript.MailDomainSettingsRequestsDto](docs/MailDomainSettingsRequestsDto.md)
 - [DocspaceApiJavascript.ManageFormFillingDtoInteger](docs/ManageFormFillingDtoInteger.md)
 - [DocspaceApiJavascript.MemberBaseRequestDto](docs/MemberBaseRequestDto.md)
 - [DocspaceApiJavascript.MemberRequestDto](docs/MemberRequestDto.md)
 - [DocspaceApiJavascript.MembersRequest](docs/MembersRequest.md)
 - [DocspaceApiJavascript.MentionMessageWrapper](docs/MentionMessageWrapper.md)
 - [DocspaceApiJavascript.MentionWrapper](docs/MentionWrapper.md)
 - [DocspaceApiJavascript.MentionWrapperArrayWrapper](docs/MentionWrapperArrayWrapper.md)
 - [DocspaceApiJavascript.MessageAction](docs/MessageAction.md)
 - [DocspaceApiJavascript.MigratingApiFiles](docs/MigratingApiFiles.md)
 - [DocspaceApiJavascript.MigratingApiGroup](docs/MigratingApiGroup.md)
 - [DocspaceApiJavascript.MigratingApiUser](docs/MigratingApiUser.md)
 - [DocspaceApiJavascript.MigrationApiInfo](docs/MigrationApiInfo.md)
 - [DocspaceApiJavascript.MigrationStatusDto](docs/MigrationStatusDto.md)
 - [DocspaceApiJavascript.MigrationStatusWrapper](docs/MigrationStatusWrapper.md)
 - [DocspaceApiJavascript.MobilePhoneActivationStatus](docs/MobilePhoneActivationStatus.md)
 - [DocspaceApiJavascript.MobileRequestsDto](docs/MobileRequestsDto.md)
 - [DocspaceApiJavascript.Module](docs/Module.md)
 - [DocspaceApiJavascript.ModuleType](docs/ModuleType.md)
 - [DocspaceApiJavascript.ModuleWrapper](docs/ModuleWrapper.md)
 - [DocspaceApiJavascript.NewItemsDtoFileEntryDto](docs/NewItemsDtoFileEntryDto.md)
 - [DocspaceApiJavascript.NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [DocspaceApiJavascript.NewItemsFileEntryArrayWrapper](docs/NewItemsFileEntryArrayWrapper.md)
 - [DocspaceApiJavascript.NewItemsRoomNewItemsArrayWrapper](docs/NewItemsRoomNewItemsArrayWrapper.md)
 - [DocspaceApiJavascript.NoContentResult](docs/NoContentResult.md)
 - [DocspaceApiJavascript.NoContentResultWrapper](docs/NoContentResultWrapper.md)
 - [DocspaceApiJavascript.NotificationSettingsDto](docs/NotificationSettingsDto.md)
 - [DocspaceApiJavascript.NotificationSettingsRequestsDto](docs/NotificationSettingsRequestsDto.md)
 - [DocspaceApiJavascript.NotificationSettingsWrapper](docs/NotificationSettingsWrapper.md)
 - [DocspaceApiJavascript.NotificationType](docs/NotificationType.md)
 - [DocspaceApiJavascript.OAuth20Token](docs/OAuth20Token.md)
 - [DocspaceApiJavascript.ObjectArrayWrapper](docs/ObjectArrayWrapper.md)
 - [DocspaceApiJavascript.ObjectWrapper](docs/ObjectWrapper.md)
 - [DocspaceApiJavascript.OperationDto](docs/OperationDto.md)
 - [DocspaceApiJavascript.Options](docs/Options.md)
 - [DocspaceApiJavascript.OrderBy](docs/OrderBy.md)
 - [DocspaceApiJavascript.OrderRequestDto](docs/OrderRequestDto.md)
 - [DocspaceApiJavascript.OrdersItemRequestDtoInteger](docs/OrdersItemRequestDtoInteger.md)
 - [DocspaceApiJavascript.OrdersRequestDtoInteger](docs/OrdersRequestDtoInteger.md)
 - [DocspaceApiJavascript.OwnerChangeInstructionsDto](docs/OwnerChangeInstructionsDto.md)
 - [DocspaceApiJavascript.OwnerChangeInstructionsWrapper](docs/OwnerChangeInstructionsWrapper.md)
 - [DocspaceApiJavascript.OwnerIdSettingsRequestDto](docs/OwnerIdSettingsRequestDto.md)
 - [DocspaceApiJavascript.PageableModificationResponse](docs/PageableModificationResponse.md)
 - [DocspaceApiJavascript.PageableResponse](docs/PageableResponse.md)
 - [DocspaceApiJavascript.PageableResponseClientInfoResponse](docs/PageableResponseClientInfoResponse.md)
 - [DocspaceApiJavascript.Paragraph](docs/Paragraph.md)
 - [DocspaceApiJavascript.PasswordHasher](docs/PasswordHasher.md)
 - [DocspaceApiJavascript.PasswordSettingsDto](docs/PasswordSettingsDto.md)
 - [DocspaceApiJavascript.PasswordSettingsRequestsDto](docs/PasswordSettingsRequestsDto.md)
 - [DocspaceApiJavascript.PasswordSettingsWrapper](docs/PasswordSettingsWrapper.md)
 - [DocspaceApiJavascript.PaymentCalculation](docs/PaymentCalculation.md)
 - [DocspaceApiJavascript.PaymentCalculationWrapper](docs/PaymentCalculationWrapper.md)
 - [DocspaceApiJavascript.PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [DocspaceApiJavascript.PaymentSettingsDto](docs/PaymentSettingsDto.md)
 - [DocspaceApiJavascript.PaymentSettingsWrapper](docs/PaymentSettingsWrapper.md)
 - [DocspaceApiJavascript.PaymentUrlRequestsDto](docs/PaymentUrlRequestsDto.md)
 - [DocspaceApiJavascript.Payments](docs/Payments.md)
 - [DocspaceApiJavascript.PermissionsConfig](docs/PermissionsConfig.md)
 - [DocspaceApiJavascript.PluginsConfig](docs/PluginsConfig.md)
 - [DocspaceApiJavascript.PluginsDto](docs/PluginsDto.md)
 - [DocspaceApiJavascript.PriceDto](docs/PriceDto.md)
 - [DocspaceApiJavascript.ProductAdministratorDto](docs/ProductAdministratorDto.md)
 - [DocspaceApiJavascript.ProductAdministratorWrapper](docs/ProductAdministratorWrapper.md)
 - [DocspaceApiJavascript.ProductQuantityType](docs/ProductQuantityType.md)
 - [DocspaceApiJavascript.ProductType](docs/ProductType.md)
 - [DocspaceApiJavascript.ProviderArrayWrapper](docs/ProviderArrayWrapper.md)
 - [DocspaceApiJavascript.ProviderDto](docs/ProviderDto.md)
 - [DocspaceApiJavascript.ProviderFilter](docs/ProviderFilter.md)
 - [DocspaceApiJavascript.QuantityRequestDto](docs/QuantityRequestDto.md)
 - [DocspaceApiJavascript.Quota](docs/Quota.md)
 - [DocspaceApiJavascript.QuotaArrayWrapper](docs/QuotaArrayWrapper.md)
 - [DocspaceApiJavascript.QuotaDto](docs/QuotaDto.md)
 - [DocspaceApiJavascript.QuotaFilter](docs/QuotaFilter.md)
 - [DocspaceApiJavascript.QuotaSettingsRequestsDto](docs/QuotaSettingsRequestsDto.md)
 - [DocspaceApiJavascript.QuotaSettingsRequestsDtoDefaultQuota](docs/QuotaSettingsRequestsDtoDefaultQuota.md)
 - [DocspaceApiJavascript.QuotaState](docs/QuotaState.md)
 - [DocspaceApiJavascript.QuotaWrapper](docs/QuotaWrapper.md)
 - [DocspaceApiJavascript.RecaptchaType](docs/RecaptchaType.md)
 - [DocspaceApiJavascript.RecentConfig](docs/RecentConfig.md)
 - [DocspaceApiJavascript.ReportDto](docs/ReportDto.md)
 - [DocspaceApiJavascript.ReportWrapper](docs/ReportWrapper.md)
 - [DocspaceApiJavascript.ReviewConfig](docs/ReviewConfig.md)
 - [DocspaceApiJavascript.RoomDataLifetimeDto](docs/RoomDataLifetimeDto.md)
 - [DocspaceApiJavascript.RoomDataLifetimePeriod](docs/RoomDataLifetimePeriod.md)
 - [DocspaceApiJavascript.RoomFromTemplateStatusDto](docs/RoomFromTemplateStatusDto.md)
 - [DocspaceApiJavascript.RoomFromTemplateStatusWrapper](docs/RoomFromTemplateStatusWrapper.md)
 - [DocspaceApiJavascript.RoomInvitation](docs/RoomInvitation.md)
 - [DocspaceApiJavascript.RoomInvitationRequest](docs/RoomInvitationRequest.md)
 - [DocspaceApiJavascript.RoomLinkRequest](docs/RoomLinkRequest.md)
 - [DocspaceApiJavascript.RoomNewItemsDto](docs/RoomNewItemsDto.md)
 - [DocspaceApiJavascript.RoomSecurityDto](docs/RoomSecurityDto.md)
 - [DocspaceApiJavascript.RoomSecurityError](docs/RoomSecurityError.md)
 - [DocspaceApiJavascript.RoomSecurityWrapper](docs/RoomSecurityWrapper.md)
 - [DocspaceApiJavascript.RoomTemplateDto](docs/RoomTemplateDto.md)
 - [DocspaceApiJavascript.RoomTemplateStatusDto](docs/RoomTemplateStatusDto.md)
 - [DocspaceApiJavascript.RoomTemplateStatusWrapper](docs/RoomTemplateStatusWrapper.md)
 - [DocspaceApiJavascript.RoomType](docs/RoomType.md)
 - [DocspaceApiJavascript.RoomsNotificationSettingsDto](docs/RoomsNotificationSettingsDto.md)
 - [DocspaceApiJavascript.RoomsNotificationSettingsWrapper](docs/RoomsNotificationSettingsWrapper.md)
 - [DocspaceApiJavascript.RoomsNotificationsSettingsRequestDto](docs/RoomsNotificationsSettingsRequestDto.md)
 - [DocspaceApiJavascript.Run](docs/Run.md)
 - [DocspaceApiJavascript.STRINGArrayWrapper](docs/STRINGArrayWrapper.md)
 - [DocspaceApiJavascript.SalesRequestsDto](docs/SalesRequestsDto.md)
 - [DocspaceApiJavascript.SaveAsPdfInteger](docs/SaveAsPdfInteger.md)
 - [DocspaceApiJavascript.SaveFormRoleMappingDtoInteger](docs/SaveFormRoleMappingDtoInteger.md)
 - [DocspaceApiJavascript.Schedule](docs/Schedule.md)
 - [DocspaceApiJavascript.ScheduleWrapper](docs/ScheduleWrapper.md)
 - [DocspaceApiJavascript.ScopeResponse](docs/ScopeResponse.md)
 - [DocspaceApiJavascript.SearchArea](docs/SearchArea.md)
 - [DocspaceApiJavascript.SecurityArrayWrapper](docs/SecurityArrayWrapper.md)
 - [DocspaceApiJavascript.SecurityDto](docs/SecurityDto.md)
 - [DocspaceApiJavascript.SecurityRequestsDto](docs/SecurityRequestsDto.md)
 - [DocspaceApiJavascript.SessionRequest](docs/SessionRequest.md)
 - [DocspaceApiJavascript.SetManagerRequest](docs/SetManagerRequest.md)
 - [DocspaceApiJavascript.SetPublicDto](docs/SetPublicDto.md)
 - [DocspaceApiJavascript.SettingsDto](docs/SettingsDto.md)
 - [DocspaceApiJavascript.SettingsRequestDto](docs/SettingsRequestDto.md)
 - [DocspaceApiJavascript.SettingsWrapper](docs/SettingsWrapper.md)
 - [DocspaceApiJavascript.SetupCode](docs/SetupCode.md)
 - [DocspaceApiJavascript.SetupCodeWrapper](docs/SetupCodeWrapper.md)
 - [DocspaceApiJavascript.SexEnum](docs/SexEnum.md)
 - [DocspaceApiJavascript.ShareFilterType](docs/ShareFilterType.md)
 - [DocspaceApiJavascript.SignupAccountRequestDto](docs/SignupAccountRequestDto.md)
 - [DocspaceApiJavascript.SmtpOperationStatusRequestsDto](docs/SmtpOperationStatusRequestsDto.md)
 - [DocspaceApiJavascript.SmtpOperationStatusRequestsWrapper](docs/SmtpOperationStatusRequestsWrapper.md)
 - [DocspaceApiJavascript.SmtpSettingsDto](docs/SmtpSettingsDto.md)
 - [DocspaceApiJavascript.SmtpSettingsWrapper](docs/SmtpSettingsWrapper.md)
 - [DocspaceApiJavascript.SortOrder](docs/SortOrder.md)
 - [DocspaceApiJavascript.SortedByType](docs/SortedByType.md)
 - [DocspaceApiJavascript.SsoCertificate](docs/SsoCertificate.md)
 - [DocspaceApiJavascript.SsoFieldMapping](docs/SsoFieldMapping.md)
 - [DocspaceApiJavascript.SsoIdpCertificateAdvanced](docs/SsoIdpCertificateAdvanced.md)
 - [DocspaceApiJavascript.SsoIdpSettings](docs/SsoIdpSettings.md)
 - [DocspaceApiJavascript.SsoSettingsRequestsDto](docs/SsoSettingsRequestsDto.md)
 - [DocspaceApiJavascript.SsoSettingsV2](docs/SsoSettingsV2.md)
 - [DocspaceApiJavascript.SsoSettingsV2Wrapper](docs/SsoSettingsV2Wrapper.md)
 - [DocspaceApiJavascript.SsoSpCertificateAdvanced](docs/SsoSpCertificateAdvanced.md)
 - [DocspaceApiJavascript.StartEdit](docs/StartEdit.md)
 - [DocspaceApiJavascript.StartFillingForm](docs/StartFillingForm.md)
 - [DocspaceApiJavascript.StartFillingMode](docs/StartFillingMode.md)
 - [DocspaceApiJavascript.StartReassignRequestDto](docs/StartReassignRequestDto.md)
 - [DocspaceApiJavascript.StartUpdateUserTypeDto](docs/StartUpdateUserTypeDto.md)
 - [DocspaceApiJavascript.Status](docs/Status.md)
 - [DocspaceApiJavascript.StorageArrayWrapper](docs/StorageArrayWrapper.md)
 - [DocspaceApiJavascript.StorageDto](docs/StorageDto.md)
 - [DocspaceApiJavascript.StorageEncryptionRequestsDto](docs/StorageEncryptionRequestsDto.md)
 - [DocspaceApiJavascript.StorageFilter](docs/StorageFilter.md)
 - [DocspaceApiJavascript.StorageRequestsDto](docs/StorageRequestsDto.md)
 - [DocspaceApiJavascript.StorageSettings](docs/StorageSettings.md)
 - [DocspaceApiJavascript.StorageSettingsWrapper](docs/StorageSettingsWrapper.md)
 - [DocspaceApiJavascript.StringWrapper](docs/StringWrapper.md)
 - [DocspaceApiJavascript.SubAccount](docs/SubAccount.md)
 - [DocspaceApiJavascript.SubjectFilter](docs/SubjectFilter.md)
 - [DocspaceApiJavascript.SubjectType](docs/SubjectType.md)
 - [DocspaceApiJavascript.SubmitForm](docs/SubmitForm.md)
 - [DocspaceApiJavascript.Tariff](docs/Tariff.md)
 - [DocspaceApiJavascript.TariffState](docs/TariffState.md)
 - [DocspaceApiJavascript.TariffWrapper](docs/TariffWrapper.md)
 - [DocspaceApiJavascript.TaskProgressResponseDto](docs/TaskProgressResponseDto.md)
 - [DocspaceApiJavascript.TaskProgressResponseWrapper](docs/TaskProgressResponseWrapper.md)
 - [DocspaceApiJavascript.TemplatesConfig](docs/TemplatesConfig.md)
 - [DocspaceApiJavascript.TemplatesRequestDto](docs/TemplatesRequestDto.md)
 - [DocspaceApiJavascript.TenantAuditSettings](docs/TenantAuditSettings.md)
 - [DocspaceApiJavascript.TenantAuditSettingsWrapper](docs/TenantAuditSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantBannerSettings](docs/TenantBannerSettings.md)
 - [DocspaceApiJavascript.TenantBannerSettingsDto](docs/TenantBannerSettingsDto.md)
 - [DocspaceApiJavascript.TenantBannerSettingsWrapper](docs/TenantBannerSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantDeepLinkSettings](docs/TenantDeepLinkSettings.md)
 - [DocspaceApiJavascript.TenantDeepLinkSettingsWrapper](docs/TenantDeepLinkSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantDevToolsAccessSettings](docs/TenantDevToolsAccessSettings.md)
 - [DocspaceApiJavascript.TenantDevToolsAccessSettingsDto](docs/TenantDevToolsAccessSettingsDto.md)
 - [DocspaceApiJavascript.TenantDevToolsAccessSettingsWrapper](docs/TenantDevToolsAccessSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantDomainValidator](docs/TenantDomainValidator.md)
 - [DocspaceApiJavascript.TenantDto](docs/TenantDto.md)
 - [DocspaceApiJavascript.TenantEntityQuotaSettings](docs/TenantEntityQuotaSettings.md)
 - [DocspaceApiJavascript.TenantIndustry](docs/TenantIndustry.md)
 - [DocspaceApiJavascript.TenantQuota](docs/TenantQuota.md)
 - [DocspaceApiJavascript.TenantQuotaFeatureDto](docs/TenantQuotaFeatureDto.md)
 - [DocspaceApiJavascript.TenantQuotaSettings](docs/TenantQuotaSettings.md)
 - [DocspaceApiJavascript.TenantQuotaSettingsRequestsDto](docs/TenantQuotaSettingsRequestsDto.md)
 - [DocspaceApiJavascript.TenantQuotaSettingsWrapper](docs/TenantQuotaSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantQuotaWrapper](docs/TenantQuotaWrapper.md)
 - [DocspaceApiJavascript.TenantRoomQuotaSettings](docs/TenantRoomQuotaSettings.md)
 - [DocspaceApiJavascript.TenantRoomQuotaSettingsWrapper](docs/TenantRoomQuotaSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantStatus](docs/TenantStatus.md)
 - [DocspaceApiJavascript.TenantTrustedDomainsType](docs/TenantTrustedDomainsType.md)
 - [DocspaceApiJavascript.TenantUserInvitationSettingsDto](docs/TenantUserInvitationSettingsDto.md)
 - [DocspaceApiJavascript.TenantUserInvitationSettingsRequestDto](docs/TenantUserInvitationSettingsRequestDto.md)
 - [DocspaceApiJavascript.TenantUserInvitationSettingsWrapper](docs/TenantUserInvitationSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantUserQuotaSettings](docs/TenantUserQuotaSettings.md)
 - [DocspaceApiJavascript.TenantUserQuotaSettingsWrapper](docs/TenantUserQuotaSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantWalletSettings](docs/TenantWalletSettings.md)
 - [DocspaceApiJavascript.TenantWalletSettingsWrapper](docs/TenantWalletSettingsWrapper.md)
 - [DocspaceApiJavascript.TenantWrapper](docs/TenantWrapper.md)
 - [DocspaceApiJavascript.TerminateRequestDto](docs/TerminateRequestDto.md)
 - [DocspaceApiJavascript.TfaRequestsDto](docs/TfaRequestsDto.md)
 - [DocspaceApiJavascript.TfaRequestsDtoType](docs/TfaRequestsDtoType.md)
 - [DocspaceApiJavascript.TfaSettingsArrayWrapper](docs/TfaSettingsArrayWrapper.md)
 - [DocspaceApiJavascript.TfaSettingsDto](docs/TfaSettingsDto.md)
 - [DocspaceApiJavascript.TfaValidateRequestsDto](docs/TfaValidateRequestsDto.md)
 - [DocspaceApiJavascript.ThirdPartyBackupRequestDto](docs/ThirdPartyBackupRequestDto.md)
 - [DocspaceApiJavascript.ThirdPartyParams](docs/ThirdPartyParams.md)
 - [DocspaceApiJavascript.ThirdPartyParamsArrayWrapper](docs/ThirdPartyParamsArrayWrapper.md)
 - [DocspaceApiJavascript.ThirdPartyRequestDto](docs/ThirdPartyRequestDto.md)
 - [DocspaceApiJavascript.Thumbnail](docs/Thumbnail.md)
 - [DocspaceApiJavascript.ThumbnailsDataDto](docs/ThumbnailsDataDto.md)
 - [DocspaceApiJavascript.ThumbnailsDataWrapper](docs/ThumbnailsDataWrapper.md)
 - [DocspaceApiJavascript.ThumbnailsRequest](docs/ThumbnailsRequest.md)
 - [DocspaceApiJavascript.TimezonesRequestsArrayWrapper](docs/TimezonesRequestsArrayWrapper.md)
 - [DocspaceApiJavascript.TimezonesRequestsDto](docs/TimezonesRequestsDto.md)
 - [DocspaceApiJavascript.TopUpDepositRequestDto](docs/TopUpDepositRequestDto.md)
 - [DocspaceApiJavascript.TurnOnAdminMessageSettingsRequestDto](docs/TurnOnAdminMessageSettingsRequestDto.md)
 - [DocspaceApiJavascript.UnknownWrapper](docs/UnknownWrapper.md)
 - [DocspaceApiJavascript.UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [DocspaceApiJavascript.UpdateClientRequest](docs/UpdateClientRequest.md)
 - [DocspaceApiJavascript.UpdateComment](docs/UpdateComment.md)
 - [DocspaceApiJavascript.UpdateFile](docs/UpdateFile.md)
 - [DocspaceApiJavascript.UpdateGroupRequest](docs/UpdateGroupRequest.md)
 - [DocspaceApiJavascript.UpdateMemberRequestDto](docs/UpdateMemberRequestDto.md)
 - [DocspaceApiJavascript.UpdateMembersQuotaRequestDto](docs/UpdateMembersQuotaRequestDto.md)
 - [DocspaceApiJavascript.UpdateMembersQuotaRequestDtoQuota](docs/UpdateMembersQuotaRequestDtoQuota.md)
 - [DocspaceApiJavascript.UpdateMembersRequestDto](docs/UpdateMembersRequestDto.md)
 - [DocspaceApiJavascript.UpdatePhotoMemberRequest](docs/UpdatePhotoMemberRequest.md)
 - [DocspaceApiJavascript.UpdateRoomRequest](docs/UpdateRoomRequest.md)
 - [DocspaceApiJavascript.UpdateRoomsQuotaRequestDtoInteger](docs/UpdateRoomsQuotaRequestDtoInteger.md)
 - [DocspaceApiJavascript.UpdateRoomsRoomIdsRequestDtoInteger](docs/UpdateRoomsRoomIdsRequestDtoInteger.md)
 - [DocspaceApiJavascript.UpdateWebhooksConfigRequestsDto](docs/UpdateWebhooksConfigRequestsDto.md)
 - [DocspaceApiJavascript.UploadRequestDto](docs/UploadRequestDto.md)
 - [DocspaceApiJavascript.UploadResultDto](docs/UploadResultDto.md)
 - [DocspaceApiJavascript.UploadResultWrapper](docs/UploadResultWrapper.md)
 - [DocspaceApiJavascript.UsageSpaceStatItemArrayWrapper](docs/UsageSpaceStatItemArrayWrapper.md)
 - [DocspaceApiJavascript.UsageSpaceStatItemDto](docs/UsageSpaceStatItemDto.md)
 - [DocspaceApiJavascript.UserConfig](docs/UserConfig.md)
 - [DocspaceApiJavascript.UserInfo](docs/UserInfo.md)
 - [DocspaceApiJavascript.UserInfoWrapper](docs/UserInfoWrapper.md)
 - [DocspaceApiJavascript.UserInvitation](docs/UserInvitation.md)
 - [DocspaceApiJavascript.UserInvitationRequestDto](docs/UserInvitationRequestDto.md)
 - [DocspaceApiJavascript.ValidationResult](docs/ValidationResult.md)
 - [DocspaceApiJavascript.WalletQuantityRequestDto](docs/WalletQuantityRequestDto.md)
 - [DocspaceApiJavascript.WatermarkAdditions](docs/WatermarkAdditions.md)
 - [DocspaceApiJavascript.WatermarkDto](docs/WatermarkDto.md)
 - [DocspaceApiJavascript.WatermarkOnDraw](docs/WatermarkOnDraw.md)
 - [DocspaceApiJavascript.WatermarkRequestDto](docs/WatermarkRequestDto.md)
 - [DocspaceApiJavascript.WebItemSecurityRequestsDto](docs/WebItemSecurityRequestsDto.md)
 - [DocspaceApiJavascript.WebItemsSecurityRequestsDto](docs/WebItemsSecurityRequestsDto.md)
 - [DocspaceApiJavascript.WebPluginArrayWrapper](docs/WebPluginArrayWrapper.md)
 - [DocspaceApiJavascript.WebPluginDto](docs/WebPluginDto.md)
 - [DocspaceApiJavascript.WebPluginRequests](docs/WebPluginRequests.md)
 - [DocspaceApiJavascript.WebPluginWrapper](docs/WebPluginWrapper.md)
 - [DocspaceApiJavascript.WebhookGroupStatus](docs/WebhookGroupStatus.md)
 - [DocspaceApiJavascript.WebhookRetryRequestsDto](docs/WebhookRetryRequestsDto.md)
 - [DocspaceApiJavascript.WebhookTrigger](docs/WebhookTrigger.md)
 - [DocspaceApiJavascript.WebhooksConfigDto](docs/WebhooksConfigDto.md)
 - [DocspaceApiJavascript.WebhooksConfigWithStatusArrayWrapper](docs/WebhooksConfigWithStatusArrayWrapper.md)
 - [DocspaceApiJavascript.WebhooksConfigWithStatusDto](docs/WebhooksConfigWithStatusDto.md)
 - [DocspaceApiJavascript.WebhooksConfigWrapper](docs/WebhooksConfigWrapper.md)
 - [DocspaceApiJavascript.WebhooksLogArrayWrapper](docs/WebhooksLogArrayWrapper.md)
 - [DocspaceApiJavascript.WebhooksLogDto](docs/WebhooksLogDto.md)
 - [DocspaceApiJavascript.WebhooksLogWrapper](docs/WebhooksLogWrapper.md)
 - [DocspaceApiJavascript.WhiteLabelItemArrayWrapper](docs/WhiteLabelItemArrayWrapper.md)
 - [DocspaceApiJavascript.WhiteLabelItemDto](docs/WhiteLabelItemDto.md)
 - [DocspaceApiJavascript.WhiteLabelItemPathDto](docs/WhiteLabelItemPathDto.md)
 - [DocspaceApiJavascript.WhiteLabelRequestsDto](docs/WhiteLabelRequestsDto.md)
 - [DocspaceApiJavascript.WizardRequestsDto](docs/WizardRequestsDto.md)
 - [DocspaceApiJavascript.WizardSettings](docs/WizardSettings.md)
 - [DocspaceApiJavascript.WizardSettingsWrapper](docs/WizardSettingsWrapper.md)


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

