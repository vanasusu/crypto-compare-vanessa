new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#212529",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_main"
    }
);
$('#crypTable').on('click', 'tbody tr', function(event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});