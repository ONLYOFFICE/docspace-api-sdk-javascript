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
* Enum class WebhookTrigger.
* @enum {}
* @readonly
*/
export default class WebhookTrigger {
    
        /**
         * value: 0
         * @const
         */
        "All" = 0;

    
        /**
         * value: 1
         * @const
         */
        "UserCreated" = 1;

    
        /**
         * value: 2
         * @const
         */
        "UserInvited" = 2;

    
        /**
         * value: 4
         * @const
         */
        "UserUpdated" = 4;

    
        /**
         * value: 8
         * @const
         */
        "UserDeleted" = 8;

    
        /**
         * value: 16
         * @const
         */
        "GroupCreated" = 16;

    
        /**
         * value: 32
         * @const
         */
        "GroupUpdated" = 32;

    
        /**
         * value: 64
         * @const
         */
        "GroupDeleted" = 64;

    
        /**
         * value: 128
         * @const
         */
        "FileCreated" = 128;

    
        /**
         * value: 256
         * @const
         */
        "FileUploaded" = 256;

    
        /**
         * value: 512
         * @const
         */
        "FileUpdated" = 512;

    
        /**
         * value: 1024
         * @const
         */
        "FileTrashed" = 1024;

    
        /**
         * value: 2048
         * @const
         */
        "FileDeleted" = 2048;

    
        /**
         * value: 4096
         * @const
         */
        "FileRestored" = 4096;

    
        /**
         * value: 8192
         * @const
         */
        "FileCopied" = 8192;

    
        /**
         * value: 16384
         * @const
         */
        "FileMoved" = 16384;

    
        /**
         * value: 32768
         * @const
         */
        "FolderCreated" = 32768;

    
        /**
         * value: 65536
         * @const
         */
        "FolderUpdated" = 65536;

    
        /**
         * value: 131072
         * @const
         */
        "FolderTrashed" = 131072;

    
        /**
         * value: 262144
         * @const
         */
        "FolderDeleted" = 262144;

    
        /**
         * value: 524288
         * @const
         */
        "FolderRestored" = 524288;

    
        /**
         * value: 1048576
         * @const
         */
        "FolderCopied" = 1048576;

    
        /**
         * value: 2097152
         * @const
         */
        "FolderMoved" = 2097152;

    
        /**
         * value: 4194304
         * @const
         */
        "RoomCreated" = 4194304;

    
        /**
         * value: 8388608
         * @const
         */
        "RoomUpdated" = 8388608;

    
        /**
         * value: 16777216
         * @const
         */
        "RoomArchived" = 16777216;

    
        /**
         * value: 33554432
         * @const
         */
        "RoomDeleted" = 33554432;

    
        /**
         * value: 67108864
         * @const
         */
        "RoomRestored" = 67108864;

    
        /**
         * value: 134217728
         * @const
         */
        "RoomCopied" = 134217728;

    

    /**
    * Returns a <code>WebhookTrigger</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/WebhookTrigger} The enum <code>WebhookTrigger</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

