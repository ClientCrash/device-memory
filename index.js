const deviceMemory = (req, res, next) => {
    const deviceMemory = req.headers['device-memory'];
    req.deviceMemory = deviceMemory === undefined ? -1 : Math.min(Number(deviceMemory), 8);
    next();
}

export default deviceMemory;
