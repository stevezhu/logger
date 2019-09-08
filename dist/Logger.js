"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logstyle_1 = require("./logstyle");
const Styleable_1 = require("./interfaces/Styleable");
const Timestamp_1 = require("./Timestamp");
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
const DEFAULT_STYLES = {
    name: 'font-weight: bold',
    timestamp: 'color: gray; font-style: italic;',
    levels: 'color: white; text-transform: uppercase; padding: 0 0.4em;',
    error: 'background-color: red;',
    warn: 'background-color: #ffe000;',
    info: 'background-color: #66bb6a;',
    debug: 'background-color: gray;',
};
class Logger {
    constructor({ console = globalThis.console, name, timestampFormat = Timestamp_1.TimestampFormat.DateTime, styles = DEFAULT_STYLES, } = {}) {
        this.styles = Object.assign({}, DEFAULT_STYLES, styles);
        this.console = console;
        if (name != null) {
            this.name = Styleable_1.createStyleable(name, styles.name);
        }
        this.timestamp = new Timestamp_1.Timestamp(timestampFormat, styles.timestamp);
        this.error = this.createLogFunction(LogLevel.Error);
        this.warn = this.createLogFunction(LogLevel.Warn);
        this.info = this.createLogFunction(LogLevel.Info);
        this.debug = this.createLogFunction(LogLevel.Debug);
    }
    createLogFunction(levelObj) {
        const level = Styleable_1.createStyleable(levelObj, this.styles.levels + this.styles[levelObj]);
        let substitutions = logstyle_1.logstyleRecursive `${this.timestamp} ${level}`;
        if (this.name != null) {
            substitutions = substitutions ` [${this.name}]`;
        }
        return this.console[levelObj].bind(this.console, ...substitutions());
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUEwRDtBQUMxRCxzREFBbUU7QUFDbkUsMkNBQXdEO0FBRXhELElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQiwyQkFBZSxDQUFBO0lBQ2YseUJBQWEsQ0FBQTtJQUNiLHlCQUFhLENBQUE7SUFDYiwyQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLElBQUksRUFBRSxtQkFBbUI7SUFDekIsU0FBUyxFQUFFLGtDQUFrQztJQUU3QyxNQUFNLEVBQUUsNERBQTREO0lBQ3BFLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsSUFBSSxFQUFFLDRCQUE0QjtJQUNsQyxJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLEtBQUssRUFBRSx5QkFBeUI7Q0FDakMsQ0FBQTtBQUVELE1BQWEsTUFBTTtJQVdqQixZQUFZLEVBQ1YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQzVCLElBQUksRUFDSixlQUFlLEdBQUcsMkJBQWUsQ0FBQyxRQUFRLEVBQzFDLE1BQU0sR0FBRyxjQUFjLE1BTXJCLEVBQUU7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUV0QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBZSxDQUFTLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRWpFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRU8saUJBQWlCLENBQUMsUUFBa0I7UUFDMUMsTUFBTSxLQUFLLEdBQUcsMkJBQWUsQ0FDM0IsUUFBUSxFQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQzNDLENBQUE7UUFFRCxJQUFJLGFBQWEsR0FBRyw0QkFBUSxDQUFBLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUUsQ0FBQTtRQUN4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3JCLGFBQWEsR0FBRyxhQUFhLENBQUEsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUE7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7Q0FDRjtBQWpERCx3QkFpREMifQ==