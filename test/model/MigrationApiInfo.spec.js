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
    instance = new DocspaceApiTypescript.MigrationApiInfo();
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

  describe('MigrationApiInfo', function() {
    it('should create an instance of MigrationApiInfo', function() {
      // uncomment below and update the code to test MigrationApiInfo
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be.a(DocspaceApiTypescript.MigrationApiInfo);
    });

    it('should have the property migratorName (base name: "migratorName")', function() {
      // uncomment below and update the code to test the property migratorName
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property failedArchives (base name: "failedArchives")', function() {
      // uncomment below and update the code to test the property failedArchives
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property withoutEmailUsers (base name: "withoutEmailUsers")', function() {
      // uncomment below and update the code to test the property withoutEmailUsers
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property existUsers (base name: "existUsers")', function() {
      // uncomment below and update the code to test the property existUsers
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importPersonalFiles (base name: "importPersonalFiles")', function() {
      // uncomment below and update the code to test the property importPersonalFiles
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importSharedFiles (base name: "importSharedFiles")', function() {
      // uncomment below and update the code to test the property importSharedFiles
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importSharedFolders (base name: "importSharedFolders")', function() {
      // uncomment below and update the code to test the property importSharedFolders
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importCommonFiles (base name: "importCommonFiles")', function() {
      // uncomment below and update the code to test the property importCommonFiles
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importProjectFiles (base name: "importProjectFiles")', function() {
      // uncomment below and update the code to test the property importProjectFiles
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importGroups (base name: "importGroups")', function() {
      // uncomment below and update the code to test the property importGroups
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property successedUsers (base name: "successedUsers")', function() {
      // uncomment below and update the code to test the property successedUsers
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property failedUsers (base name: "failedUsers")', function() {
      // uncomment below and update the code to test the property failedUsers
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new DocspaceApiTypescript.MigrationApiInfo();
      //expect(instance).to.be();
    });

  });

}));
