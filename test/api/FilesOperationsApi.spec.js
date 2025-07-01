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
    instance = new DocspaceApiJavascript.FilesOperationsApi();
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

  describe('FilesOperationsApi', function() {
    describe('bulkDownload', function() {
      it('should call bulkDownload successfully', function(done) {
        //uncomment below and update the code to test bulkDownload
        //instance.bulkDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkConversionStatus', function() {
      it('should call checkConversionStatus successfully', function(done) {
        //uncomment below and update the code to test checkConversionStatus
        //instance.checkConversionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkMoveOrCopyBatchItems', function() {
      it('should call checkMoveOrCopyBatchItems successfully', function(done) {
        //uncomment below and update the code to test checkMoveOrCopyBatchItems
        //instance.checkMoveOrCopyBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkMoveOrCopyDestFolder', function() {
      it('should call checkMoveOrCopyDestFolder successfully', function(done) {
        //uncomment below and update the code to test checkMoveOrCopyDestFolder
        //instance.checkMoveOrCopyDestFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyBatchItems', function() {
      it('should call copyBatchItems successfully', function(done) {
        //uncomment below and update the code to test copyBatchItems
        //instance.copyBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUploadSession', function() {
      it('should call createUploadSession successfully', function(done) {
        //uncomment below and update the code to test createUploadSession
        //instance.createUploadSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchItems', function() {
      it('should call deleteBatchItems successfully', function(done) {
        //uncomment below and update the code to test deleteBatchItems
        //instance.deleteBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFileVersions', function() {
      it('should call deleteFileVersions successfully', function(done) {
        //uncomment below and update the code to test deleteFileVersions
        //instance.deleteFileVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('duplicateBatchItems', function() {
      it('should call duplicateBatchItems successfully', function(done) {
        //uncomment below and update the code to test duplicateBatchItems
        //instance.duplicateBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emptyTrash', function() {
      it('should call emptyTrash successfully', function(done) {
        //uncomment below and update the code to test emptyTrash
        //instance.emptyTrash(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOperationStatuses', function() {
      it('should call getOperationStatuses successfully', function(done) {
        //uncomment below and update the code to test getOperationStatuses
        //instance.getOperationStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOperationStatusesByType', function() {
      it('should call getOperationStatusesByType successfully', function(done) {
        //uncomment below and update the code to test getOperationStatusesByType
        //instance.getOperationStatusesByType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('markAsRead', function() {
      it('should call markAsRead successfully', function(done) {
        //uncomment below and update the code to test markAsRead
        //instance.markAsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveBatchItems', function() {
      it('should call moveBatchItems successfully', function(done) {
        //uncomment below and update the code to test moveBatchItems
        //instance.moveBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startFileConversion', function() {
      it('should call startFileConversion successfully', function(done) {
        //uncomment below and update the code to test startFileConversion
        //instance.startFileConversion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('terminateTasks', function() {
      it('should call terminateTasks successfully', function(done) {
        //uncomment below and update the code to test terminateTasks
        //instance.terminateTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFileComment', function() {
      it('should call updateFileComment successfully', function(done) {
        //uncomment below and update the code to test updateFileComment
        //instance.updateFileComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
