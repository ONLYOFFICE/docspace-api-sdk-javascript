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
    instance = new DocspaceApiJavascript.UserInfo();
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

  describe('UserInfo', function() {
    it('should create an instance of UserInfo', function() {
      // uncomment below and update the code to test UserInfo
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be.a(DocspaceApiJavascript.UserInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birthDate")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property activationStatus (base name: "activationStatus")', function() {
      // uncomment below and update the code to test the property activationStatus
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property terminatedDate (base name: "terminatedDate")', function() {
      // uncomment below and update the code to test the property terminatedDate
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property workFromDate (base name: "workFromDate")', function() {
      // uncomment below and update the code to test the property workFromDate
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property contactsList (base name: "contactsList")', function() {
      // uncomment below and update the code to test the property contactsList
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property removed (base name: "removed")', function() {
      // uncomment below and update the code to test the property removed
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property cultureName (base name: "cultureName")', function() {
      // uncomment below and update the code to test the property cultureName
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhone (base name: "mobilePhone")', function() {
      // uncomment below and update the code to test the property mobilePhone
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhoneActivationStatus (base name: "mobilePhoneActivationStatus")', function() {
      // uncomment below and update the code to test the property mobilePhoneActivationStatus
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property sid (base name: "sid")', function() {
      // uncomment below and update the code to test the property sid
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ldapQouta (base name: "ldapQouta")', function() {
      // uncomment below and update the code to test the property ldapQouta
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ssoNameId (base name: "ssoNameId")', function() {
      // uncomment below and update the code to test the property ssoNameId
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ssoSessionId (base name: "ssoSessionId")', function() {
      // uncomment below and update the code to test the property ssoSessionId
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property checkActivation (base name: "checkActivation")', function() {
      // uncomment below and update the code to test the property checkActivation
      //var instance = new DocspaceApiJavascript.UserInfo();
      //expect(instance).to.be();
    });

  });

}));
