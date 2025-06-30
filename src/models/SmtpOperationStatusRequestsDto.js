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
 * The SmtpOperationStatusRequestsDto model module.
 * @module models/SmtpOperationStatusRequestsDto
 * @version 3.2.0
 */
class SmtpOperationStatusRequestsDto {
    /**
     * Constructs a new <code>SmtpOperationStatusRequestsDto</code>.
     * The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.
     * @alias module:models/SmtpOperationStatusRequestsDto
     */
    constructor() { 
        
        SmtpOperationStatusRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmtpOperationStatusRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SmtpOperationStatusRequestsDto} obj Optional instance to populate.
     * @return {module:models/SmtpOperationStatusRequestsDto} The populated <code>SmtpOperationStatusRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmtpOperationStatusRequestsDto();

            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('percents')) {
                obj['percents'] = ApiClient.convertToType(data['percents'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmtpOperationStatusRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmtpOperationStatusRequestsDto</code>.
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
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Specifies whether the SMTP operation has finished processing.
 * @member {Boolean} completed
 */
SmtpOperationStatusRequestsDto.prototype['completed'] = undefined;

/**
 * The unique identifier for tracking the SMTP operation.
 * @member {String} id
 */
SmtpOperationStatusRequestsDto.prototype['id'] = undefined;

/**
 * The error message if the SMTP operation encountered issues.
 * @member {String} error
 */
SmtpOperationStatusRequestsDto.prototype['error'] = undefined;

/**
 * The current state of the SMTP operation.
 * @member {String} status
 */
SmtpOperationStatusRequestsDto.prototype['status'] = undefined;

/**
 * The progress indicator showing completion percentage of the operation.
 * @member {Number} percents
 */
SmtpOperationStatusRequestsDto.prototype['percents'] = undefined;






export default SmtpOperationStatusRequestsDto;

