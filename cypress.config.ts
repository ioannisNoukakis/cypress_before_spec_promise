import { defineConfig } from "cypress";

export default defineConfig({
  // Needed to trigger `before:spec` events with cypress open
  experimentalInteractiveRunEvents: true,
  e2e: {
    setupNodeEvents(on, config) {
      on("before:spec", () => new Promise(res => setTimeout(() => {
        console.log("----> Promise resolved!", new Date().toISOString());
        res();
      }, 10000)));

      on("task", {
        log(message) {
          console.log(message, new Date().toISOString())

          return null
        },
      });
    },
  },
});
