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
| `data-datepicker-lock-min-date-value` |  | String, Number | Lock Plugin. The minimum date that can be selected. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-lock-max-date-value` |  | String, Number | Lock Plugin. The maximum date that can be selected. Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). |
| `data-datepicker-enable-time-value` | `false` | Boolean | Enable Time Plugin. |
| `data-datepicker-time-seconds-value` | `false` | Boolean | Enable seconds picker. |
| `data-datepicker-time-step-hours-value` | `1` | Number | Step for hours. |
| `data-datepicker-time-step-minutes-value` | `5` | Number | Step for minutes. |
| `data-datepicker-time-step-seconds-value` | `5` | Number | Step for seconds. |
| `data-datepicker-time-twelve-format-value` | `false` | Boolean | Display 12H time. |

## Contributing

Do not hesitate to contribute to the project by adapting or adding features! Bug reports or pull requests are welcome.

Don't forget to drop a 🌟 on [GitHub](https://github.com/maful/stimulus-easepick) to support the project.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
