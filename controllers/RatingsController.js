const Ratings = require('../models').Ratings;

const create = async function(req, res) {
    res.setHeader('Content-Type', 'Application/json');
    let err, rating, ratingInfo, sessionId;

    sessionId = req.params.sessionId;
    ratingInfo = req.body;

    // stuff this property into the object for the association
    ratingInfo.sessionId = sessionId;

    if (!ratingInfo.rating) {
        ReE(res, 'Please enter a rating.', 400);
    }

    if (ratingInfo.rating < 0 || ratingInfo.rating > 5) {
        ReE(res, 'Rating must be between 1 and 5.', 400);
    }

    // Todo: add validation on rating decimal and sessionId
    [err, rating] = await to(Ratings.create(ratingInfo));
    if (err) return ReE(res, err, 422);

    return ReS(res, rating, 201);
}
module.exports.create = create;

const update = async function(req, res) {
    let err, rating, ratingInfo, ratingId;
    ratingId = req.params.ratingId;
    ratingInfo = req.body;

    if (!ratingInfo.rating) {
        ReE(res, 'Please enter a rating.', 400);
    }

    if (ratingInfo.rating < 0 || ratingInfo.rating > 5) {
        ReE(res, 'Rating must be between 1 and 5.', 400);
    }

    [err, rating] = await to(Ratings.update(
        {rating: ratingInfo.rating },
        { where: { id: ratingId } } 
        ) // update end
    ); // await end
    if (err) return ReE(res, err, 422);

    return ReS(res, rating, 200);
}
module.exports.update = update;