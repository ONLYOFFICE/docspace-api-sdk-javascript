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
 * The PageableModificationResponse model module.
 * @module models/PageableModificationResponse
 * @version 3.2.0
 */
class PageableModificationResponse {
    /**
     * Constructs a new <code>PageableModificationResponse</code>.
     * The response containing paginated modification information.
     * @alias module:models/PageableModificationResponse
     */
    constructor() { 
        
        PageableModificationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageableModificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PageableModificationResponse} obj Optional instance to populate.
     * @return {module:models/PageableModificationResponse} The populated <code>PageableModificationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageableModificationResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('last_modified_on')) {
                obj['last_modified_on'] = ApiClient.convertToType(data['last_modified_on'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageableModificationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageableModificationResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The paginated modification data.
 * @member {Object} data
 */
PageableModificationResponse.prototype['data'] = undefined;

/**
 * The maximum number of results returned per page.
 * @member {Number} limit
 */
PageableModificationResponse.prototype['limit'] = undefined;

/**
 * The date when the user consent was last modified.
 * @member {Date} last_modified_on
 */
PageableModificationResponse.prototype['last_modified_on'] = undefined;






export default PageableModificationResponse;

