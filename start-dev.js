const { spawn } = require("child_process");
const path = require("path");

process.chdir(path.resolve(__dirname));

const child = spawn("npx", ["next", "dev", "-p", "3005"], {
  cwd: path.resolve(__dirname),
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code));
