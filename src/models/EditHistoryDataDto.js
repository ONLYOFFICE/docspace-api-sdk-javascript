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
import EditHistoryUrl from './EditHistoryUrl';

/**
 * The EditHistoryDataDto model module.
 * @module models/EditHistoryDataDto
 * @version 3.2.0
 */
class EditHistoryDataDto {
    /**
     * Constructs a new <code>EditHistoryDataDto</code>.
     * The file editing history data.
     * @alias module:models/EditHistoryDataDto
     */
    constructor() { 
        
        EditHistoryDataDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditHistoryDataDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EditHistoryDataDto} obj Optional instance to populate.
     * @return {module:models/EditHistoryDataDto} The populated <code>EditHistoryDataDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditHistoryDataDto();

            if (data.hasOwnProperty('changesUrl')) {
                obj['changesUrl'] = ApiClient.convertToType(data['changesUrl'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = EditHistoryUrl.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditHistoryDataDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditHistoryDataDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['changesUrl'] && !(typeof data['changesUrl'] === 'string' || data['changesUrl'] instanceof String)) {
            throw new Error("Expected the field `changesUrl` to be a primitive type in the JSON string but got " + data['changesUrl']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // validate the optional field `previous`
        if (data['previous']) { // data not null
          EditHistoryUrl.validateJSON(data['previous']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['fileType'] && !(typeof data['fileType'] === 'string' || data['fileType'] instanceof String)) {
            throw new Error("Expected the field `fileType` to be a primitive type in the JSON string but got " + data['fileType']);
        }

        return true;
    }


}



/**
 * The URL address of the file with the document changes data.
 * @member {String} changesUrl
 */
EditHistoryDataDto.prototype['changesUrl'] = undefined;

/**
 * The document identifier used to unambiguously identify the document file.
 * @member {String} key
 */
EditHistoryDataDto.prototype['key'] = undefined;

/**
 * @member {module:models/EditHistoryUrl} previous
 */
EditHistoryDataDto.prototype['previous'] = undefined;

/**
 * The encrypted signature added to the parameter in the form of a token.
 * @member {String} token
 */
EditHistoryDataDto.prototype['token'] = undefined;

/**
 * The URL address of the current document version.
 * @member {String} url
 */
EditHistoryDataDto.prototype['url'] = undefined;

/**
 * The document version number.
 * @member {Number} version
 */
EditHistoryDataDto.prototype['version'] = undefined;

/**
 * The document extension.
 * @member {String} fileType
 */
EditHistoryDataDto.prototype['fileType'] = undefined;






export default EditHistoryDataDto;

