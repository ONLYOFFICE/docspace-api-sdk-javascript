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
 * The FormGalleryDto model module.
 * @module models/FormGalleryDto
 * @version 3.2.0
 */
class FormGalleryDto {
    /**
     * Constructs a new <code>FormGalleryDto</code>.
     * The form gallery parameters.
     * @alias module:models/FormGalleryDto
     */
    constructor() { 
        
        FormGalleryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormGalleryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FormGalleryDto} obj Optional instance to populate.
     * @return {module:models/FormGalleryDto} The populated <code>FormGalleryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormGalleryDto();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('ext')) {
                obj['ext'] = ApiClient.convertToType(data['ext'], 'String');
            }
            if (data.hasOwnProperty('uploadPath')) {
                obj['uploadPath'] = ApiClient.convertToType(data['uploadPath'], 'String');
            }
            if (data.hasOwnProperty('uploadDomain')) {
                obj['uploadDomain'] = ApiClient.convertToType(data['uploadDomain'], 'String');
            }
            if (data.hasOwnProperty('uploadExt')) {
                obj['uploadExt'] = ApiClient.convertToType(data['uploadExt'], 'String');
            }
            if (data.hasOwnProperty('uploadDashboard')) {
                obj['uploadDashboard'] = ApiClient.convertToType(data['uploadDashboard'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormGalleryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormGalleryDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['ext'] && !(typeof data['ext'] === 'string' || data['ext'] instanceof String)) {
            throw new Error("Expected the field `ext` to be a primitive type in the JSON string but got " + data['ext']);
        }
        // ensure the json data is a string
        if (data['uploadPath'] && !(typeof data['uploadPath'] === 'string' || data['uploadPath'] instanceof String)) {
            throw new Error("Expected the field `uploadPath` to be a primitive type in the JSON string but got " + data['uploadPath']);
        }
        // ensure the json data is a string
        if (data['uploadDomain'] && !(typeof data['uploadDomain'] === 'string' || data['uploadDomain'] instanceof String)) {
            throw new Error("Expected the field `uploadDomain` to be a primitive type in the JSON string but got " + data['uploadDomain']);
        }
        // ensure the json data is a string
        if (data['uploadExt'] && !(typeof data['uploadExt'] === 'string' || data['uploadExt'] instanceof String)) {
            throw new Error("Expected the field `uploadExt` to be a primitive type in the JSON string but got " + data['uploadExt']);
        }
        // ensure the json data is a string
        if (data['uploadDashboard'] && !(typeof data['uploadDashboard'] === 'string' || data['uploadDashboard'] instanceof String)) {
            throw new Error("Expected the field `uploadDashboard` to be a primitive type in the JSON string but got " + data['uploadDashboard']);
        }

        return true;
    }


}



/**
 * The form gallery path.
 * @member {String} path
 */
FormGalleryDto.prototype['path'] = undefined;

/**
 * The form gallery domain.
 * @member {String} domain
 */
FormGalleryDto.prototype['domain'] = undefined;

/**
 * The form gallery extension.
 * @member {String} ext
 */
FormGalleryDto.prototype['ext'] = undefined;

/**
 * The form gallery upload path.
 * @member {String} uploadPath
 */
FormGalleryDto.prototype['uploadPath'] = undefined;

/**
 * The form gallery upload domain.
 * @member {String} uploadDomain
 */
FormGalleryDto.prototype['uploadDomain'] = undefined;

/**
 * The form gallery upload extension.
 * @member {String} uploadExt
 */
FormGalleryDto.prototype['uploadExt'] = undefined;

/**
 * The form gallery upload dashboard.
 * @member {String} uploadDashboard
 */
FormGalleryDto.prototype['uploadDashboard'] = undefined;






export default FormGalleryDto;

