---
title: Super Trend
summary: "The Super Trend indicator identifies market trends."
sidebar: community_sidebar
permalink: community-indicator-super-trend.html
---

{% include note.html content="Super Trend is brought to you by the [Zeus](community-data-mine-zeus.html) data mine." %}

## Super Trend On the Charts

The inventor of the SuperTrend Indicator is Olivier Seban.

Super Trend is an indicator quite similar to Moving Average Convergence Divergence or MACD and its main purpose is to identify the trend of a market. Based on the parameters of multiplier and period, the indicator uses 3 for multiplier and 10 for ATR as default values. Average True Range is then represented by the number of periods while the multiplier is the value by which the range is multiplied.

{% include image.html file='zeus/supertrend/supertrend-on-the-chart.png' url='yes' max-width='100' caption='Super Trend' %}

When plotted, the Super Trend indicator appears like an alternating green and red continuous line. The green line is plotted below the current price and indicates an uptrend. The red line is plotted above the current price and indicates a downtrend.

The Super Trend plotter panel shows the numeric value for the uptrend or downtrend and the ATR.
 
When compared to a regular Moving Average trading system the Super Trend indicator generates fewer false signals and it's usually preferred over a common Moving Average trading system.

Standard values for the indicator are:

* For ATR standard value is ```10```.
* For Multiplier standard value is ```3```.

I made it easy to change the parameters needed for the calculation as per users' needs. Locate and open the Javascript Code under Data Building Procedure -> Procedure Loop under Supertrend Product Definition

{% include image.html file='zeus/supertrend/supertrend-setting-parameters.png' url='yes' max-width='100' caption='Supertrend setting parameters' %}

## Super Trend Products & Properties

There are five properties available:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Super Trend | ```superTrend``` | ```trend```, ```upTrend```, ```dnTrend```, ```atrNperiod```, ```trueRange``` |

Standard output for the ```trend``` property is:

* Trend value is ```1``` if in an uptrend and ```-1``` if in a downtrend.


**Examples:**

Basic strategies can be built using the value of the ```trend``` or values of upTrend/dnTrend can be used as entry/exit targets or as trailing: 

1. ```chart.at02hs.superTrend.trend > 0 && chart.at02hs.superTrend.previous.trend < 0``` — An uptrend market is identified.

1. ```chart.at02hs.superTrend.upTrend``` — A simple trailing stop loss in a strategy that goes short.
