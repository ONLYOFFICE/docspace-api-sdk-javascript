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
import BaseBatchRequestDtoFolderIdsInner from './BaseBatchRequestDtoFolderIdsInner';
import BatchRequestDtoDestFolderId from './BatchRequestDtoDestFolderId';
import FileConflictResolveType from './FileConflictResolveType';

/**
 * The BatchRequestDto model module.
 * @module models/BatchRequestDto
 * @version 3.2.0
 */
class BatchRequestDto {
    /**
     * Constructs a new <code>BatchRequestDto</code>.
     * The request parameters for copying/moving files.
     * @alias module:models/BatchRequestDto
     */
    constructor() { 
        
        BatchRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BatchRequestDto} obj Optional instance to populate.
     * @return {module:models/BatchRequestDto} The populated <code>BatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('folderIds')) {
                obj['folderIds'] = ApiClient.convertToType(data['folderIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('destFolderId')) {
                obj['destFolderId'] = BatchRequestDtoDestFolderId.constructFromObject(data['destFolderId']);
            }
            if (data.hasOwnProperty('conflictResolveType')) {
                obj['conflictResolveType'] = FileConflictResolveType.constructFromObject(data['conflictResolveType']);
            }
            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'Boolean');
            }
            if (data.hasOwnProperty('toFillOut')) {
                obj['toFillOut'] = ApiClient.convertToType(data['toFillOut'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchRequestDto</code>.
     */
    static validateJSON(data) {
        if (data['folderIds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['folderIds'])) {
                throw new Error("Expected the field `folderIds` to be an array in the JSON data but got " + data['folderIds']);
            }
            // validate the optional field `folderIds` (array)
            for (const item of data['folderIds']) {
                BaseBatchRequestDtoFolderIdsInner.validateJSON(item);
            };
        }
        if (data['fileIds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fileIds'])) {
                throw new Error("Expected the field `fileIds` to be an array in the JSON data but got " + data['fileIds']);
            }
            // validate the optional field `fileIds` (array)
            for (const item of data['fileIds']) {
                BaseBatchRequestDtoFolderIdsInner.validateJSON(item);
            };
        }
        // validate the optional field `destFolderId`
        if (data['destFolderId']) { // data not null
          BatchRequestDtoDestFolderId.validateJSON(data['destFolderId']);
        }

        return true;
    }


}



/**
 * Specifies whether to return only the current operation
 * @member {Boolean} returnSingleOperation
 */
BatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * The list of folder IDs to be copied/moved.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} folderIds
 */
BatchRequestDto.prototype['folderIds'] = undefined;

/**
 * The list of file IDs to be copied/moved.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} fileIds
 */
BatchRequestDto.prototype['fileIds'] = undefined;

/**
 * @member {module:models/BatchRequestDtoDestFolderId} destFolderId
 */
BatchRequestDto.prototype['destFolderId'] = undefined;

/**
 * @member {module:models/FileConflictResolveType} conflictResolveType
 */
BatchRequestDto.prototype['conflictResolveType'] = undefined;

/**
 * Specifies whether to delete the source files/folders after they are moved or copied to the destination folder.
 * @member {Boolean} deleteAfter
 */
BatchRequestDto.prototype['deleteAfter'] = undefined;

/**
 * Specifies whether to copy or move the folder content or not.
 * @member {Boolean} content
 */
BatchRequestDto.prototype['content'] = undefined;

/**
 * Specifies whether the file is copied for filling out
 * @member {Boolean} toFillOut
 */
BatchRequestDto.prototype['toFillOut'] = undefined;






export default BatchRequestDto;

