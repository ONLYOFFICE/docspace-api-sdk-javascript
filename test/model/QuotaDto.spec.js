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
    instance = new DocspaceApiTypescript.QuotaDto();
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

  describe('QuotaDto', function() {
    it('should create an instance of QuotaDto', function() {
      // uncomment below and update the code to test QuotaDto
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be.a(DocspaceApiTypescript.QuotaDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property nonProfit (base name: "nonProfit")', function() {
      // uncomment below and update the code to test the property nonProfit
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property trial (base name: "trial")', function() {
      // uncomment below and update the code to test the property trial
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property usersQuota (base name: "usersQuota")', function() {
      // uncomment below and update the code to test the property usersQuota
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property roomsQuota (base name: "roomsQuota")', function() {
      // uncomment below and update the code to test the property roomsQuota
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantCustomQuota (base name: "tenantCustomQuota")', function() {
      // uncomment below and update the code to test the property tenantCustomQuota
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new DocspaceApiTypescript.QuotaDto();
      //expect(instance).to.be();
    });

  });

}));
