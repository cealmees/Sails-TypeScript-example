/**
 * Timestamps.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    created_at : { 
      type: 'integer',
    },

    updated_at : { 
      type: 'integer' 
    },

    deleted_at : { 
      type: 'integer' 
    }
  }
};

