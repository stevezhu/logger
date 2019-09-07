import { logstyleRecursive as logstyle } from './logstyle';
import { createStyleable } from './interfaces/Styleable';
import { Timestamp, TimestampFormat } from './Timestamp';
export var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
})(LogLevel || (LogLevel = {}));
const DEFAULT_STYLES = {
    name: 'font-weight: bold',
    timestamp: 'color: gray; font-style: italic;',
    levels: 'color: white; text-transform: uppercase;',
    error: 'background-color: red;',
    warn: 'background-color: #ffe000;',
    info: 'background-color: #66bb6a;',
    debug: 'background-color: gray;',
};
export class Logger {
    constructor({ console = globalThis.console, name, timestampFormat = TimestampFormat.DateTime, styles = DEFAULT_STYLES, } = {}) {
        this.styles = Object.assign({}, DEFAULT_STYLES, styles);
        this.console = console;
        if (name != null) {
            this.name = createStyleable(name, styles.name);
        }
        this.timestamp = new Timestamp(timestampFormat, styles.timestamp);
        this.error = this.createLogFunction(LogLevel.Error);
        this.warn = this.createLogFunction(LogLevel.Warn);
        this.info = this.createLogFunction(LogLevel.Info);
        this.debug = this.createLogFunction(LogLevel.Debug);
    }
    createLogFunction(levelObj) {
        const level = createStyleable(levelObj, this.styles[levelObj]);
        let substitutions = logstyle `${this.timestamp} ${level}`;
        if (this.name != null) {
            substitutions = substitutions ` [${this.name}]`;
        }
        return this.console[levelObj].bind(this.console, ...substitutions());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLElBQUksUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQzFELE9BQU8sRUFBYSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV4RCxNQUFNLENBQU4sSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLDJCQUFlLENBQUE7SUFDZix5QkFBYSxDQUFBO0lBQ2IseUJBQWEsQ0FBQTtJQUNiLDJCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBRUQsTUFBTSxjQUFjLEdBQUc7SUFDckIsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QixTQUFTLEVBQUUsa0NBQWtDO0lBRTdDLE1BQU0sRUFBRSwwQ0FBMEM7SUFDbEQsS0FBSyxFQUFFLHdCQUF3QjtJQUMvQixJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLElBQUksRUFBRSw0QkFBNEI7SUFDbEMsS0FBSyxFQUFFLHlCQUF5QjtDQUNqQyxDQUFBO0FBRUQsTUFBTSxPQUFPLE1BQU07SUFXakIsWUFBWSxFQUNWLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxFQUM1QixJQUFJLEVBQ0osZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQzFDLE1BQU0sR0FBRyxjQUFjLE1BTXJCLEVBQUU7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUV0QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQVMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN2RDtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVqRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQWtCO1FBQzFDLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBVyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBRXhFLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFLENBQUE7UUFDeEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyQixhQUFhLEdBQUcsYUFBYSxDQUFBLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxDQUFBO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0NBQ0YifQ==