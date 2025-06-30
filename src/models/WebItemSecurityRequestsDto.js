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
 * The WebItemSecurityRequestsDto model module.
 * @module models/WebItemSecurityRequestsDto
 * @version 3.2.0
 */
class WebItemSecurityRequestsDto {
    /**
     * Constructs a new <code>WebItemSecurityRequestsDto</code>.
     * The request parameters for configuring security settings of a single web module.
     * @alias module:models/WebItemSecurityRequestsDto
     * @param id {String} The module ID.
     */
    constructor(id) { 
        
        WebItemSecurityRequestsDto.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>WebItemSecurityRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebItemSecurityRequestsDto} obj Optional instance to populate.
     * @return {module:models/WebItemSecurityRequestsDto} The populated <code>WebItemSecurityRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebItemSecurityRequestsDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebItemSecurityRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebItemSecurityRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebItemSecurityRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subjects'])) {
            throw new Error("Expected the field `subjects` to be an array in the JSON data but got " + data['subjects']);
        }

        return true;
    }


}

WebItemSecurityRequestsDto.RequiredProperties = ["id"];

/**
 * The module ID.
 * @member {String} id
 */
WebItemSecurityRequestsDto.prototype['id'] = undefined;

/**
 * Controls whether the security restrictions are enforced for this module.
 * @member {Boolean} enabled
 */
WebItemSecurityRequestsDto.prototype['enabled'] = undefined;

/**
 * The collection of user and group identifiers granted access to the module.
 * @member {Array.<String>} subjects
 */
WebItemSecurityRequestsDto.prototype['subjects'] = undefined;






export default WebItemSecurityRequestsDto;

