---
title:  "How to Build an Indicator: Trading Bot Dependencies"
summary: Before you may use the new indicator on a trading system, you must create the corresponding dependencies on the Low frequency trading bot.
sidebar: suite_sidebar
permalink: suite-how-to-build-an-indicator-05-trading-bot-dependencies.html
---

To call the properties of a new indicator from within the definitions of a trading system, you first need to let the *Low Frequency* trading bot that your data mine exists. To do this, you need to add the corresponding data dependencies at the trading bot's *Trading* process definitions.

{% include image.html file='how-to/build-an-indicator-step-5.gif' url='yes' max-width='100' caption='Add your data mine as a data mine dependency.' %}

{% include important.html content="Because the Low Frequency trading bot is a plugin, the modifications you make to the hierarchy do not persist after closing the frontend app. The workaround is to take a backup of the hierarchy after making the modifications, and replace the plugin file with the backup. Should you decide to [contribute your data mine](contributing-indicators.html) to the project, we will incorporate the dependencies in the official release." %}