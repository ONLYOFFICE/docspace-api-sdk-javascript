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
    instance = new DocspaceApiTypescript.FileShareDto();
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

  describe('FileShareDto', function() {
    it('should create an instance of FileShareDto', function() {
      // uncomment below and update the code to test FileShareDto
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be.a(DocspaceApiTypescript.FileShareDto);
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

    it('should have the property sharedTo (base name: "sharedTo")', function() {
      // uncomment below and update the code to test the property sharedTo
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

    it('should have the property isLocked (base name: "isLocked")', function() {
      // uncomment below and update the code to test the property isLocked
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

    it('should have the property isOwner (base name: "isOwner")', function() {
      // uncomment below and update the code to test the property isOwner
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

    it('should have the property canEditAccess (base name: "canEditAccess")', function() {
      // uncomment below and update the code to test the property canEditAccess
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

    it('should have the property subjectType (base name: "subjectType")', function() {
      // uncomment below and update the code to test the property subjectType
      //var instance = new DocspaceApiTypescript.FileShareDto();
      //expect(instance).to.be();
    });

  });

}));
