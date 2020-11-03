---
title: Order Management
summary: "The Low-Frequency trading bot manages live orders, produces a simulation that is synchronized with the events occurring at the exchange, and does the accounting to keep all trading information in order."
sidebar: suite_sidebar
permalink: suite-low-frequency-order-management.html
---

The management of orders is at the heart of the Low-Frequency trading bot’s competency. 

The process has some intricacies, as it involves handling orders at the exchange as well as producing a simulation. The system must be synchronized with what happens at the exchange so that the on-screen monitoring of the trading session, the accounts, and all trading information reflects reality.

{% include callout.html type='success' content='Understanding how the trading bot manages orders will help you make the most out of Superalgos. This knowledge will allow you to transcend simple trading system setups, and stretch the limits of what you may do with more elaborate or unusual definitions.' %}

The following pages feature a chronological description of the life of an order, from the moment in which the trading system definitions of orders are read, until the accounting is done. 

Once an order is created, it is maintained on each execution of the trading bot. At this point, the bot handles two parallel jobs:

* In the case of forward testing and live trading sessions, the maintenance of orders involves dealing with the exchange and live orders.

* In the case of backtesting and paper trading sessions, the bot simulates those interactions, while dealing with simulated orders.

{% include tip.html content='The rest of the pages in this section are a detailed, step-by-step account of the actions the Low-Frequency trading bot performs while dealing with orders. You would make the most out of this content if you read the whole sequence of pages in the proposed order.' %}