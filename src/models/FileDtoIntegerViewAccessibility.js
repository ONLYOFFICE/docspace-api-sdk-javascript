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
 * The FileDtoIntegerViewAccessibility model module.
 * @module models/FileDtoIntegerViewAccessibility
 * @version 3.2.0
 */
class FileDtoIntegerViewAccessibility {
    /**
     * Constructs a new <code>FileDtoIntegerViewAccessibility</code>.
     * The file accessibility.
     * @alias module:models/FileDtoIntegerViewAccessibility
     */
    constructor() { 
        
        FileDtoIntegerViewAccessibility.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileDtoIntegerViewAccessibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileDtoIntegerViewAccessibility} obj Optional instance to populate.
     * @return {module:models/FileDtoIntegerViewAccessibility} The populated <code>FileDtoIntegerViewAccessibility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileDtoIntegerViewAccessibility();

            if (data.hasOwnProperty('ImageView')) {
                obj['ImageView'] = ApiClient.convertToType(data['ImageView'], 'Boolean');
            }
            if (data.hasOwnProperty('MediaView')) {
                obj['MediaView'] = ApiClient.convertToType(data['MediaView'], 'Boolean');
            }
            if (data.hasOwnProperty('WebView')) {
                obj['WebView'] = ApiClient.convertToType(data['WebView'], 'Boolean');
            }
            if (data.hasOwnProperty('WebEdit')) {
                obj['WebEdit'] = ApiClient.convertToType(data['WebEdit'], 'Boolean');
            }
            if (data.hasOwnProperty('WebReview')) {
                obj['WebReview'] = ApiClient.convertToType(data['WebReview'], 'Boolean');
            }
            if (data.hasOwnProperty('WebCustomFilterEditing')) {
                obj['WebCustomFilterEditing'] = ApiClient.convertToType(data['WebCustomFilterEditing'], 'Boolean');
            }
            if (data.hasOwnProperty('WebRestrictedEditing')) {
                obj['WebRestrictedEditing'] = ApiClient.convertToType(data['WebRestrictedEditing'], 'Boolean');
            }
            if (data.hasOwnProperty('WebComment')) {
                obj['WebComment'] = ApiClient.convertToType(data['WebComment'], 'Boolean');
            }
            if (data.hasOwnProperty('CoAuhtoring')) {
                obj['CoAuhtoring'] = ApiClient.convertToType(data['CoAuhtoring'], 'Boolean');
            }
            if (data.hasOwnProperty('CanConvert')) {
                obj['CanConvert'] = ApiClient.convertToType(data['CanConvert'], 'Boolean');
            }
            if (data.hasOwnProperty('MustConvert')) {
                obj['MustConvert'] = ApiClient.convertToType(data['MustConvert'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileDtoIntegerViewAccessibility</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileDtoIntegerViewAccessibility</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} ImageView
 */
FileDtoIntegerViewAccessibility.prototype['ImageView'] = undefined;

/**
 * @member {Boolean} MediaView
 */
FileDtoIntegerViewAccessibility.prototype['MediaView'] = undefined;

/**
 * @member {Boolean} WebView
 */
FileDtoIntegerViewAccessibility.prototype['WebView'] = undefined;

/**
 * @member {Boolean} WebEdit
 */
FileDtoIntegerViewAccessibility.prototype['WebEdit'] = undefined;

/**
 * @member {Boolean} WebReview
 */
FileDtoIntegerViewAccessibility.prototype['WebReview'] = undefined;

/**
 * @member {Boolean} WebCustomFilterEditing
 */
FileDtoIntegerViewAccessibility.prototype['WebCustomFilterEditing'] = undefined;

/**
 * @member {Boolean} WebRestrictedEditing
 */
FileDtoIntegerViewAccessibility.prototype['WebRestrictedEditing'] = undefined;

/**
 * @member {Boolean} WebComment
 */
FileDtoIntegerViewAccessibility.prototype['WebComment'] = undefined;

/**
 * @member {Boolean} CoAuhtoring
 */
FileDtoIntegerViewAccessibility.prototype['CoAuhtoring'] = undefined;

/**
 * @member {Boolean} CanConvert
 */
FileDtoIntegerViewAccessibility.prototype['CanConvert'] = undefined;

/**
 * @member {Boolean} MustConvert
 */
FileDtoIntegerViewAccessibility.prototype['MustConvert'] = undefined;






export default FileDtoIntegerViewAccessibility;

