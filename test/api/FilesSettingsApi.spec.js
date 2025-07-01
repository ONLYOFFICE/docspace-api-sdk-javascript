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
    instance = new DocspaceApiJavascript.FilesSettingsApi();
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

  describe('FilesSettingsApi', function() {
    describe('changeAccessToThirdparty', function() {
      it('should call changeAccessToThirdparty successfully', function(done) {
        //uncomment below and update the code to test changeAccessToThirdparty
        //instance.changeAccessToThirdparty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeAutomaticallyCleanUp', function() {
      it('should call changeAutomaticallyCleanUp successfully', function(done) {
        //uncomment below and update the code to test changeAutomaticallyCleanUp
        //instance.changeAutomaticallyCleanUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDefaultAccessRights', function() {
      it('should call changeDefaultAccessRights successfully', function(done) {
        //uncomment below and update the code to test changeDefaultAccessRights
        //instance.changeDefaultAccessRights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDeleteConfirm', function() {
      it('should call changeDeleteConfirm successfully', function(done) {
        //uncomment below and update the code to test changeDeleteConfirm
        //instance.changeDeleteConfirm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDownloadZipFromBody', function() {
      it('should call changeDownloadZipFromBody successfully', function(done) {
        //uncomment below and update the code to test changeDownloadZipFromBody
        //instance.changeDownloadZipFromBody(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkDocServiceUrl', function() {
      it('should call checkDocServiceUrl successfully', function(done) {
        //uncomment below and update the code to test checkDocServiceUrl
        //instance.checkDocServiceUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('displayFileExtension', function() {
      it('should call displayFileExtension successfully', function(done) {
        //uncomment below and update the code to test displayFileExtension
        //instance.displayFileExtension(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('externalShare', function() {
      it('should call externalShare successfully', function(done) {
        //uncomment below and update the code to test externalShare
        //instance.externalShare(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('externalShareSocialMedia', function() {
      it('should call externalShareSocialMedia successfully', function(done) {
        //uncomment below and update the code to test externalShareSocialMedia
        //instance.externalShareSocialMedia(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forcesave', function() {
      it('should call forcesave successfully', function(done) {
        //uncomment below and update the code to test forcesave
        //instance.forcesave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAutomaticallyCleanUp', function() {
      it('should call getAutomaticallyCleanUp successfully', function(done) {
        //uncomment below and update the code to test getAutomaticallyCleanUp
        //instance.getAutomaticallyCleanUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocServiceUrl', function() {
      it('should call getDocServiceUrl successfully', function(done) {
        //uncomment below and update the code to test getDocServiceUrl
        //instance.getDocServiceUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilesModule', function() {
      it('should call getFilesModule successfully', function(done) {
        //uncomment below and update the code to test getFilesModule
        //instance.getFilesModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilesSettings', function() {
      it('should call getFilesSettings successfully', function(done) {
        //uncomment below and update the code to test getFilesSettings
        //instance.getFilesSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmCancelOperation', function() {
      it('should call hideConfirmCancelOperation successfully', function(done) {
        //uncomment below and update the code to test hideConfirmCancelOperation
        //instance.hideConfirmCancelOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmConvert', function() {
      it('should call hideConfirmConvert successfully', function(done) {
        //uncomment below and update the code to test hideConfirmConvert
        //instance.hideConfirmConvert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmRoomLifetime', function() {
      it('should call hideConfirmRoomLifetime successfully', function(done) {
        //uncomment below and update the code to test hideConfirmRoomLifetime
        //instance.hideConfirmRoomLifetime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isAvailablePrivacyRoomSettings', function() {
      it('should call isAvailablePrivacyRoomSettings successfully', function(done) {
        //uncomment below and update the code to test isAvailablePrivacyRoomSettings
        //instance.isAvailablePrivacyRoomSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keepNewFileName', function() {
      it('should call keepNewFileName successfully', function(done) {
        //uncomment below and update the code to test keepNewFileName
        //instance.keepNewFileName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOpenEditorInSameTab', function() {
      it('should call setOpenEditorInSameTab successfully', function(done) {
        //uncomment below and update the code to test setOpenEditorInSameTab
        //instance.setOpenEditorInSameTab(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeForcesave', function() {
      it('should call storeForcesave successfully', function(done) {
        //uncomment below and update the code to test storeForcesave
        //instance.storeForcesave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeOriginal', function() {
      it('should call storeOriginal successfully', function(done) {
        //uncomment below and update the code to test storeOriginal
        //instance.storeOriginal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFileIfExist', function() {
      it('should call updateFileIfExist successfully', function(done) {
        //uncomment below and update the code to test updateFileIfExist
        //instance.updateFileIfExist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
