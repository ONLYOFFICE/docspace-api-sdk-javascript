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
 * The GetReferenceDataDtoInteger model module.
 * @module models/GetReferenceDataDtoInteger
 * @version 3.2.0
 */
class GetReferenceDataDtoInteger {
    /**
     * Constructs a new <code>GetReferenceDataDtoInteger</code>.
     * The request parameters for getting reference data.
     * @alias module:models/GetReferenceDataDtoInteger
     * @param fileKey {String} The unique document identifier used by the service to get a link to the file.
     */
    constructor(fileKey) { 
        
        GetReferenceDataDtoInteger.initialize(this, fileKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileKey) { 
        obj['fileKey'] = fileKey;
    }

    /**
     * Constructs a <code>GetReferenceDataDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GetReferenceDataDtoInteger} obj Optional instance to populate.
     * @return {module:models/GetReferenceDataDtoInteger} The populated <code>GetReferenceDataDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReferenceDataDtoInteger();

            if (data.hasOwnProperty('fileKey')) {
                obj['fileKey'] = ApiClient.convertToType(data['fileKey'], 'String');
            }
            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
            }
            if (data.hasOwnProperty('sourceFileId')) {
                obj['sourceFileId'] = ApiClient.convertToType(data['sourceFileId'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetReferenceDataDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetReferenceDataDtoInteger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetReferenceDataDtoInteger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fileKey'] && !(typeof data['fileKey'] === 'string' || data['fileKey'] instanceof String)) {
            throw new Error("Expected the field `fileKey` to be a primitive type in the JSON string but got " + data['fileKey']);
        }
        // ensure the json data is a string
        if (data['instanceId'] && !(typeof data['instanceId'] === 'string' || data['instanceId'] instanceof String)) {
            throw new Error("Expected the field `instanceId` to be a primitive type in the JSON string but got " + data['instanceId']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }

        return true;
    }


}

GetReferenceDataDtoInteger.RequiredProperties = ["fileKey"];

/**
 * The unique document identifier used by the service to get a link to the file.
 * @member {String} fileKey
 */
GetReferenceDataDtoInteger.prototype['fileKey'] = undefined;

/**
 * The unique system identifier.
 * @member {String} instanceId
 */
GetReferenceDataDtoInteger.prototype['instanceId'] = undefined;

/**
 * The source file ID.
 * @member {Number} sourceFileId
 */
GetReferenceDataDtoInteger.prototype['sourceFileId'] = undefined;

/**
 * The file name or relative path for the formula editor.
 * @member {String} path
 */
GetReferenceDataDtoInteger.prototype['path'] = undefined;

/**
 * The file link.
 * @member {String} link
 */
GetReferenceDataDtoInteger.prototype['link'] = undefined;






export default GetReferenceDataDtoInteger;

