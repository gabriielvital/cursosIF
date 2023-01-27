import Select from 'react-select';
import styles from './syles.module.scss';
export const CustomInput = ({
  outputName,
  id,
  type,
  label,
  defaultValue,
  value,
  options,
  ...rest
}) => {
  const findSelectedValue = (value, options) => {
    if (typeof value === 'string') {
      return options.find((arr) => arr.value === value) || null;
    } else {
      return value.map(
        (val) => options.find((arr) => arr.value === val) || null
      );
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        {label}
        {type !== 'select' ? (
          <input
            type={type}
            name={outputName}
            placeholder={label}
            id={id}
            defaultValue={!value ? defaultValue : value}
            className={styles.inputField}
            {...rest}
          />
        ) : (
          <Select
            options={options}
            name={outputName}
            defaultValue={findSelectedValue(
              !value ? defaultValue : value,
              options
            )}
            {...rest}
          />
        )}
      </label>
    </div>
  );
};
