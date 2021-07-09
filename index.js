function deviceMemory(req, res,next){
req.deviceMemory = req.headers['Device-Memory'] || -1
next()
}
module.exports = deviceMemory