---
title:  Stochastic
summary: "The indicator features the typical stochastic setting of 14, 3, 3."
sidebar: community_sidebar
permalink: community-indicator-stochastic.html
---

{% include note.html content="Stochastic is brought to you by the [Alpha](community-data-mine-alpha.html) data mine." %}

## Stochastic On the Charts

<a href="https://www.investopedia.com/terms/s/stochasticoscillator.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "A stochastic oscillator is a momentum indicator comparing a particular closing price of a security to a range of its prices over a certain period of time. It is used to generate overbought and oversold trading signals, utilizing a 0-100 bounded range of values."

{% include image.html file='interface/alpha-bots-layers-00-Stoch.png' url='yes' max-width='100' caption='Stochastic indicator with period of 14 and Simple Moving Average of 3.' %}

The chart for this indicator shows a fast line and slow line oscillating in a range between 0 and 100. The fast line displays the current close price in relation to the high/low range of the previous period. The slow line is a simple moving average of the fast line. Major signals provided by the stochastic indicator are overbought and oversold conditions. The default area for oversold is below 20 and for overbought above 80. Divergences between price action and stochastic records can also be helpful to identify upcoming trend reversals.

## Stochastic Products & Properties

Stochastic provides one product with a popular default setting.

| Product Setting | Product Variable | Properties |
| :---: | :---: | :--- |
| Stochastic (14, 3, 3) | ```stoch1433``` | ```fastLine```, ```slowLine``` |

**Examples:**

1. ```chart.at04h.stoch1433.slowLine >= 80 && chart.at04h.stoch1433.fastLine < chart.at04h.stoch1433.slowLine``` — Checking for overbought condition and the fast line lower than the slow line, indicating trend reversal.
