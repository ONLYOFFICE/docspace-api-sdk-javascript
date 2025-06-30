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
    instance = new DocspaceApiTypescript.SettingsRebrandingApi();
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

  describe('SettingsRebrandingApi', function() {
    describe('deleteAdditionalWhiteLabelSettings', function() {
      it('should call deleteAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test deleteAdditionalWhiteLabelSettings
        //instance.deleteAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCompanyWhiteLabelSettings', function() {
      it('should call deleteCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test deleteCompanyWhiteLabelSettings
        //instance.deleteCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdditionalWhiteLabelSettings', function() {
      it('should call getAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test getAdditionalWhiteLabelSettings
        //instance.getAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyWhiteLabelSettings', function() {
      it('should call getCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test getCompanyWhiteLabelSettings
        //instance.getCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnableWhitelabel', function() {
      it('should call getEnableWhitelabel successfully', function(done) {
        //uncomment below and update the code to test getEnableWhitelabel
        //instance.getEnableWhitelabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsDefaultWhiteLabelLogoText', function() {
      it('should call getIsDefaultWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test getIsDefaultWhiteLabelLogoText
        //instance.getIsDefaultWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsDefaultWhiteLabelLogos', function() {
      it('should call getIsDefaultWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test getIsDefaultWhiteLabelLogos
        //instance.getIsDefaultWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLicensorData', function() {
      it('should call getLicensorData successfully', function(done) {
        //uncomment below and update the code to test getLicensorData
        //instance.getLicensorData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhiteLabelLogoText', function() {
      it('should call getWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test getWhiteLabelLogoText
        //instance.getWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhiteLabelLogos', function() {
      it('should call getWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test getWhiteLabelLogos
        //instance.getWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreWhiteLabelLogoText', function() {
      it('should call restoreWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test restoreWhiteLabelLogoText
        //instance.restoreWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreWhiteLabelLogos', function() {
      it('should call restoreWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test restoreWhiteLabelLogos
        //instance.restoreWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAdditionalWhiteLabelSettings', function() {
      it('should call saveAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveAdditionalWhiteLabelSettings
        //instance.saveAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveCompanyWhiteLabelSettings', function() {
      it('should call saveCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveCompanyWhiteLabelSettings
        //instance.saveCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelLogoText', function() {
      it('should call saveWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelLogoText
        //instance.saveWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelSettings', function() {
      it('should call saveWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelSettings
        //instance.saveWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelSettingsFromFiles', function() {
      it('should call saveWhiteLabelSettingsFromFiles successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelSettingsFromFiles
        //instance.saveWhiteLabelSettingsFromFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
