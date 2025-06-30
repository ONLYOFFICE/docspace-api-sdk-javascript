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
import FileShare from './FileShare';
import SubjectType from './SubjectType';

/**
 * The FileShareDto model module.
 * @module models/FileShareDto
 * @version 3.2.0
 */
class FileShareDto {
    /**
     * Constructs a new <code>FileShareDto</code>.
     * The file sharing information and access rights.
     * @alias module:models/FileShareDto
     */
    constructor() { 
        
        FileShareDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileShareDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileShareDto} obj Optional instance to populate.
     * @return {module:models/FileShareDto} The populated <code>FileShareDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileShareDto();

            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('sharedTo')) {
                obj['sharedTo'] = ApiClient.convertToType(data['sharedTo'], Object);
            }
            if (data.hasOwnProperty('isLocked')) {
                obj['isLocked'] = ApiClient.convertToType(data['isLocked'], 'Boolean');
            }
            if (data.hasOwnProperty('isOwner')) {
                obj['isOwner'] = ApiClient.convertToType(data['isOwner'], 'Boolean');
            }
            if (data.hasOwnProperty('canEditAccess')) {
                obj['canEditAccess'] = ApiClient.convertToType(data['canEditAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('subjectType')) {
                obj['subjectType'] = SubjectType.constructFromObject(data['subjectType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileShareDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileShareDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/FileShare} access
 */
FileShareDto.prototype['access'] = undefined;

/**
 * The user who has the access to the specified file.
 * @member {Object} sharedTo
 */
FileShareDto.prototype['sharedTo'] = undefined;

/**
 * Specifies if the access right is locked or not.
 * @member {Boolean} isLocked
 */
FileShareDto.prototype['isLocked'] = undefined;

/**
 * Specifies if the user is an owner of the specified file or not.
 * @member {Boolean} isOwner
 */
FileShareDto.prototype['isOwner'] = undefined;

/**
 * Specifies if the user can edit the access to the specified file or not.
 * @member {Boolean} canEditAccess
 */
FileShareDto.prototype['canEditAccess'] = undefined;

/**
 * @member {module:models/SubjectType} subjectType
 */
FileShareDto.prototype['subjectType'] = undefined;






export default FileShareDto;

