// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./src/schema";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import { seedDatabase } from "./src/seed";

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "mysql",
      // url: "mysql://sql12707021:4l2fRUxcpk@sql12.freemysqlhosting.net:3306/sql12707021",
      url: "mysql://root@localhost:3306/keystone",
      onConnect: async (context) => {
        if (process.argv.includes("--seed-database")) {
          await seedDatabase(context);
        }
      },
      // Optional advanced configuration
      enableLogging: true,
      idField: { kind: "uuid" },
    },
    lists,
    session,
    server: {
      port: 8080,
    },
  })
);
