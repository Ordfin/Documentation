---
title:  Balances
summary: "Keep track of the balances of each asset, at different points in time. On this page: Balance, Begin Balance, and End Balance."
sidebar: suite_sidebar
permalink: suite-trading-engine-balances.html
toc: false
---

Balances are the basis of the account-keeping features, by which you may know exactly how much of each asset there is on the account at any given point in time.

The system keeps track of balances in multiple contexts, but also saves snapshots of what the balance was at key moments in time, so that such information may be available both to study the results of operations, and so that it may be used form within trading strategies.

{% include callout.html type="success" content="It is important to understand that balances are an internal concept managed by the trading engine, and are calculated based on the information processed by the trading bot. Balances do not necessarily reflect the actual amount of assets at the exchange." %}

{% include /trading_engine/balance.md more="no" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_engine/begin-balance.md more="no" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_engine/end-balance.md more="no" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}