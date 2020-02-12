const validations = {
  matchRegexp: (value, regexp) => {
    const validationRegexp =
      regexp instanceof RegExp ? regexp : new RegExp(regexp);
    return !validations.isSet(value) || validationRegexp.test(value);
  },

  isEmail: value =>
    validations.matchRegexp(
      value,
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    ),

  isExisty: value => value !== null && value !== undefined,

  isSet: value => {
    if (value instanceof Array) {
      return value.length !== 0;
    }
    return value !== "" && validations.isExisty(value);
  },

  required: value => validations.isSet(value),

  isNumber: value =>
    validations.matchRegexp((value), /^-?[0-9]\d*(\d+)?$/i),

  isFloat: value =>
    validations.matchRegexp(value, /^[+-]?([0-9]*[.])?[0-9]+$/i),

  isPositive: value => {
    if (validations.isExisty(value)) {
      return (
        (validations.isNumber(value) || validations.isFloat(value)) &&
        value >= 0
      );
    }
    return true;
  },
  isValidMobileNumber: value => {
    const reg = "^(\\+98|0)?9\\d{9}$";
    if (value.startsWith("+989") && value.length == 13) {
      // like +98912 --- -- --
      return validations.matchRegexp(value, reg);
    } else if (value.startsWith("09") && value.length == 11) {
      // 0901 --- -- --
      return validations.matchRegexp(value, reg);
    } else if (value.startsWith("989") && value.length == 12) {
      // like 98912 --- -- --
      return validations.matchRegexp(`+${value}`, reg);
    } else if (value.startsWith("+9" )&& value.length == 11) {
      // like +912 --- -- --
      return validations.matchRegexp(value.replace("+", "0"), reg);
    } else if (value.startsWith("0989")) {
      // like 098912 --- -- --
      return validations.matchRegexp("+989" + value.substring(4), reg);
    } else if (value.startsWith("9" )&& value.length == 10) {
      // like  98912 --- -- --
      return validations.matchRegexp(`+98${value}`, reg);
    } else return false;
  },
  returnValidMobileNumber: value => {
    if (
      value.startsWith(
        "+989" || (value.startsWith("0989") && value.length == 13)
      )
    ) {

      // like +98912 --- -- --   098912 --- -- --
      return `0${value.substring(3)}`;
    } else if (value.startsWith("98" )&& value.length == 12) {
      // like 98912 --- -- --

      return `0${value.substring(2)}`;
    } else if (value.startsWith("09" )&& value.length == 11) {
      return value;
    } else if (value.startsWith("+9" )&& value.length == 11) {
      // like +912 --- -- --
      return value.replace("+", "0");
    } else if (value.startsWith("9") && value.length == 10) {
      // like 912 --- -- --
      return `0${value}`;
    }
   else if (value.startsWith("0989") && value.length == 13) {
    // like 098912 --- -- --
    return `0${value.substring(3)}`;
  }
    else { 
      return value};
  },

  maxNumber: (value, max) =>
    validations.isSet(value) || parseInt(value, 10) <= parseInt(max, 10),

  minNumber: (value, min) =>
    validations.isSet(value) || parseInt(value, 10) >= parseInt(min, 10),

  maxFloat: (value, max) =>
    validations.isSet(value) || parseFloat(value) <= parseFloat(max),

  minFloat: (value, min) =>
    validations.isSet(value) || parseFloat(value) >= parseFloat(min),

  isString: value =>
    validations.isSet(value) ||
    typeof value === "string" ||
    value instanceof String,

  minStringLength: (value, length) =>
    validations.isString(value) && value.length >= length,

  maxStringLength: (value, length) =>
    validations.isString(value) && value.length <= length
};

export default validations;
