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
 * The CustomNavigationItem model module.
 * @module models/CustomNavigationItem
 * @version 3.2.0
 */
class CustomNavigationItem {
    /**
     * Constructs a new <code>CustomNavigationItem</code>.
     * The custom navigation item parameters.
     * @alias module:models/CustomNavigationItem
     */
    constructor() { 
        
        CustomNavigationItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomNavigationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomNavigationItem} obj Optional instance to populate.
     * @return {module:models/CustomNavigationItem} The populated <code>CustomNavigationItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomNavigationItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('bigImg')) {
                obj['bigImg'] = ApiClient.convertToType(data['bigImg'], 'String');
            }
            if (data.hasOwnProperty('smallImg')) {
                obj['smallImg'] = ApiClient.convertToType(data['smallImg'], 'String');
            }
            if (data.hasOwnProperty('showInMenu')) {
                obj['showInMenu'] = ApiClient.convertToType(data['showInMenu'], 'Boolean');
            }
            if (data.hasOwnProperty('showOnHomePage')) {
                obj['showOnHomePage'] = ApiClient.convertToType(data['showOnHomePage'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomNavigationItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomNavigationItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['bigImg'] && !(typeof data['bigImg'] === 'string' || data['bigImg'] instanceof String)) {
            throw new Error("Expected the field `bigImg` to be a primitive type in the JSON string but got " + data['bigImg']);
        }
        // ensure the json data is a string
        if (data['smallImg'] && !(typeof data['smallImg'] === 'string' || data['smallImg'] instanceof String)) {
            throw new Error("Expected the field `smallImg` to be a primitive type in the JSON string but got " + data['smallImg']);
        }

        return true;
    }


}



/**
 * The ID of the custom navigation item.
 * @member {String} id
 */
CustomNavigationItem.prototype['id'] = undefined;

/**
 * The label of the custom navigation item.
 * @member {String} label
 */
CustomNavigationItem.prototype['label'] = undefined;

/**
 * The URL of the custom navigation item.
 * @member {String} url
 */
CustomNavigationItem.prototype['url'] = undefined;

/**
 * The big image of the custom navigation item.
 * @member {String} bigImg
 */
CustomNavigationItem.prototype['bigImg'] = undefined;

/**
 * The small image of the custom navigation item.
 * @member {String} smallImg
 */
CustomNavigationItem.prototype['smallImg'] = undefined;

/**
 * Specifies whether to show the custom navigation item in menu or not.
 * @member {Boolean} showInMenu
 */
CustomNavigationItem.prototype['showInMenu'] = undefined;

/**
 * Specifies whether to show the custom navigation item on home page or not.
 * @member {Boolean} showOnHomePage
 */
CustomNavigationItem.prototype['showOnHomePage'] = undefined;






export default CustomNavigationItem;

