// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocspaceApiTypescript);
  }
}(this, function(expect, DocspaceApiTypescript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocspaceApiTypescript.FolderDtoString();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FolderDtoString', function() {
    it('should create an instance of FolderDtoString', function() {
      // uncomment below and update the code to test FolderDtoString
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be.a(DocspaceApiTypescript.FolderDtoString);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property autoDelete (base name: "autoDelete")', function() {
      // uncomment below and update the code to test the property autoDelete
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderType (base name: "rootFolderType")', function() {
      // uncomment below and update the code to test the property rootFolderType
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property parentRoomType (base name: "parentRoomType")', function() {
      // uncomment below and update the code to test the property parentRoomType
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerItem (base name: "providerItem")', function() {
      // uncomment below and update the code to test the property providerItem
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "providerKey")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderId (base name: "rootFolderId")', function() {
      // uncomment below and update the code to test the property rootFolderId
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originId (base name: "originId")', function() {
      // uncomment below and update the code to test the property originId
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originRoomId (base name: "originRoomId")', function() {
      // uncomment below and update the code to test the property originRoomId
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originTitle (base name: "originTitle")', function() {
      // uncomment below and update the code to test the property originTitle
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originRoomTitle (base name: "originRoomTitle")', function() {
      // uncomment below and update the code to test the property originRoomTitle
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property canShare (base name: "canShare")', function() {
      // uncomment below and update the code to test the property canShare
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property requestToken (base name: "requestToken")', function() {
      // uncomment below and update the code to test the property requestToken
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property filesCount (base name: "filesCount")', function() {
      // uncomment below and update the code to test the property filesCount
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property foldersCount (base name: "foldersCount")', function() {
      // uncomment below and update the code to test the property foldersCount
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isShareable (base name: "isShareable")', function() {
      // uncomment below and update the code to test the property isShareable
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isFavorite (base name: "isFavorite")', function() {
      // uncomment below and update the code to test the property isFavorite
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property pinned (base name: "pinned")', function() {
      // uncomment below and update the code to test the property pinned
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property roomType (base name: "roomType")', function() {
      // uncomment below and update the code to test the property roomType
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property indexing (base name: "indexing")', function() {
      // uncomment below and update the code to test the property indexing
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property denyDownload (base name: "denyDownload")', function() {
      // uncomment below and update the code to test the property denyDownload
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property lifetime (base name: "lifetime")', function() {
      // uncomment below and update the code to test the property lifetime
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property watermark (base name: "watermark")', function() {
      // uncomment below and update the code to test the property watermark
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property inRoom (base name: "inRoom")', function() {
      // uncomment below and update the code to test the property inRoom
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property quotaLimit (base name: "quotaLimit")', function() {
      // uncomment below and update the code to test the property quotaLimit
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isCustomQuota (base name: "isCustomQuota")', function() {
      // uncomment below and update the code to test the property isCustomQuota
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property usedSpace (base name: "usedSpace")', function() {
      // uncomment below and update the code to test the property usedSpace
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property external (base name: "external")', function() {
      // uncomment below and update the code to test the property external
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property passwordProtected (base name: "passwordProtected")', function() {
      // uncomment below and update the code to test the property passwordProtected
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property expired (base name: "expired")', function() {
      // uncomment below and update the code to test the property expired
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property fileEntryType (base name: "fileEntryType")', function() {
      // uncomment below and update the code to test the property fileEntryType
      //var instance = new DocspaceApiTypescript.FolderDtoString();
      //expect(instance).to.be();
    });

  });

}));
