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
    instance = new DocspaceApiJavascript.TenantDto();
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

  describe('TenantDto', function() {
    it('should create an instance of TenantDto', function() {
      // uncomment below and update the code to test TenantDto
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be.a(DocspaceApiJavascript.TenantDto);
    });

    it('should have the property affiliateId (base name: "affiliateId")', function() {
      // uncomment below and update the code to test the property affiliateId
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantAlias (base name: "tenantAlias")', function() {
      // uncomment below and update the code to test the property tenantAlias
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property calls (base name: "calls")', function() {
      // uncomment below and update the code to test the property calls
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property campaign (base name: "campaign")', function() {
      // uncomment below and update the code to test the property campaign
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property creationDateTime (base name: "creationDateTime")', function() {
      // uncomment below and update the code to test the property creationDateTime
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property hostedRegion (base name: "hostedRegion")', function() {
      // uncomment below and update the code to test the property hostedRegion
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property mappedDomain (base name: "mappedDomain")', function() {
      // uncomment below and update the code to test the property mappedDomain
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property paymentId (base name: "paymentId")', function() {
      // uncomment below and update the code to test the property paymentId
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property statusChangeDate (base name: "statusChangeDate")', function() {
      // uncomment below and update the code to test the property statusChangeDate
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomains (base name: "trustedDomains")', function() {
      // uncomment below and update the code to test the property trustedDomains
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsRaw (base name: "trustedDomainsRaw")', function() {
      // uncomment below and update the code to test the property trustedDomainsRaw
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsType (base name: "trustedDomainsType")', function() {
      // uncomment below and update the code to test the property trustedDomainsType
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property versionChanged (base name: "versionChanged")', function() {
      // uncomment below and update the code to test the property versionChanged
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new DocspaceApiJavascript.TenantDto();
      //expect(instance).to.be();
    });

  });

}));
