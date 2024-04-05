import { isDevEnv } from "./constants";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _https = (true);
if (isDevEnv) _https = (false);
/** The protocol the backend uses. */
export const https = (_https);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _domain = ("gamedesign3backend.school.tygo.van.den.hurk.dev");
if (isDevEnv) _domain = ("localhost");
/** What domain the backend is one. */
export const domain = (_domain);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var _port = ( (_https) ? 443 : 80 );
if (isDevEnv) _port = (3001);
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
