
let cryptoData = []
async function fetchCryptoList() {
	try {
		//show loading
		$(".table-loader").removeClass("d-none")
		//fetch crypto prices using axios from coinapi REST API
		//https://pro-api.coinmarketcap.com
		const resp = await axios.get("https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
			headers: {
				"X-CMC_PRO_API_KEY": "f5c41f87-276c-4f7f-8beb-8fa0e59949de"
			}
		}) //use of async await
		if (Array.isArray(resp.data?.data) && resp.data?.data?.length) { //check if we have valid response as array
			cryptoData = [...resp.data.data]
			
			//append rows in the table
			$.each(cryptoData, function (i, item) {
				const change = item.quote?.USD?.percent_change_1h
				let $tr = $(`<tr class="${i == 0 ? "highlight" : ""}">`).append(
					$('<td>').text(item.name),
					$('<td class="price">').text(`$${item.quote?.USD?.price?.toFixed(2)}`),
					$('<td class="volume">').text(`${item.quote?.USD?.volume_24h?.toFixed(2)}`),
					$(`<td class="change_percentage ${change > 0 ? "text-success" : "text-danger"}">`).text(`${change?.toFixed(2)}%`), //change color based on percentage change
					$('<td class="ticker d-none">').text(item.symbol),
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
					"symbol": cryptoData[0].symbol,
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
	//reload tradingview instance with selected ticker
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
$("#search_text").keyup(function(event) {
  let text = $(this).val();
	let tempData = []
	if(text.length){

		console.log(cryptoData.filter(d => d.asset_id_base.toLowerCase().includes(text.toLowerCase())))
	}else{
		tempData = cryptoData
	}
});