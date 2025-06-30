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
import FileShare from './FileShare';

/**
 * The FileLinkRequest model module.
 * @module models/FileLinkRequest
 * @version 3.2.0
 */
class FileLinkRequest {
    /**
     * Constructs a new <code>FileLinkRequest</code>.
     * The external link request parameters.
     * @alias module:models/FileLinkRequest
     */
    constructor() { 
        
        FileLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileLinkRequest} obj Optional instance to populate.
     * @return {module:models/FileLinkRequest} The populated <code>FileLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileLinkRequest();

            if (data.hasOwnProperty('linkId')) {
                obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiDateTime.constructFromObject(data['expirationDate']);
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ApiClient.convertToType(data['internal'], 'Boolean');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileLinkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileLinkRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linkId'] && !(typeof data['linkId'] === 'string' || data['linkId'] instanceof String)) {
            throw new Error("Expected the field `linkId` to be a primitive type in the JSON string but got " + data['linkId']);
        }
        // validate the optional field `expirationDate`
        if (data['expirationDate']) { // data not null
          ApiDateTime.validateJSON(data['expirationDate']);
        }

        return true;
    }


}



/**
 * The external link ID.
 * @member {String} linkId
 */
FileLinkRequest.prototype['linkId'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FileLinkRequest.prototype['access'] = undefined;

/**
 * @member {module:models/ApiDateTime} expirationDate
 */
FileLinkRequest.prototype['expirationDate'] = undefined;

/**
 * The link scope, whether it is internal or not.
 * @member {Boolean} internal
 */
FileLinkRequest.prototype['internal'] = undefined;

/**
 * Specifies whether the file link is primary or not.
 * @member {Boolean} primary
 */
FileLinkRequest.prototype['primary'] = undefined;






export default FileLinkRequest;

