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
import ContentDisposition from './ContentDisposition';
import ContentType from './ContentType';

/**
 * The UploadRequestDto model module.
 * @module models/UploadRequestDto
 * @version 3.2.0
 */
class UploadRequestDto {
    /**
     * Constructs a new <code>UploadRequestDto</code>.
     * The request parameters for uploading a file.
     * @alias module:models/UploadRequestDto
     */
    constructor() { 
        
        UploadRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UploadRequestDto} obj Optional instance to populate.
     * @return {module:models/UploadRequestDto} The populated <code>UploadRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadRequestDto();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ContentType.constructFromObject(data['contentType']);
            }
            if (data.hasOwnProperty('contentDisposition')) {
                obj['contentDisposition'] = ContentDisposition.constructFromObject(data['contentDisposition']);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [File]);
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
            if (data.hasOwnProperty('storeOriginalFileFlag')) {
                obj['storeOriginalFileFlag'] = ApiClient.convertToType(data['storeOriginalFileFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('keepConvertStatus')) {
                obj['keepConvertStatus'] = ApiClient.convertToType(data['keepConvertStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadRequestDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `contentType`
        if (data['contentType']) { // data not null
          ContentType.validateJSON(data['contentType']);
        }
        // validate the optional field `contentDisposition`
        if (data['contentDisposition']) { // data not null
          ContentDisposition.validateJSON(data['contentDisposition']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }

        return true;
    }


}



/**
 * The file to be uploaded.
 * @member {File} file
 */
UploadRequestDto.prototype['file'] = undefined;

/**
 * @member {module:models/ContentType} contentType
 */
UploadRequestDto.prototype['contentType'] = undefined;

/**
 * @member {module:models/ContentDisposition} contentDisposition
 */
UploadRequestDto.prototype['contentDisposition'] = undefined;

/**
 * The list of files when specified as multipart/form-data.
 * @member {Array.<File>} files
 */
UploadRequestDto.prototype['files'] = undefined;

/**
 * Specifies whether to create the new file if it already exists or not.
 * @member {Boolean} createNewIfExist
 */
UploadRequestDto.prototype['createNewIfExist'] = undefined;

/**
 * Specifies whether to upload documents in the original formats as well or not.
 * @member {Boolean} storeOriginalFileFlag
 */
UploadRequestDto.prototype['storeOriginalFileFlag'] = undefined;

/**
 * Specifies whether to keep the file converting status or not.
 * @member {Boolean} keepConvertStatus
 */
UploadRequestDto.prototype['keepConvertStatus'] = undefined;

/**
 * The request input stream.
 * @member {File} stream
 */
UploadRequestDto.prototype['stream'] = undefined;






export default UploadRequestDto;

