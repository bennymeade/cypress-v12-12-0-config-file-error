import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: true,
  numTestsKeptInMemory: 20,
  viewportWidth: 1920,
  viewportHeight: 1200,
  video: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  pageLoadTimeout: 30000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(_on, config) {
      return config
    },
  },
})