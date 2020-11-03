---
title: Maintaining Simulated Orders
summary: "The maintenance of simulated orders follows the same kind of logic as the maintenance of real orders, using definitions in the trading session parameters and in the trading system to complete the required assumptions."
sidebar: suite_sidebar
permalink: suite-low-frequency-maintaining-simulated-orders.html
---

The pages in this section describe how the trading bot simulates the maintenance of orders in the case of backtesting and paper trading sessions.

{% include tip.html content='It is highly recommended that you read the [Maintaining live orders](suite-low-frequency-maintaining-live-orders.html) section first, as the explanations on what is calculated and why are more extensive and detailed there.' %}

When on backtesting or paper trading sessions, there is no exchange involved as orders are not actually placed, but live within the simulation only.

However, to make simulations as realistic and as accurate as possible, the system goes through a similar process as when it's interacting with an exchange, performs similar checks, does similar calculations, and keeps similar accounts&mdash;while simulating the response from the exchange according to the definitions in the trading system.

The definitions that affect simulations directly are:

* The slippage and fee structure parameters at the level of the trading session.

* The simulated exchange events at the level of the trading system, where a simulated partial fill, a simulated actual rate, and a simulated fees paid may be defined. 
