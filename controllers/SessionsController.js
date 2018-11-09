const Sessions = require('../models').Sessions;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, sessions;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
    }

    [err, sessions] = await to(Sessions.findAll({where: whereStatement}))
    if (!sessions) {
        res.statusCode = 404;
        return res.json({success:false, error: err});
    }
    return res.json(sessions);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
    let err, session;
    let sessionId = parseInt(req.params.sessionId)
    res.setHeader('Content-Type', 'application/json');
    
    [err, session] = await to(Sessions.findById({sessionId}))
    if (!session) {
        res.statusCode = 404;
        return res.json({success:false, error: err});
    }
    return res.json(session);
}
module.exports.get = get;
