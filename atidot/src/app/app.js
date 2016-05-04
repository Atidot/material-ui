var mui = require('material-ui');
mui.ThemeProvider = require('material-ui/styles/MuiThemeProvider');
mui.getMuiTheme = require('material-ui/styles/getMuiTheme').default;
mui.injectTapEventPlugin = require('react-tap-event-plugin');
mui.injectTapEventPlugin();

module.exports = mui;
