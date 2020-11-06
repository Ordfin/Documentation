---
title: Directional Movement Index (DMI)
summary: "Measure the strength and direction"
sidebar: community_sidebar
permalink: community-indicator-directional-movement-index.html
---

{% include note.html content="DMI Directional Movement Index is brought to you by the [Zeus](community-data-mine-zeus.html) data mine." %}

## Directional Movement Index (DMI) on the Charts

<a href="https://www.investopedia.com/ask/answers/112814/what-directional-movement-index-dmi-formula-and-how-it-calculated.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, the DMI is an indicator that can "measure the strength and direction of a price movement so traders may avoid false signals. The DMI is two different standard indicators, one negative and one positive, that are plotted as lines on the same chart. A third line, the average directional index, or ADX, is non-directional but shows movement strength."

{% include image.html file='zeus/dmi-directional-movement-index/dmi-on-the-chart.png' url='yes' max-width='100' caption='Directional Movement Index' %}

<a href="https://www.investopedia.com/ask/answers/112814/how-average-directional-index-adx-calculated-and-what-formula.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The ADX is used to indicate market direction, the existence or nonexistence of a trend and market momentum. Market direction is determined by the levels of the +DI and -DI. If +DI is the higher number, market direction is up; if -DI is the greater number, market direction is down. The ADX indicator, which varies in value from zero to 100, is the primary momentum indicator. A value over 20 indicates the existence of a trend; a value over 40 indicates a strong trend."
 
Standard parameters:

* Value for DI Length = 14
* Value for ADX Smoothing = 14

I made it easy to change the parameters needed for the calculation as per your needs. Locate and open the Javascript Code under Data Building Procedure -> Procedure Loop under "DMI Directional Movement" Product Definition.

{% include image.html file='zeus/dmi-directional-movement-index/dmi-setting-parameters.png' url='yes' max-width='100' caption='DMI setting parameters' %}

## Directional Movement Index (DMI) Products & Properties

There are three properties available:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| DMI | ```DMI``` | ```plusDI```, ```minusDI```, ```adx``` |


**Examples:**

Basic strategies can be built by checking if ```plusDI``` is greater than ```minusDI```: 

1. ```chart.at04hs.DMI.adx < 20``` — There is no clear trend.

2. ```chart.at04hs.DMI.plusDI > chart.at04hs.DMI.minusDI``` — Trend is up.
