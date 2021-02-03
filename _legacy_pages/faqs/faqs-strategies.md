---
title:  "Frequently Asked Questions: Strategies"
summary: "Do you have any questions about how strategies are created or used within Superalgos?"
sidebar: faqs_sidebar
permalink: faqs-strategies.html
---

{% include live-trading-warning.html %}

## May I create my own strategies? Do I need to code?

Yes and no! Building, testing, and deploying strategies is the core competency of Superalgos. You don't need to write computer code... only simple statements with a specific [syntax](suite-syntax-overview.html) to create conditions and formulas, following a framework that guides you in the process of setting up a [trading system](suite-trading-systems.html).

However, if you can code you may have an edge building more complex logic in JavaScript.

## May I get a ready-to-use strategy and use it to trade live?

Yes. The strategies available to use in Superalgos are the ones you may create yourself and those open-sourced by the Community. If you intend to use a strategy you didn't create yourself, it is highly recommended that you study the strategy, test it, and understand how it works before committing to trading live with it.

Superalgos ships with a few example strategies and the Welcome Tutorial teaches you how to run them in Superalgos.

## Are strategies shipping with Superalgos profitable?

We try our best to educate users on how strategies work. At the moment, two open-source strategies are available:

* [Weak-hands Buster](suite-community-weak-hands-buster.html)

* [BB Top Bounce](suite-community-bb-top-bounce.html)

The documentation discusses the strategies' performance in live trading and backtesting contexts and explains their goal, approach, trading idea, and trading frequency. Please take the time to educate yourself so that you may make informed decisions as to how to use these strategies.

You must adjust your expectations to reality. Trading strategies are not "get-rich-quick" schemes. Please, bear in mind the following well-known facts about trading strategies in general:

1. **Performance in backtesting is not an indication of live trading performance**. Live performance may vary in relation to performance in backtesting, for better or for worse, most likely for worse. This happens because the design of trading strategies is done after the fact, with the hindsight of what happened in a certain range of the market. Patterns upon which strategies may be based on may keep occurring or not. Strategies attempt to interpret patterns and predict what may follow, but they are far from being perfect or accurate. The best-case scenario is a strategy being right more times than it is wrong.

1. **Live performance is not an indication of future performance**. Similarly, even when a strategy has delivered a certain performance trading live, there is no guarantee of what performance the strategy may achieve in the future. Live performance results are certainly more valuable than backtesting or simulated performance but still can't predict the future.

1. **Strategies lose effectiveness with time**. How much time? No-one knows. Markets evolve, change, go through different cycles, both long and short-term, some of which may not have been tested. That is true for all markets, let alone crypto, which is a very young market, still in its very early stages. Crypto markets change dramatically fast, as the market cap increases, more pro-traders enter the space, more smart money pours larger capitals, more bots take over operations of ever-increasing volumes, more complexity is added to the ecosystem with the availability of derivative markets, and so on.

## May I configure the open-source strategies to my liking?

Definitely. You should!

A live trading session has a few [parameters](suite-parameters.html) that you must configure before running it.

And you may also review, test, and modify the rules within the trading system.