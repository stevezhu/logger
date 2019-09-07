export var TimestampFormat;
(function (TimestampFormat) {
    TimestampFormat["DateTime"] = "datetime";
    TimestampFormat["Date"] = "date";
    TimestampFormat["Time"] = "time";
    TimestampFormat["Offset"] = "offset";
})(TimestampFormat || (TimestampFormat = {}));
export class Timestamp {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1RpbWVzdGFtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLHdDQUFxQixDQUFBO0lBQ3JCLGdDQUFhLENBQUE7SUFDYixnQ0FBYSxDQUFBO0lBQ2Isb0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLGVBQWUsS0FBZixlQUFlLFFBSzFCO0FBZ0JELE1BQU0sT0FBTyxTQUFTO0lBS3BCLFlBQVksTUFBdUIsRUFBRSxRQUFnQixFQUFFO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUU7WUFDekMsUUFBUSxFQUFFLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQUVELFNBQVMsc0JBQXNCLENBQUMsTUFBdUI7SUFDckQsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLGVBQWUsQ0FBQyxRQUFRO1lBQzNCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDcEQsS0FBSyxlQUFlLENBQUMsSUFBSTtZQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEQsS0FBSyxlQUFlLENBQUMsSUFBSTtZQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEQsS0FBSyxlQUFlLENBQUMsTUFBTTtZQUN6QixJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFBO1lBQ2xDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtnQkFDdkIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFBO2lCQUNoQjtnQkFDRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFBO2dCQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNmLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQTtZQUNyQixDQUFDLENBQUE7S0FDSjtBQUNILENBQUMifQ==