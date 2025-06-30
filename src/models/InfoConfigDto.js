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
import AceShortWrapper from './AceShortWrapper';
import EditorType from './EditorType';

/**
 * The InfoConfigDto model module.
 * @module models/InfoConfigDto
 * @version 3.2.0
 */
class InfoConfigDto {
    /**
     * Constructs a new <code>InfoConfigDto</code>.
     * The information config parameters.
     * @alias module:models/InfoConfigDto
     */
    constructor() { 
        
        InfoConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InfoConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InfoConfigDto} obj Optional instance to populate.
     * @return {module:models/InfoConfigDto} The populated <code>InfoConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InfoConfigDto();

            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('sharingSettings')) {
                obj['sharingSettings'] = ApiClient.convertToType(data['sharingSettings'], [AceShortWrapper]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EditorType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('uploaded')) {
                obj['uploaded'] = ApiClient.convertToType(data['uploaded'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InfoConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InfoConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        if (data['sharingSettings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sharingSettings'])) {
                throw new Error("Expected the field `sharingSettings` to be an array in the JSON data but got " + data['sharingSettings']);
            }
            // validate the optional field `sharingSettings` (array)
            for (const item of data['sharingSettings']) {
                AceShortWrapper.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['uploaded'] && !(typeof data['uploaded'] === 'string' || data['uploaded'] instanceof String)) {
            throw new Error("Expected the field `uploaded` to be a primitive type in the JSON string but got " + data['uploaded']);
        }

        return true;
    }


}



/**
 * Specifies if the file is favorite or not.
 * @member {Boolean} favorite
 */
InfoConfigDto.prototype['favorite'] = undefined;

/**
 * The folder of the file.
 * @member {String} folder
 */
InfoConfigDto.prototype['folder'] = undefined;

/**
 * The file owner.
 * @member {String} owner
 */
InfoConfigDto.prototype['owner'] = undefined;

/**
 * The sharing settings of the file.
 * @member {Array.<module:models/AceShortWrapper>} sharingSettings
 */
InfoConfigDto.prototype['sharingSettings'] = undefined;

/**
 * @member {module:models/EditorType} type
 */
InfoConfigDto.prototype['type'] = undefined;

/**
 * The uploaded file.
 * @member {String} uploaded
 */
InfoConfigDto.prototype['uploaded'] = undefined;






export default InfoConfigDto;

