require("dotenv").config();

import { listen } from "./api/server.js";

const port = process.env.PORT;
listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
