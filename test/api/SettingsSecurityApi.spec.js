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
    instance = new DocspaceApiTypescript.SettingsSecurityApi();
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

  describe('SettingsSecurityApi', function() {
    describe('getEnabledModules', function() {
      it('should call getEnabledModules successfully', function(done) {
        //uncomment below and update the code to test getEnabledModules
        //instance.getEnabledModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsProductAdministrator', function() {
      it('should call getIsProductAdministrator successfully', function(done) {
        //uncomment below and update the code to test getIsProductAdministrator
        //instance.getIsProductAdministrator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPasswordSettings', function() {
      it('should call getPasswordSettings successfully', function(done) {
        //uncomment below and update the code to test getPasswordSettings
        //instance.getPasswordSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAdministrators', function() {
      it('should call getProductAdministrators successfully', function(done) {
        //uncomment below and update the code to test getProductAdministrators
        //instance.getProductAdministrators(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebItemSecurityInfo', function() {
      it('should call getWebItemSecurityInfo successfully', function(done) {
        //uncomment below and update the code to test getWebItemSecurityInfo
        //instance.getWebItemSecurityInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebItemSettingsSecurityInfo', function() {
      it('should call getWebItemSettingsSecurityInfo successfully', function(done) {
        //uncomment below and update the code to test getWebItemSettingsSecurityInfo
        //instance.getWebItemSettingsSecurityInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAccessToWebItems', function() {
      it('should call setAccessToWebItems successfully', function(done) {
        //uncomment below and update the code to test setAccessToWebItems
        //instance.setAccessToWebItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProductAdministrator', function() {
      it('should call setProductAdministrator successfully', function(done) {
        //uncomment below and update the code to test setProductAdministrator
        //instance.setProductAdministrator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setWebItemSecurity', function() {
      it('should call setWebItemSecurity successfully', function(done) {
        //uncomment below and update the code to test setWebItemSecurity
        //instance.setWebItemSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePasswordSettings', function() {
      it('should call updatePasswordSettings successfully', function(done) {
        //uncomment below and update the code to test updatePasswordSettings
        //instance.updatePasswordSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
