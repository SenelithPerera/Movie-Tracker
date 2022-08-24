/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export const CustomSelect = ({ className, onKeyDown, onKeyPress, backspaceRemovesValue, styles, isClearable, isSearchable, isDisabled, value, id, options, onChange, onBlur, defaultValue, isLoading, placeholder }) => {
    return (
        <Select
            className={className}
            styles={styles}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            id={id}
            options={options}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            defaultValue={defaultValue}
            isLoading={isLoading}
            backspaceRemovesValue={backspaceRemovesValue}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}

        />
    );
};

CustomSelect.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.string,
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    id: PropTypes.number,
    options: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.object,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.object,
    isLoading: PropTypes.bool,
    backspaceRemovesValue: PropTypes.bool,
    onKeyDown: PropTypes.func, 
    onKeyPress: PropTypes.func
};

CustomSelect.defaultProps = {
    className: '',
    styles: '',
    isClearable: false,
    isSearchable: true,
    isDisabled: false,
    id: 1,
    options: [],
    onChange: () => { },
    value: {},
    placeholder: '',
    defaultValue: {},
    isLoading: false,
    backspaceRemovesValue: true,
    onKeyDown: () => { }, 
    onKeyPress: () => {}
};
