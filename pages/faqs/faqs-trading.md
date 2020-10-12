---
title:  "Frequently Asked Questions: Trading"
summary: "Do you have any questions about the mechanics of trading with Superalgos?"
sidebar: faqs_sidebar
permalink: faqs-trading.html
---

{% include live-trading-warning.html %}

## What exchanges may I work with?

{% include /reuse/tested-exchanges.md heading="no" icon="no" extended="no" content="yes" definition="bold" table="no" more="no"%}

## Do I need to have an account with an exchange?

You will need an account with a [supported exchange](#what-exchanges-may-i-work-with) and an exchange API key if you decide to trade live. You may use Superalgos to get started, to download data from exchanges, to build and to test trading strategies without an exchange account.

## Is trading fully automated?

Yes. It may be if you choose to run a <a data-toggle="tooltip" data-original-title="{{site.data.network.live_trading_session}}">live trading session</a>.

## Do I need to have the system running to trade live?

Yes. The backend application must be running a <a data-toggle="tooltip" data-original-title="{{site.data.network.live_trading_session}}">live trading session</a> to place orders at the exchange. If you turn your computer off or stop Superalgos, the system will not trade live during that time. 

You may close the fronted application running on the browser at any time. Only the backend application running on the console needs to be running at all times when trading live.

Once you are proficient with running and operating the system, you may set up the backend in a separate or dedicated computer, and control it from the fronted running on your every-day machine. In this manner, the machine running the backend is the only one required to run continuously, while the one running the frontend may be turned off and on at will.

## What happens if the system shuts down unexpectedly?

In case the system is stopped or stops unexpectedly after a position has been taken, the system does not resume the transaction once it comes back online. In such a case, the position must be managed and closed manually.