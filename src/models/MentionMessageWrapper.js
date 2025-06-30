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
import ActionLinkConfig from './ActionLinkConfig';

/**
 * The MentionMessageWrapper model module.
 * @module models/MentionMessageWrapper
 * @version 3.2.0
 */
class MentionMessageWrapper {
    /**
     * Constructs a new <code>MentionMessageWrapper</code>.
     * The mention message parameters.
     * @alias module:models/MentionMessageWrapper
     */
    constructor() { 
        
        MentionMessageWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MentionMessageWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MentionMessageWrapper} obj Optional instance to populate.
     * @return {module:models/MentionMessageWrapper} The populated <code>MentionMessageWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MentionMessageWrapper();

            if (data.hasOwnProperty('actionLink')) {
                obj['actionLink'] = ActionLinkConfig.constructFromObject(data['actionLink']);
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MentionMessageWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MentionMessageWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `actionLink`
        if (data['actionLink']) { // data not null
          ActionLinkConfig.validateJSON(data['actionLink']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['emails'])) {
            throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {module:models/ActionLinkConfig} actionLink
 */
MentionMessageWrapper.prototype['actionLink'] = undefined;

/**
 * A list of emails which will receive the mention message.
 * @member {Array.<String>} emails
 */
MentionMessageWrapper.prototype['emails'] = undefined;

/**
 * The comment message.
 * @member {String} message
 */
MentionMessageWrapper.prototype['message'] = undefined;






export default MentionMessageWrapper;

