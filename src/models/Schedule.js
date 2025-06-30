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
import CronParams from './CronParams';

/**
 * The Schedule model module.
 * @module models/Schedule
 * @version 3.2.0
 */
class Schedule {
    /**
     * Constructs a new <code>Schedule</code>.
     * @alias module:models/Schedule
     */
    constructor() { 
        
        Schedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Schedule} obj Optional instance to populate.
     * @return {module:models/Schedule} The populated <code>Schedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Schedule();

            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('storageParams')) {
                obj['storageParams'] = ApiClient.convertToType(data['storageParams'], {'String': 'String'});
            }
            if (data.hasOwnProperty('cronParams')) {
                obj['cronParams'] = CronParams.constructFromObject(data['cronParams']);
            }
            if (data.hasOwnProperty('backupsStored')) {
                obj['backupsStored'] = ApiClient.convertToType(data['backupsStored'], 'Number');
            }
            if (data.hasOwnProperty('lastBackupTime')) {
                obj['lastBackupTime'] = ApiClient.convertToType(data['lastBackupTime'], 'Date');
            }
            if (data.hasOwnProperty('dump')) {
                obj['dump'] = ApiClient.convertToType(data['dump'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Schedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Schedule</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cronParams`
        if (data['cronParams']) { // data not null
          CronParams.validateJSON(data['cronParams']);
        }

        return true;
    }


}



/**
 * @member {module:models/BackupStorageType} storageType
 */
Schedule.prototype['storageType'] = undefined;

/**
 * @member {Object.<String, String>} storageParams
 */
Schedule.prototype['storageParams'] = undefined;

/**
 * @member {module:models/CronParams} cronParams
 */
Schedule.prototype['cronParams'] = undefined;

/**
 * @member {Number} backupsStored
 */
Schedule.prototype['backupsStored'] = undefined;

/**
 * @member {Date} lastBackupTime
 */
Schedule.prototype['lastBackupTime'] = undefined;

/**
 * @member {Boolean} dump
 */
Schedule.prototype['dump'] = undefined;






export default Schedule;

