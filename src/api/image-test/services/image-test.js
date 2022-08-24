'use strict';

/**
 * image-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::image-test.image-test');
