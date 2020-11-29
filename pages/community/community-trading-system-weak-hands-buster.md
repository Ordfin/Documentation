---
title:  Weak-hands Buster (WHB)
summary: "A trading system based on the break down of the Bollinger Bands idea, designed to accumulate Bitcoin, targeting major downward market moves."
sidebar: community_sidebar
permalink: community-trading-system-weak-hands-buster.html
---

Weak-hands Buster was released in the <a href="https://t.me/superalgoscommunity" rel="nofollow" rel="noopener" target="_blank">Superalgos Community Telegram group</a> in August 2019 and has been trading live since. An evolution of the system is currently available as version 2. This page explains the trading system and analyzes its performance.

The trading system conforms to the Superalgos Trading Protocol, therefore, it may function as a fully automated trading system. People not interested in trading automation may still obtain the strategy's rules (situations, conditions, and formulas) from the design space and use the set of rules as they see fit.

{% include note.html content="Weak-hands Buster v2 is available on the ```Weak-Hands-Buster v2.json``` plugin workspace shipping with Superalgos." %}

{% include live-trading-warning.html %}

## WHB V.2 Performance in Backtests (Binance)

The following was the performance in backtests at the time of publishing:

| Details | Jan 2018 - Mar 2020 | 2020 Jan-Mar | 2019 | 2018 | 
| :--- | :---: | :---: | :---: | :---: |
| Trades: | **24** | 2 | 9 | 13 |
| Hits: | **19** | 1 | 8 | 10 |
| Fails: | **5** | 1 | 1 | 3 |
|Hit Ratio: | **79 %** | 50 % | 89 % | 77 % |
| ROI: | **2,662 %** | 75 % | 142 % | 551 % |

### Notes on Backtests Performance

* The table above shows the results for different periods tested independently. 

* Each backtest starts with an *initial capital*. With the default configuration, the system reinvests accumulated profits on every trade (```positionSize = balanceBaseAsset```).

* ROI is calculated over the *initial capital* for each backtest, and the result is rounded to the closest integer. 

* Because the system reinvests accumulated profits, the sum of ROI in different periods is not the same as ROI for all periods run in one single test (first column).

### Assumptions

* Slippage: 0.1 % in all orders.

* Fees: 0.1 % in all orders.

## Technical Sheet

### Market

USDT-BTC, with BTC as the base asset.

### Strategy Goal

Accumulate bitcoin during bear markets and/or consolidation periods, with a conservative approach to minimize risk.

### Approach

Split the goal into two fundamental notions:

**1. Focus on potentially big market moves**. The strategy is optimized for major trend reversals resulting in long bear markets. Significant consolidations during bull markets are targetted as well.

**2. Take the clearest and most promising opportunities only**. Pass on everything else to avoid fails and preserve capital.

### Trading Idea

The main trading idea is to identify short-term reversals as well as continuations and deepening of trends marked by a break down of the Bollinger Bands (BB) on the 1-hour chart, using the Percentage Bandwidth (%B) indicator, the Bollinger Bands Moving Average (BB MA) and the Bollinger Band deviation to assess momentum and volatility, optimize the take position event, and filter out late entries.

### Implementation

The original system is dissected in a Coinmonks article: <a href="https://medium.com/coinmonks/how-to-increase-your-bitcoin-holdings-in-a-bear-market-part-i-5701f34be067?source=friends_link&sk=2906d9d350852c8f64004a2b5793d5ec" rel="noopener" target="_blank">How to Increase your Bitcoin Holdings in a Bear Market</a>. Version 2 maintains the trading idea and the take position event almost intact. 

### Position Size

The ```positionSize``` is set to ```balanceBaseAsset``` by default. This means that the trading system takes positions with the whole balance, that is, the ```initialBalance``` as defined in the configuration of the base asset parameter of the trading session, plus all accumulated profits if any. You may change this formula as you see fit.

{% include important.html content="Please take enough time to consider the implications of the above statement and make your own judgment about what setting may be appropriate for you." %}

### Trading Frequency

The strategy is designed with the one-hour time frame as the main decision-making instance, meaning that it makes trigger and take position decisions upon the closing of the one-hour candle.

That said, when running live on Superalgos, it should be run on the one-minute time frame to allow it to react fast to market moves when evaluating take profit and stop loss targets.

Because the strategy is rather conservative in its design, it doesn't trade every opportunity that may occur. Instead, the strategy is quite selective and trades only the most promising ones.

As a consequence, and as you may infer from the number of trades in the backtesting report above and the live trading performance of WHB V1 described below, the strategy performs an average of about one trade per month.

### Required Bots

The following bots must be running and up to date to run paper trading, forward testing, and live trading sessions:

**Masters Data Mine:**

* OHLCVs
* Candles & Volumes
* Bollinger Bands & Percentage Bandwith
* Bollinger Channels & SubChannels

**Sparta Data Mine:**

* EMA (Popular)

## Changes on WHB V.2

* The two different situations making up the take position event were split into two separate strategies operating under the same trading system. This means that take profit and stop targets may be managed separately for each take position situation. This is the first case of two complementary strategies running under the same trading system.

* An additional condition was implemented at the take position event of each strategy so that each specializes in two different volatility ranges. The *Xtreme* strategy works best in extreme volatility situations (*e.g.* ATH period in late 2017 and early 2018). The *Steep* strategy works best in *normal* (by BTC standards) volatility situations.

* Management of take profit implemented originally was greatly improved for the *Steep* strategy, with a few simple additions and checks on the conditions that determine the events that switch phases.

* The trailing stop for the *Steep* strategy was raised from 5 to 5.25% above the 20 MA. The trailing was delayed to kick-in only after the market has dropped 5%. The initial stop target remains the same at 3%.

## Original WHB Live Performance

| Details | Sep 2019 - Mar 2020 |
| :--- | :---: |
| Trades: | 7 |
| Hits: | 4 |
| Fails: | 3 |
| Hit Ratio: | 57% |
| ROI: | 76% |

### Original WHB Main Live Trades

#### Sep 2019

![6th Sep  2019](https://user-images.githubusercontent.com/13994516/79866577-43febb00-83dd-11ea-851a-398db2c4a60c.PNG)

#### Nov 2019

![19th Nov  2019](https://user-images.githubusercontent.com/13994516/79866595-4d882300-83dd-11ea-9608-b57a342690e3.PNG)

#### Mar 2020

![8th Mar  2020](https://user-images.githubusercontent.com/13994516/79866599-4eb95000-83dd-11ea-9c51-66ffd99b41bd.PNG)
