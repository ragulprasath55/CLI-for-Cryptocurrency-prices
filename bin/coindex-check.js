const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Get the price of crypto')
    .option('--coin <type>', 'Add specific coin type in CSV format', 'BTC,ETC,XRP')
    .option('--cur <currency', 'Enter the currency to format to change', 'USD')
    .action((cmd) => {
        check.getPrice(cmd.coin, cmd.cur);
    })

program.parse(process.argv)