import {logHelper} from "../utils/loghelper";
const wordoccurancesinanarray = () => {
    const arr = ["test", "dad", "look", "test", "my", "chris", "dad"];
    const output = {};
    arr.forEach(element => {
        if (output[element]) {
            output[element]++;
        } else {
            output[element] = 1
    }
    });
    logHelper.log(JSON.stringify(output));
    // logHelper.log(arr.flat(2));
}
document.getElementById('wordoccurancesinanarray').addEventListener('click', wordoccurancesinanarray);


