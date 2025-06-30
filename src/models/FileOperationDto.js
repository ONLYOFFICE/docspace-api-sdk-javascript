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
import FileEntryDto from './FileEntryDto';
import FileOperationType from './FileOperationType';

/**
 * The FileOperationDto model module.
 * @module models/FileOperationDto
 * @version 3.2.0
 */
class FileOperationDto {
    /**
     * Constructs a new <code>FileOperationDto</code>.
     * The file operation information.
     * @alias module:models/FileOperationDto
     */
    constructor() { 
        
        FileOperationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileOperationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileOperationDto} obj Optional instance to populate.
     * @return {module:models/FileOperationDto} The populated <code>FileOperationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileOperationDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = FileOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('processed')) {
                obj['processed'] = ApiClient.convertToType(data['processed'], 'String');
            }
            if (data.hasOwnProperty('finished')) {
                obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileEntryDto]);
            }
            if (data.hasOwnProperty('folders')) {
                obj['folders'] = ApiClient.convertToType(data['folders'], [FileEntryDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileOperationDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileOperationDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['processed'] && !(typeof data['processed'] === 'string' || data['processed'] instanceof String)) {
            throw new Error("Expected the field `processed` to be a primitive type in the JSON string but got " + data['processed']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                FileEntryDto.validateJSON(item);
            };
        }
        if (data['folders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['folders'])) {
                throw new Error("Expected the field `folders` to be an array in the JSON data but got " + data['folders']);
            }
            // validate the optional field `folders` (array)
            for (const item of data['folders']) {
                FileEntryDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The file operation ID.
 * @member {String} id
 */
FileOperationDto.prototype['id'] = undefined;

/**
 * @member {module:models/FileOperationType} Operation
 */
FileOperationDto.prototype['Operation'] = undefined;

/**
 * The file operation progress in percentage.
 * @member {Number} progress
 */
FileOperationDto.prototype['progress'] = undefined;

/**
 * The file operation error message.
 * @member {String} error
 */
FileOperationDto.prototype['error'] = undefined;

/**
 * The file operation processing status.
 * @member {String} processed
 */
FileOperationDto.prototype['processed'] = undefined;

/**
 * Specifies if the file operation is finished or not.
 * @member {Boolean} finished
 */
FileOperationDto.prototype['finished'] = undefined;

/**
 * The file operation URL.
 * @member {String} url
 */
FileOperationDto.prototype['url'] = undefined;

/**
 * The list of files of the file operation.
 * @member {Array.<module:models/FileEntryDto>} files
 */
FileOperationDto.prototype['files'] = undefined;

/**
 * The list of folders of the file operation.
 * @member {Array.<module:models/FileEntryDto>} folders
 */
FileOperationDto.prototype['folders'] = undefined;






export default FileOperationDto;

