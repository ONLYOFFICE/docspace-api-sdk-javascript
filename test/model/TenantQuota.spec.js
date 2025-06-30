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
    instance = new DocspaceApiTypescript.TenantQuota();
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

  describe('TenantQuota', function() {
    it('should create an instance of TenantQuota', function() {
      // uncomment below and update the code to test TenantQuota
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be.a(DocspaceApiTypescript.TenantQuota);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property priceCurrencySymbol (base name: "priceCurrencySymbol")', function() {
      // uncomment below and update the code to test the property priceCurrencySymbol
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property priceISOCurrencySymbol (base name: "priceISOCurrencySymbol")', function() {
      // uncomment below and update the code to test the property priceISOCurrencySymbol
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property wallet (base name: "wallet")', function() {
      // uncomment below and update the code to test the property wallet
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property maxFileSize (base name: "maxFileSize")', function() {
      // uncomment below and update the code to test the property maxFileSize
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property maxTotalSize (base name: "maxTotalSize")', function() {
      // uncomment below and update the code to test the property maxTotalSize
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countUser (base name: "countUser")', function() {
      // uncomment below and update the code to test the property countUser
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countRoomAdmin (base name: "countRoomAdmin")', function() {
      // uncomment below and update the code to test the property countRoomAdmin
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property usersInRoom (base name: "usersInRoom")', function() {
      // uncomment below and update the code to test the property usersInRoom
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countRoom (base name: "countRoom")', function() {
      // uncomment below and update the code to test the property countRoom
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property nonProfit (base name: "nonProfit")', function() {
      // uncomment below and update the code to test the property nonProfit
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property trial (base name: "trial")', function() {
      // uncomment below and update the code to test the property trial
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property audit (base name: "audit")', function() {
      // uncomment below and update the code to test the property audit
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property docsEdition (base name: "docsEdition")', function() {
      // uncomment below and update the code to test the property docsEdition
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property ldap (base name: "ldap")', function() {
      // uncomment below and update the code to test the property ldap
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property sso (base name: "sso")', function() {
      // uncomment below and update the code to test the property sso
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property statistic (base name: "statistic")', function() {
      // uncomment below and update the code to test the property statistic
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property branding (base name: "branding")', function() {
      // uncomment below and update the code to test the property branding
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property customization (base name: "customization")', function() {
      // uncomment below and update the code to test the property customization
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property lifetime (base name: "lifetime")', function() {
      // uncomment below and update the code to test the property lifetime
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property autoBackupRestore (base name: "autoBackupRestore")', function() {
      // uncomment below and update the code to test the property autoBackupRestore
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property oauth (base name: "oauth")', function() {
      // uncomment below and update the code to test the property oauth
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property contentSearch (base name: "contentSearch")', function() {
      // uncomment below and update the code to test the property contentSearch
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property thirdParty (base name: "thirdParty")', function() {
      // uncomment below and update the code to test the property thirdParty
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new DocspaceApiTypescript.TenantQuota();
      //expect(instance).to.be();
    });

  });

}));
