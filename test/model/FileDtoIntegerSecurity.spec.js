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
    instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
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

  describe('FileDtoIntegerSecurity', function() {
    it('should create an instance of FileDtoIntegerSecurity', function() {
      // uncomment below and update the code to test FileDtoIntegerSecurity
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be.a(DocspaceApiJavascript.FileDtoIntegerSecurity);
    });

    it('should have the property read (base name: "Read")', function() {
      // uncomment below and update the code to test the property read
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "Comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property fillForms (base name: "FillForms")', function() {
      // uncomment below and update the code to test the property fillForms
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property review (base name: "Review")', function() {
      // uncomment below and update the code to test the property review
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property create (base name: "Create")', function() {
      // uncomment below and update the code to test the property create
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property createFrom (base name: "CreateFrom")', function() {
      // uncomment below and update the code to test the property createFrom
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property edit (base name: "Edit")', function() {
      // uncomment below and update the code to test the property edit
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "Delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property customFilter (base name: "CustomFilter")', function() {
      // uncomment below and update the code to test the property customFilter
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editRoom (base name: "EditRoom")', function() {
      // uncomment below and update the code to test the property editRoom
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property rename (base name: "Rename")', function() {
      // uncomment below and update the code to test the property rename
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property readHistory (base name: "ReadHistory")', function() {
      // uncomment below and update the code to test the property readHistory
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property lock (base name: "Lock")', function() {
      // uncomment below and update the code to test the property lock
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editHistory (base name: "EditHistory")', function() {
      // uncomment below and update the code to test the property editHistory
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copyTo (base name: "CopyTo")', function() {
      // uncomment below and update the code to test the property copyTo
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copy (base name: "Copy")', function() {
      // uncomment below and update the code to test the property copy
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property moveTo (base name: "MoveTo")', function() {
      // uncomment below and update the code to test the property moveTo
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property move (base name: "Move")', function() {
      // uncomment below and update the code to test the property move
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property pin (base name: "Pin")', function() {
      // uncomment below and update the code to test the property pin
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "Mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editAccess (base name: "EditAccess")', function() {
      // uncomment below and update the code to test the property editAccess
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property duplicate (base name: "Duplicate")', function() {
      // uncomment below and update the code to test the property duplicate
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property submitToFormGallery (base name: "SubmitToFormGallery")', function() {
      // uncomment below and update the code to test the property submitToFormGallery
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property download (base name: "Download")', function() {
      // uncomment below and update the code to test the property download
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property convert (base name: "Convert")', function() {
      // uncomment below and update the code to test the property convert
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copySharedLink (base name: "CopySharedLink")', function() {
      // uncomment below and update the code to test the property copySharedLink
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property readLinks (base name: "ReadLinks")', function() {
      // uncomment below and update the code to test the property readLinks
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property reconnect (base name: "Reconnect")', function() {
      // uncomment below and update the code to test the property reconnect
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property createRoomFrom (base name: "CreateRoomFrom")', function() {
      // uncomment below and update the code to test the property createRoomFrom
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copyLink (base name: "CopyLink")', function() {
      // uncomment below and update the code to test the property copyLink
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property embed (base name: "Embed")', function() {
      // uncomment below and update the code to test the property embed
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property changeOwner (base name: "ChangeOwner")', function() {
      // uncomment below and update the code to test the property changeOwner
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property indexExport (base name: "IndexExport")', function() {
      // uncomment below and update the code to test the property indexExport
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property startFilling (base name: "StartFilling")', function() {
      // uncomment below and update the code to test the property startFilling
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property fillingStatus (base name: "FillingStatus")', function() {
      // uncomment below and update the code to test the property fillingStatus
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property resetFilling (base name: "ResetFilling")', function() {
      // uncomment below and update the code to test the property resetFilling
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property stopFilling (base name: "StopFilling")', function() {
      // uncomment below and update the code to test the property stopFilling
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property openForm (base name: "OpenForm")', function() {
      // uncomment below and update the code to test the property openForm
      //var instance = new DocspaceApiJavascript.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

  });

}));
