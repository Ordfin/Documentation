---
title:  BB Top Bounce (BBTB)
summary: "A trading system based on the bounce off the upper Bollinger Band idea, designed to accumulate Bitcoin, targeting a big range of market situations."
sidebar: community_sidebar
permalink: community-trading-system-bb-top-bounce.html
---

BB Top Bounce was released in May 2020. This page explains the trading system and analyzes its performance.

The trading system conforms to the Superalgos Trading Protocol, therefore, it may function as a fully automated trading system. People not interested in trading automation may still obtain the strategy's rules (situations, conditions, and formulas) from the design space and use the set of rules as they see fit.

{% include note.html content="BB Top Bounce is available on the ```BB-Top-Bounce.json``` plugin workspace shipping with Superalgos." %}

{% include shared-strategies-warning.html %}

## BBTB Performance in Backtests (Binance)

The following was the performance in backtests at the time of publishing:

| Details | Jan 2018 - Apr 2020 | 2020 Jan-Apr | 2019 | 2018 | 
| :--- | :---: | :---: | :---: | :---: |
| Trades: | **77** | 8 | 26 | 42 |
| Hits: | **67** | 6 | 25 | 35 |
| Fails: | **10** | 2 | 1 | 7 |
|Hit Ratio: | **87 %** | 75 % | 96 % | 83 % |
| ROI: | **4,870 %** | 140 % | 268 % | 453 % |

### Notes on Backtests Performance

* The table above shows the results for different periods tested independently. 

* Each backtest starts with an *initial capital*. With the default configuration, the system reinvests accumulated profits on every trade (```positionSize = balanceBaseAsset```).

* ROI is calculated over the *initial capital* for each backtest, and the result is rounded to the closest integer. 

* Because the system reinvests accumulated profits, the sum of ROI in different periods is not the same as ROI for all periods run in one single test (first column).

### Assumptions

* Slippage: 0.1 % in all orders.

* Fees: 0.1 % in all orders.

### Backtest Trades

##### 2018

{% include image.html file='trading-system/BBTB-Backtest-2018-Q1.PNG' url='yes' max-width='100' caption='Jan-Mar, 2018' %}

{% include image.html file='trading-system/BBTB-Backtest-2018-Q2.PNG' url='yes' max-width='100' caption='Apr-Jun, 2018' %}

{% include image.html file='trading-system/BBTB-Backtest-2018-Q3.PNG' url='yes' max-width='100' caption='Jul-Sep, 2018' %}

{% include image.html file='trading-system/BBTB-Backtest-2018-Q4.PNG' url='yes' max-width='100' caption='Oct-Dec, 2018' %}

##### 2019

{% include image.html file='trading-system/BBTB-Backtest-2019-Q1.PNG' url='yes' max-width='100' caption='Jan-Mar, 2019' %}

{% include image.html file='trading-system/BBTB-Backtest-2019-Q2.PNG' url='yes' max-width='100' caption='Apr-Jun, 2019' %}

{% include image.html file='trading-system/BBTB-Backtest-2019-Q3.PNG' url='yes' max-width='100' caption='Jul-Sep, 2019' %}

{% include image.html file='trading-system/BBTB-Backtest-2019-Q4.PNG' url='yes' max-width='100' caption='Oct-Dec, 2019' %}

##### 2020

{% include image.html file='trading-system/BBTB-Backtest-2020-Q1.PNG' url='yes' max-width='100' caption='Jan-Mar, 2020' %}

{% include image.html file='trading-system/BBTB-Backtest-2020-Q2.PNG' url='yes' max-width='100' caption='Apr-Jun, 2020' %}

## Technical Sheet

### Market

USDT-BTC, with BTC as the base asset.

### Strategy Goal

Accumulate bitcoin in a wide range of market situations, with a moderate approach to risk to trade as frequently as possible.

### Approach

Split the goal into two fundamental notions:

**1. Target specific market situations**. Each strategy in the trading system is specialized in a particular market situation. This allows describing different trading opportunities with very specific conditions for the take position event, and managing the trade taking into account the specific context.

**2. Filter out dubious opportunities**. Opportunities occurring in specific market situations usually perform poorly and may be filtered out to avoid fails and preserve capital.

### Trading Idea

The main trading idea is to identify bounces off the top band of the Bollinger Bands (BB) on the 1-hour chart to take short positions on bitcoin as the price leaves the top band and heads for the lower band.

