"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core8 = require("@keystone-6/core");

// src/schema.ts
var import_core7 = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");

// src/component-blocks/carousel.tsx
var import_core = require("@keystone-ui/core");
var import_component_blocks = require("@keystone-6/fields-document/component-blocks");
var carousel = (0, import_component_blocks.component)({
  label: "Carousel",
  preview: function Preview(props) {
    return /* @__PURE__ */ (0, import_core.jsx)(import_component_blocks.NotEditable, null, /* @__PURE__ */ (0, import_core.jsx)(
      "div",
      {
        css: {
          overflowY: "scroll",
          display: "flex",
          scrollSnapType: "y mandatory"
        }
      },
      props.fields.items.elements.map((item) => {
        return /* @__PURE__ */ (0, import_core.jsx)(
          import_core.Box,
          {
            key: item.key,
            margin: "xsmall",
            css: {
              minWidth: "61.8%",
              scrollSnapAlign: "center",
              scrollSnapStop: "always",
              margin: 4,
              padding: 8,
              boxSizing: "border-box",
              borderRadius: 6,
              background: "#eff3f6"
            }
          },
          /* @__PURE__ */ (0, import_core.jsx)(
            "img",
            {
              role: "presentation",
              src: item.fields.imageSrc.value,
              css: {
                objectFit: "cover",
                objectPosition: "center center",
                height: 240,
                width: "100%",
                borderRadius: 4
              }
            }
          ),
          /* @__PURE__ */ (0, import_core.jsx)(
            "h1",
            {
              css: {
                "&&": {
                  fontSize: "1.25rem",
                  lineHeight: "unset",
                  marginTop: 8
                }
              }
            },
            item.fields.title.value
          )
        );
      })
    ));
  },
  schema: {
    items: import_component_blocks.fields.array(
      import_component_blocks.fields.object({
        title: import_component_blocks.fields.text({ label: "Title" }),
        imageSrc: import_component_blocks.fields.url({
          label: "Image URL",
          defaultValue: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
        })
      })
    )
  }
});

