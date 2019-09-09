const models = require("../../models/models");
const colorConsole = require("../../lib/console");

module.exports = async (req, user_id) => {
	try {
		const profilePic = await models.User.findOne({ attributes : [ "profile_pic" ], where : { user_id } });

		let profileUrl;
		if (!profilePic.profile_pic) {
			profileUrl = `${req.origin}/static/image/basic_profile.png`;
		} else {
			profileUrl = `${req.origin}/static/image/${profilePic.profile_pic}`;
		}

		return profileUrl;
	} catch(err) {
		throw err;
	}
}