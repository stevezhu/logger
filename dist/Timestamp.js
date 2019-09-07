"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimestampFormat;
(function (TimestampFormat) {
    TimestampFormat["DateTime"] = "datetime";
    TimestampFormat["Date"] = "date";
    TimestampFormat["Time"] = "time";
    TimestampFormat["Offset"] = "offset";
})(TimestampFormat = exports.TimestampFormat || (exports.TimestampFormat = {}));
class Timestamp {
    constructor(format, style = '') {
        this.format = format;
        this.style = style;
        this.timestampFn = Object.assign(() => { }, {
            toString: createToStringFunction(format),
        });
    }
    toLoggableObject() {
        return this.timestampFn;
    }
}
exports.Timestamp = Timestamp;
function createToStringFunction(format) {
    switch (format) {
        case TimestampFormat.DateTime:
            return () => new Date(Date.now()).toLocaleString();
        case TimestampFormat.Date:
            return () => new Date(Date.now()).toLocaleDateString();
        case TimestampFormat.Time:
            return () => new Date(Date.now()).toLocaleTimeString();
        case TimestampFormat.Offset:
            let prevTime = null;
            return () => {
                const time = Date.now();
                if (prevTime == null) {
                    prevTime = time;
                }
                const diff = time - prevTime;
                prevTime = time;
                return `+${diff}ms`;
            };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1RpbWVzdGFtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6Qix3Q0FBcUIsQ0FBQTtJQUNyQixnQ0FBYSxDQUFBO0lBQ2IsZ0NBQWEsQ0FBQTtJQUNiLG9DQUFpQixDQUFBO0FBQ25CLENBQUMsRUFMVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUsxQjtBQWdCRCxNQUFhLFNBQVM7SUFLcEIsWUFBWSxNQUF1QixFQUFFLFFBQWdCLEVBQUU7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRTtZQUN6QyxRQUFRLEVBQUUsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1NBQ3pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztDQUNGO0FBaEJELDhCQWdCQztBQUVELFNBQVMsc0JBQXNCLENBQUMsTUFBdUI7SUFDckQsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLGVBQWUsQ0FBQyxRQUFRO1lBQzNCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDcEQsS0FBSyxlQUFlLENBQUMsSUFBSTtZQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEQsS0FBSyxlQUFlLENBQUMsSUFBSTtZQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEQsS0FBSyxlQUFlLENBQUMsTUFBTTtZQUN6QixJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFBO1lBQ2xDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtnQkFDdkIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFBO2lCQUNoQjtnQkFDRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFBO2dCQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNmLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQTtZQUNyQixDQUFDLENBQUE7S0FDSjtBQUNILENBQUMifQ==