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
import ApiDateTime from './ApiDateTime';
import EmployeeDto from './EmployeeDto';
import HistoryAction from './HistoryAction';
import HistoryData from './HistoryData';

/**
 * The HistoryDto model module.
 * @module models/HistoryDto
 * @version 3.2.0
 */
class HistoryDto {
    /**
     * Constructs a new <code>HistoryDto</code>.
     * The file history information.
     * @alias module:models/HistoryDto
     */
    constructor() { 
        
        HistoryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/HistoryDto} obj Optional instance to populate.
     * @return {module:models/HistoryDto} The populated <code>HistoryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoryDto();

            if (data.hasOwnProperty('action')) {
                obj['action'] = HistoryAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = EmployeeDto.constructFromObject(data['initiator']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiDateTime.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = HistoryData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('related')) {
                obj['related'] = ApiClient.convertToType(data['related'], [HistoryDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HistoryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HistoryDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `action`
        if (data['action']) { // data not null
          HistoryAction.validateJSON(data['action']);
        }
        // validate the optional field `initiator`
        if (data['initiator']) { // data not null
          EmployeeDto.validateJSON(data['initiator']);
        }
        // validate the optional field `date`
        if (data['date']) { // data not null
          ApiDateTime.validateJSON(data['date']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          HistoryData.validateJSON(data['data']);
        }
        if (data['related']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['related'])) {
                throw new Error("Expected the field `related` to be an array in the JSON data but got " + data['related']);
            }
            // validate the optional field `related` (array)
            for (const item of data['related']) {
                HistoryDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:models/HistoryAction} action
 */
HistoryDto.prototype['action'] = undefined;

/**
 * @member {module:models/EmployeeDto} initiator
 */
HistoryDto.prototype['initiator'] = undefined;

/**
 * @member {module:models/ApiDateTime} date
 */
HistoryDto.prototype['date'] = undefined;

/**
 * @member {module:models/HistoryData} data
 */
HistoryDto.prototype['data'] = undefined;

/**
 * The list of related history.
 * @member {Array.<module:models/HistoryDto>} related
 */
HistoryDto.prototype['related'] = undefined;






export default HistoryDto;

