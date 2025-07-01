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
    instance = new DocspaceApiJavascript.WebhooksLogDto();
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

  describe('WebhooksLogDto', function() {
    it('should create an instance of WebhooksLogDto', function() {
      // uncomment below and update the code to test WebhooksLogDto
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be.a(DocspaceApiJavascript.WebhooksLogDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property configName (base name: "configName")', function() {
      // uncomment below and update the code to test the property configName
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property creationTime (base name: "creationTime")', function() {
      // uncomment below and update the code to test the property creationTime
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property route (base name: "route")', function() {
      // uncomment below and update the code to test the property route
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property requestHeaders (base name: "requestHeaders")', function() {
      // uncomment below and update the code to test the property requestHeaders
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property requestPayload (base name: "requestPayload")', function() {
      // uncomment below and update the code to test the property requestPayload
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property responseHeaders (base name: "responseHeaders")', function() {
      // uncomment below and update the code to test the property responseHeaders
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property responsePayload (base name: "responsePayload")', function() {
      // uncomment below and update the code to test the property responsePayload
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property delivery (base name: "delivery")', function() {
      // uncomment below and update the code to test the property delivery
      //var instance = new DocspaceApiJavascript.WebhooksLogDto();
      //expect(instance).to.be();
    });

  });

}));
