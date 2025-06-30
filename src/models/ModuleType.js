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
* Enum class ModuleType.
* @enum {}
* @readonly
*/
export default class ModuleType {
    
        /**
         * value: 0
         * @const
         */
        "None" = 0;

    
        /**
         * value: 1
         * @const
         */
        "Files" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Folders" = 2;

    
        /**
         * value: 3
         * @const
         */
        "DocumentsSettings" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Companies" = 4;

    
        /**
         * value: 5
         * @const
         */
        "Persons" = 5;

    
        /**
         * value: 6
         * @const
         */
        "Contacts" = 6;

    
        /**
         * value: 7
         * @const
         */
        "CrmTasks" = 7;

    
        /**
         * value: 8
         * @const
         */
        "Opportunities" = 8;

    
        /**
         * value: 9
         * @const
         */
        "Invoices" = 9;

    
        /**
         * value: 10
         * @const
         */
        "Cases" = 10;

    
        /**
         * value: 11
         * @const
         */
        "CommonCrmSettings" = 11;

    
        /**
         * value: 12
         * @const
         */
        "ContactsSettings" = 12;

    
        /**
         * value: 13
         * @const
         */
        "ContactTypes" = 13;

    
        /**
         * value: 14
         * @const
         */
        "InvoiceSettings" = 14;

    
        /**
         * value: 15
         * @const
         */
        "OtherCrmSettings" = 15;

    
        /**
         * value: 16
         * @const
         */
        "Users" = 16;

    
        /**
         * value: 17
         * @const
         */
        "Groups" = 17;

    
        /**
         * value: 18
         * @const
         */
        "Projects" = 18;

    
        /**
         * value: 19
         * @const
         */
        "Milestones" = 19;

    
        /**
         * value: 20
         * @const
         */
        "Tasks" = 20;

    
        /**
         * value: 21
         * @const
         */
        "Discussions" = 21;

    
        /**
         * value: 22
         * @const
         */
        "TimeTracking" = 22;

    
        /**
         * value: 23
         * @const
         */
        "Reports" = 23;

    
        /**
         * value: 24
         * @const
         */
        "ProjectsSettings" = 24;

    
        /**
         * value: 25
         * @const
         */
        "General" = 25;

    
        /**
         * value: 26
         * @const
         */
        "Products" = 26;

    
        /**
         * value: 27
         * @const
         */
        "Rooms" = 27;

    
        /**
         * value: 28
         * @const
         */
        "OAuth" = 28;

    

    /**
    * Returns a <code>ModuleType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ModuleType} The enum <code>ModuleType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

