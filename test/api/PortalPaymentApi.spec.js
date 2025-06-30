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
    instance = new DocspaceApiTypescript.PortalPaymentApi();
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

  describe('PortalPaymentApi', function() {
    describe('calculateWalletPayment', function() {
      it('should call calculateWalletPayment successfully', function(done) {
        //uncomment below and update the code to test calculateWalletPayment
        //instance.calculateWalletPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCustomerOperationsReport', function() {
      it('should call createCustomerOperationsReport successfully', function(done) {
        //uncomment below and update the code to test createCustomerOperationsReport
        //instance.createCustomerOperationsReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountingCurrencies', function() {
      it('should call getAccountingCurrencies successfully', function(done) {
        //uncomment below and update the code to test getAccountingCurrencies
        //instance.getAccountingCurrencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckoutSetupUrl', function() {
      it('should call getCheckoutSetupUrl successfully', function(done) {
        //uncomment below and update the code to test getCheckoutSetupUrl
        //instance.getCheckoutSetupUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerBalance', function() {
      it('should call getCustomerBalance successfully', function(done) {
        //uncomment below and update the code to test getCustomerBalance
        //instance.getCustomerBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInfo', function() {
      it('should call getCustomerInfo successfully', function(done) {
        //uncomment below and update the code to test getCustomerInfo
        //instance.getCustomerInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerOperations', function() {
      it('should call getCustomerOperations successfully', function(done) {
        //uncomment below and update the code to test getCustomerOperations
        //instance.getCustomerOperations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentAccount', function() {
      it('should call getPaymentAccount successfully', function(done) {
        //uncomment below and update the code to test getPaymentAccount
        //instance.getPaymentAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentCurrencies', function() {
      it('should call getPaymentCurrencies successfully', function(done) {
        //uncomment below and update the code to test getPaymentCurrencies
        //instance.getPaymentCurrencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentQuotas', function() {
      it('should call getPaymentQuotas successfully', function(done) {
        //uncomment below and update the code to test getPaymentQuotas
        //instance.getPaymentQuotas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentUrl', function() {
      it('should call getPaymentUrl successfully', function(done) {
        //uncomment below and update the code to test getPaymentUrl
        //instance.getPaymentUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalPrices', function() {
      it('should call getPortalPrices successfully', function(done) {
        //uncomment below and update the code to test getPortalPrices
        //instance.getPortalPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotaPaymentInformation', function() {
      it('should call getQuotaPaymentInformation successfully', function(done) {
        //uncomment below and update the code to test getQuotaPaymentInformation
        //instance.getQuotaPaymentInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTenantWalletSettings', function() {
      it('should call getTenantWalletSettings successfully', function(done) {
        //uncomment below and update the code to test getTenantWalletSettings
        //instance.getTenantWalletSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openCustomerSession', function() {
      it('should call openCustomerSession successfully', function(done) {
        //uncomment below and update the code to test openCustomerSession
        //instance.openCustomerSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('performCustomerOperation', function() {
      it('should call performCustomerOperation successfully', function(done) {
        //uncomment below and update the code to test performCustomerOperation
        //instance.performCustomerOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendPaymentRequest', function() {
      it('should call sendPaymentRequest successfully', function(done) {
        //uncomment below and update the code to test sendPaymentRequest
        //instance.sendPaymentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setTenantWalletSettings', function() {
      it('should call setTenantWalletSettings successfully', function(done) {
        //uncomment below and update the code to test setTenantWalletSettings
        //instance.setTenantWalletSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('topUpDeposit', function() {
      it('should call topUpDeposit successfully', function(done) {
        //uncomment below and update the code to test topUpDeposit
        //instance.topUpDeposit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePayment', function() {
      it('should call updatePayment successfully', function(done) {
        //uncomment below and update the code to test updatePayment
        //instance.updatePayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWalletPayment', function() {
      it('should call updateWalletPayment successfully', function(done) {
        //uncomment below and update the code to test updateWalletPayment
        //instance.updateWalletPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
