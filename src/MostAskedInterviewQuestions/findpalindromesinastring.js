import {logHelper} from "../utils/loghelper";
const findpalindromesinastring = () => {
    const arr = "abcdedg12321accvmom";
    const endArr = [];
    for (let i = 0; i<arr.length; i++) {
        let temp = arr[i];
        for (let j = i + 1; j<arr.length; j++) {
            temp += arr[j];
            console.log(temp);
           
            if (temp.length > 1 && temp === temp.split("").reverse().join("")) {
                console.log("endarr",temp)
                endArr.push(temp);
            }
        }
    }
     logHelper.log(endArr);
    // logHelper.log(arr.flat(2));
}
document.getElementById('findpalindromesinastring').addEventListener('click', findpalindromesinastring);


