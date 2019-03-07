// We set global variables to emulate a Jessie environment in a
// vanilla Node.js script.  This allows us to import modules directly
// if they are written in Jessie (as all the jessica/ directory is).
//
// NOTE: Don't ever do this in a library module, it's only allowed when
// we are a main program, and we're changing global state for the
// entire process.

import * as sesshim from './sesshim.js';

const globalEnv: Record<string, any> = {};

// Export all of the SES shim.
globalEnv.harden = sesshim.def;
globalEnv.confine = sesshim.confine;
(global as any).harden = sesshim.def;
(global as any).confine = sesshim.confine;

export default globalEnv;