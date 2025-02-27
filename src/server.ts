import { createServer } from "http";
import { handler } from "./handler";
import { createServer as createHttpsServer } from
"https";
import { readFileSync } from "fs";
const port = 5000;
const https_port = 5500;
const server = createServer(handler);
server.listen(port,() =>
    console.log(`(Event) Server listening onport ${port}`));
    const httpsConfig = {
        key: readFileSync("key.pem"),
        cert: readFileSync("cert.pem")
};
const httpsServer = createHttpsServer(httpsConfig, handler);
httpsServer.listen(https_port, () =>
    console.log(`HTTPS Server listening on port ${https_port}`)
);