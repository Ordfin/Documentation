---
title:  Moving Average Convergence Divergence (MACD)
summary: "The indicator produces de MACD indicator in the most popular 12, 26, 9 setting, and the following less usual settings: a fast 3, 10, 16, an intermediate 8, 17, 9, and a slow 24, 52, 9."
sidebar: community_sidebar
permalink: community-indicator-moving-average-convergence-divergence.html
---

{% include note.html content="Moving Average Convergence Divergence (MACD) is brought to you by the Sparta data mine." %}

## Moving Average Convergence/Divergence Products & Properties

There are four different products, each configured with a specific setting for the fast and slow moving avarages and the MACD Signal line.

| Product Setting | Product Variable | Properties |
| :---: | :---: | :--- |
| MACD (12, 26, 9) | ```macd122609``` | ```ema12```, ```ema26``` |
| MACD (3, 10, 16) | ```macd031016``` | ```ema3```, ```ema10``` |
| MACD (8, 17, 9) | ```macd081709``` | ```ema8```, ```ema17``` |
| MACD (24, 52, 9) | ```macd245209``` | ```ema24```, ```ema52``` |

The first few variables you may use from these products are those corresponding to the EMAs used to calculate the MACD line and the MACD signal line, as shown in the table above.

Also, each of the products in the above table feature the following properties:

| Property | Description |
| :---: | :--- |
| ```line``` | The MACD line, that is, the fast EMA minus the slow EMA. |
| ```signal``` | The Signal line, that is, the *n-period* EMA of the MACD line (*n* is the last setting) |
| ```histogram``` | The value of the histogram, that is, the difference between the MACD line and the MACD signal line. |

**Examples:**

1. ```chart.at30min.macd122609.line <= 0 && chart.at30min.macd122609.previous.line >= 0``` — A centerline crossover at the 30-minutes chart.

1. ```chart.at15min.macd031016.line >= chart.at15min.macd031016.signal && chart.at15min.macd031016.previous.line <= chart.at15min.macd031016.previous.signal``` — A signal line crossover at the 15-minutes chart.
