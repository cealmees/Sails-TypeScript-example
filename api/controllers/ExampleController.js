/**
 * ExampleController
 *
 * @description :: Server-side logic for managing examples
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	Insert: function(req, res) {
        var UNIX_TIME = new Date().getTime();
        var insert = 'INSERT INTO timestamp_example (created_at, updated_at, deleted_at) VALUES ('+(UNIX_TIME + 1)+','+(UNIX_TIME + 2)+','+(UNIX_TIME + 3)+')';
        Timestamps.query(insert, function(err, record) {
            if(err) console.log(err);
            else console.log(record);
        });
    }
};

