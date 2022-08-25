import {logHelper} from "../utils/loghelper";
const lastnelementsofarray = () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    const n = 3;
    logHelper.log(arr.slice(-n));
}
document.getElementById('lastnelementsofarray').addEventListener('click', lastnelementsofarray)


