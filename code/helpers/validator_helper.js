const Ajv = require("ajv")
const ajv = new Ajv()

module.exports = {
    async validate(schema, data) {
        const validate = ajv.compile(schema);
        const valid = validate(data);

        let result = {
            "valid": true,
            "error": ""
        }

        if (!valid){
            let error_field = validate.errors[0].instancePath != "" ? validate.errors[0].instancePath+" " : "";
            let error_message = error_field+validate.errors[0].message;
            result = {
                "valid": false,
                "error": error_message
            }
        }
        return result;
    }
}