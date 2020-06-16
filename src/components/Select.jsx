import React from "react";

const Select = React.memo(
  React.forwardRef(({ options, ...props }, ref) => {
    return (
      <select {...props} ref={ref}>
        {options.length > 0 ? (
          options.map(e => (
            <option key={e.value} value={e.value}>
              {e.Zh_tw + e.En}
            </option>
          ))
        ) : (
          <option value="">請選擇</option>
        )}
      </select>
    );
  })
);

const timeOptions = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00"
];

export const TimeSelect = React.memo(({ options, ...props }) => {
  return (
    <select {...props}>
      {timeOptions.map(v => (
        <option value={v} key={v}>
          {v}
        </option>
      ))}
    </select>
  );
});

export default Select;
