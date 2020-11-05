---
title: Checking Exchange Events
summary: "The trading bot monitors exchange orders to check their status analyzing multiple possible scenarios."
sidebar: suite_sidebar
permalink: suite-low-frequency-checking-exchange-events.html
---

For forward testing and live trading sessions, the state of orders at the exchange is checked on every execution of the trading bot.

It's important to note that, when an order is placed, no relevant information is obtained from the exchange other than a confirmation that the order was received. The trading bot must ask the exchange for the status of the order some time after placing it. 

{% include note.html content="The trading bot places the order during the second execution cycle and asks the exchange about the order in the next run of the bot, during the first execution cycle. This means that the order is checked one unit of the trading session's time frame after the order is placed. For example, if the session is running on the ```01-min``` time frame, the order is checked roughly one minute after it is placed." %}

When the trading bot fetches an order from the exchange, it gets the order information in a text message. What does the trading bot obtain from the exchange?

This is an important question, as the answer conditions what the trading bot may or may not do with each order, and how it may keep a reliable internal accounting system.

## Orders according to the exchange

What follows are several examples including a market sell order, a market buy order, a limit sell order, and a limit buy order, all of them in the BTC/USDT market in Binance.

{% include note.html content='Notice that the body section is provided by the CCXT library, and is the same for all exchanges; the info section is provided by the exchange itself, and may vary across exchanges.' %}

<table>
    <thead>
        <tr>
            <th>Market sell order for 0.1 BTC</th>
            <th>Market buy order for 0.1 BTC</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
Body:
<code>
average:12930.92
clientOrderId:"eLAkNrEoMw3erEp8AeaiTT"
cost:1293.24717104
datetime:"2020-10-24T08:47:43.104Z"
fee:undefined
filled:0.100012
id:"3420506109"
lastTradeTimestamp:undefined
price:12930.92
remaining:0
side:"sell"
status:"closed"
symbol:"BTC/USDT"
timestamp:1603529263104
trades:undefined
type:"market"
</code>
<br/>
Info:
<code>
orderId:3420506109
orderListId:-1
origQty:"0.10001200"
origQuoteOrderQty:"1293.25000000"
price:"0.00000000"
side:"SELL"
status:"FILLED"
stopPrice:"0.00000000"
symbol:"BTCUSDT"
time:1603529263104
timeInForce:"GTC"
type:"MARKET"
updateTime:1603529263104
</code>
            </td>
            <td>
Body:
<code>
average:12946.55
clientOrderId:"ISnhUKi1BxsJdWL1sQ8XmJ"
cost:1294.43490865
datetime:"2020-10-24T09:33:13.441Z"
fee:undefined
filled:0.099983
id:"3420604346"
lastTradeTimestamp:undefined
price:12946.55
remaining:0
side:"buy"
status:"closed"
symbol:"BTC/USDT"
timestamp:1603531993441
trades:undefined
type:"market"
</code>
<br/>
Info:
<code>
orderId:3420604346
orderListId:-1
origQty:"0.09998300"
origQuoteOrderQty:"1294.44000000"
price:"0.00000000"
side:"BUY"
status:"FILLED"
stopPrice:"0.00000000"
symbol:"BTCUSDT"
time:1603531993441
timeInForce:"GTC"
type:"MARKET"
updateTime:1603531993441
</code>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Limit sell order for 0.1 BTC</th>
            <th>Limit buy order for 0.1 BTC</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
Body:
<code>
amount:0.1
average:12976.74
clientOrderId:"iZbiUF9W1WiKmtMfhA8hIr"
cost:1297.674
datetime:"2020-10-24T10:43:47.944Z"
fee:undefined
filled:0.1
id:"3420762036"
lastTradeTimestamp:undefined
price:12969.83
remaining:0
side:"sell"
status:"closed"
symbol:"BTC/USDT"
timestamp:1603536227944
trades:undefined
type:"limit"
</code>
<br/>
Info:
<code>
executedQty:"0.10000000"
icebergQty:"0.00000000"
isWorking:true
orderId:3420762036
orderListId:-1
origQty:"0.10000000"
origQuoteOrderQty:"0.00000000"
price:"12969.83000000"
side:"SELL"
status:"FILLED"
stopPrice:"0.00000000"
symbol:"BTCUSDT"
time:1603536227944
timeInForce:"GTC"
type:"LIMIT"
updateTime:1603536227944
</code>
            </td>
            <td>
