const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const terminalItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  terminalItem.text = `$(terminal) Terminal`;
  terminalItem.tooltip = "Click to toggle the terminal panel";
  terminalItem.command = "bottomTerminal.toggle";
  terminalItem.show();

  const disposable = vscode.commands.registerCommand("bottomTerminal.toggle", async () => {
    const activePanel = vscode.window.activeTerminal;

    // Show or toggle terminal
    if (!activePanel) {
      vscode.commands.executeCommand("workbench.action.terminal.toggleTerminal");
    } else {
      vscode.commands.executeCommand("workbench.action.togglePanel");
    }
  });

  context.subscriptions.push(terminalItem, disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

