---
title: Super Trend
summary: "Identify the market trend"
sidebar: community_sidebar
permalink: community-indicator-supertrend.html
---

{% include note.html content="Super Trend is brought to you by the [Zeus](community-data-mine-zeus.html) data mine." %}

## Super Trend On the Charts

The inventor of the SuperTrend Indicator is Olivier Seban.
Supertrend is an indicator quite similar to Moving Average Convergence Divergence or MACD and its main purpouse is to identify the trend of a market. Based on the parameters of multiplier and period, the indicator uses 3 for multiplier and 10 for ATR as default values. Average True Range is then represented by the number of days while the multiplier is the value by which the range is multiplied.

{% include image.html file='zeus/supertrend/supertrend-on-the-chart.png' url='yes' max-width='100' caption='Supertrend' %}

When plotted, the Supertrend indicator appears like a alternating green and red continuous line.
Green line is plotted below the curent price and indicate an up trend market.
Red line is plotted above the curent price and indicate a down trend market.
The supertrend information panel shows the numeric value for the Up/Down Trend and the ATR.
 
When compared to a regular Moving Average trading system the supertrend indicator generates fewer false signals and it's usually preferred over a common Moving Average trading system.

Standar values for the indicator are:
- For ATR standard value is 10 
- For Multiplier standard value is 3

Standard output for the ```trend``` property is:
- Trend value is 1 if in an up trend
- Trend value is -1 if in an down trend

I made it easy to change the parameters needed for the calculation as per your needs. Locate and open the Javascript Code under Data Building Procedure -> Procedure Loop under Supertrend Product Definition

{% include image.html file='zeus/supertrend/supertrend-setting-parameters.png' url='yes' max-width='100' caption='Supertrend setting parameters' %}

## Super Trend Products & Properties

There are five properties available:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| SUPERTREND | ```superTrend``` | ```trend```, ```upTrend```, ```dnTrend```, ```atrNperiod```, ```trueRange``` |

**Examples:**

Basic strategies can be built using the value of the ```trend``` or values of upTrend/dnTrend can be used as entry/exit targets or as trailing: 

1. ```chart.at02hs.superTrend.trend > 0 && chart.at02hs.superTrend.previous.trend < 0``` — An up trend market is identified 

1. ```chart.at02hs.superTrend.upTrend``` — A simple trailing stop loss in a strategy that goes short
