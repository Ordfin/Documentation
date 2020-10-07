---
title:  Resistances and Supports
summary: "The indicator keeps track of resistances and supports levels for the entire dataset."
sidebar: community_sidebar
permalink: community-indicator-resistances-and-supports.html
---

{% include note.html content="Resistances and Support is brought to you by the [Masters](community-data-mine-masters.html) data mine." %}

## Resistances and Supports On the Charts

This indicator is an interpretation of the concept of resistance and support levels. The indicator identifies levels (a price range) on which price is rejected, and keeps a counter of how many times rejections occur until the level is breached.

{% include image.html file='interface/support-resistance-00.PNG' url='yes' max-width='100' caption='Each relative high rejected at the level increments the counter, and changes the color of the level.' %}

Each level is determined by the reference rate, which is the rate of the first rejection. However, the level is not a specific rate, but a *rate range* expressed as a percentage of the reference rate. The percentage used to determine a level varies depending on the time frame. The smaller the time frame, the smaller the percentage.

Also, each level is calculated in different variations using different percentages to determine the rate range that makes up the level. Each of these variations in the rate range of a level is called a *zone*.

For simplicity's sake, only the first zone of each level is rendered on-screen. That is, what you see on-screen is the representation of a single variation of a level. However, strategies have access to several different versions increasing in zone sizes.

The way in which a level is visualized on screen depends on the number of rejections that have occured at the particular level since is was first established:

| Number of Rejections | Graphics | Comments |
| :---: | :---: | :--- |
| 1 | <span style="display: block; border-bottom: 1px dotted grey;">&nbsp;</span> | A faint, grey dotted line marking the reference rate of the support / resistance level. |
| 2 | <span style="display: block; background: RGB(150, 150, 150, 0.2); ">&nbsp;</span> | A grey block, marking the range of rates that make up the level. | 
| 3 | <span style="display: block; background: RGB(2, 149, 170, 0.2); ">&nbsp;</span> | A turquoise block. |
| 4 | <span style="display: block; background: RGB(244, 228, 9, 0.2); ">&nbsp;</span> | A yellow block. |
| 5 | <span style="display: block; background: RGB(188, 214, 67, 0.2); ">&nbsp;</span> | A green block. |
| 6 | <span style="display: block; background: RGB(240, 162, 2, 0.2); ">&nbsp;</span> | An orange block. |
| 7 or more | <span style="display: block; background: RGB(91,80, 122, 0.4); ">&nbsp;</span> | A purple block. |

{% include image.html file='interface/support-resistance-01.gif' url='yes' max-width='100' caption='Each relative high rejected at the level increments the counter, and changes the color of the level.' %}

Once the price breaks through the level, the level dissappears.

When a level is identified and the rejection counter is greater than zero, the level remains *"in memory"*. However, this doesn't mean that the level is graphically represented on-screen at all times. On the contrary, not all levels are represented on-screen at all times. 

The criteria to render level on-screen is influenced by the price at the current candle. For each candle, only five levels of resistance and five levels of support are rendered, above and below the price, respectively. This is to clear up the screen and limit the density of information in display when information is not relevant. As price moves up and down, some levels are hidden, some new levels may form, and pre-existing levels may emerge.

{% include image.html file='interface/support-resistance-02.gif' url='yes' max-width='100' caption='Notice the discontinuity in the level marked in blue caused by the drop of the price and the emergence of new levels below. However, despite the level stops being rendered on screen, it remains hidden and re-emerges when the price comes back up.' %}

### Panels

| Bounces | Levels | Zone Sizes | Details |
| :---: | :---: | :---: | :--- |
| ![image](images/interface/support-resistance-01-panel-bounces.png) | ![image](images/interface/support-resistance-02-panel-levels.png) | ![image](images/interface/support-resistance-03-panel-zone-sizes.png) | **Resistance / Support Bounces:** <br />The panel shows the number of bounces off each of the six zones of the first three levels.<br /><br />**Resistance / Support Levels:** <br />The panel indicates the rate on which the closest five resistance or support levels are located, and the number of periods the levels have been in existence, counting from the period of the first rejection. <br /><br />**Resistance / Support Zone Sizes:** <br /> The panel shows the sizes of the different zones tracked for each level. However, remember that only the first zone is rendered on screen. |

## Resistances and Supports Products & Properties

The indicator features two data products: ```resitance``` and ```support```. 

| Product Name | Product Variable |
| :--- | :--- |
| Resistance | ```resistance``` | 
| Support | ```support``` |

| Resistance Properties | Possible Values of (i) | Comments |
| :--- | :---: | :--- |
| ```resitance(i)Rate``` | 1 to 5 | The reference rate of the level. |
| ```resistance(i)Period``` | 1 to 5 | The number of periods the level has been in existence. |
| ```resistance(i)Bounce1``` | 1 to 5 | The number of bounces for zone 1, the one rendered on-screen. |
| ```resistance(i)Bounce2``` | 1 to 3 | The number of bounces for zone 2, only available for the first three levels. Zone 2 is two times bigger than zone 1. |
| ```resistance(i)Bounce3``` | 1 to 3 | The number of bounces for zone 3, only available for the first three levels. Zone 3 is three times bigger than zone 1. |
| ```resistance(i)Bounce5``` | 1 to 3 | The number of bounces for zone 5, only available for the first three levels. Zone 5 is five times bigger than zone 1. |
| ```resistance(i)Bounce10``` | 1 to 3 | The number of bounces for zone 10, only available for the first three levels. Zone 10 is ten times bigger than zone 1. |
| ```resistance(i)BounceAll``` | 1 to 3 | The number of bounces for zone All, only available for the first three levels. Zone All is one hundred times bigger than zone 1. |

| Support Properties | Possible Values of (i) | Comments |
| :--- | :---: | :--- |
| ```support(i)Rate``` | 1 to 5 | The reference rate of the level. |
| ```support(i)Period``` | 1 to 5 | The number of periods the level has been in existence. |
| ```support(i)Bounce1``` | 1 to 5 | The number of bounces for zone 1, the one rendered on-screen. |
| ```support(i)Bounce2``` | 1 to 3 | The number of bounces for zone 2, only available for the first three levels. Zone 2 is two times bigger than zone 1. |
| ```support(i)Bounce3``` | 1 to 3 | The number of bounces for zone 3, only available for the first three levels. Zone 3 is three times bigger than zone 1. |
| ```support(i)Bounce5``` | 1 to 3 | The number of bounces for zone 5, only available for the first three levels. Zone 5 is five times bigger than zone 1. |
| ```support(i)Bounce10``` | 1 to 3 | The number of bounces for zone 10, only available for the first three levels. Zone 10 is ten times bigger than zone 1. |
| ```support(i)BounceAll``` | 1 to 3 | The number of bounces for zone All, only available for the first three levels. Zone All is one hundred times bigger than zone 1. |

**Examples:**

Let's say you wish to check if you have a strong support level below the current price on the 1H chart.

* ```chart.at01hs.support.support1Bounce1``` tells you the number of times price has bounced off the first support level; a high number of bounces may mean the level has strong support.

* ```chart.at01hs.support.support1Period``` tells you how long the support level has been "alive"; long-lasting support levels may mean the level is strong, as it hasn't been breached in a long time.

* ```chart.at01hs.candle.close - chart.at01hs.support.support1Rate``` tells you how far down the first level of support is.

Checking the first level only may not be enough. Bear in mind that the first level may show weak support, but there may be stronger support at lower levels.





