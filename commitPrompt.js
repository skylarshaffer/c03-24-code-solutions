const { spawn, execSync } = require('child_process');
const exec = (commands) => {
  execSync(commands, { stdio: 'inherit', shell: true });
};
const spawnProcess = (commands) => {
  spawn(commands, { stdio: 'inherit', shell: true });
};
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const branchName = exec('git rev-parse --abbrev-ref HEAD');

rl.question('Commit message?', (ip) => {
  setTimeout(function () {
    console.log(`Commit message: ${ip} and branch name: ${branchName}`);
  }, 2000);
  console.log(`Commit message: ${ip} and branch name: ${branchName}`);
  exec(`cd /workspaces/c03-24-code-solutions`);
  rl.close();
});
