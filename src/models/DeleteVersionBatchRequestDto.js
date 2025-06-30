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
 * The DeleteVersionBatchRequestDto model module.
 * @module models/DeleteVersionBatchRequestDto
 * @version 3.2.0
 */
class DeleteVersionBatchRequestDto {
    /**
     * Constructs a new <code>DeleteVersionBatchRequestDto</code>.
     * The request parameters for deleting file versions.
     * @alias module:models/DeleteVersionBatchRequestDto
     * @param fileId {Number} The file ID to delete.
     * @param versions {Array.<Number>} The collection of file versions to be deleted.
     */
    constructor(fileId, versions) { 
        
        DeleteVersionBatchRequestDto.initialize(this, fileId, versions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileId, versions) { 
        obj['fileId'] = fileId;
        obj['versions'] = versions;
    }

    /**
     * Constructs a <code>DeleteVersionBatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeleteVersionBatchRequestDto} obj Optional instance to populate.
     * @return {module:models/DeleteVersionBatchRequestDto} The populated <code>DeleteVersionBatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteVersionBatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteVersionBatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteVersionBatchRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteVersionBatchRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['versions'])) {
            throw new Error("Expected the field `versions` to be an array in the JSON data but got " + data['versions']);
        }

        return true;
    }


}

DeleteVersionBatchRequestDto.RequiredProperties = ["fileId", "versions"];

/**
 * Specifies whether to return only the current operation
 * @member {Boolean} returnSingleOperation
 */
DeleteVersionBatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * Specifies whether to delete a file after the editing session is finished or not.
 * @member {Boolean} deleteAfter
 */
DeleteVersionBatchRequestDto.prototype['deleteAfter'] = undefined;

/**
 * The file ID to delete.
 * @member {Number} fileId
 */
DeleteVersionBatchRequestDto.prototype['fileId'] = undefined;

/**
 * The collection of file versions to be deleted.
 * @member {Array.<Number>} versions
 */
DeleteVersionBatchRequestDto.prototype['versions'] = undefined;






export default DeleteVersionBatchRequestDto;

