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
import CopyAsJsonElementDestFolderId from './CopyAsJsonElementDestFolderId';

/**
 * The CopyAsJsonElement model module.
 * @module models/CopyAsJsonElement
 * @version 3.2.0
 */
class CopyAsJsonElement {
    /**
     * Constructs a new <code>CopyAsJsonElement</code>.
     * The parameters for copying a file.
     * @alias module:models/CopyAsJsonElement
     * @param destTitle {String} The copied file name.
     * @param destFolderId {module:models/CopyAsJsonElementDestFolderId} 
     */
    constructor(destTitle, destFolderId) { 
        
        CopyAsJsonElement.initialize(this, destTitle, destFolderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destTitle, destFolderId) { 
        obj['destTitle'] = destTitle;
        obj['destFolderId'] = destFolderId;
    }

    /**
     * Constructs a <code>CopyAsJsonElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CopyAsJsonElement} obj Optional instance to populate.
     * @return {module:models/CopyAsJsonElement} The populated <code>CopyAsJsonElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyAsJsonElement();

            if (data.hasOwnProperty('destTitle')) {
                obj['destTitle'] = ApiClient.convertToType(data['destTitle'], 'String');
            }
            if (data.hasOwnProperty('destFolderId')) {
                obj['destFolderId'] = CopyAsJsonElementDestFolderId.constructFromObject(data['destFolderId']);
            }
            if (data.hasOwnProperty('enableExternalExt')) {
                obj['enableExternalExt'] = ApiClient.convertToType(data['enableExternalExt'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('toForm')) {
                obj['toForm'] = ApiClient.convertToType(data['toForm'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopyAsJsonElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopyAsJsonElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CopyAsJsonElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['destTitle'] && !(typeof data['destTitle'] === 'string' || data['destTitle'] instanceof String)) {
            throw new Error("Expected the field `destTitle` to be a primitive type in the JSON string but got " + data['destTitle']);
        }
        // validate the optional field `destFolderId`
        if (data['destFolderId']) { // data not null
          CopyAsJsonElementDestFolderId.validateJSON(data['destFolderId']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

CopyAsJsonElement.RequiredProperties = ["destTitle", "destFolderId"];

/**
 * The copied file name.
 * @member {String} destTitle
 */
CopyAsJsonElement.prototype['destTitle'] = undefined;

/**
 * @member {module:models/CopyAsJsonElementDestFolderId} destFolderId
 */
CopyAsJsonElement.prototype['destFolderId'] = undefined;

/**
 * Specifies whether to allow creating the copied file of an external extension or not.
 * @member {Boolean} enableExternalExt
 */
CopyAsJsonElement.prototype['enableExternalExt'] = undefined;

/**
 * The copied file password.
 * @member {String} password
 */
CopyAsJsonElement.prototype['password'] = undefined;

/**
 * Specifies whether to convert the file to form or not.
 * @member {Boolean} toForm
 */
CopyAsJsonElement.prototype['toForm'] = undefined;






export default CopyAsJsonElement;

