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
import BackupStorageType from './BackupStorageType';
import ItemKeyValuePairObjectObject from './ItemKeyValuePairObjectObject';

/**
 * The BackupRestoreDto model module.
 * @module models/BackupRestoreDto
 * @version 3.2.0
 */
class BackupRestoreDto {
    /**
     * Constructs a new <code>BackupRestoreDto</code>.
     * The backup restoring parameters.
     * @alias module:models/BackupRestoreDto
     */
    constructor() { 
        
        BackupRestoreDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BackupRestoreDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BackupRestoreDto} obj Optional instance to populate.
     * @return {module:models/BackupRestoreDto} The populated <code>BackupRestoreDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BackupRestoreDto();

            if (data.hasOwnProperty('backupId')) {
                obj['backupId'] = ApiClient.convertToType(data['backupId'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('storageParams')) {
                obj['storageParams'] = ApiClient.convertToType(data['storageParams'], [ItemKeyValuePairObjectObject]);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
            if (data.hasOwnProperty('dump')) {
                obj['dump'] = ApiClient.convertToType(data['dump'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BackupRestoreDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackupRestoreDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['backupId'] && !(typeof data['backupId'] === 'string' || data['backupId'] instanceof String)) {
            throw new Error("Expected the field `backupId` to be a primitive type in the JSON string but got " + data['backupId']);
        }
        if (data['storageParams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['storageParams'])) {
                throw new Error("Expected the field `storageParams` to be an array in the JSON data but got " + data['storageParams']);
            }
            // validate the optional field `storageParams` (array)
            for (const item of data['storageParams']) {
                ItemKeyValuePairObjectObject.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The backup ID.
 * @member {String} backupId
 */
BackupRestoreDto.prototype['backupId'] = undefined;

/**
 * @member {module:models/BackupStorageType} storageType
 */
BackupRestoreDto.prototype['storageType'] = undefined;

/**
 * The backup storage parameters.
 * @member {Array.<module:models/ItemKeyValuePairObjectObject>} storageParams
 */
BackupRestoreDto.prototype['storageParams'] = undefined;

/**
 * Notifies users about the portal restoring process or not.
 * @member {Boolean} notify
 */
BackupRestoreDto.prototype['notify'] = undefined;

/**
 * Specifies if a dump will be created or not.
 * @member {Boolean} dump
 */
BackupRestoreDto.prototype['dump'] = undefined;






export default BackupRestoreDto;

