/**
 * Band.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer,' },

    name : { type: 'string,' },

    image : { type: 'string,' },

    genre : { type: 'string,' },

    members : { type: 'array,' },

    albums : { type: 'array' }
  }
};

