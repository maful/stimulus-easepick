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
  };

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

  get lockPluginEnabled() {
    return this.hasLockMinDateValue || this.hasLockMaxDateValue;
  }

  get timePluginEnabled() {
    return this.enableTimeValue;
  }
}
