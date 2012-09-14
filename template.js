/**
 * Created with JetBrains WebStorm.
 * User: ravi.hamsa
 * Date: 14/09/12
 * Time: 5:40 PM
 * To change this template use File | Settings | File Templates.
 */
var getTemplated = function (template, data) {
    var regex = /{[^}]*}/gi;
    var vars = template.match(regex);
    var txtArr = template.split(regex);
    var len = txtArr.length;
    var output = [];
    for (var i = 0; i < len; i++) {
        // push splitted text parts
        output.push(txtArr[i]);
        //get varname like {varname}
        var varname = vars[i];
        if (varname) {
            //trim spaces and {} from varname
            var trimmedvarname = varname.replace(/[{}s]/gi, '');

            if (data[trimmedvarname] !== null && data[trimmedvarname] !== undefined) {
                //if data available push data
                output.push(data[trimmedvarname]);

            } else {
                //if data not available push template itself;
                output.push(varname);
            }
        }
    }
    return output.join('');
}
