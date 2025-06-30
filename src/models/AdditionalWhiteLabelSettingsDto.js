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
 * The AdditionalWhiteLabelSettingsDto model module.
 * @module models/AdditionalWhiteLabelSettingsDto
 * @version 3.2.0
 */
class AdditionalWhiteLabelSettingsDto {
    /**
     * Constructs a new <code>AdditionalWhiteLabelSettingsDto</code>.
     * The additional white label settings parameters.
     * @alias module:models/AdditionalWhiteLabelSettingsDto
     */
    constructor() { 
        
        AdditionalWhiteLabelSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalWhiteLabelSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdditionalWhiteLabelSettingsDto} obj Optional instance to populate.
     * @return {module:models/AdditionalWhiteLabelSettingsDto} The populated <code>AdditionalWhiteLabelSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalWhiteLabelSettingsDto();

            if (data.hasOwnProperty('startDocsEnabled')) {
                obj['startDocsEnabled'] = ApiClient.convertToType(data['startDocsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('helpCenterEnabled')) {
                obj['helpCenterEnabled'] = ApiClient.convertToType(data['helpCenterEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('feedbackAndSupportEnabled')) {
                obj['feedbackAndSupportEnabled'] = ApiClient.convertToType(data['feedbackAndSupportEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('userForumEnabled')) {
                obj['userForumEnabled'] = ApiClient.convertToType(data['userForumEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('videoGuidesEnabled')) {
                obj['videoGuidesEnabled'] = ApiClient.convertToType(data['videoGuidesEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('licenseAgreementsEnabled')) {
                obj['licenseAgreementsEnabled'] = ApiClient.convertToType(data['licenseAgreementsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdditionalWhiteLabelSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdditionalWhiteLabelSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the sample documents are displayed or hidden.
 * @member {Boolean} startDocsEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['startDocsEnabled'] = undefined;

/**
 * Specifies if the Help Center link is available or not.
 * @member {Boolean} helpCenterEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['helpCenterEnabled'] = undefined;

/**
 * Specifies if the \"Feedback & Support\" link is available or not.
 * @member {Boolean} feedbackAndSupportEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['feedbackAndSupportEnabled'] = undefined;

/**
 * Specifies if the user forum is available or not.
 * @member {Boolean} userForumEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['userForumEnabled'] = undefined;

/**
 * Specifies if the Video Guides link is available or not.
 * @member {Boolean} videoGuidesEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['videoGuidesEnabled'] = undefined;

/**
 * Specifies if the License Agreements link is available or not.
 * @member {Boolean} licenseAgreementsEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['licenseAgreementsEnabled'] = undefined;

/**
 * Specifies if the additional white label settings are default or not.
 * @member {Boolean} isDefault
 */
AdditionalWhiteLabelSettingsDto.prototype['isDefault'] = undefined;






export default AdditionalWhiteLabelSettingsDto;

