---
title: Wave Trend
summary: "The Wave Trend indicator identifies market trends through an oscillator."
sidebar: community_sidebar
permalink: community-indicator-wave-trend.html
---

{% include note.html content="Wave Trend is brought to you by the [Zeus](community-data-mine-zeus.html) data mine." %}

## Wave Trend On the Charts

Wave Trend Oscillator is a port of a famous TS/MT indicator and all credits go to <a href="https://www.tradingview.com/script/2KE8wTuF-Indicator-WaveTrend-Oscillator-WT/" rel="nofollow" rel="noopener" target="_blank">Lazy Bear</a> who coded this indicator for tradingview in 2014.

{% include image.html file='zeus/wavetrend/wavetrend-on-the-chart.png' url='yes' max-width='100' caption='Wavetrend' %}

When plotted, the Wave Trend indicator appears similar to RSI or MACD but has a fixed range from -100 to 100 and is composed of 2 lines, the Wave Trend line and a Signal line. The histogram is the difference between the two lines.
When the Wave Trend is above the overbought band (blue horizontal fixed lines) and crosses down the Signal line, it is usually a good SELL signal. Similarly, if the Wave Trend crosses above the Signal line when below the oversold band (yellow horizontal fixed line), it is a good BUY signal. This oscillator is also used to spot divergences.
 
Standard values for the indicator are:

* Value for Channel Length is ```10```
* Value for Average Length is ```21```
* Value for First Overbought Level is ```60```
* Value for Second Overbought Level is ```53```
* Value for First Oversold Level is ```-60```
* Value for Second Oversold Level is ```-53```

I made it easy to change the parameters needed for the calculation as per users' needs. Locate and open the Javascript Code under Data Building Procedure -> Procedure Loop under Wavetrend Product Definition

{% include image.html file='zeus/wavetrend/wavetrend-setting-parameters.png' url='yes' max-width='100' caption='Wave Trend setting parameters' %}

## Wave Trend Products & Properties

There are two properties available:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Wave Trend | ```waveTrend``` | ```waveTrend```, ```waveTrendSignal```|

**Examples:**

Basic strategies may be built using the crossings between waveTrend value and waveTrendSignal: 

1. ```chart.at02hs.waveTrend.waveTrend > chart.at02hs.waveTrend.waveTrendSignal && chart.at02hs.waveTrend < 0``` — A signal to buy
