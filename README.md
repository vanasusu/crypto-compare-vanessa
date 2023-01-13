# Crypto Compare Chart
<b>Summary</b><br>
Recently there has been many talks in the news on Crypto market crashes such as Bitcoin's values falling more than half its value since it's peak in Nov 2021, Terra(Luna) crypto network collapsed that wiped out $60 billion in the digital currency space.
Investors can benefit from my site by monitoring the trends and changes in price to stay abreast in this volatile market.

Crypto Compare allows the user to easily see the price, 24h volume and change percentage. The user is able to easily select their viewing method by bar, candle stick or map. Thye can also toggle between various indicatiors.

As the main motive of this project is for the user to navigate crypto price changes, I have included bar, line and pie chart to compare the % change in price.

Live Demo: crypto-compare-vanasusu.netlify.app/
To view, please ensure you download a cors extension on google as it does not have a backend. 
chrome:https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

<b>UX/UI</b><br>
We are using a brand called 'Crypto Compare' for our site and we have the brand logo to it.
Theme colors used is black and green.

<b> Features </b><br>
The application comprises of 3 pages, Exchange, Privacy Policy and Terms & Conditions.
Exchange is the main page where it features:
1. Crypto table - shows a list of crypto currency with its price, 24 h volume and change %. It has a loading spinner embeded to show the user that it is fetching data and the change % will change to red if i<0 and green if i>0
2. Trading view widget - here is where the data is plot into bar chart, candle sticks and maps. As you toggle on the crypto table, the trading view widget will sync dynamically. You can also add more indications to the same chart.
3. Search/refresh button - you can key in the name of the coin you are looking for (eg. bit/eth) even if in capital letter, it will change to lowercase. If there are several similar names it will dynamically be compared in the 2nd section where the bar/line/pie chart is shown.
4. Bar/Line/Pie Chart - in this section you are able to view and compare the percentage change across all the currencies. If you did not key anything into the search bar, it will compare all. if you just keyed in a specific currency it will only reflect the change in that currency. 

<b> Technologies Used</b>
- HTML
- CSS
- Javascript
- Bootstrap
- Chart.js
- JQuery
- Axios

APIs:
- CoinMarketCap : https://coinmarketcap.com/api/documentation/v1/#section/Authentication
- TradingView Widget : https://www.tradingview.com/widget/advanced-chart/

<b>Deployment</b><br>
Using netlify.app
1. Install Netlify on github
2. Deploy
3. Change domain name
