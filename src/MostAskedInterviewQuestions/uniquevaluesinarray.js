import {logHelper} from "../utils/loghelper";
const uniquevaluesinarray = () => {
    const arr = [1,5,3,5,1,2,3,3,8,8,6,4,6,4];
    //const uniqueArr = [...new Set(arr)]
    const uniqueArr = arr.filter((item, index, array) => {
        console.log(array.indexOf(item), index) // to learn how this this works :)
        return array.indexOf(item) === index;
    });
    logHelper.log(uniqueArr);
}
document.getElementById('uniquevaluesinarray').addEventListener('click', uniquevaluesinarray)


