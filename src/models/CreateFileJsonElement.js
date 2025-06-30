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
import CreateFileJsonElementTemplateId from './CreateFileJsonElementTemplateId';

/**
 * The CreateFileJsonElement model module.
 * @module models/CreateFileJsonElement
 * @version 3.2.0
 */
class CreateFileJsonElement {
    /**
     * Constructs a new <code>CreateFileJsonElement</code>.
     * The parameters for creating a file.
     * @alias module:models/CreateFileJsonElement
     * @param title {String} The file title for creation.
     */
    constructor(title) { 
        
        CreateFileJsonElement.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CreateFileJsonElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateFileJsonElement} obj Optional instance to populate.
     * @return {module:models/CreateFileJsonElement} The populated <code>CreateFileJsonElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileJsonElement();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = CreateFileJsonElementTemplateId.constructFromObject(data['templateId']);
            }
            if (data.hasOwnProperty('enableExternalExt')) {
                obj['enableExternalExt'] = ApiClient.convertToType(data['enableExternalExt'], 'Boolean');
            }
            if (data.hasOwnProperty('formId')) {
                obj['formId'] = ApiClient.convertToType(data['formId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFileJsonElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFileJsonElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFileJsonElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `templateId`
        if (data['templateId']) { // data not null
          CreateFileJsonElementTemplateId.validateJSON(data['templateId']);
        }

        return true;
    }


}

CreateFileJsonElement.RequiredProperties = ["title"];

/**
 * The file title for creation.
 * @member {String} title
 */
CreateFileJsonElement.prototype['title'] = undefined;

/**
 * @member {module:models/CreateFileJsonElementTemplateId} templateId
 */
CreateFileJsonElement.prototype['templateId'] = undefined;

/**
 * Specifies whether to allow creating a file of an external extension or not.
 * @member {Boolean} enableExternalExt
 */
CreateFileJsonElement.prototype['enableExternalExt'] = undefined;

/**
 * The form ID for creation.
 * @member {Number} formId
 */
CreateFileJsonElement.prototype['formId'] = undefined;






export default CreateFileJsonElement;

