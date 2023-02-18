import "svelte-material-ui/bare.css";
import "./inter-font/inter.css";
import "./vazirmatn-font/vazirmatn.css";
import "./app.css";
import "./uPlot.min.css";
import App from "./App.svelte";
import { auto as autoDark, enable as enableDark } from "darkreader";

const app = new App({
  target: document.getElementById("app") as any,
});

autoDark({
  brightness: 100,
  contrast: 90,
  sepia: 10,
});

// HACK to get rid of ugly hover and focus indicators, especially on mobile
window.addEventListener("load", (_) => {
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si] as any;
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":focus")) {
          styleSheet.deleteRule(ri);
        }

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }

        styleSheet.insertRule(":focus-visible { outline: none } ");
      }
    }
  } catch (ex) {
    console.error(ex);
  }
});

export default app;
