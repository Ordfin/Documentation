---
title:  Simple Moving Average (SMA)
summary: "The indicator produces the Simple Moving Avarge in multiple settings, including the popular 20, 50, 100, and 200, as well as less frequent base 7 and base 11 SMAs."
sidebar: suite_sidebar
permalink: suite-indicator-simple-moving-average.html
---

{% include note.html content="Simple Moving Average (SMA) is brought to you by the Sparta data mine." %}

## Simple Moving Average On the Charts

<a href="https://www.investopedia.com/terms/e/ema.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "A simple moving average (SMA) is an arithmetic moving average calculated by adding recent closing prices and then dividing that by the number of time frames in the calculation average. Short-term averages respond quickly to changes in the price of the underlying asset, while long-term averages are slow to react."

{% include image.html file='interface/sparta-bots-layers-01-SMA.gif' url='yes' max-width='100' caption='Simple Moving Average, in particular, the Base11 SMA product.' %}

You will find several layers with different settings for SMAs, calculated on different periods. Each layer corresponds to a *product* made available by the indicator.

The information panel shows the numeric value for each SMA in the layer, in ascending order (i.e. SMA 20, SMA 50, SMA 100, etc.).

## Simple Moving Average Products & Properties

There are three products pre-configured to start calculating as soon as you start the corresponding task, each with different period configurations:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Popular SMAs | ```popularSMA``` | ```sma20```, ```sma50```, ```sma100```, ```sma200``` |
| Base 7 | ```base7SMA``` | ```sma7```, ```sma14```, ```sma21```, ```sma28```, ```sma35```, ```sma70```, ```sma140```, ```sma210```, ```sma280```, ```sma350```, ```sma700```, ```sma1400```|
| Base 11 | ```base11SMA``` | ```sma11```, ```sma22```, ```sma33```, ```sma55```, ```sma111``` |

There are four more products available but they will not be calculated unless you create the corresponding data outputs and reference them to the corresponding data sets:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Base 5 | ```base5SMA``` | ```sma5```, ```sma10```, ```sma15```, ```sma20```, ```sma25```, ```sma50```, ```sma100```, ```sma150```, ```sma200```, ```sma250```, ```sma500```, ```sma1000``` |
| Base 6 | ```base6SMA``` | ```sma6```, ```sma12```, ```sma18```, ```sma24```, ```sma30```, ```sma60```, ```sma120```, ```sma180```, ```sma240```, ```sma300```, ```sma600```, ```sma1200``` |
| Base 12 | ```base12SMA``` | ```sma12```, ```sma24```, ```sma36```, ```sma48```, ```sma60```, ```sma120```, ```sma240```, ```sma360```, ```sma480```, ```sma600```, ```sma1200``` |
| Base 30 | ```base30SMA``` | ```sma30```, ```sma60```, ```sma90```, ```sma120```, ```sma150```, ```sma300```, ```sma600```, ```sma900```, ```sma1200```, ```sma1500``` |

**Examples:**

1. ```chart.at24hs.popularSMA.sma50 > chart.at24hs.popularSMA.sma200``` — An indication of a bull market? Is the 50-day moving average above the 200-day moving average?

1. ```chart.at24hs.popularSMA.sma200 > chart.at24hs.base7SMA.sma350``` — Looking even further in the past, comparing a 200-day with a 350-day moving average. Notice how the two MA belong to different products.
