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
 * The OwnerIdSettingsRequestDto model module.
 * @module models/OwnerIdSettingsRequestDto
 * @version 3.2.0
 */
class OwnerIdSettingsRequestDto {
    /**
     * Constructs a new <code>OwnerIdSettingsRequestDto</code>.
     * The request parameters for managing the owner-specific settings.
     * @alias module:models/OwnerIdSettingsRequestDto
     * @param ownerId {String} The ID of the owner whose settings are being managed.
     */
    constructor(ownerId) { 
        
        OwnerIdSettingsRequestDto.initialize(this, ownerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ownerId) { 
        obj['ownerId'] = ownerId;
    }

    /**
     * Constructs a <code>OwnerIdSettingsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OwnerIdSettingsRequestDto} obj Optional instance to populate.
     * @return {module:models/OwnerIdSettingsRequestDto} The populated <code>OwnerIdSettingsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnerIdSettingsRequestDto();

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OwnerIdSettingsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OwnerIdSettingsRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OwnerIdSettingsRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }

        return true;
    }


}

OwnerIdSettingsRequestDto.RequiredProperties = ["ownerId"];

/**
 * The ID of the owner whose settings are being managed.
 * @member {String} ownerId
 */
OwnerIdSettingsRequestDto.prototype['ownerId'] = undefined;






export default OwnerIdSettingsRequestDto;

