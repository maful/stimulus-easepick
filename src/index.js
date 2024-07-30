import * as easepick from "@easepick/bundle";
import { Controller } from "@hotwired/stimulus";

window.easepick = easepick;

export default class Datepicker extends Controller {
  static targets = ["input"];
  static values = {
    firstDay: { type: Number, default: 1 },
    lang: { type: String, default: "en-US" },
    date: { type: String },
    format: { type: String, default: "YYYY-MM-DD" },
    grid: { type: Number, default: 1 },
    calendars: { type: Number, default: 1 },
    readonly: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    lockMinDate: String,
    lockMaxDate: String,
    enableTime: { type: Boolean, default: false },
    timeSeconds: { type: Boolean, default: false },
    timeStepHours: { type: Number, default: 1 },
    timeStepMinutes: { type: Number, default: 5 },
    timeStepSeconds: { type: Number, default: 5 },
    timeTwelveFormat: { type: Boolean, default: false },
    enableAmp: { type: Boolean, default: false },
    ampMonths: { type: Boolean, default: false },
    ampYears: { type: Boolean, default: false },
    ampMinYear: { type: Number, default: 1950 },
    ampMaxYear: { type: Number, default: null },
    ampResetButton: { type: Boolean, default: false },
    enableRange: { type: Boolean, default: false },
    rangeStartDate: String,
    rangeEndDate: String,
    rangeDelimiter: { type: String, default: " - " },
    rangeTooltip: { type: Boolean, default: true },
    enablePreset: { type: Boolean, default: false },
    presetPosition: { type: String, default: "left" },
  };

  #presetPositions = ["top", "left", "right", "bottom"];

  connect() {
    const element = this.hasInputTarget ? this.inputTarget : this.element;

    this.datepicker = new easepick.create({
      element: element,
      firstDay: this.firstDayValue,
      lang: this.langValue,
      format: this.formatValue,
      grid: this.gridValue,
      calendars: this.calendarsValue,
      readonly: this.readonlyValue,
      inline: this.inlineValue,
      css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2/dist/index.min.css",
      ],
    });

    this.setupPlugins();

    if (this.dateValue !== "") {
      this.datepicker.setDate(this.dateValue);
    }

    this.datepicker.renderAll();
  }

  disconnect() {
    this.datepicker.destroy();
    this.datepicker = undefined;
  }

  setupPlugins() {
    this.setupLockPlugin();
    this.setupTimePlugin();
    this.setupAmpPlugin();
    this.setupRangePlugin();
    this.setupPresetPlugin();
  }

  setupLockPlugin() {
    if (!this.lockPluginEnabled) return;

    const lockPlugin = this.datepicker.PluginManager.addInstance("LockPlugin");

    if (this.hasLockMinDateValue && this.lockMinDateValue !== "") {
      lockPlugin.options.minDate = this.lockMinDateValue;
    }

    if (this.hasLockMaxDateValue && this.lockMaxDateValue !== "") {
      lockPlugin.options.maxDate = this.lockMaxDateValue;
    }

    lockPlugin.onAttach();
  }

  setupTimePlugin() {
    if (!this.timePluginEnabled) return;

    const timePlugin = this.datepicker.PluginManager.addInstance("TimePlugin");
    timePlugin.options = {
      ...timePlugin.options,
      seconds: this.timeSecondsValue,
      stepHours: this.timeStepHoursValue,
      stepMinutes: this.timeStepMinutesValue,
      stepSeconds: this.timeStepSecondsValue,
      format12: this.timeTwelveFormatValue,
    };

    timePlugin.onAttach();
  }

  setupAmpPlugin() {
    if (!this.ampPluginEnabled) return;

    const ampPlugin = this.datepicker.PluginManager.addInstance("AmpPlugin");
    ampPlugin.options.dropdown = {
      ...ampPlugin.options.dropdown,
      months: this.ampMonthsValue,
      years: this.ampYearsValue,
      maxYear: this.ampMaxYearValue,
      minYear: this.ampMinYearValue,
    };
    ampPlugin.options.resetButton = this.ampResetButtonValue;

    ampPlugin.onAttach();
  }

  setupRangePlugin() {
    if (!this.rangePluginEnabled) return;

    const rangePlugin =
      this.datepicker.PluginManager.addInstance("RangePlugin");
    rangePlugin.options = {
      ...rangePlugin.options,
      delimiter: this.rangeDelimiterValue,
      tooltip: this.rangeTooltipValue,
    };

    if (this.rangeStartDateValue !== "") {
      rangePlugin.setStartDate(this.rangeStartDateValue);
    }

    if (this.rangeEndDateValue !== "") {
      rangePlugin.setEndDate(this.rangeEndDateValue);
    }

    rangePlugin.onAttach();
  }

  setupPresetPlugin() {
    if (!this.presetPluginEnabled) return;

    if (this.rangePluginEnabled) {
      this.datepicker.options.plugins = [
        ...this.datepicker.options.plugins,
        "RangePlugin",
      ];
    } else {
      console.warn("[stimulus-easepick] Range plugin must be enabled.");
      return;
    }

    if (!this.#presetPositions.includes(this.presetPositionValue)) {
      console.warn("[stimulus-easepick] Preset position is not valid.");
      return;
    }

    const presetPlugin =
      this.datepicker.PluginManager.addInstance("PresetPlugin");
    presetPlugin.options = {
      ...presetPlugin.options,
      position: this.presetPositionValue,
    };

    presetPlugin.onAttach();
  }

  get lockPluginEnabled() {
    return this.hasLockMinDateValue || this.hasLockMaxDateValue;
  }

  get timePluginEnabled() {
    return this.enableTimeValue;
  }

  get ampPluginEnabled() {
    return this.enableAmpValue;
  }

  get rangePluginEnabled() {
    return this.enableRangeValue;
  }

  get presetPluginEnabled() {
    return this.enablePresetValue;
  }
}
