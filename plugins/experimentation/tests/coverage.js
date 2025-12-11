// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
// AI Generated Code by Deloitte + Cursor (BEGIN)
import MCR from 'monocart-coverage-reports';
// AI Generated Code by Deloitte + Cursor (END)

const coverageReport = MCR({
  name: 'AEM Experimentation Plugin Coverage Report',
  outputDir: './coverage',
  reports: ['v8', 'console-details', 'codecov'],
  entryFilter: {
    '**/src/ued.js': false,
    '**/src/**': true,
  },
});

export async function start() {
  // Nothing to do here
}

export async function end() {
  await coverageReport.generate();
}

export function track(test) {
  test.beforeEach(async ({ page }) => {
    await Promise.all([
      page.coverage.startJSCoverage({ resetOnNavigation: false }),
      page.coverage.startCSSCoverage({ resetOnNavigation: false }),
    ]);
  });

  test.afterEach(async ({ page }) => {
    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage(),
    ]);
    await coverageReport.add([...jsCoverage, ...cssCoverage]);
  });
}
