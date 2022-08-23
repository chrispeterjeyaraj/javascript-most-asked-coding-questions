import {logHelper} from "../utils/loghelper";
const reverseString = () => {
    const str = "JAVASCRIPT is awesome"
    logHelper.log(str.split("").reverse().join(""));
}
document.getElementById('reversestring').addEventListener('click', reverseString)


