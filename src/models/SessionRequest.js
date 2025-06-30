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
import ApiDateTime from './ApiDateTime';

/**
 * The SessionRequest model module.
 * @module models/SessionRequest
 * @version 3.2.0
 */
class SessionRequest {
    /**
     * Constructs a new <code>SessionRequest</code>.
     * The session request parameters.
     * @alias module:models/SessionRequest
     * @param fileName {String} The file name.
     */
    constructor(fileName) { 
        
        SessionRequest.initialize(this, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileName) { 
        obj['fileName'] = fileName;
    }

    /**
     * Constructs a <code>SessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SessionRequest} obj Optional instance to populate.
     * @return {module:models/SessionRequest} The populated <code>SessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SessionRequest();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('relativePath')) {
                obj['relativePath'] = ApiClient.convertToType(data['relativePath'], 'String');
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiDateTime.constructFromObject(data['createOn']);
            }
            if (data.hasOwnProperty('encrypted')) {
                obj['encrypted'] = ApiClient.convertToType(data['encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SessionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SessionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SessionRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['relativePath'] && !(typeof data['relativePath'] === 'string' || data['relativePath'] instanceof String)) {
            throw new Error("Expected the field `relativePath` to be a primitive type in the JSON string but got " + data['relativePath']);
        }
        // validate the optional field `createOn`
        if (data['createOn']) { // data not null
          ApiDateTime.validateJSON(data['createOn']);
        }

        return true;
    }


}

SessionRequest.RequiredProperties = ["fileName"];

/**
 * The file name.
 * @member {String} fileName
 */
SessionRequest.prototype['fileName'] = undefined;

/**
 * The file size.
 * @member {Number} fileSize
 */
SessionRequest.prototype['fileSize'] = undefined;

/**
 * The relative path to the file.
 * @member {String} relativePath
 */
SessionRequest.prototype['relativePath'] = undefined;

/**
 * @member {module:models/ApiDateTime} createOn
 */
SessionRequest.prototype['createOn'] = undefined;

/**
 * Specifies whether the file is encrypted or not.
 * @member {Boolean} encrypted
 */
SessionRequest.prototype['encrypted'] = undefined;

/**
 * Specifies whether to create a new file if it already exists.
 * @member {Boolean} createNewIfExist
 */
SessionRequest.prototype['createNewIfExist'] = undefined;






export default SessionRequest;