Most trades are expected to be short, while others have the potential to run longer while under the management stage.

### Position Size

The ```positionSize``` is set to ```balanceBaseAsset``` by default. This means that the trading system takes positions with the whole balance, that is, the ```initialBalance``` as defined in the configuration of the base asset parameter of the trading session, plus all accumulated profits if any. You may change this formula as you see fit.

{% include important.html content="Please take enough time to consider the implications of the above statement and make your own judgment about what setting may be appropriate for you." %}

### Trading Frequency

The strategy is designed with the one-hour time frame as the main decision-making instance, meaning that it makes trigger and take position decisions upon the closing of the one-hour candle. That said, when running live on Superalgos, it should be run on the 1-minute time frame to allow quick reactions when evaluating take profit and stop loss targets.

The average trading frequency according to backtests is of around 1 trade every 11 days.

### Required Bots

The following bots must be running and up to date to run paper trading, forward testing, and live trading sessions:

**Masters Data Mine:**

* OHLCVs
* Candles & Volumes
* Bollinger Bands & Percentage Bandwith
* Bollinger Channels & SubChannels

**Sparta Data Mine:**

* EMA
* RSI

## Implementation

The trading system has eight different strategies, each specializing in a specific market situation. This section analyzes the principles governing each stage, taking the first strategy in the system as an example. The rest of the strategies in the system behave similarly, the main differences being:

* Some of the conditions that define the take position event, in particular the ones representing the *Market Structure Analysis* and *Filters* (see below).

* The specific conditions used to switch take profit management phases.

### Trigger Stage

##### Trigger On vs. Take Position

The conditions at the take position event and the trigger-on event are the same. Therefore, when a strategy is triggered, it also takes a position.

##### Trading Idea

The trading idea is described by the first three conditions in the take position event, which are common to all strategies:

* **Previous Breakup**: <br />
```chart.at01hs.candle.previous.close > chart.at01hs.bollingerBand.previous.movingAverage + chart.at01hs.bollingerBand.previous.deviation```<br />
The condition describes the closing above the upper Bollinger Band of the previous candle.

* **Current Close In**: <br />
```chart.at01hs.candle.close < chart.at01hs.bollingerBand.movingAverage + chart.at01hs.bollingerBand.deviation```<br />
The condition describes the closing below the upper Bollinger Band of the current candle.

* **Current Red Candle**: <br />```chart.at01hs.candle.close < chart.at01hs.candle.open```<br />
The condition serves to confirm that the re-entry happened with a candle closing lower than the opening price&mdash;an early indication of a potential short-term reversal.

In short, these first three conditions describe the fact that the price went above the Bollinger Bands and eventually returned within the bands, which may be a sign that it may bounce back in the direction of the lower band.

##### Market Structure Analysis

The logic for segmenting the market in the particular structures targeted by each of the strategies derives exclusively from studying which market situations produced the best hit ratios while testing the trading idea with symmetrical stop loss and take profit targets. That is, it is purely an empirical approach on what worked best during the span of the dataset tested&mdash;from January 2018 until April 2020.

