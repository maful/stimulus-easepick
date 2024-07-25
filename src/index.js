import { Controller } from "@hotwired/stimulus";
import { easepick } from "@easepick/bundle";

export default class Datepicker extends Controller {
	static targets = ["input"];
	static values = {
		firstDay: { type: Number, default: 1 },
		lang: { type: String, default: "en-US" },
		format: { type: String, default: "YYYY-MM-DD" },
		grid: { type: Number, default: 1 },
		calendars: { type: Number, default: 1 },
		readonly: { type: Boolean, default: false },
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
			css: [
				"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2/dist/index.min.css",
			],
		});
	}

	disconnect() {
		this.datepicker.destroy();
		this.datepicker = undefined;
	}
}
