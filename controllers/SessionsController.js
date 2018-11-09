const Sessions = require('../models').Sessions;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, sessions;
    sessions = [{ Name: 'John Teaches Angular', Location: 'Miles-U 1' },
    { Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
    { Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },
    ];

    return res.json(sessions);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
    let err, session;
    let sessionId = parseInt(req.params.sessionId)
    res.setHeader('Content-Type', 'application/json');
    
    [err, session] = await to(Sessions.findById({sessionId}))
    console.log(session);
    return res.json(session);
}
module.exports.get = get;
