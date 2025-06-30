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
 * The DeepLinkDto model module.
 * @module models/DeepLinkDto
 * @version 3.2.0
 */
class DeepLinkDto {
    /**
     * Constructs a new <code>DeepLinkDto</code>.
     * The deep link parameters.
     * @alias module:models/DeepLinkDto
     */
    constructor() { 
        
        DeepLinkDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeepLinkDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeepLinkDto} obj Optional instance to populate.
     * @return {module:models/DeepLinkDto} The populated <code>DeepLinkDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeepLinkDto();

            if (data.hasOwnProperty('androidPackageName')) {
                obj['androidPackageName'] = ApiClient.convertToType(data['androidPackageName'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('iosPackageId')) {
                obj['iosPackageId'] = ApiClient.convertToType(data['iosPackageId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeepLinkDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeepLinkDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['androidPackageName'] && !(typeof data['androidPackageName'] === 'string' || data['androidPackageName'] instanceof String)) {
            throw new Error("Expected the field `androidPackageName` to be a primitive type in the JSON string but got " + data['androidPackageName']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['iosPackageId'] && !(typeof data['iosPackageId'] === 'string' || data['iosPackageId'] instanceof String)) {
            throw new Error("Expected the field `iosPackageId` to be a primitive type in the JSON string but got " + data['iosPackageId']);
        }

        return true;
    }


}



/**
 * The Android package name.
 * @member {String} androidPackageName
 */
DeepLinkDto.prototype['androidPackageName'] = undefined;

/**
 * The deep link URL.
 * @member {String} url
 */
DeepLinkDto.prototype['url'] = undefined;

/**
 * The deep link IOS package ID.
 * @member {String} iosPackageId
 */
DeepLinkDto.prototype['iosPackageId'] = undefined;






export default DeepLinkDto;

