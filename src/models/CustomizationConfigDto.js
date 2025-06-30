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
import AnonymousConfigDto from './AnonymousConfigDto';
import CustomerConfigDto from './CustomerConfigDto';
import FeedbackConfig from './FeedbackConfig';
import GobackConfig from './GobackConfig';
import LogoConfigDto from './LogoConfigDto';
import StartFillingForm from './StartFillingForm';
import SubmitForm from './SubmitForm';

/**
 * The CustomizationConfigDto model module.
 * @module models/CustomizationConfigDto
 * @version 3.2.0
 */
class CustomizationConfigDto {
    /**
     * Constructs a new <code>CustomizationConfigDto</code>.
     * The customization config parameters.
     * @alias module:models/CustomizationConfigDto
     */
    constructor() { 
        
        CustomizationConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomizationConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomizationConfigDto} obj Optional instance to populate.
     * @return {module:models/CustomizationConfigDto} The populated <code>CustomizationConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomizationConfigDto();

            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'Boolean');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = CustomerConfigDto.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('anonymous')) {
                obj['anonymous'] = AnonymousConfigDto.constructFromObject(data['anonymous']);
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = FeedbackConfig.constructFromObject(data['feedback']);
            }
            if (data.hasOwnProperty('forcesave')) {
                obj['forcesave'] = ApiClient.convertToType(data['forcesave'], 'Boolean');
            }
            if (data.hasOwnProperty('goback')) {
                obj['goback'] = GobackConfig.constructFromObject(data['goback']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoConfigDto.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('mentionShare')) {
                obj['mentionShare'] = ApiClient.convertToType(data['mentionShare'], 'Boolean');
            }
            if (data.hasOwnProperty('reviewDisplay')) {
                obj['reviewDisplay'] = ApiClient.convertToType(data['reviewDisplay'], 'String');
            }
            if (data.hasOwnProperty('submitForm')) {
                obj['submitForm'] = SubmitForm.constructFromObject(data['submitForm']);
            }
            if (data.hasOwnProperty('startFillingForm')) {
                obj['startFillingForm'] = StartFillingForm.constructFromObject(data['startFillingForm']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomizationConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomizationConfigDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          CustomerConfigDto.validateJSON(data['customer']);
        }
        // validate the optional field `anonymous`
        if (data['anonymous']) { // data not null
          AnonymousConfigDto.validateJSON(data['anonymous']);
        }
        // validate the optional field `feedback`
        if (data['feedback']) { // data not null
          FeedbackConfig.validateJSON(data['feedback']);
        }
        // validate the optional field `goback`
        if (data['goback']) { // data not null
          GobackConfig.validateJSON(data['goback']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoConfigDto.validateJSON(data['logo']);
        }
        // ensure the json data is a string
        if (data['reviewDisplay'] && !(typeof data['reviewDisplay'] === 'string' || data['reviewDisplay'] instanceof String)) {
            throw new Error("Expected the field `reviewDisplay` to be a primitive type in the JSON string but got " + data['reviewDisplay']);
        }
        // validate the optional field `submitForm`
        if (data['submitForm']) { // data not null
          SubmitForm.validateJSON(data['submitForm']);
        }
        // validate the optional field `startFillingForm`
        if (data['startFillingForm']) { // data not null
          StartFillingForm.validateJSON(data['startFillingForm']);
        }

        return true;
    }


}



/**
 * Specifies if the customization is about.
 * @member {Boolean} about
 */
CustomizationConfigDto.prototype['about'] = undefined;

/**
 * @member {module:models/CustomerConfigDto} customer
 */
CustomizationConfigDto.prototype['customer'] = undefined;

/**
 * @member {module:models/AnonymousConfigDto} anonymous
 */
CustomizationConfigDto.prototype['anonymous'] = undefined;

/**
 * @member {module:models/FeedbackConfig} feedback
 */
CustomizationConfigDto.prototype['feedback'] = undefined;

/**
 * Specifies if the customization should be force saved.
 * @member {Boolean} forcesave
 */
CustomizationConfigDto.prototype['forcesave'] = undefined;

/**
 * @member {module:models/GobackConfig} goback
 */
CustomizationConfigDto.prototype['goback'] = undefined;

/**
 * @member {module:models/LogoConfigDto} logo
 */
CustomizationConfigDto.prototype['logo'] = undefined;

/**
 * Specifies if the share should be mentioned.
 * @member {Boolean} mentionShare
 */
CustomizationConfigDto.prototype['mentionShare'] = undefined;

/**
 * The review display of the customization.
 * @member {String} reviewDisplay
 */
CustomizationConfigDto.prototype['reviewDisplay'] = undefined;

/**
 * @member {module:models/SubmitForm} submitForm
 */
CustomizationConfigDto.prototype['submitForm'] = undefined;

/**
 * @member {module:models/StartFillingForm} startFillingForm
 */
CustomizationConfigDto.prototype['startFillingForm'] = undefined;






export default CustomizationConfigDto;

