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
import Operation from './Operation';

/**
 * The Report model module.
 * @module models/Report
 * @version 3.2.0
 */
class Report {
    /**
     * Constructs a new <code>Report</code>.
     * Represents a report containing a collection of operations.
     * @alias module:models/Report
     */
    constructor() { 
        
        Report.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Report} obj Optional instance to populate.
     * @return {module:models/Report} The populated <code>Report</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Report();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], [Operation]);
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalQuantity')) {
                obj['totalQuantity'] = ApiClient.convertToType(data['totalQuantity'], 'Number');
            }
            if (data.hasOwnProperty('totalPage')) {
                obj['totalPage'] = ApiClient.convertToType(data['totalPage'], 'Number');
            }
            if (data.hasOwnProperty('currentPage')) {
                obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Report</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Report</code>.
     */
    static validateJSON(data) {
        if (data['collection']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['collection'])) {
                throw new Error("Expected the field `collection` to be an array in the JSON data but got " + data['collection']);
            }
            // validate the optional field `collection` (array)
            for (const item of data['collection']) {
                Operation.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Collection of operations.
 * @member {Array.<module:models/Operation>} collection
 */
Report.prototype['collection'] = undefined;

/**
 * Offset of the report data.
 * @member {Number} offset
 */
Report.prototype['offset'] = undefined;

/**
 * Limit of the report data.
 * @member {Number} limit
 */
Report.prototype['limit'] = undefined;

/**
 * Total quantity of operations in the report.
 * @member {Number} totalQuantity
 */
Report.prototype['totalQuantity'] = undefined;

/**
 * Total number of pages in the report.
 * @member {Number} totalPage
 */
Report.prototype['totalPage'] = undefined;

/**
 * Current page number of the report.
 * @member {Number} currentPage
 */
Report.prototype['currentPage'] = undefined;






export default Report;

