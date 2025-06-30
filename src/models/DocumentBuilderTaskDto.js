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
import DistributedTaskStatus from './DistributedTaskStatus';

/**
 * The DocumentBuilderTaskDto model module.
 * @module models/DocumentBuilderTaskDto
 * @version 3.2.0
 */
class DocumentBuilderTaskDto {
    /**
     * Constructs a new <code>DocumentBuilderTaskDto</code>.
     * The document builder task parameters.
     * @alias module:models/DocumentBuilderTaskDto
     */
    constructor() { 
        
        DocumentBuilderTaskDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentBuilderTaskDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DocumentBuilderTaskDto} obj Optional instance to populate.
     * @return {module:models/DocumentBuilderTaskDto} The populated <code>DocumentBuilderTaskDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentBuilderTaskDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('isCompleted')) {
                obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = DistributedTaskStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('resultFileId')) {
                obj['resultFileId'] = ApiClient.convertToType(data['resultFileId'], Object);
            }
            if (data.hasOwnProperty('resultFileName')) {
                obj['resultFileName'] = ApiClient.convertToType(data['resultFileName'], 'String');
            }
            if (data.hasOwnProperty('resultFileUrl')) {
                obj['resultFileUrl'] = ApiClient.convertToType(data['resultFileUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentBuilderTaskDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentBuilderTaskDto</code>.
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
        if (data['resultFileName'] && !(typeof data['resultFileName'] === 'string' || data['resultFileName'] instanceof String)) {
            throw new Error("Expected the field `resultFileName` to be a primitive type in the JSON string but got " + data['resultFileName']);
        }
        // ensure the json data is a string
        if (data['resultFileUrl'] && !(typeof data['resultFileUrl'] === 'string' || data['resultFileUrl'] instanceof String)) {
            throw new Error("Expected the field `resultFileUrl` to be a primitive type in the JSON string but got " + data['resultFileUrl']);
        }

        return true;
    }


}



/**
 * The document builder ID.
 * @member {String} id
 */
DocumentBuilderTaskDto.prototype['id'] = undefined;

/**
 * The error message occured while the document building process.
 * @member {String} error
 */
DocumentBuilderTaskDto.prototype['error'] = undefined;

/**
 * The percentage of the progress of the document building process.
 * @member {Number} percentage
 */
DocumentBuilderTaskDto.prototype['percentage'] = undefined;

/**
 * Specifies whether the document building process is completed or not.
 * @member {Boolean} isCompleted
 */
DocumentBuilderTaskDto.prototype['isCompleted'] = undefined;

/**
 * @member {module:models/DistributedTaskStatus} status
 */
DocumentBuilderTaskDto.prototype['status'] = undefined;

/**
 * The result file ID.
 * @member {Object} resultFileId
 */
DocumentBuilderTaskDto.prototype['resultFileId'] = undefined;

/**
 * The result file name.
 * @member {String} resultFileName
 */
DocumentBuilderTaskDto.prototype['resultFileName'] = undefined;

/**
 * The result file URL.
 * @member {String} resultFileUrl
 */
DocumentBuilderTaskDto.prototype['resultFileUrl'] = undefined;






export default DocumentBuilderTaskDto;

