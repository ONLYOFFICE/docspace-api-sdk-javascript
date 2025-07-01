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
    instance = new DocspaceApiJavascript.SettingsCommonSettingsApi();
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

  describe('SettingsCommonSettingsApi', function() {
    describe('closeAdminHelper', function() {
      it('should call closeAdminHelper successfully', function(done) {
        //uncomment below and update the code to test closeAdminHelper
        //instance.closeAdminHelper(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('completeWizard', function() {
      it('should call completeWizard successfully', function(done) {
        //uncomment below and update the code to test completeWizard
        //instance.completeWizard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureDeepLink', function() {
      it('should call configureDeepLink successfully', function(done) {
        //uncomment below and update the code to test configureDeepLink
        //instance.configureDeepLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePortalColorTheme', function() {
      it('should call deletePortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test deletePortalColorTheme
        //instance.deletePortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeepLinkSettings', function() {
      it('should call getDeepLinkSettings successfully', function(done) {
        //uncomment below and update the code to test getDeepLinkSettings
        //instance.getDeepLinkSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentSettings', function() {
      it('should call getPaymentSettings successfully', function(done) {
        //uncomment below and update the code to test getPaymentSettings
        //instance.getPaymentSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalColorTheme', function() {
      it('should call getPortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test getPortalColorTheme
        //instance.getPortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalHostname', function() {
      it('should call getPortalHostname successfully', function(done) {
        //uncomment below and update the code to test getPortalHostname
        //instance.getPortalHostname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalLogo', function() {
      it('should call getPortalLogo successfully', function(done) {
        //uncomment below and update the code to test getPortalLogo
        //instance.getPortalLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalSettings', function() {
      it('should call getPortalSettings successfully', function(done) {
        //uncomment below and update the code to test getPortalSettings
        //instance.getPortalSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSocketSettings', function() {
      it('should call getSocketSettings successfully', function(done) {
        //uncomment below and update the code to test getSocketSettings
        //instance.getSocketSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupportedCultures', function() {
      it('should call getSupportedCultures successfully', function(done) {
        //uncomment below and update the code to test getSupportedCultures
        //instance.getSupportedCultures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTenantUserInvitationSettings', function() {
      it('should call getTenantUserInvitationSettings successfully', function(done) {
        //uncomment below and update the code to test getTenantUserInvitationSettings
        //instance.getTenantUserInvitationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTimeZones', function() {
      it('should call getTimeZones successfully', function(done) {
        //uncomment below and update the code to test getTimeZones
        //instance.getTimeZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveDnsSettings', function() {
      it('should call saveDnsSettings successfully', function(done) {
        //uncomment below and update the code to test saveDnsSettings
        //instance.saveDnsSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveMailDomainSettings', function() {
      it('should call saveMailDomainSettings successfully', function(done) {
        //uncomment below and update the code to test saveMailDomainSettings
        //instance.saveMailDomainSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('savePortalColorTheme', function() {
      it('should call savePortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test savePortalColorTheme
        //instance.savePortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailActivationSettings', function() {
      it('should call updateEmailActivationSettings successfully', function(done) {
        //uncomment below and update the code to test updateEmailActivationSettings
        //instance.updateEmailActivationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInvitationSettings', function() {
      it('should call updateInvitationSettings successfully', function(done) {
        //uncomment below and update the code to test updateInvitationSettings
        //instance.updateInvitationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
