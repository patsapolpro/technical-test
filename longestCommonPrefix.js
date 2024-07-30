function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
}
var input = ["flower", "flow", "flight"];
console.log("The longest Common Prefix is : " + longestCommonPrefix(input));
var input2 = ["dog", "racecar", "car"];
console.log("The longest Common Prefix is : " + longestCommonPrefix(input2));
g