// src/component-blocks/hero.tsx
var import_core2 = require("@keystone-ui/core");
var import_component_blocks2 = require("@keystone-6/fields-document/component-blocks");
var hero = (0, import_component_blocks2.component)({
  label: "Hero",
  schema: {
    imageSrc: import_component_blocks2.fields.text({
      label: "Image URL",
      defaultValue: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
    }),
    caption: import_component_blocks2.fields.conditional(import_component_blocks2.fields.checkbox({ label: "Has caption" }), {
      false: import_component_blocks2.fields.empty(),
      true: import_component_blocks2.fields.child({
        kind: "block",
        placeholder: "Write a caption...",
        formatting: "inherit",
        links: "inherit"
      })
    })
  },
  preview: function Hero(props) {
    return /* @__PURE__ */ (0, import_core2.jsx)("div", null, /* @__PURE__ */ (0, import_core2.jsx)(import_component_blocks2.NotEditable, null, /* @__PURE__ */ (0, import_core2.jsx)(
      "div",
      {
        css: {
          backgroundImage: `url(${props.fields.imageSrc.value})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: 200,
          width: "100%"
        }
      }
    )), props.fields.caption.discriminant ? /* @__PURE__ */ (0, import_core2.jsx)("div", { css: { textAlign: "center" } }, props.fields.caption.value.element) : null);
  }
});

// src/component-blocks/callout.tsx
var import_core3 = require("@keystone-ui/core");
var import_component_blocks3 = require("@keystone-6/fields-document/component-blocks");
var import_primitives = require("@keystone-6/fields-document/primitives");
var import_InfoIcon = require("@keystone-ui/icons/icons/InfoIcon");
var import_AlertTriangleIcon = require("@keystone-ui/icons/icons/AlertTriangleIcon");
var import_AlertOctagonIcon = require("@keystone-ui/icons/icons/AlertOctagonIcon");
var import_CheckCircleIcon = require("@keystone-ui/icons/icons/CheckCircleIcon");
var import_Trash2Icon = require("@keystone-ui/icons/icons/Trash2Icon");
var import_tooltip = require("@keystone-ui/tooltip");
var calloutIconMap = {
  info: import_InfoIcon.InfoIcon,
  error: import_AlertOctagonIcon.AlertOctagonIcon,
  warning: import_AlertTriangleIcon.AlertTriangleIcon,
  success: import_CheckCircleIcon.CheckCircleIcon
};
var callout = (0, import_component_blocks3.component)({
  label: "Callout",
  chromeless: true,
  schema: {
    intent: import_component_blocks3.fields.select({
      label: "Intent",
      options: [
        { value: "info", label: "Info" },
        { value: "warning", label: "Warning" },
        { value: "error", label: "Error" },
        { value: "success", label: "Success" }
      ],
      defaultValue: "info"
    }),
    content: import_component_blocks3.fields.child({
      kind: "block",
      placeholder: "",
      formatting: "inherit",
      dividers: "inherit",
      links: "inherit",
      relationships: "inherit"
    })
  },
  preview: function Callout(props) {
    const { palette, radii, spacing } = (0, import_core3.useTheme)();
    const intentMap = {
      info: {
        background: palette.blue100,
        foreground: palette.blue700,
        icon: calloutIconMap.info
      },
      error: {
        background: palette.red100,
        foreground: palette.red700,
        icon: calloutIconMap.error
      },
      warning: {
        background: palette.yellow100,
        foreground: palette.yellow700,
        icon: calloutIconMap.warning
      },
      success: {
        background: palette.green100,
        foreground: palette.green700,
        icon: calloutIconMap.success
      }
    };
    const intentConfig = intentMap[props.fields.intent.value];
    return /* @__PURE__ */ (0, import_core3.jsx)(
      "div",
      {
        css: {
          borderRadius: radii.small,
          display: "flex",
          paddingLeft: spacing.medium,
          paddingRight: spacing.medium
        },
        style: {
          background: intentConfig.background
        }
      },
      /* @__PURE__ */ (0, import_core3.jsx)(import_component_blocks3.NotEditable, null, /* @__PURE__ */ (0, import_core3.jsx)(
        "div",
        {
          css: {
            color: intentConfig.foreground,
            marginRight: spacing.small,
            marginTop: "1em"
          }
        },
        /* @__PURE__ */ (0, import_core3.jsx)(intentConfig.icon, null)
      )),
      /* @__PURE__ */ (0, import_core3.jsx)("div", { css: { flex: 1 } }, props.fields.content.element)
    );
  },
  toolbar: function CalloutToolbar({ props, onRemove }) {
    return /* @__PURE__ */ (0, import_core3.jsx)(import_primitives.ToolbarGroup, null, props.fields.intent.options.map((opt) => {
      const Icon = calloutIconMap[opt.value];
      return /* @__PURE__ */ (0, import_core3.jsx)(import_tooltip.Tooltip, { key: opt.value, content: opt.label, weight: "subtle" }, (attrs) => /* @__PURE__ */ (0, import_core3.jsx)(
        import_primitives.ToolbarButton,
        {
          isSelected: props.fields.intent.value === opt.value,
          onClick: () => {
            props.fields.intent.onChange(opt.value);
          },
          ...attrs
        },
        /* @__PURE__ */ (0, import_core3.jsx)(Icon, { size: "small" })
      ));
    }), /* @__PURE__ */ (0, import_core3.jsx)(import_primitives.ToolbarSeparator, null), /* @__PURE__ */ (0, import_core3.jsx)(import_tooltip.Tooltip, { content: "Remove", weight: "subtle" }, (attrs) => /* @__PURE__ */ (0, import_core3.jsx)(import_primitives.ToolbarButton, { variant: "destructive", onClick: onRemove, ...attrs }, /* @__PURE__ */ (0, import_core3.jsx)(import_Trash2Icon.Trash2Icon, { size: "small" }))));
  }
});

// src/component-blocks/quote.tsx
var import_core4 = require("@keystone-ui/core");
var import_component_blocks4 = require("@keystone-6/fields-document/component-blocks");
var quote = (0, import_component_blocks4.component)({
  label: "Quote",
  schema: {
    content: import_component_blocks4.fields.child({
      kind: "block",
      placeholder: "Quote...",
      formatting: {
        inlineMarks: "inherit",
        softBreaks: "inherit",
        alignment: "inherit"
      },
      links: "inherit"
    }),
    attribution: import_component_blocks4.fields.child({
      kind: "inline",
      placeholder: "Attribution..."
    })
  },
  preview: function Quote(props) {
    return /* @__PURE__ */ (0, import_core4.jsx)(
      "div",
      {
        css: {
          paddingLeft: 16,
          backgroundColor: "#f3f5f6",
          padding: "4px 12px 16px 48px",
          position: "relative",
          borderRadius: 6,
          ":after": {
            content: '"\\201C"',
            position: "absolute",
            top: 0,
            left: 16,
            fontSize: "4rem"
          }
        }
      },
      /* @__PURE__ */ (0, import_core4.jsx)("div", { css: { fontStyle: "italic", color: "#4A5568" } }, props.fields.content.element),
      /* @__PURE__ */ (0, import_core4.jsx)("div", { css: { fontWeight: "bold", color: "#47546b" } }, /* @__PURE__ */ (0, import_core4.jsx)(import_component_blocks4.NotEditable, null, "\u2014 "), props.fields.attribution.element)
    );
  }
});

// src/component-blocks/tweet.tsx
var import_react = require("react");
var import_core5 = require("@keystone-ui/core");
var import_component_blocks5 = require("@keystone-6/fields-document/component-blocks");
var tweet = (0, import_component_blocks5.component)({
  label: "Tweet",
  schema: {
    url: import_component_blocks5.fields.url({
      label: "Tweet URL",
      defaultValue: "https://twitter.com/KeystoneJS/status/1558944015953068032?s=20&t=32A2Avz9kPlefEOcXIqOXQ"
    })
  },
  preview: function Tweet(props) {
    const wrapper = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      wrapper.current.appendChild(script);
    }, []);
    return /* @__PURE__ */ (0, import_core5.jsx)(import_component_blocks5.NotEditable, null, /* @__PURE__ */ (0, import_core5.jsx)(
      "div",
      {
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ (0, import_core5.jsx)(
        "blockquote",
        {
          ref: wrapper,
          className: "twitter-tweet",
          "data-conversation": "none"
        },
        /* @__PURE__ */ (0, import_core5.jsx)("a", { href: props.fields.url.value }, "Loading tweet...")
      )
    ));
  }
});

// src/component-blocks/youtube-video.tsx
var import_core6 = require("@keystone-ui/core");
var import_component_blocks6 = require("@keystone-6/fields-document/component-blocks");
var youtubeVideo = (0, import_component_blocks6.component)({
  label: "YouTube Video",
  schema: {
    url: import_component_blocks6.fields.url({
      label: "YouTube Video URL",
      defaultValue: "https://www.youtube.com/watch?v=fPWRlmedCbo"
    }),
    altText: import_component_blocks6.fields.text({
      label: "Alt text",
      defaultValue: "Embedded YouTube video"
    })
  },
  preview: function YouTubeVideo(props) {
    const url = props.fields.url.value;
    let embedId = "";
    const parsedUrl = (url || "").replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (parsedUrl[2] !== void 0) {
      const parsedId = parsedUrl[2].split(/[^0-9a-z_\-]/i);
      embedId = parsedId[0];
    } else {
      embedId = url;
    }
    return /* @__PURE__ */ (0, import_core6.jsx)(import_component_blocks6.NotEditable, null, /* @__PURE__ */ (0, import_core6.jsx)(
      "div",
      {
        css: {
          overflow: "hidden",
          paddingBottom: "56.25%",
          position: "relative",
          height: 0,
          " iframe": {
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            position: "absolute"
          }
        }
      },
      /* @__PURE__ */ (0, import_core6.jsx)(
        "iframe",
        {
          width: "853",
          height: "480",
          src: `https://www.youtube.com/embed/${embedId}`,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          title: props.fields.altText.value
        }
      )
    ));
  }
});

// src/component-blocks/index.tsx
var componentBlocks = {
  carousel,
  hero,
  callout,
  quote,
  tweet,
  youtubeVideo
};

// src/schema.ts
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
function hasSession({ session: session2 }) {
  return Boolean(session2);
}
function isAdminOrSameUser({
  session: session2,
  item
}) {
  if (!session2)
    return false;
  if (session2.data.isAdmin)
    return true;
  return session2.itemId === item.id;
}
function isAdminOrSameUserFilter({ session: session2 }) {
  if (!session2)
    return false;
  if (session2.data?.isAdmin)
    return {};
  return {
    id: {
      equals: session2.itemId
    }
  };
}
function isAdmin({ session: session2 }) {
  if (!session2)
    return false;
  if (session2.data.isAdmin)
    return true;
  return false;
}
var lists = {
  User: (0, import_core7.list)({
    access: {
      operation: {
        create: import_access.allowAll,
        query: import_access.allowAll,
        // only allow users to update _anything_, but what they can update is limited by
        //   the access.filter.* and access.item.* access controls
        update: hasSession,
        // only allow admins to delete users
        delete: isAdmin
      },
      filter: {
        update: isAdminOrSameUserFilter
      },
      item: {
        // this is redundant as ^filter.update should stop unauthorised updates
        //   we include it anyway as a demonstration
        update: isAdminOrSameUser
      }
    },
    ui: {
      // only show deletion options for admins
      hideDelete: (args) => !isAdmin(args),
      listView: {
        // the default columns that will be displayed in the list view
        initialColumns: ["name", "isAdmin"]
      }
    },
    fields: {
      // the user's name, used as the identity field for authentication
      //   should not be publicly visible
      //
      //   we use isIndexed to enforce names are unique
      //     that may not suitable for your application
      name: (0, import_fields.text)({
        access: {
          // only the respective user, or an admin can read this field
          read: isAdminOrSameUser,
          // only admins can update this field
          update: isAdmin
        },
        isFilterable: false,
        isOrderable: false,
        isIndexed: "unique",
        validation: {
          isRequired: true
        }
      }),
      email: (0, import_fields.text)({
        access: {
          // only the respective user, or an admin can read this field
          read: isAdminOrSameUser,
          // only admins can update this field
          update: isAdmin
        },
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: "unique"
      }),
      // the user's password, used as the secret field for authentication
      //   should not be publicly visible
      password: (0, import_fields.password)({
        access: {
          read: import_access.denyAll,
          // TODO: is this required?
          update: isAdminOrSameUser
        },
        validation: {
          isRequired: true
        },
        ui: {
          itemView: {
            // don't show this field if it isn't relevant
            fieldMode: (args) => isAdminOrSameUser(args) ? "edit" : "hidden"
          },
          listView: {
            fieldMode: "hidden"
            // TODO: is this required?
          }
        }
      }),
      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
      // a flag to indicate if this user is an admin
      //  should not be publicly visible
      isAdmin: (0, import_fields.checkbox)({
        access: {
          // only the respective user, or an admin can read this field
          read: isAdminOrSameUser,
          // only admins can create, or update this field
          create: isAdmin,
          update: isAdmin
        },
        defaultValue: false,
        ui: {
          // only admins can edit this field
          createView: {
            fieldMode: (args) => isAdmin(args) ? "edit" : "hidden"
          },
          itemView: {
            fieldMode: (args) => isAdmin(args) ? "edit" : "read"
          }
        }
      })
    }
  }),
  Post: (0, import_core7.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // this is the fields for our Post list
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      slug: (0, import_fields.text)({ isIndexed: "unique", validation: { isRequired: true } }),
      content: (0, import_fields_document.document)({
        // turn on all OOTB formatting
        formatting: true,
        dividers: true,
        links: true,
        // grid layout options
        layouts: [
          [1, 1],
          // grid layout 1fr 1fr
          [1, 1, 1]
          // grid layout 1fr 1fr 1fr
        ],
        ui: {
          views: "./src/component-blocks"
        },
        componentBlocks
      }),
      publishDate: (0, import_fields.timestamp)({ defaultValue: { kind: "now" } }),
      // with this field, you can set a User as the author for a Post
      author: (0, import_fields.relationship)({
        // we could have used 'User', but then the relationship would only be 1-way
        ref: "User.posts",
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineConnect: true
        },
        // a Post can only have one author
        //   this is the default, but we show it here for verbosity
        many: false
      }),
      // with this field, you can add some Tags to Posts
      tags: (0, import_fields.relationship)({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: "Tag.posts",
        // a Post can have many Tags, not just one
        many: true,
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  // this last list is our Tag list, it only has a name field for now
  Tag: (0, import_core7.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true
    },
    // this is the fields for our Tag list
    fields: {
      name: (0, import_fields.text)(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: (0, import_fields.relationship)({ ref: "Post.tags", many: true })
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "isAdmin",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"],
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
    itemData: {
      // isAdmin is true, so the admin can pass isAccessAllowed (see below)
      isAdmin: true
    }
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// src/seed/index.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var seedUsers = async (context) => {
  const { db } = context.sudo();
  const rawJSONData = import_fs.default.readFileSync(
    import_path.default.join(process.cwd(), "./src/seed/users.json"),
    "utf-8"
  );
  const seedUsers2 = JSON.parse(rawJSONData);
  const usersAlreadyInDatabase = await db.User.findMany({
    where: {
      email: { in: seedUsers2.map((user) => user.email) }
    }
  });
  const usersToCreate = seedUsers2.filter(
    (seedUser) => !usersAlreadyInDatabase.some((u) => u.email === seedUser.email)
  );
  await db.User.createMany({
    data: usersToCreate
  });
};
var seedPosts = async (context) => {
  const { db } = context.sudo();
  const rawJSONData = import_fs.default.readFileSync(
    import_path.default.join(process.cwd(), "./src/seed/posts.json"),
    "utf-8"
  );
  const seedPosts2 = JSON.parse(rawJSONData);
  const postsAlreadyInDatabase = await db.Post.findMany({
    where: {
      slug: { in: seedPosts2.map((post) => post.slug) }
    }
  });
  const postsToCreate = seedPosts2.filter(
    (seedPost) => !postsAlreadyInDatabase.some((p) => p.slug === seedPost.slug)
  );
  await db.Post.createMany({
    data: postsToCreate.map((p) => ({ ...p, content: p?.content?.document }))
  });
};
var seedDatabase = async (context) => {
  console.log(`\u{1F331} Seeding database...`);
  await seedUsers(context);
  await seedPosts(context);
  console.log(`\u{1F331} Seeding database completed.`);
};

// keystone.ts
var keystone_default = withAuth(
  (0, import_core8.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "mysql",
      url: "mysql://root@localhost:3306/keystone",
      onConnect: async (context) => {
        if (process.argv.includes("--seed-database")) {
          await seedDatabase(context);
        }
      },
      // Optional advanced configuration
      enableLogging: true,
      idField: { kind: "uuid" }
    },
    lists,
    session,
    server: {
      port: 8080
    }
  })
);
//# sourceMappingURL=config.js.map
