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
import FileOperationType from './FileOperationType';

/**
 * The ConversationResultDto model module.
 * @module models/ConversationResultDto
 * @version 3.2.0
 */
class ConversationResultDto {
    /**
     * Constructs a new <code>ConversationResultDto</code>.
     * The result of file convertion operation.
     * @alias module:models/ConversationResultDto
     */
    constructor() { 
        
        ConversationResultDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationResultDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ConversationResultDto} obj Optional instance to populate.
     * @return {module:models/ConversationResultDto} The populated <code>ConversationResultDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationResultDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = FileOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('processed')) {
                obj['processed'] = ApiClient.convertToType(data['processed'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConversationResultDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConversationResultDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['processed'] && !(typeof data['processed'] === 'string' || data['processed'] instanceof String)) {
            throw new Error("Expected the field `processed` to be a primitive type in the JSON string but got " + data['processed']);
        }

        return true;
    }


}



/**
 * The conversion operation ID.
 * @member {String} id
 */
ConversationResultDto.prototype['id'] = undefined;

/**
 * @member {module:models/FileOperationType} Operation
 */
ConversationResultDto.prototype['Operation'] = undefined;

/**
 * The conversion operation progress.
 * @member {Number} progress
 */
ConversationResultDto.prototype['progress'] = undefined;

/**
 * The source file for the conversion.
 * @member {String} source
 */
ConversationResultDto.prototype['source'] = undefined;

/**
 * The resulting file after the conversion.
 * @member {Object} result
 */
ConversationResultDto.prototype['result'] = undefined;

/**
 * The conversion operation error message.
 * @member {String} error
 */
ConversationResultDto.prototype['error'] = undefined;

/**
 * Specifies if the conversion operation is processed or not.
 * @member {String} processed
 */
ConversationResultDto.prototype['processed'] = undefined;






export default ConversationResultDto;

