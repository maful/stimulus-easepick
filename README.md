<p align="center">
  <img src=".github/social-stimulus-easepick.png" width="1280" title="Social Card Stimulus Easepick Datepicker">
</p>

# Stimulus Easepick Datepicker

[![npm version](https://badge.fury.io/js/stimulus-easepick.svg)](https://www.npmjs.com/package/stimulus-easepick)

## Getting started

Experience the power of simplicity with our lightweight, zero-dependency datepicker powered by [easepick](https://easepick.com/). This Stimulus controller wrapper brings you:

- Seamless integration with Stimulus
- Minimal footprint for optimal performance
- Rich functionality without the bloat

Transform date input fields into intuitive, user-friendly datepickers with minimal effort.

## Installation

Ensure you have the following dependencies installed in your project:

- @hotwired/stimulus v3 or later
- @easepick/bundle v1.2 or later

Integrate `stimulus-easepick` into your project:

```bash
npm install stimulus-easepick
# yarn add stimulus-easepick
```

Register the datepicker controller with your Stimulus application:

```javascript
// app/javascript/controllers/index.js
import { Application } from "@hotwired/stimulus";
import Datepicker from "stimulus-easepick";

const application = Application.start();
application.register("datepicker", Datepicker);
```

## Usage

```html
<div data-controller="datepicker" data-datepicker-format-value="D MMM YYYY">
  <input data-datepicker-target="input" />
</div>
```

## Configuration

| Attribute | Default | Type | Description |
|---|---|---|---|
| `data-datepicker-first-day-value` | `1` | Number | Day of start week. (0 - Sunday, 1 - Monday, etc…) |
| `data-datepicker-lang-value` | `en-US` | String | Language. This option affect to day names, month names via [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) and also affect to plural rules via [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules). |
| `data-datepicker-date-value` |  | String, Number | Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-format-value` | `YYYY-MM-DD` | String | The default output format. See [tokens format](https://easepick.com/packages/datetime#tokens-format). |
| `data-datepicker-grid-value` | `1` | Number | Number of calendar columns. |
| `data-datepicker-calendars-value` | `1` | Number | Number of visible months. |
| `data-datepicker-readonly-value` | `false` | Boolean | Add `readonly` attribute to `element`. |
| `data-datepicker-inline-value` | `false` | Boolean | Show calendar inline. |
| `data-datepicker-enable-lock-value` | `false` | Boolean | Enable Lock Plugin. |
| `data-datepicker-lock-min-date-value` |  | String, Number | Lock Plugin. The minimum date that can be selected. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-lock-max-date-value` |  | String, Number | Lock Plugin. The maximum date that can be selected. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-lock-select-backward-value` | `false` | Boolean | Lock Plugin. Select second date before the first selected date. |
| `data-datepicker-lock-select-forward-value` | `false` | Boolean | Lock Plugin. Select second date after the first selected date. |
| `data-datepicker-lock-min-days-value` | `null` | Number | Lock Plugin. The minimum days of the selected range. |
| `data-datepicker-lock-max-days-value` | `null` | Number | Lock Plugin. The maximum days of the selected range. |
| `data-datepicker-enable-time-value` | `false` | Boolean | Enable Time Plugin. |
| `data-datepicker-time-seconds-value` | `false` | Boolean | Enable seconds picker. |
| `data-datepicker-time-step-hours-value` | `1` | Number | Step for hours. |
| `data-datepicker-time-step-minutes-value` | `5` | Number | Step for minutes. |
| `data-datepicker-time-step-seconds-value` | `5` | Number | Step for seconds. |
| `data-datepicker-time-twelve-format-value` | `false` | Boolean | Display 12H time. |
| `data-datepicker-enable-amp-value` | `false` | Boolean | Enable Amp Plugin. |
| `data-datepicker-amp-reset-button-value` | `false` | Boolean | Adds a reset button to clear the current selection. |
| `data-datepicker-amp-months-value` | `false` | Boolean | Enable the months dropdown in the calendar. |
| `data-datepicker-amp-years-value` | `false` | Boolean | Enable the years dropdown in the calendar. |
| `data-datepicker-amp-min-year-value` | `1950` | Number | The minimum year that can be selected in the dropdown. |
| `data-datepicker-amp-max-year-value` | `null` | Number | The maximum year that can be selected in the dropdown. |
| `data-datepicker-enable-range-value` | `false` | Boolean | Enable Range Plugin. |
| `data-datepicker-range-delimiter-value` | ` - ` | String | Delimiter between dates. |
| `data-datepicker-range-tooltip-value` | `true` | Boolean | Showing tooltip with how many days will be selected. |
| `data-datepicker-range-start-date-value` | `null` | String, Number | Preselect start date. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-range-end-date-value` | `null` | String, Number | Preselect end date. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-enable-preset-value` | `false` | Boolean | Enable Preset Plugin. Range plugin must be enabled. |
| `data-datepicker-preset-position-value` | `left` | String | Position of preset block (`left`, `right`, `top`, or `bottom`). |
| `data-datepicker-enable-kbd-value` | `false` | Boolean | Enable Keyboard Plugin. |
| `data-datepicker-kbd-unit-index-value` | `1` | Number | `tabIndex` for elements except days elements. |
| `data-datepicker-kbd-day-index-value` | `2` | Number | `tabIndex` for days elements. |

## Contributing

Do not hesitate to contribute to the project by adapting or adding features! Bug reports or pull requests are welcome.

Don't forget to drop a 🌟 on [GitHub](https://github.com/maful/stimulus-easepick) to support the project.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
