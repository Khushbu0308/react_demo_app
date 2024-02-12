const setIntervalFunction = (interval) => {
    let lastActiveTime = Math.floor(Date.now() / 1000) + interval;
    for (; ;) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime == lastActiveTime) {
            lastActiveTime = parseInt(interval) + parseInt(currentTime);
            console.log(lastActiveTime)
            console.log(`Funcation Run in ${interval} Sec`);
        }
    }
}
setIntervalFunction(5);
