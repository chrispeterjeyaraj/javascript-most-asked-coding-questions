import {logHelper} from "../utils/loghelper";
const findsecondlargestnumberinarray = () => {
    const arr = [1,2,4,7,5,9];
    const getNLargestItem = (arr,n) => {
        for(let i=0;i<n;i++) {
            // logHelper.log(arr.slice(arr.indexOf(Math.max.apply(null, arr))))
            const value = arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
            logHelper.log(value);
        }
    }
    getNLargestItem(arr,2);
   
}
document.getElementById('findsecondlargestnumberinarray').addEventListener('click', findsecondlargestnumberinarray)


