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
import CultureSpecificExternalResource from './CultureSpecificExternalResource';

/**
 * The CultureSpecificExternalResources model module.
 * @module models/CultureSpecificExternalResources
 * @version 3.2.0
 */
class CultureSpecificExternalResources {
    /**
     * Constructs a new <code>CultureSpecificExternalResources</code>.
     * The external resources settings.
     * @alias module:models/CultureSpecificExternalResources
     */
    constructor() { 
        
        CultureSpecificExternalResources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CultureSpecificExternalResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CultureSpecificExternalResources} obj Optional instance to populate.
     * @return {module:models/CultureSpecificExternalResources} The populated <code>CultureSpecificExternalResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CultureSpecificExternalResources();

            if (data.hasOwnProperty('api')) {
                obj['api'] = CultureSpecificExternalResource.constructFromObject(data['api']);
            }
            if (data.hasOwnProperty('common')) {
                obj['common'] = CultureSpecificExternalResource.constructFromObject(data['common']);
            }
            if (data.hasOwnProperty('forum')) {
                obj['forum'] = CultureSpecificExternalResource.constructFromObject(data['forum']);
            }
            if (data.hasOwnProperty('helpcenter')) {
                obj['helpcenter'] = CultureSpecificExternalResource.constructFromObject(data['helpcenter']);
            }
            if (data.hasOwnProperty('integrations')) {
                obj['integrations'] = CultureSpecificExternalResource.constructFromObject(data['integrations']);
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = CultureSpecificExternalResource.constructFromObject(data['site']);
            }
            if (data.hasOwnProperty('socialNetworks')) {
                obj['socialNetworks'] = CultureSpecificExternalResource.constructFromObject(data['socialNetworks']);
            }
            if (data.hasOwnProperty('support')) {
                obj['support'] = CultureSpecificExternalResource.constructFromObject(data['support']);
            }
            if (data.hasOwnProperty('videoguides')) {
                obj['videoguides'] = CultureSpecificExternalResource.constructFromObject(data['videoguides']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CultureSpecificExternalResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CultureSpecificExternalResources</code>.
     */
    static validateJSON(data) {
        // validate the optional field `api`
        if (data['api']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['api']);
        }
        // validate the optional field `common`
        if (data['common']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['common']);
        }
        // validate the optional field `forum`
        if (data['forum']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['forum']);
        }
        // validate the optional field `helpcenter`
        if (data['helpcenter']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['helpcenter']);
        }
        // validate the optional field `integrations`
        if (data['integrations']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['integrations']);
        }
        // validate the optional field `site`
        if (data['site']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['site']);
        }
        // validate the optional field `socialNetworks`
        if (data['socialNetworks']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['socialNetworks']);
        }
        // validate the optional field `support`
        if (data['support']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['support']);
        }
        // validate the optional field `videoguides`
        if (data['videoguides']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['videoguides']);
        }

        return true;
    }


}



/**
 * @member {module:models/CultureSpecificExternalResource} api
 */
CultureSpecificExternalResources.prototype['api'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} common
 */
CultureSpecificExternalResources.prototype['common'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} forum
 */
CultureSpecificExternalResources.prototype['forum'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} helpcenter
 */
CultureSpecificExternalResources.prototype['helpcenter'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} integrations
 */
CultureSpecificExternalResources.prototype['integrations'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} site
 */
CultureSpecificExternalResources.prototype['site'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} socialNetworks
 */
CultureSpecificExternalResources.prototype['socialNetworks'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} support
 */
CultureSpecificExternalResources.prototype['support'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} videoguides
 */
CultureSpecificExternalResources.prototype['videoguides'] = undefined;






export default CultureSpecificExternalResources;

