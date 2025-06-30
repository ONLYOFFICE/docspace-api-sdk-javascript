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
    instance = new DocspaceApiTypescript.SettingsDto();
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

  describe('SettingsDto', function() {
    it('should create an instance of SettingsDto', function() {
      // uncomment below and update the code to test SettingsDto
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be.a(DocspaceApiTypescript.SettingsDto);
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomains (base name: "trustedDomains")', function() {
      // uncomment below and update the code to test the property trustedDomains
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsType (base name: "trustedDomainsType")', function() {
      // uncomment below and update the code to test the property trustedDomainsType
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property culture (base name: "culture")', function() {
      // uncomment below and update the code to test the property culture
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property utcOffset (base name: "utcOffset")', function() {
      // uncomment below and update the code to test the property utcOffset
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property utcHoursOffset (base name: "utcHoursOffset")', function() {
      // uncomment below and update the code to test the property utcHoursOffset
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property greetingSettings (base name: "greetingSettings")', function() {
      // uncomment below and update the code to test the property greetingSettings
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property nameSchemaId (base name: "nameSchemaId")', function() {
      // uncomment below and update the code to test the property nameSchemaId
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enabledJoin (base name: "enabledJoin")', function() {
      // uncomment below and update the code to test the property enabledJoin
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enableAdmMess (base name: "enableAdmMess")', function() {
      // uncomment below and update the code to test the property enableAdmMess
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property thirdpartyEnable (base name: "thirdpartyEnable")', function() {
      // uncomment below and update the code to test the property thirdpartyEnable
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property docSpace (base name: "docSpace")', function() {
      // uncomment below and update the code to test the property docSpace
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property standalone (base name: "standalone")', function() {
      // uncomment below and update the code to test the property standalone
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property isAmi (base name: "isAmi")', function() {
      // uncomment below and update the code to test the property isAmi
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property baseDomain (base name: "baseDomain")', function() {
      // uncomment below and update the code to test the property baseDomain
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property wizardToken (base name: "wizardToken")', function() {
      // uncomment below and update the code to test the property wizardToken
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property passwordHash (base name: "passwordHash")', function() {
      // uncomment below and update the code to test the property passwordHash
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property firebase (base name: "firebase")', function() {
      // uncomment below and update the code to test the property firebase
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaType (base name: "recaptchaType")', function() {
      // uncomment below and update the code to test the property recaptchaType
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaPublicKey (base name: "recaptchaPublicKey")', function() {
      // uncomment below and update the code to test the property recaptchaPublicKey
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property debugInfo (base name: "debugInfo")', function() {
      // uncomment below and update the code to test the property debugInfo
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property socketUrl (base name: "socketUrl")', function() {
      // uncomment below and update the code to test the property socketUrl
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantStatus (base name: "tenantStatus")', function() {
      // uncomment below and update the code to test the property tenantStatus
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantAlias (base name: "tenantAlias")', function() {
      // uncomment below and update the code to test the property tenantAlias
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property displayAbout (base name: "displayAbout")', function() {
      // uncomment below and update the code to test the property displayAbout
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property domainValidator (base name: "domainValidator")', function() {
      // uncomment below and update the code to test the property domainValidator
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property zendeskKey (base name: "zendeskKey")', function() {
      // uncomment below and update the code to test the property zendeskKey
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tagManagerId (base name: "tagManagerId")', function() {
      // uncomment below and update the code to test the property tagManagerId
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property cookieSettingsEnabled (base name: "cookieSettingsEnabled")', function() {
      // uncomment below and update the code to test the property cookieSettingsEnabled
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property limitedAccessSpace (base name: "limitedAccessSpace")', function() {
      // uncomment below and update the code to test the property limitedAccessSpace
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property limitedAccessDevToolsForUsers (base name: "limitedAccessDevToolsForUsers")', function() {
      // uncomment below and update the code to test the property limitedAccessDevToolsForUsers
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property userNameRegex (base name: "userNameRegex")', function() {
      // uncomment below and update the code to test the property userNameRegex
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property invitationLimit (base name: "invitationLimit")', function() {
      // uncomment below and update the code to test the property invitationLimit
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property deepLink (base name: "deepLink")', function() {
      // uncomment below and update the code to test the property deepLink
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property formGallery (base name: "formGallery")', function() {
      // uncomment below and update the code to test the property formGallery
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property maxImageUploadSize (base name: "maxImageUploadSize")', function() {
      // uncomment below and update the code to test the property maxImageUploadSize
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property logoText (base name: "logoText")', function() {
      // uncomment below and update the code to test the property logoText
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property externalResources (base name: "externalResources")', function() {
      // uncomment below and update the code to test the property externalResources
      //var instance = new DocspaceApiTypescript.SettingsDto();
      //expect(instance).to.be();
    });

  });

}));
