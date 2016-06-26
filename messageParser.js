//Program to find valid messages in a message stream

var lower_chars = "abcdefghij";
var upper_chars = "MKPQ";
var z_chars = "Z";

//Helper function to check if an array is empty
function isArrayEmpty(arr) {
    return (arr.length > 0 ? false : true);
}

//Helper function to map boolean value to valid or invalid
function mapBoolToStr(val) {
    return (val ? "VALID" : "INVALID");

}

//function to validate a message
//@param1: message stream to be validated
function validateMessage(msg) {
    var messageChunk = [];
    var outputObj = {};
    var isValid = false;
    var chunkArray = [];
    messageChunk = msg.split(' ');
    for (var i = 0; i < messageChunk.length; i++) {
        chunkArray = messageChunk[i].split('');
        isValid = parseMessage(chunkArray) && isArrayEmpty(chunkArray);
        outputObj[messageChunk[i]] = mapBoolToStr(isValid);
    }
    return outputObj;
}

//function to parse message chunk
function parseMessage(message) {
    var ch = '';
    if (message.length > 0) {
        ch = message.shift();
    } else {
        return false;
    }

    if (lower_chars.indexOf(ch) >= 0)
        return true;
    else if (z_chars.indexOf(ch) >= 0) {
        return parseZMessage(message);

    }
    else if (upper_chars.indexOf(ch) >= 0) {
        return parseUpMessage(message);
    }
    else
        return false;
}

//Function to parse a message starting from a upper character which is either ( M  K  P  Q )
function parseUpMessage(message) {
    var parsedV1 = parseMessage(message);
    var parsedV2 = parseMessage(message);
    return parsedV1 && parsedV2;
}
//Function to parse a message starting from a upper character Z
function parseZMessage(message) {
    var parsedV1 = parseMessage(message);
    return parsedV1;
}

var msg = "Qa Zj MKaZcaMKaZca Khfa";
//Call the validateMessage function to parse the message.
var parsedObj = validateMessage(msg);
for(var key in parsedObj){
    if (parsedObj.hasOwnProperty(key)){
        console.log(key + " " + parsedObj[key]);
    }
}
