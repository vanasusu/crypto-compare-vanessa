
async function fetchCryptoList() {
	try {
		//show loading
		$(".table-loader").removeClass("d-none")
		//fetch crypto prices using axios from coinapi REST API
		const resp = await axios.get("https://rest.coinapi.io/v1/symbols?filter_exchange_id=BINANCE&filter_symbol_id=BINANCE_SPOT_&filter_asset_id=USDT", {
			headers: {
				"X-CoinAPI-Key": "7FB087E8-F059-4F29-89AF-865F8283F11F"
			}
		}) //use of async await
		if (Array.isArray(resp.data) && resp.data?.length) { //check if we have valid response as array
			let cryptoData = [...resp.data]
			//filter non priced data
			cryptoData = cryptoData.filter(data => data.price)
			//sort based on prices
			cryptoData.sort((a, b) => b.price - a.price);

			//append rows in the table
			$.each(cryptoData, function (i, item) {
				let $tr = $(`<tr class="${i == 0 ? "highlight" : ""}">`).append(
					$('<td>').text(`${item.asset_id_base}/${item.asset_id_quote}`),
					$('<td class="price">').text(`$${item.price}`),
					$('<td class="ticker d-none">').text(item.symbol_id_exchange),
				);
				$tr.wrap('<p>').html();
				$tr.appendTo('#crypTable')
			});
			//hide loading after loading of data
			$(".table-loader").addClass("d-none")
			//load tradingview chart with the first ticker
			new TradingView.widget(
				{
					"autosize": true,
					"symbol": cryptoData[0].symbol_id_exchange,
					"interval": "D",
					"timezone": "SGT/UTC",
					"theme": "dark",
					"style": "1",
					"locale": "en",
					"toolbar_bg": "#212529",
					"enable_publishing": false,
					"allow_symbol_change": true,
					"container_id": "tradingview_main"
				}
			);
		}
	} catch (err) {

	}
}
$(document).ready(function () {
	fetchCryptoList()
});
$('#crypTable').on('click', 'tbody tr', function (event) {
	var ticker = $(event.target).closest('tr').find(".ticker").html();
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": ticker,
			"interval": "D",
			"timezone": "SGT/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"toolbar_bg": "#212529",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"container_id": "tradingview_main"
		}
	);
	$(this).addClass('highlight').siblings().removeClass('highlight');
});