The criteria the trading system uses to analyze the market structure at the time the opportunity arises (as described by the trading idea) is based on the [Bollinger Channels](suite-masters-bots-layers.html#bollinger-channels) and [Bollinger Subchannels](suite-masters-bots-layers.html#bollinger-sub-channels) indicators. These two indicators describe what is the direction (up or down) and the relative slope (side, gentle, medium, steep or extreme) of the 20-periods simple moving average (SMA).

In essence, each strategy specializes in specific market structures as defined by three or four conditions that describe what is going on with the market in two or more time frames.

In particular, the fourth condition in each strategy defines the main characteristic of the specific market situation that the strategy specializes in. 

For example, in the case of strategy *S1 - 3H Down*:

* **3H - Down**: <br />
```chart.at03hs.bollingerChannel.direction === "Down"```<br />
The condition defines that the Bollinger Channel direction at the 3-hours time frame is *Down*.

The rest of the conditions that define the market structure that strategy *S1 - H3 Down* specializes in are:

* **3H - Medium, Steep or Extreme**:<br />
```chart.at03hs.bollingerSubChannel.slope === "Medium" || chart.at03hs.bollingerSubChannel.slope === "Steep" || chart.at03hs.bollingerSubChannel.slope === "Extreme" ```<br />
The condition defines that the 3H sub channel (20-periods moving average) slope must be medium, steep or extreme.

Combined with the previous condition, the above means that&mdash;at the 3H time frame&mdash;there is a downward trend, with a relatively high slope.

* **24H - Gentle**:<br />
```chart.at24hs.bollingerSubChannel.slope === "Gentle"```<br />
The condition defines that the 24H sub channel has a gentle slope.

These three conditions define the market structure that this particular strategy targets. Notice how the last condition, *24H - Gentle* does not make a distinction whether the channel is going up or down. It simply requires that, whatever the trend is at the 24H chart, it must be *gentle* in slope.

The rest of the strategies in the trading system define the market structure in which each operate in a similarly.

##### Filters

The last few conditions in the take position event of each strategy may be *filters*. Filters describe particular market situations in which the trading idea has been found to perform poorly and thus are excluded, effectively deciding not to trade in such situations, even when the market situation may be the one the strategy specializes in.

For example, in the case of strategy *S1 - 3H Down*, the following filter is applied:

* **Filter 1: 08H Deviation > 200 < 1500**: <br />
```if (chart.at08hs.bollingerBand.deviation < 200 || chart.at08hs.bollingerBand.deviation > 1500) {false} else {true}```<br />
The condition dictates that in case the deviation of the Bollinger Bands at the 8H chart is lower than 200 or higher than 1500, the strategy will not take a postion. 

The deviation of the Bollinger Bands is an indication of volatility, therefore, *Filter 1* dictates that when volatility is very low or very high, the opportunity shall not be taken.

{% include callout.html type="primary" content="<strong>Let's unpack the syntax so that non-coders may easily understand it...</strong><br /><br />

The core idea of the condition is ```chart.at08hs.bollingerBand.deviation < 200 || chart.at08hs.bollingerBand.deviation > 1500```. However, if used in this format, the condition would evaluate true when the deviation is lower than 200 or higher than 1500, which is the opposite of what is intended.<br /><br />

To reverse the logic so that the condition may act as a *filter*, a simple ```if () {} else {}``` statement is used. This piece of code is evaluated as follows: if the statement between brackets evaluates true, then the code between the first set of curly brackets is returned, else, the code in the second set of curly brackets is returned.<br /><br />

So, if the condition is meant to prevent the taking of the position when it evaluates true, then the code must return ```false``` when the condition evaluates true, and ```true``` when the condition evaluates false." %}

Any number of filters may be used, and different strategies may use different filters. However, all of them are built with the logic described above, using ```if () {} else {}``` statements to reverse the logic of the condition.

### Open Stage

##### Initial Stop

The initial stop is set at 3% above the position rate (```positionRate + positionRate * 3 / 100```). 

##### Initial Take Profit

Initial take profit is set 5% below the position rate (```positionRate - positionRate * 0.05```). 

##### Position Size

The ```positionSize``` is set to ```balanceBaseAsset``` by default. This means that the trading system takes positions with the whole balance, that is, the ```initialBalance``` as defined in the configuration of the base asset parameter of the trading session, plus all accumulated profits if any. 

You may change this formula to fit your specific goals and risk management style.

### Manage Stage

The logic behind the management of trades varies between strategies, and is one of the key strategy design elements of the trading system. Being able to apply different management rules to trades that occur in diverse market situations is a highly valuable feature.

That said, the management is based on the same principles across the trading system, and what may vary across strategies are the specific conditions that implement the switching of phases. 

The following is the overall description of the principles. You may look into the specific rules by analyzing the move to phase events of each strategy.

##### Stop Loss Management

The intial formula is overriden when a candle closes 3% below the position rate (```chart.at01hs.candle.previous.close < positionRate - positionRate * 3 / 100```).

There is only one additional phase to manage the stop loss, which sets a trailling stop 2% above the 20-periods moving average (```if (chart.at01hs.bollingerBand.movingAverage + chart.at01hs.bollingerBand.movingAverage * 2 / 100 < stopLoss) {chart.at01hs.bollingerBand.movingAverage + chart.at01hs.bollingerBand.movingAverage * 2 / 100} else {stopLoss}```).

{% include callout.html type="primary" content="<strong>Let's unpack the syntax, including the ```if () {} else {}``` statement you are already familiar with...</strong><br /><br />

In this case, the condition being evaluated is ```chart.at01hs.bollingerBand.movingAverage + chart.at01hs.bollingerBand.movingAverage * 2 / 100 < stopLoss``` which intends to determine if the price 2% above the moving average is lower than the current value for the stop loss. In case the statement is true, then the same statement is set as the valid formula to calculate the trailing stop. In case the statement is false, then the stop loss value is left as is.<br /><br />" %}

In other words, the new stop loss set for the current candle can never be higher than the one set for the previous candle. That is, the stop loss may not increase&mdash;it either decreases or stays the same.

##### Take Profit Management

The initial formula is overriden when the following two conditions in the next phase event validate true:

* **1H EMA7 < positionRate**: <br />
```chart.at01hs.base7EMA.ema7 < positionRate```<br />
The 7-periods exponential moving average (EMA) must go below the position rate.

* **positionPeriods > 2**: <br />
```positionPeriods > 2```<br />
The position must be more than two-periods long.

The management of take profit targets is handled with three different phases:

###### Manage Phase

It is the phase that kicks in once the initial take profit next phase event validates true. The formula for the manage phase is:

```if (chart.at01hs.base7EMA.ema7 - chart.at01hs.base7EMA.ema7 * 0.03 < positionRate - positionRate * 0.03) {chart.at01hs.base7EMA.ema7 - chart.at01hs.base7EMA.ema7 * 0.03} else {positionRate - positionRate * 0.03}```

This means that the take profit target is set 3% below the 7-periods EMA when the resulting value is at least 3% below the position rate. If that is not the case, then the take profit target is set 3% below the position rate.

The logic behind this formula is that some room should be allowed for the trade to develop, but still, profit shall be taken at 3% if a downward trend does not emerge. If price ranges above the position rate, then the target remains at 3%, pretty much like with the initial setting. If a sudden move or a wick drops to at least 3% below the take position rate, then the take position target is likely to be hit. However, if price starts dropping organically, then the 7 EMA will soon drop below the position rate and the formula will result in a value that is lower than 3% below the position rate, thus, allowing the trade to develop in the expected direction.

###### Close Phase

The close phase is the phase that is activated every time there is an indication the market may turn against the trade. The take profit formula for this phase is:

```if (chart.at01hs.bollingerBand.movingAverage - chart.at01hs.bollingerBand.deviation < positionRate - positionRate * 0.03) {chart.at01hs.bollingerBand.movingAverage - chart.at01hs.bollingerBand.standardDeviation * 2} else {positionRate - positionRate * 0.03}```

This means that the take profit target is set to the lower Bollinger Band when the value is at least 3% below the position rate, otherwise, it is set 3% below the position rate.

###### Run Phase

This is the phase that is activated every time there is an indication that a downtrend may accelerate, favoring the trade and letting it run freely. The take profit formula for this phase is:

```if (chart.at01hs.base7EMA.ema7 - chart.at01hs.base7EMA.ema7 * 0.2 < positionRate - positionRate * 0.03) {chart.at01hs.base7EMA.ema7 - chart.at01hs.base7EMA.ema7 * 0.2} else {takeProfit}```

The take profit target is set 20% below the 7 EMA if the value is at least 3% below the position rate, which is the most likely scenario, and to 3% below the position rate in case it is not. As hinted earlier, the goal of this phase is to let the trade run freely, still with the trailing stop securing profits 2% above the 7 EMA.

###### Switching Phases

In general terms, the Manage Phase may switch to both the Close Phase and the Run Phase discretionarily. The Close Phase may cancel the close intention and go back to the Manage Phase, or even go straight to the Run Phase if the market situation demands it. And the Run phase may cancel the run and go back to the Manage Phase.

{% include image.html file='trading-system/BBTB-TP-Management.svg' url='yes' max-width='100' caption='Take profit management is based on the convergence and divergence of fast exponential moving averages.' %}

The specific conditions for switching from one phase to another phase may vary in each strategy. You may review each particular case to get the details, but conceptually, this is how it works:

* **Move to Close Phase Event**: A convergence between EMA 7 and EMA 14 signals that the downward move is losing steam, thus a switch to the close phase for a tighter take profit target is in order. The close phase may cancel when the convergence recedes and divergence is spotted.

* **Move to Run Phase Event**: A divergence between EMA 7 and EMA 14, confirmed by a divergence between EMA 14 and EMA 21 indicates that the downward trend is deepening and gaining momentum, thus, allowing the trade to run is the best bet, always with a tight top trailing behind the EMA 7. A run may cancel when the divergence recedes and convergence is spotted.

## Warning and Disclaimer

{% include live-trading-warning.html %}

{% include shared-strategies-important.html %}