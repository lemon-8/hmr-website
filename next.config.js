module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/pricing",
				destination:
					"https://docs.google.com/spreadsheets/d/1RTB2UYEo-d7VcEVZbWHLyQumtwxaoGowjkLVtHu7_cc/edit#gid=0",
				permanent: true,
			},
		];
	},
};
