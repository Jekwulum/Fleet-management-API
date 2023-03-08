const AppService = {
	formatUpdateQuery(req, res, next) {
		let newQuery = "", index = 0, queryCount = Object.entries(req.body).length;
		for (const forEach in req.body) {
			index++;
			const setValue = `${index === 1 ? "SET " : ""}${forEach} = '${forEach === 'description' && typeof req.body[forEach] === 'object' ?
				JSON.stringify(req.body[forEach]) : req.body[forEach]}'${index < queryCount ? ", " : ""}`;
			newQuery = `${newQuery}${setValue}`
		}
		res.locals.query = newQuery;
		next();
	},
}

module.exports = AppService;