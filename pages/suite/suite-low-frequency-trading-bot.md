---
title: Low-Frequency Trading Bot
summary: "The Superalgos trading bot is currently optimized for low-frequency trading."
sidebar: suite_sidebar
permalink: suite-low-frequency-trading-bot.html
---

The *Low-Frequency* <a data-toggle="tooltip" data-original-title="{{site.data.trading_mine.trading_bot}}">trading bot</a> is the one and only trading bot shipping with Superalgos at this point in time. It is made available by the Masters <a data-toggle="tooltip" data-original-title="{{site.data.trading_mine.trading_mine}}">trading mine</a>.

{% include callout.html type="success" content="The bot is a robust implementation that leverages every piece of infrastructure provided by Superalgos to provide a feature-rich automated trading assistant." %}

## Why Low-Frequency?

The Low-Frequency trading bot makes decisions upon the closing of the current candle. 

{% include important.html content="No matter what property of what indicator you may use, always remember that the trading bot works with the last closed candle by default. What Superalgos refers to as the <i>current</i> candle is effectively the latest closed candle. The trading bot never works with the candle that hasn't yet closed, as its parameters are not defined. For example, ```candle.max``` refers to the maximum price of the last closed candle, and ```bollingerBand.movingAverage``` refers to the moving average of the last closed candle." %}

Superalgos manages <a data-toggle="tooltip" data-original-title="{{site.data.network.time_frame}}">time frames</a> as low as one minute. That is, one minute, is the highest frequency handled by the trading bot.

When a <a data-toggle="tooltip" data-original-title="{{site.data.network.session}}">trading session</a> is run on the ```01-min``` time frame, this is what you should expect to happen in terms of the time it takes to do all the required processing for the trading bot to make a decision and place an order at the exchange:

| Process | Estimated Time [s] | Comments | 
| :--- | :---: | :--- |
| Sensor Bot | 0 - 65 | The sensor bot runs (by default) every 60 seconds. Upon each execution, anything between 0 to 60 seconds may have passed since the last one-minute candle closed. On top of this the sensor execution time may range from 1 to 5 seconds, depending on several factors *(i.e.: your hardware, internet bandwidth, distance to the exchange, exchange response time, and so on...)* |
| Candles - Volumes indicator | 3 - 5 | This indicator is required most of the time, as it is the one processing the one-minute candles extracted from the exchange to turn it into candles for the rest of the time frames available. In this case, the processing time depends entirely on your hardware. |
| Other indicators | 3 - 5 | Indicators that depend exclusively on the data products produced by Candles - Volumes may process their products as soon as Candles - Volumes finishes. Indicators with nested dependencies need to wait for their dependencies to finish, thus they are not processed in parallel but in series. |
| Trading Bot | 1 - 5 | Depending on the complexity of your trading system, the number of dependencies that must be loaded, your hardware, and the same connectivity considerations discussed for the sensor bot, the trading bot may take several seconds to do the processing and place the order at the exchange.

{% include callout.html type="success" content="In conclusion, depending on how many indicators the trading system uses, and what the dependencies may be, you should expect anything between 15 to 75 seconds or more of lag from the instant the candle closed at the exchange until the order is placed." %}

## Data Products and Visualization

The Low-Frequency trading bot outputs tens of data products, which are made available for others to use through the data structure provided by the Low-Frequency <a data-toggle="tooltip" data-original-title="{{site.data.trading_engine.trading_engine}}">trading engine</a> hierarchy, the <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_system}}">trading system</a> involved in the trading session, and the <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.time_machine}}">time machines</a> installed to visualize the trading simulations.

The documentation on the Low-Frequency trading engine goes through the definitions of each and every piece of information handled by the Low-Frequency trading bot, thus, this section shall not cover those definitions.

Instead, the pages following in this section cover the <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.layers_manager}}">layer managers</a> and <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.layer}}">layers</a> made available by the trading bot on the charts. These layers govern the visualization the information on the three media mentioned above.