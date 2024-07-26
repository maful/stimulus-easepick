<p align="center">
  <img src=".github/social-stimulus-easepick.png" width="1280" title="Social Card Stimulus Easepick Datepicker">
</p>

# Stimulus Easepick Datepicker

<p align="center">
  <b>A Stimulus Wrapper for easepick datepicker library</b></br>
  <sub>gzip: 0.60 kB<sub>
</p>

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

| Attribute | Default | Description | Required |
|---|---|---|---|
| `data-datepicker-first-day-value` | `1` | Day of start week. (0 - Sunday, 1 - Monday, etc…) | ❌ |
| `data-datepicker-lang-value` | `en-US` | Language. This option affect to day names, month names via [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) and also affect to plural rules via [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules). | ❌ |
| `data-datepicker-date-value` |  | Unix Timestamp (with milliseconds) or String (must satisfy the option `format`). | ❌ |
| `data-datepicker-format-value` | `YYYY-MM-DD` | The default output format. See [tokens format](https://easepick.com/packages/datetime#tokens-format). | ❌ |
| `data-datepicker-grid-value` | `1` | Number of calendar columns. | ❌ |
| `data-datepicker-calendars-value` | `1` | Number of visible months. | ❌ |
| `data-datepicker-readonly-value` | `false` | Add `readonly` attribute to `element`. | ❌ |

## Contributing

Do not hesitate to contribute to the project by adapting or adding features! Bug reports or pull requests are welcome.

Don't forget to drop a 🌟 on [GitHub](https://github.com/maful/stimulus-easepick) to support the project.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
