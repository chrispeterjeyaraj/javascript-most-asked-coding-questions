import {logHelper} from "../utils/loghelper";
const minmax = () => {
    const arr = [1,10,3,25,-35,55];
    const max = arr.reduce((prev, curr) => prev > curr ? prev : curr)
    const min = arr.reduce((prev, curr) => prev < curr ? prev : curr)
    logHelper.log(`Max = ${max} Min = ${min}`);
}
document.getElementById('minmax').addEventListener('click', minmax)


