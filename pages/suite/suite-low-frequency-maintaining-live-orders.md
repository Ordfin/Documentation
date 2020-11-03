---
title: Maintaining Live Orders
summary: "Orders at the exchange are monitored on every execution to discover the size filled, rates, and other exchange events. Also, the trading bot synchronizes Superalgos with the real transactional information handled by the exchange."
sidebar: suite_sidebar
permalink: suite-low-frequency-maintaining-live-orders.html
---

As hinted in the [Order management](suite-low-frequency-order-management.html) page, there are two different paths for maintaining orders. The pages in this section describe the maintenance of real orders sent to the exchange, as opposed to simulated orders that live within Superalgos only.

The maintenance of orders involves a series of tasks that deal with three main concerns:

* Checking the orders at the exchange, mainly to find out whether they have been filled or not, what size of the order was filled, and at what rate. We also need to know if the order has been arbitrarily canceled, either by the user or the exchange itself.

* Synchronizing the information existing in Superalgos with the actual happenings at the exchange. The original information Superalgos has about orders derive from definitions, but what happens at the exchange is what truly matters.

* Cancelling orders whenever the trading system's definitions indicate so.

{% include tip.html content='It is highly recommended to read these pages and compare with the simulated version of order maintenance. The comparison will greatly help you understand the differences between backtesting or paper trading and live trading sessions.' %}