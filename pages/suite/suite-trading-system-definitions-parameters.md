---
title:  Accessing the Trading System Definitions and Session Parameters
summary: "The trading system may access it's own definitions as well as session parameters from any formula or condition."
sidebar: suite_sidebar
permalink: suite-trading-system-definitions-parameters.html
toc: false
---

Trading system definitions and trading session parameters are accessible from within conditions and formulas, pretty much like conditions and formulas may access the values of indicators, or the trading engine hierarchy.

{% include note.html content="This is a technical feature mostly oriented to developers. Practical use cases are few for less technically oriented individuals." %}

## Syntax

To access a trading system definition, follow the path given by the trading system structure. For example, to access a condition in the take position event, use ```tradingSystem.tradingStrategies[i].triggerStage.takePositionEvent.situations[n].conditions[m].code```

To access a trading session parameter, follow use the syntax starting with ```sessionParameters``` followed by the name of the parameter, and the name of the specific parameter in the configuration. For example, to access the ```taker``` parameter in the fee structure, use ```sessionParameters.feeStructure.config.taker```.

## Example

Such a feature may be useful, for instance, to include such definitions or parameters on Telegram accouncement messages, as in:

```js
"The condition with the following code: " + tradingSystem.tradingStrategies[tradingEngine.current.strategy.index.value].triggerStage.takePositionEvent.situations[0].conditions[0].code
" triggered the take position event."
```

Notice that ```[tradingEngine.current.strategy.index.value]``` corresponds to the syntax deriving from the [trading engine](suite-trading-engine.html) hierarchy.