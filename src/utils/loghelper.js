export const logHelper = {
    log: (value) => {
        try {
            document.getElementById("loggerArea").value = value;
            } catch(err) {
            document.getElementById("loggerArea").value = err;
            }
    }
}