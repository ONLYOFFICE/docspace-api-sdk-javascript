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
 * The FilesSettingsDtoInternalFormats model module.
 * @module models/FilesSettingsDtoInternalFormats
 * @version 3.2.0
 */
class FilesSettingsDtoInternalFormats {
    /**
     * Constructs a new <code>FilesSettingsDtoInternalFormats</code>.
     * The internal file formats.
     * @alias module:models/FilesSettingsDtoInternalFormats
     */
    constructor() { 
        
        FilesSettingsDtoInternalFormats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilesSettingsDtoInternalFormats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilesSettingsDtoInternalFormats} obj Optional instance to populate.
     * @return {module:models/FilesSettingsDtoInternalFormats} The populated <code>FilesSettingsDtoInternalFormats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesSettingsDtoInternalFormats();

            if (data.hasOwnProperty('Unknown')) {
                obj['Unknown'] = ApiClient.convertToType(data['Unknown'], 'String');
            }
            if (data.hasOwnProperty('Archive')) {
                obj['Archive'] = ApiClient.convertToType(data['Archive'], 'String');
            }
            if (data.hasOwnProperty('Video')) {
                obj['Video'] = ApiClient.convertToType(data['Video'], 'String');
            }
            if (data.hasOwnProperty('Audio')) {
                obj['Audio'] = ApiClient.convertToType(data['Audio'], 'String');
            }
            if (data.hasOwnProperty('Image')) {
                obj['Image'] = ApiClient.convertToType(data['Image'], 'String');
            }
            if (data.hasOwnProperty('Spreadsheet')) {
                obj['Spreadsheet'] = ApiClient.convertToType(data['Spreadsheet'], 'String');
            }
            if (data.hasOwnProperty('Presentation')) {
                obj['Presentation'] = ApiClient.convertToType(data['Presentation'], 'String');
            }
            if (data.hasOwnProperty('Document')) {
                obj['Document'] = ApiClient.convertToType(data['Document'], 'String');
            }
            if (data.hasOwnProperty('Pdf')) {
                obj['Pdf'] = ApiClient.convertToType(data['Pdf'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesSettingsDtoInternalFormats</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesSettingsDtoInternalFormats</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Unknown'] && !(typeof data['Unknown'] === 'string' || data['Unknown'] instanceof String)) {
            throw new Error("Expected the field `Unknown` to be a primitive type in the JSON string but got " + data['Unknown']);
        }
        // ensure the json data is a string
        if (data['Archive'] && !(typeof data['Archive'] === 'string' || data['Archive'] instanceof String)) {
            throw new Error("Expected the field `Archive` to be a primitive type in the JSON string but got " + data['Archive']);
        }
        // ensure the json data is a string
        if (data['Video'] && !(typeof data['Video'] === 'string' || data['Video'] instanceof String)) {
            throw new Error("Expected the field `Video` to be a primitive type in the JSON string but got " + data['Video']);
        }
        // ensure the json data is a string
        if (data['Audio'] && !(typeof data['Audio'] === 'string' || data['Audio'] instanceof String)) {
            throw new Error("Expected the field `Audio` to be a primitive type in the JSON string but got " + data['Audio']);
        }
        // ensure the json data is a string
        if (data['Image'] && !(typeof data['Image'] === 'string' || data['Image'] instanceof String)) {
            throw new Error("Expected the field `Image` to be a primitive type in the JSON string but got " + data['Image']);
        }
        // ensure the json data is a string
        if (data['Spreadsheet'] && !(typeof data['Spreadsheet'] === 'string' || data['Spreadsheet'] instanceof String)) {
            throw new Error("Expected the field `Spreadsheet` to be a primitive type in the JSON string but got " + data['Spreadsheet']);
        }
        // ensure the json data is a string
        if (data['Presentation'] && !(typeof data['Presentation'] === 'string' || data['Presentation'] instanceof String)) {
            throw new Error("Expected the field `Presentation` to be a primitive type in the JSON string but got " + data['Presentation']);
        }
        // ensure the json data is a string
        if (data['Document'] && !(typeof data['Document'] === 'string' || data['Document'] instanceof String)) {
            throw new Error("Expected the field `Document` to be a primitive type in the JSON string but got " + data['Document']);
        }
        // ensure the json data is a string
        if (data['Pdf'] && !(typeof data['Pdf'] === 'string' || data['Pdf'] instanceof String)) {
            throw new Error("Expected the field `Pdf` to be a primitive type in the JSON string but got " + data['Pdf']);
        }

        return true;
    }


}



/**
 * @member {String} Unknown
 */
FilesSettingsDtoInternalFormats.prototype['Unknown'] = undefined;

/**
 * @member {String} Archive
 */
FilesSettingsDtoInternalFormats.prototype['Archive'] = undefined;

/**
 * @member {String} Video
 */
FilesSettingsDtoInternalFormats.prototype['Video'] = undefined;

/**
 * @member {String} Audio
 */
FilesSettingsDtoInternalFormats.prototype['Audio'] = undefined;

/**
 * @member {String} Image
 */
FilesSettingsDtoInternalFormats.prototype['Image'] = undefined;

/**
 * @member {String} Spreadsheet
 */
FilesSettingsDtoInternalFormats.prototype['Spreadsheet'] = undefined;

/**
 * @member {String} Presentation
 */
FilesSettingsDtoInternalFormats.prototype['Presentation'] = undefined;

/**
 * @member {String} Document
 */
FilesSettingsDtoInternalFormats.prototype['Document'] = undefined;

/**
 * @member {String} Pdf
 */
FilesSettingsDtoInternalFormats.prototype['Pdf'] = undefined;






export default FilesSettingsDtoInternalFormats;

