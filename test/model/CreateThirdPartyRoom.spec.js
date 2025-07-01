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
    factory(root.expect, root.DocspaceApiJavascript);
  }
}(this, function(expect, DocspaceApiJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
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

  describe('CreateThirdPartyRoom', function() {
    it('should create an instance of CreateThirdPartyRoom', function() {
      // uncomment below and update the code to test CreateThirdPartyRoom
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be.a(DocspaceApiJavascript.CreateThirdPartyRoom);
    });

    it('should have the property createAsNewFolder (base name: "createAsNewFolder")', function() {
      // uncomment below and update the code to test the property createAsNewFolder
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property roomType (base name: "roomType")', function() {
      // uncomment below and update the code to test the property roomType
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property indexing (base name: "indexing")', function() {
      // uncomment below and update the code to test the property indexing
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property denyDownload (base name: "denyDownload")', function() {
      // uncomment below and update the code to test the property denyDownload
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property cover (base name: "cover")', function() {
      // uncomment below and update the code to test the property cover
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new DocspaceApiJavascript.CreateThirdPartyRoom();
      //expect(instance).to.be();
    });

  });

}));
