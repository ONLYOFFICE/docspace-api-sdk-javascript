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
import ApiClient from '../ApiClient';

/**
 * The FileDtoIntegerSecurity model module.
 * @module models/FileDtoIntegerSecurity
 * @version 3.2.0
 */
class FileDtoIntegerSecurity {
    /**
     * Constructs a new <code>FileDtoIntegerSecurity</code>.
     * The actions that can be perforrmed with the file entry.
     * @alias module:models/FileDtoIntegerSecurity
     */
    constructor() { 
        
        FileDtoIntegerSecurity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileDtoIntegerSecurity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileDtoIntegerSecurity} obj Optional instance to populate.
     * @return {module:models/FileDtoIntegerSecurity} The populated <code>FileDtoIntegerSecurity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileDtoIntegerSecurity();

            if (data.hasOwnProperty('Read')) {
                obj['Read'] = ApiClient.convertToType(data['Read'], 'Boolean');
            }
            if (data.hasOwnProperty('Comment')) {
                obj['Comment'] = ApiClient.convertToType(data['Comment'], 'Boolean');
            }
            if (data.hasOwnProperty('FillForms')) {
                obj['FillForms'] = ApiClient.convertToType(data['FillForms'], 'Boolean');
            }
            if (data.hasOwnProperty('Review')) {
                obj['Review'] = ApiClient.convertToType(data['Review'], 'Boolean');
            }
            if (data.hasOwnProperty('Create')) {
                obj['Create'] = ApiClient.convertToType(data['Create'], 'Boolean');
            }
            if (data.hasOwnProperty('CreateFrom')) {
                obj['CreateFrom'] = ApiClient.convertToType(data['CreateFrom'], 'Boolean');
            }
            if (data.hasOwnProperty('Edit')) {
                obj['Edit'] = ApiClient.convertToType(data['Edit'], 'Boolean');
            }
            if (data.hasOwnProperty('Delete')) {
                obj['Delete'] = ApiClient.convertToType(data['Delete'], 'Boolean');
            }
            if (data.hasOwnProperty('CustomFilter')) {
                obj['CustomFilter'] = ApiClient.convertToType(data['CustomFilter'], 'Boolean');
            }
            if (data.hasOwnProperty('EditRoom')) {
                obj['EditRoom'] = ApiClient.convertToType(data['EditRoom'], 'Boolean');
            }
            if (data.hasOwnProperty('Rename')) {
                obj['Rename'] = ApiClient.convertToType(data['Rename'], 'Boolean');
            }
            if (data.hasOwnProperty('ReadHistory')) {
                obj['ReadHistory'] = ApiClient.convertToType(data['ReadHistory'], 'Boolean');
            }
            if (data.hasOwnProperty('Lock')) {
                obj['Lock'] = ApiClient.convertToType(data['Lock'], 'Boolean');
            }
            if (data.hasOwnProperty('EditHistory')) {
                obj['EditHistory'] = ApiClient.convertToType(data['EditHistory'], 'Boolean');
            }
            if (data.hasOwnProperty('CopyTo')) {
                obj['CopyTo'] = ApiClient.convertToType(data['CopyTo'], 'Boolean');
            }
            if (data.hasOwnProperty('Copy')) {
                obj['Copy'] = ApiClient.convertToType(data['Copy'], 'Boolean');
            }
            if (data.hasOwnProperty('MoveTo')) {
                obj['MoveTo'] = ApiClient.convertToType(data['MoveTo'], 'Boolean');
            }
            if (data.hasOwnProperty('Move')) {
                obj['Move'] = ApiClient.convertToType(data['Move'], 'Boolean');
            }
            if (data.hasOwnProperty('Pin')) {
                obj['Pin'] = ApiClient.convertToType(data['Pin'], 'Boolean');
            }
            if (data.hasOwnProperty('Mute')) {
                obj['Mute'] = ApiClient.convertToType(data['Mute'], 'Boolean');
            }
            if (data.hasOwnProperty('EditAccess')) {
                obj['EditAccess'] = ApiClient.convertToType(data['EditAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('Duplicate')) {
                obj['Duplicate'] = ApiClient.convertToType(data['Duplicate'], 'Boolean');
            }
            if (data.hasOwnProperty('SubmitToFormGallery')) {
                obj['SubmitToFormGallery'] = ApiClient.convertToType(data['SubmitToFormGallery'], 'Boolean');
            }
            if (data.hasOwnProperty('Download')) {
                obj['Download'] = ApiClient.convertToType(data['Download'], 'Boolean');
            }
            if (data.hasOwnProperty('Convert')) {
                obj['Convert'] = ApiClient.convertToType(data['Convert'], 'Boolean');
            }
            if (data.hasOwnProperty('CopySharedLink')) {
                obj['CopySharedLink'] = ApiClient.convertToType(data['CopySharedLink'], 'Boolean');
            }
            if (data.hasOwnProperty('ReadLinks')) {
                obj['ReadLinks'] = ApiClient.convertToType(data['ReadLinks'], 'Boolean');
            }
            if (data.hasOwnProperty('Reconnect')) {
                obj['Reconnect'] = ApiClient.convertToType(data['Reconnect'], 'Boolean');
            }
            if (data.hasOwnProperty('CreateRoomFrom')) {
                obj['CreateRoomFrom'] = ApiClient.convertToType(data['CreateRoomFrom'], 'Boolean');
            }
            if (data.hasOwnProperty('CopyLink')) {
                obj['CopyLink'] = ApiClient.convertToType(data['CopyLink'], 'Boolean');
            }
            if (data.hasOwnProperty('Embed')) {
                obj['Embed'] = ApiClient.convertToType(data['Embed'], 'Boolean');
            }
            if (data.hasOwnProperty('ChangeOwner')) {
                obj['ChangeOwner'] = ApiClient.convertToType(data['ChangeOwner'], 'Boolean');
            }
            if (data.hasOwnProperty('IndexExport')) {
                obj['IndexExport'] = ApiClient.convertToType(data['IndexExport'], 'Boolean');
            }
            if (data.hasOwnProperty('StartFilling')) {
                obj['StartFilling'] = ApiClient.convertToType(data['StartFilling'], 'Boolean');
            }
            if (data.hasOwnProperty('FillingStatus')) {
                obj['FillingStatus'] = ApiClient.convertToType(data['FillingStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('ResetFilling')) {
                obj['ResetFilling'] = ApiClient.convertToType(data['ResetFilling'], 'Boolean');
            }
            if (data.hasOwnProperty('StopFilling')) {
                obj['StopFilling'] = ApiClient.convertToType(data['StopFilling'], 'Boolean');
            }
            if (data.hasOwnProperty('OpenForm')) {
                obj['OpenForm'] = ApiClient.convertToType(data['OpenForm'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileDtoIntegerSecurity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileDtoIntegerSecurity</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} Read
 */
FileDtoIntegerSecurity.prototype['Read'] = undefined;

/**
 * @member {Boolean} Comment
 */
FileDtoIntegerSecurity.prototype['Comment'] = undefined;

/**
 * @member {Boolean} FillForms
 */
FileDtoIntegerSecurity.prototype['FillForms'] = undefined;

/**
 * @member {Boolean} Review
 */
FileDtoIntegerSecurity.prototype['Review'] = undefined;

/**
 * @member {Boolean} Create
 */
FileDtoIntegerSecurity.prototype['Create'] = undefined;

/**
 * @member {Boolean} CreateFrom
 */
FileDtoIntegerSecurity.prototype['CreateFrom'] = undefined;

/**
 * @member {Boolean} Edit
 */
FileDtoIntegerSecurity.prototype['Edit'] = undefined;

/**
 * @member {Boolean} Delete
 */
FileDtoIntegerSecurity.prototype['Delete'] = undefined;

/**
 * @member {Boolean} CustomFilter
 */
FileDtoIntegerSecurity.prototype['CustomFilter'] = undefined;

/**
 * @member {Boolean} EditRoom
 */
FileDtoIntegerSecurity.prototype['EditRoom'] = undefined;

/**
 * @member {Boolean} Rename
 */
FileDtoIntegerSecurity.prototype['Rename'] = undefined;

/**
 * @member {Boolean} ReadHistory
 */
FileDtoIntegerSecurity.prototype['ReadHistory'] = undefined;

/**
 * @member {Boolean} Lock
 */
FileDtoIntegerSecurity.prototype['Lock'] = undefined;

/**
 * @member {Boolean} EditHistory
 */
FileDtoIntegerSecurity.prototype['EditHistory'] = undefined;

/**
 * @member {Boolean} CopyTo
 */
FileDtoIntegerSecurity.prototype['CopyTo'] = undefined;

/**
 * @member {Boolean} Copy
 */
FileDtoIntegerSecurity.prototype['Copy'] = undefined;

/**
 * @member {Boolean} MoveTo
 */
FileDtoIntegerSecurity.prototype['MoveTo'] = undefined;

/**
 * @member {Boolean} Move
 */
FileDtoIntegerSecurity.prototype['Move'] = undefined;

/**
 * @member {Boolean} Pin
 */
FileDtoIntegerSecurity.prototype['Pin'] = undefined;

/**
 * @member {Boolean} Mute
 */
FileDtoIntegerSecurity.prototype['Mute'] = undefined;

/**
 * @member {Boolean} EditAccess
 */
FileDtoIntegerSecurity.prototype['EditAccess'] = undefined;

/**
 * @member {Boolean} Duplicate
 */
FileDtoIntegerSecurity.prototype['Duplicate'] = undefined;

/**
 * @member {Boolean} SubmitToFormGallery
 */
FileDtoIntegerSecurity.prototype['SubmitToFormGallery'] = undefined;

/**
 * @member {Boolean} Download
 */
FileDtoIntegerSecurity.prototype['Download'] = undefined;

/**
 * @member {Boolean} Convert
 */
FileDtoIntegerSecurity.prototype['Convert'] = undefined;

/**
 * @member {Boolean} CopySharedLink
 */
FileDtoIntegerSecurity.prototype['CopySharedLink'] = undefined;

/**
 * @member {Boolean} ReadLinks
 */
FileDtoIntegerSecurity.prototype['ReadLinks'] = undefined;

/**
 * @member {Boolean} Reconnect
 */
FileDtoIntegerSecurity.prototype['Reconnect'] = undefined;

/**
 * @member {Boolean} CreateRoomFrom
 */
FileDtoIntegerSecurity.prototype['CreateRoomFrom'] = undefined;

/**
 * @member {Boolean} CopyLink
 */
FileDtoIntegerSecurity.prototype['CopyLink'] = undefined;

/**
 * @member {Boolean} Embed
 */
FileDtoIntegerSecurity.prototype['Embed'] = undefined;

/**
 * @member {Boolean} ChangeOwner
 */
FileDtoIntegerSecurity.prototype['ChangeOwner'] = undefined;

/**
 * @member {Boolean} IndexExport
 */
FileDtoIntegerSecurity.prototype['IndexExport'] = undefined;

/**
 * @member {Boolean} StartFilling
 */
FileDtoIntegerSecurity.prototype['StartFilling'] = undefined;

/**
 * @member {Boolean} FillingStatus
 */
FileDtoIntegerSecurity.prototype['FillingStatus'] = undefined;

/**
 * @member {Boolean} ResetFilling
 */
FileDtoIntegerSecurity.prototype['ResetFilling'] = undefined;

/**
 * @member {Boolean} StopFilling
 */
FileDtoIntegerSecurity.prototype['StopFilling'] = undefined;

/**
 * @member {Boolean} OpenForm
 */
FileDtoIntegerSecurity.prototype['OpenForm'] = undefined;






export default FileDtoIntegerSecurity;

