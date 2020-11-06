---
title: Ichimoku Cloud
summary: "One glance equilibrium chart"
sidebar: community_sidebar
permalink: community-indicator-ichimoku.html
---

{% include note.html content="Ichimoku is brought to you by the [Zeus](community-data-mine-zeus.html) data mine." %}

## Ichimoku on the Charts

<a href="https://en.wikipedia.org/wiki/Ichimoku_Kink%C5%8D_Hy%C5%8D#:~:text=Ichimoku%20is%20a%20moving%20average,picture%20of%20potential%20price%20action" rel="nofollow" rel="noopener" target="_blank">According to Wikipedia</a>, "Ichimoku Kinko Hyo translates to one glance equilibrium chart or instant look at the balance chart and is sometimes referred to as "one glance cloud chart" based on the unique "clouds" that feature in Ichimoku charting. Ichimoku is a moving average-based trend identification system and because it contains more data points than standard candlestick charts, it provides a clearer picture of potential price action."

{% include image.html file='zeus/ichimoku/ichimoku-cloud.jpg' url='yes' max-width='100' caption='Ichimoku' %}

<a href="https://www.investopedia.com/terms/i/ichimoku-cloud.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The Ichimoku Cloud is a collection of technical indicators that show support and resistance levels, as well as momentum and trend direction. It does this by taking multiple averages and plotting them on the chart. It also uses these figures to compute a cloud which attempts to forecast where the price may find support or resistance in the future."
 
Standar parameters for the indicator are set for a crypto market:

* Value for Conversion Line Periods = 20
* value for Base Line Periods = 30
* Value for Lagging Span 2 Periods = 120
* Value for Displacement = 60

I made it easy to change the parameters needed for the calculation as per your needs. Locate and open the Javascript Code under Data Building Procedure -> Procedure Loop under "Ichimoku" Product Definition.

{% include image.html file='zeus/ichimoku/ichimoku-setting-parameters.png' url='yes' max-width='100' caption='Supertrend setting parameters' %}

## Ichimoku Products & Properties

There are four properties available:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Ichimoku | ```ichimoku``` | ```conversionLine```, ```baseLine```, ```leadLine1```, ```leadLine2``` |

Please note that Lead Line 1 & 2 are plotted on the chart in the future. To avoid misconfiguration when writing strategies, values of Lead Line 1 & 2 are synced with the current candle close so there is no need to call past values of the 2 properties when compared to current price action.

{% include image.html file='zeus/ichimoku/ichimoku-synced-values.png' url='yes' max-width='100' caption='Ichimoku setting parameters' %}

**Examples:**

Basic strategies can be built by checking if the price is above the cloud: 

1. Price is above Lead Line 1 & 2 and above the Conversion Line.

```
chart.at04hs.candle.close > chart.at04hs.ichimoku.leadLine1 && 
chart.at04hs.candle.close > chart.at04hs.ichimoku.leadLine2 && 
chart.at04hs.ichimoku.conversionLine > chart.at04hs.ichimoku.baseLine
``` 
