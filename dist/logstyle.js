"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeRecursive_1 = require("./makeRecursive");
function logstyle(strs, ...vals) {
    const [initial, ...remaining] = strs;
    let message = initial;
    const substitutions = [];
    for (const [i, val] of vals.entries()) {
        if (val.style == '') {
            message += '%s';
            substitutions.push(val.toLoggableObject());
        }
        else {
            message += '%c%s%c';
            substitutions.push(val.style, val.toLoggableObject(), '');
        }
        message += remaining[i];
    }
    return [message, ...substitutions];
}
exports.logstyle = logstyle;
exports.logstyleRecursive = makeRecursive_1.makeRecursive([''], logstyle, ([aInitial, ...aRemaining], [bInitial, ...bRemaining]) => {
    const ret = [aInitial + bInitial];
    ret.push(...aRemaining);
    ret.push(...bRemaining);
    return ret;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nc3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbG9nc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBK0M7QUFPL0MsU0FBZ0IsUUFBUSxDQUN0QixJQUEwQixFQUMxQixHQUFHLElBQXNCO0lBRXpCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUE7SUFFcEMsSUFBSSxPQUFPLEdBQVcsT0FBTyxDQUFBO0lBQzdCLE1BQU0sYUFBYSxHQUFVLEVBQUUsQ0FBQTtJQUMvQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JDLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQTtZQUNmLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtTQUMzQzthQUFNO1lBQ0wsT0FBTyxJQUFJLFFBQVEsQ0FBQTtZQUNuQixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDMUQ7UUFDRCxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3hCO0lBQ0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFBO0FBQ3BDLENBQUM7QUFuQkQsNEJBbUJDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyw2QkFBYSxDQUM1QyxDQUFDLEVBQUUsQ0FBQyxFQUNKLFFBQVEsRUFDUixDQUNFLENBQUMsUUFBUSxFQUFFLEdBQUcsVUFBVSxDQUFXLEVBQ25DLENBQUMsUUFBUSxFQUFFLEdBQUcsVUFBVSxDQUFXLEVBQ3pCLEVBQUU7SUFDWixNQUFNLEdBQUcsR0FBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQTtJQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZCLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQyxDQUNGLENBQUEifQ==