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
			{
				source: "/refunds",
				destination:
					"https://www.privacypolicies.com/live/ed4bd5d9-7d5d-4d6e-b0f8-527325856a59",
				permanent: true,
			},
		];
	},
};
