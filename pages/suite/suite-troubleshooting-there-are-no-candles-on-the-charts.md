---
title:  There Are No Candles on The Charts
summary: "It takes time for your data mining operation to download data from the exchange and process the raw data to build candles. Check the progress of your data mining operation in the network hierarchy."
sidebar: suite_sidebar
permalink: suite-troubleshooting-there-are-no-candles-on-the-charts.html
---

There are a few reasons why you may be having issues finding candles on the charts. Please, consider the following...

## Check the Progress of the Data Mining Operation

If you are just getting started with Superalgos, still following the getting started guide, bear in mind it takes time for data to be downloaded from the exchange. Depending on the power of your hardware and the speed of your internet connection, it may take anything from half an hour to several hours to see the first few candles, particularly those of the Binance exchange, as the market spans back to September 2017.

Check the data mining operation on the network hierarchy. You will be able to see candles on the screen only after the OHLCV Sensor Bot and the Candles Volumes indicator in the Masters task manager of the corresponding exchange data tasks node and market have both reached 100% progress.

{% include tip.html content="If you are not sure what the above paragraph refers to, go back to the Welcome tutorial as a refresher." %}

## Switch Candles Layer Off and Back On and Refresh the Page

Zoom into the chart until you see the layer manager featuring the *candles* layer. Turn off the candles layer and turn it back on. This forces to candles layer to reload.

## Check the Time, Rate and Time Frame Scales

It may happen that you attempted to manipulate the charts and something went wrong in the process.

Try setting the time frame scale to 24 hours, and both the time scale and rate scale to automatic mode. Setting the time scale to automatic mode brings the whole span of the market in focus on the chart. Setting the rate scale to automatic mode sets the scale to fit the entire range of prices in the market. The goal is to make sure that all scales are set in a way in which&mdash;if there is any data to show&mdash;it will show.

{% include /charting_space/time-scale.md heading="" icon="no" adding="" configuring="" charts="####" content="no" definition="no" table="no" more="yes"%}

{% include /charting_space/time-frame-scale.md heading="" icon="no" adding="" configuring="" charts="####" content="no" definition="no" table="no" more="yes"%}

## Check the Integrity of Your Data

{% include /reuse/check-data-integrity.md content="yes" extended="no" more="no" %}

## Check for Errors at the Browser

{% include /reuse/check-for-errors-at-the-browser.md content="yes" extended="no" more="no" %}