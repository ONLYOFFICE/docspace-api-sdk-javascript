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
import EmployeeFullDto from './EmployeeFullDto';
import FileDtoInteger from './FileDtoInteger';

/**
 * The FillingFormResultDtoInteger model module.
 * @module models/FillingFormResultDtoInteger
 * @version 3.2.0
 */
class FillingFormResultDtoInteger {
    /**
     * Constructs a new <code>FillingFormResultDtoInteger</code>.
     * The parameters of the form filling result.
     * @alias module:models/FillingFormResultDtoInteger
     */
    constructor() { 
        
        FillingFormResultDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FillingFormResultDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FillingFormResultDtoInteger} obj Optional instance to populate.
     * @return {module:models/FillingFormResultDtoInteger} The populated <code>FillingFormResultDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FillingFormResultDtoInteger();

            if (data.hasOwnProperty('formNumber')) {
                obj['formNumber'] = ApiClient.convertToType(data['formNumber'], 'Number');
            }
            if (data.hasOwnProperty('completedForm')) {
                obj['completedForm'] = FileDtoInteger.constructFromObject(data['completedForm']);
            }
            if (data.hasOwnProperty('originalForm')) {
                obj['originalForm'] = FileDtoInteger.constructFromObject(data['originalForm']);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EmployeeFullDto.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('isRoomMember')) {
                obj['isRoomMember'] = ApiClient.convertToType(data['isRoomMember'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FillingFormResultDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FillingFormResultDtoInteger</code>.
     */
    static validateJSON(data) {
        // validate the optional field `completedForm`
        if (data['completedForm']) { // data not null
          FileDtoInteger.validateJSON(data['completedForm']);
        }
        // validate the optional field `originalForm`
        if (data['originalForm']) { // data not null
          FileDtoInteger.validateJSON(data['originalForm']);
        }
        // validate the optional field `manager`
        if (data['manager']) { // data not null
          EmployeeFullDto.validateJSON(data['manager']);
        }

        return true;
    }


}



/**
 * The filling form number.
 * @member {Number} formNumber
 */
FillingFormResultDtoInteger.prototype['formNumber'] = undefined;

/**
 * @member {module:models/FileDtoInteger} completedForm
 */
FillingFormResultDtoInteger.prototype['completedForm'] = undefined;

/**
 * @member {module:models/FileDtoInteger} originalForm
 */
FillingFormResultDtoInteger.prototype['originalForm'] = undefined;

/**
 * @member {module:models/EmployeeFullDto} manager
 */
FillingFormResultDtoInteger.prototype['manager'] = undefined;

/**
 * The room ID where filling the form.
 * @member {Number} roomId
 */
FillingFormResultDtoInteger.prototype['roomId'] = undefined;

/**
 * Specifies if the manager who fills the form is a room member or not.
 * @member {Boolean} isRoomMember
 */
FillingFormResultDtoInteger.prototype['isRoomMember'] = undefined;






export default FillingFormResultDtoInteger;

