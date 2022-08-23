import {logHelper} from "../utils/loghelper";
const flatarray = () => {
    const arr = [1,2,4,[2,[3,6]]];
    logHelper.log(arr.flat(2));
}
document.getElementById('flatarray').addEventListener('click', flatarray)


