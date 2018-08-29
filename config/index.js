/*
 * Map environment variables to config
 */

// Helper function to provide quick syntax for ENV or DEFAULT
function gv(env, def) {
  return process.env[env] || def
}

module.exports = {
  runtime: {
    environment:    gv('RUNTIME_ENVIRONMENT', 'dev'),
  },
  generators: {
    data: {
      ident: {
        ean: {
          pregen:   gv('GENERATORS_DATA_IDENT_EAN_PREGEN', 100),
        },
      },
      text: {
        pool: {
          size:     gv('GENERATORS_DATA_TEXT_POOL_SIZE', 1000),
        },
      },
    },
  },
  logging: {
    enabled:        gv('LOGGING_ENABLED',     true),
  },
}
