/* eslint-disable react/destructuring-assignment */

import React from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import moment from 'moment';
import { enUS, enGB } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';

export const CustomDatePicker = ({
    readOnly,
    inline,
    selected,
    onChange,
    maxDate,
    minDate,
    className,
    dateFormat,
    disabled,
    isClearable,
    placeholderText,
    value, 
    name
}) => {
    return (
        <DatePicker
            name={name}
            // readOnly={readOnly}
            // inline={inline}
            // selected={new Date()}
            onChange={onChange}
            value={value}
            // maxDate={maxDate}
            // minDate={minDate}
            className={className}
            dateFormat="MM/dd/yyyy"
            maxDate={new Date()}
        // disabled={disabled}
        // isClearable={isClearable}
        // customInput={customInput}
        // placeholderText={placeholderText}
        />
    );
};

