const setIntervalFunction = (interval) => {
    const lastActiveTime = Math.floor(Date.now() / 1000) + interval;
    for (; ;) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime == lastActiveTime) {
            console.log(lastActiveTime)
            console.log(`Funcation Run in ${interval} Sec`);
            return;
        }
    }
}
setIntervalFunction(5);