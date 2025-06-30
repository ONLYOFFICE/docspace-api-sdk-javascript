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
import FileReferenceData from './FileReferenceData';
import InfoConfigDto from './InfoConfigDto';
import Options from './Options';
import PermissionsConfig from './PermissionsConfig';

/**
 * The DocumentConfigDto model module.
 * @module models/DocumentConfigDto
 * @version 3.2.0
 */
class DocumentConfigDto {
    /**
     * Constructs a new <code>DocumentConfigDto</code>.
     * The document config parameters.
     * @alias module:models/DocumentConfigDto
     */
    constructor() { 
        
        DocumentConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DocumentConfigDto} obj Optional instance to populate.
     * @return {module:models/DocumentConfigDto} The populated <code>DocumentConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentConfigDto();

            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = InfoConfigDto.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('isLinkedForMe')) {
                obj['isLinkedForMe'] = ApiClient.convertToType(data['isLinkedForMe'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = PermissionsConfig.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('sharedLinkParam')) {
                obj['sharedLinkParam'] = ApiClient.convertToType(data['sharedLinkParam'], 'String');
            }
            if (data.hasOwnProperty('sharedLinkKey')) {
                obj['sharedLinkKey'] = ApiClient.convertToType(data['sharedLinkKey'], 'String');
            }
            if (data.hasOwnProperty('referenceData')) {
                obj['referenceData'] = FileReferenceData.constructFromObject(data['referenceData']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('isForm')) {
                obj['isForm'] = ApiClient.convertToType(data['isForm'], 'Boolean');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = Options.constructFromObject(data['options']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileType'] && !(typeof data['fileType'] === 'string' || data['fileType'] instanceof String)) {
            throw new Error("Expected the field `fileType` to be a primitive type in the JSON string but got " + data['fileType']);
        }
        // validate the optional field `info`
        if (data['info']) { // data not null
          InfoConfigDto.validateJSON(data['info']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          PermissionsConfig.validateJSON(data['permissions']);
        }
        // ensure the json data is a string
        if (data['sharedLinkParam'] && !(typeof data['sharedLinkParam'] === 'string' || data['sharedLinkParam'] instanceof String)) {
            throw new Error("Expected the field `sharedLinkParam` to be a primitive type in the JSON string but got " + data['sharedLinkParam']);
        }
        // ensure the json data is a string
        if (data['sharedLinkKey'] && !(typeof data['sharedLinkKey'] === 'string' || data['sharedLinkKey'] instanceof String)) {
            throw new Error("Expected the field `sharedLinkKey` to be a primitive type in the JSON string but got " + data['sharedLinkKey']);
        }
        // validate the optional field `referenceData`
        if (data['referenceData']) { // data not null
          FileReferenceData.validateJSON(data['referenceData']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `options`
        if (data['options']) { // data not null
          Options.validateJSON(data['options']);
        }

        return true;
    }


}



/**
 * The file type of the document.
 * @member {String} fileType
 */
DocumentConfigDto.prototype['fileType'] = undefined;

/**
 * @member {module:models/InfoConfigDto} info
 */
DocumentConfigDto.prototype['info'] = undefined;

/**
 * Specifies if the documnet is linked for current user.
 * @member {Boolean} isLinkedForMe
 */
DocumentConfigDto.prototype['isLinkedForMe'] = undefined;

/**
 * The document key.
 * @member {String} key
 */
DocumentConfigDto.prototype['key'] = undefined;

/**
 * @member {module:models/PermissionsConfig} permissions
 */
DocumentConfigDto.prototype['permissions'] = undefined;

/**
 * The shared link parameter of the document.
 * @member {String} sharedLinkParam
 */
DocumentConfigDto.prototype['sharedLinkParam'] = undefined;

/**
 * The shared link key of the document.
 * @member {String} sharedLinkKey
 */
DocumentConfigDto.prototype['sharedLinkKey'] = undefined;

/**
 * @member {module:models/FileReferenceData} referenceData
 */
DocumentConfigDto.prototype['referenceData'] = undefined;

/**
 * The document title.
 * @member {String} title
 */
DocumentConfigDto.prototype['title'] = undefined;

/**
 * The document url.
 * @member {String} url
 */
DocumentConfigDto.prototype['url'] = undefined;

/**
 * Indicates whether this is a form.
 * @member {Boolean} isForm
 */
DocumentConfigDto.prototype['isForm'] = undefined;

/**
 * @member {module:models/Options} options
 */
DocumentConfigDto.prototype['options'] = undefined;






export default DocumentConfigDto;

