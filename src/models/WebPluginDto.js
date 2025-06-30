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
import EmployeeDto from './EmployeeDto';

/**
 * The WebPluginDto model module.
 * @module models/WebPluginDto
 * @version 3.2.0
 */
class WebPluginDto {
    /**
     * Constructs a new <code>WebPluginDto</code>.
     * The web plugin information.
     * @alias module:models/WebPluginDto
     */
    constructor() { 
        
        WebPluginDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebPluginDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebPluginDto} obj Optional instance to populate.
     * @return {module:models/WebPluginDto} The populated <code>WebPluginDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebPluginDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('homePage')) {
                obj['homePage'] = ApiClient.convertToType(data['homePage'], 'String');
            }
            if (data.hasOwnProperty('pluginName')) {
                obj['pluginName'] = ApiClient.convertToType(data['pluginName'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('createBy')) {
                obj['createBy'] = EmployeeDto.constructFromObject(data['createBy']);
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiClient.convertToType(data['createOn'], 'Date');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebPluginDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebPluginDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['license'] && !(typeof data['license'] === 'string' || data['license'] instanceof String)) {
            throw new Error("Expected the field `license` to be a primitive type in the JSON string but got " + data['license']);
        }
        // ensure the json data is a string
        if (data['author'] && !(typeof data['author'] === 'string' || data['author'] instanceof String)) {
            throw new Error("Expected the field `author` to be a primitive type in the JSON string but got " + data['author']);
        }
        // ensure the json data is a string
        if (data['homePage'] && !(typeof data['homePage'] === 'string' || data['homePage'] instanceof String)) {
            throw new Error("Expected the field `homePage` to be a primitive type in the JSON string but got " + data['homePage']);
        }
        // ensure the json data is a string
        if (data['pluginName'] && !(typeof data['pluginName'] === 'string' || data['pluginName'] instanceof String)) {
            throw new Error("Expected the field `pluginName` to be a primitive type in the JSON string but got " + data['pluginName']);
        }
        // ensure the json data is a string
        if (data['scopes'] && !(typeof data['scopes'] === 'string' || data['scopes'] instanceof String)) {
            throw new Error("Expected the field `scopes` to be a primitive type in the JSON string but got " + data['scopes']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // validate the optional field `createBy`
        if (data['createBy']) { // data not null
          EmployeeDto.validateJSON(data['createBy']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['settings'] && !(typeof data['settings'] === 'string' || data['settings'] instanceof String)) {
            throw new Error("Expected the field `settings` to be a primitive type in the JSON string but got " + data['settings']);
        }

        return true;
    }


}



/**
 * The web plugin name.
 * @member {String} name
 */
WebPluginDto.prototype['name'] = undefined;

/**
 * The web plugin version.
 * @member {String} version
 */
WebPluginDto.prototype['version'] = undefined;

/**
 * The web plugin description.
 * @member {String} description
 */
WebPluginDto.prototype['description'] = undefined;

/**
 * The web plugin license.
 * @member {String} license
 */
WebPluginDto.prototype['license'] = undefined;

/**
 * The web plugin author.
 * @member {String} author
 */
WebPluginDto.prototype['author'] = undefined;

/**
 * The web plugin home page URL.
 * @member {String} homePage
 */
WebPluginDto.prototype['homePage'] = undefined;

/**
 * The name by which the web plugin is registered in the window object.
 * @member {String} pluginName
 */
WebPluginDto.prototype['pluginName'] = undefined;

/**
 * The web plugin scopes.
 * @member {String} scopes
 */
WebPluginDto.prototype['scopes'] = undefined;

/**
 * The web plugin image.
 * @member {String} image
 */
WebPluginDto.prototype['image'] = undefined;

/**
 * @member {module:models/EmployeeDto} createBy
 */
WebPluginDto.prototype['createBy'] = undefined;

/**
 * The date and time when the web plugin was created.
 * @member {Date} createOn
 */
WebPluginDto.prototype['createOn'] = undefined;

/**
 * Specifies if the web plugin is enabled or not.
 * @member {Boolean} enabled
 */
WebPluginDto.prototype['enabled'] = undefined;

/**
 * Specifies if the web plugin is system or not.
 * @member {Boolean} system
 */
WebPluginDto.prototype['system'] = undefined;

/**
 * The web plugin URL.
 * @member {String} url
 */
WebPluginDto.prototype['url'] = undefined;

/**
 * The web plugin settings.
 * @member {String} settings
 */
WebPluginDto.prototype['settings'] = undefined;






export default WebPluginDto;

