---
title:  Bollinger Channels
summary: "The indicator produces the Bollinger Channels and Bollinger Subchannels products."
sidebar: suite_sidebar
permalink: suite-indicator-bollinger-channels.html
---

{% include note.html content="Bollinger Channels is brought to you by the Masters data mine." %}

## On the Charts

### Bollinger Channels

This is a non-standard indicator derived from the Bollinger Bands. These types of channels are calculated using the Bollinger Bands moving average. Essentially an upward channel begins when the moving average changes _direction_ from going down to going up, and the channel finishes when it turns from going up to down. A downward channel starts when the Bollinger Band moving average turns from going up to down, and it finishes when it starts going up again. Upward channels are plotted in green, while downward channels in red. Additional information can be found at the indicator's panel, like the number of periods contained at the channel.

{% include image.html file='interface/masters-bots-layers-07-bollinger-channels.gif' url='yes' max-width='100' caption='Bollinger Channels.' %}

### Bollinger Sub-Channels

If we consider that one Bollinger Channel can have sub-channels in the same direction (up or down) but different slopes, then we get to the concept of Bollinger Sub-Channels. The most important property of a sub-channel is its slope. The possible values are Side, Gentle, Medium, High and Extreme. With this information, a trading bot could easily ask if it is in a sub-channel with a certain slope and for how many periods. The slope or inclination of the moving average may be an indication of momentum.

{% include image.html file='interface/masters-bots-layers-08-bollinger-subchannels.gif' url='yes' max-width='100' caption='Bollinger Sub-Channels.' %}

## Products & Properties

### Bollinger Channels

The product ```bollingerChannel``` features two different properties that you may use.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Bollinger Channels | ```bollingerChannel``` | ```direction```, ```period``` |

```bollingerChannel.direction```: Possible values are ```"Down"```, ```"Up"```, and ```"Side"```.

```bollingerChannel.period```: The number of periods the channel spans at the moment the variable is being read. For instance, if a channel spans 10 candles and the variable is checked on the fourth candle, then _bollingerChannel.period_ = 4. Put in other words, it is the current span of the channel.

### Bollinger SubChannels

The product ```bollingerSubChannel``` features three different properties that you may use.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Bollinger SubChannels | ```bollingerSubChannel``` | ```direction```, ```period```, ```slope``` |

```bollingerSubChannel.direction```: Possible values are ```"Down"```, ```"Up"```, and ```"Side"```.

```bollingerSubChannel.period```: The number of periods the subchannel spans at the moment the variable is being read. For instance, if a subchannel spans 10 candles and the variable is checked on the fourth candle, then _bollingerChannel.period_ = 4. Put in other words, it is the current span of the subchannel.

```bollingerSubChannel.slope```: Indicates how steep the slope of the subchannel is. Possible values are ```"Side"```, ```"Gentle"```, ```"Medium"```, ```"Steep"```, ```"Extreme"``` (in order from lowest to highest).

{% include /reuse/bollinger-subchannels-calculation.md heading="" icon="no" extended="no" content="more" definition="bold" table="no" more="yes"%}