Body:
<code>
amount:0.1
average:12996.16
clientOrderId:"7RZ2WJDMO5uaUOkvgJhqru"
cost:1299.616
datetime:"2020-10-24T11:34:45.649Z"
fee:undefined
filled:0.1
id:"3420872115"
lastTradeTimestamp:undefined
price:12996.16
remaining:0
side:"buy"
status:"closed"
symbol:"BTC/USDT"
timestamp:1603539285649
trades:undefined
type:"limit"
</code>
<br/>
Info:
<code>
executedQty:"0.10000000"
icebergQty:"0.00000000"
isWorking:true
orderId:3420872115
orderListId:-1
origQty:"0.10000000"
origQuoteOrderQty:"0.00000000"
price:"12996.16000000"
side:"BUY"
status:"FILLED"
stopPrice:"0.00000000"
symbol:"BTCUSDT"
time:1603539285649
timeInForce:"GTC"
type:"LIMIT"
updateTime:1603539363997
</code>
            </td>
        </tr>
    </tbody>
</table>

## Status checks

Once the status of the order is received as in one of the above examples, the trading bot performs multiple checks, each leading to particular actions. The following are the particular cases analyzed and the actions taken.

### Filled and closed

If the order is filled and closed, the corresponding data structures in the trading engine are updated to indicate so.

```
tradingEngineOrder.status.value = 'Closed'
tradingEngineOrder.exitType.value = 'Filled'
```

But, most importantly, the details in the order are processed to synchronize the information in the trading engine&mdash;at this point consisting mostly of information derived from the definitions in the trading system&mdash;with the information obtained from the exchange. 

The data structures to be updated are mostly those related to the actual rate at which the order was filled, the actual size that was filled, the actual fees that were charged, and how those variables affect balances and the overall accounts in various contexts (order, stage, position, episode, etc.).

{% include note.html content='Notice that definitions in the trading system are&mdash;in a way&mdash;just a plan. Your definitions tell the trading bot what to do, but there is no certainty on the outcome. That is the reason why the first set of accounts recorded with information derived from the trading system needs to be synchronized in every execution cycle with what actually happened at the exchange until the order is closed.' %}

The calculations involved in the synchronization process are covered in [Syncying with the exchange](suite-low-frequency-syncing-with-the-exchange.html).

### Partially filled and closed

If the order is partially filled and closed, the corresponding data structures in the trading engine are updated to indicate so.

```
tradingEngineOrder.status.value = 'Closed'
tradingEngineOrder.exitType.value = 'Closed at the Exchange'
```

For a limit order to be closed while partially filled, it must be closed manually by the user directly at the exchange, or forcefully closed by the exchange itself, for whatever reason. The system handles such occurrences so that they do not disrupt the trading session or the accounts at Superalgos.

The first thing to do with such an order is to update the size placed on the stage so that the stage accounts for the amount that was filled only, instead of the original size of the order (see [Accounting](suite-low-frequency-accounting.html)). 

And then, the same synchronization process described earlier must be applied as well (see [Syncying with the exchange](suite-low-frequency-syncing-with-the-exchange.html)).

### Cancelled

These are limit orders canceled by the trading bot upon the triggering of the cancel order event. In such cases, the exit type is set as follows:

```
tradingEngineOrder.exitType.value = 'Cancelled at the Exchange'
```

Canceled orders go through the same processes of synchronization (see [Syncying with the exchange](suite-low-frequency-syncing-with-the-exchange.html)) and the recalculation of the size of the stage (see [Accounting](suite-low-frequency-accounting.html)).

### All other instances

The cases described above refer to orders with particular characteristics. Orders that do not match any of the above criteria trigger the synchronization process described earlier (see [Syncying with the exchange](suite-low-frequency-syncing-with-the-exchange.html)).
