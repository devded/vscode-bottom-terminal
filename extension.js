const vscode = require("vscode");

function activate(context) {
  const terminalItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  terminalItem.text = `$(terminal) Terminal`;
  terminalItem.tooltip = "Toggle Terminal";
  terminalItem.command = "extension.toggleTerminal";
  terminalItem.show();

  const disposable = vscode.commands.registerCommand("extension.toggleTerminal", () => {
    vscode.commands.executeCommand("workbench.action.togglePanel");
  });

  context.subscriptions.push(terminalItem, disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
