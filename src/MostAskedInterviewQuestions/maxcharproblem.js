import {logHelper} from "../utils/loghelper";
const maxcharproblem = () => {
    const val = "Test everything";
    const arr = val.replace(" ", "").split("")
    console.log(arr)
    const output = {};
    arr.forEach(element => {
        if (output[element]) {
            output[element]++;
        } else {
            output[element] = 1
    }
    });
    logHelper.log(JSON.stringify(output));
}
document.getElementById('maxcharproblem').addEventListener('click', maxcharproblem);


