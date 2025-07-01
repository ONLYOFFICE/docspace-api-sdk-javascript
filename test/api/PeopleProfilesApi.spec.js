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
    instance = new DocspaceApiJavascript.PeopleProfilesApi();
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

  describe('PeopleProfilesApi', function() {
    describe('addMember', function() {
      it('should call addMember successfully', function(done) {
        //uncomment below and update the code to test addMember
        //instance.addMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMember', function() {
      it('should call deleteMember successfully', function(done) {
        //uncomment below and update the code to test deleteMember
        //instance.deleteMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProfile', function() {
      it('should call deleteProfile successfully', function(done) {
        //uncomment below and update the code to test deleteProfile
        //instance.deleteProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllProfiles', function() {
      it('should call getAllProfiles successfully', function(done) {
        //uncomment below and update the code to test getAllProfiles
        //instance.getAllProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClaims', function() {
      it('should call getClaims successfully', function(done) {
        //uncomment below and update the code to test getClaims
        //instance.getClaims(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileByEmail', function() {
      it('should call getProfileByEmail successfully', function(done) {
        //uncomment below and update the code to test getProfileByEmail
        //instance.getProfileByEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileByUserId', function() {
      it('should call getProfileByUserId successfully', function(done) {
        //uncomment below and update the code to test getProfileByUserId
        //instance.getProfileByUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfProfile', function() {
      it('should call getSelfProfile successfully', function(done) {
        //uncomment below and update the code to test getSelfProfile
        //instance.getSelfProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteUsers', function() {
      it('should call inviteUsers successfully', function(done) {
        //uncomment below and update the code to test inviteUsers
        //instance.inviteUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUsers', function() {
      it('should call removeUsers successfully', function(done) {
        //uncomment below and update the code to test removeUsers
        //instance.removeUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resendUserInvites', function() {
      it('should call resendUserInvites successfully', function(done) {
        //uncomment below and update the code to test resendUserInvites
        //instance.resendUserInvites(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendEmailChangeInstructions', function() {
      it('should call sendEmailChangeInstructions successfully', function(done) {
        //uncomment below and update the code to test sendEmailChangeInstructions
        //instance.sendEmailChangeInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMember', function() {
      it('should call updateMember successfully', function(done) {
        //uncomment below and update the code to test updateMember
        //instance.updateMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMemberCulture', function() {
      it('should call updateMemberCulture successfully', function(done) {
        //uncomment below and update the code to test updateMemberCulture
        //instance.updateMemberCulture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
