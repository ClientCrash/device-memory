function deviceMemory(req, res,next){
req.deviceMemory = req.headers['Device-Memory']
if(req.deviceMemory==undefined){
    req.deviceMemory=-1
}
next()
}
module.exports = deviceMemory