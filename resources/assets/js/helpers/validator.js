import each from 'lodash/each'

const validator = (models) => {
  return (values) => {
      const errors = {};
      each(models, (type, field) => {
        if(!values[field]) {
          errors[field] = `${field} is blank`
        }
      });
      return errors;
  }
}


export default validator
