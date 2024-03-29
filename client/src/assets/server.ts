import { isDevEnv } from "./constants";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _https;
if (isDevEnv) _https = (false); else _port = (true);
/** The domain the server is on. */
export const domain = (_domain);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _domain;
if (isDevEnv) _domain = ("localhost"); else _domain = ("gamedesign3backend");
/** Wether or not the protocol uses HTTPS. */
export const https = (_https);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _port;
if (isDevEnv) _port = (3001); else _port = ( (_https) ? 443 : 80 );
/** The port the server uses. */
export const port = (_port);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/** The information about the server URL. */
const server = {
    https:_https,
    domain:_domain,
    port:_port,

    /** returns a URL */
    getURL() {
        const protocol:string = (https) ? ("https") : ("http");
        return (`${protocol}://${this.domain}:${this.port}/`);
    }
};

export default server;
