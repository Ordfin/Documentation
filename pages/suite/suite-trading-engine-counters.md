---
title:  Counters
summary: "Keep track of how many instances of certain objects have existed in a given context. On this page: Periods, Strategies, Positions, Orders, and Days."
sidebar: suite_sidebar
permalink: suite-trading-engine-counters.html
toc: false
---

A counter keeps track of how many instances of certain objects have come to exist&mdash;or have taken a certain value&mdash;during the duration of a certain context.

For example, how many positions have been open during an episode, or how many of those positions have been hits.

Counters are kept in multiple contexts simultaneously. In particular, you will find episode counters, strategy counters, position counters, and order counters.

## Counter-specific Nodes

{% include /trading_engine/periods.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/strategies.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/positions.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/orders.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/days.md more="no" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include note.html content="Other properties typical to counters are defined elsewhere, as they are not specific to counters. Find below the different contexts in which counters are found." %}

{% include /trading_engine/episode-counters.md more="no" heading="##" icon="150" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

{% include note.html content="Hover your mouse over a node for a tooltip definition, and click to get all the details." %}

<table class='hierarchyTable'><thead><tr><th><a href='#episode-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.episode_counters}}'><img src='images/icons/nodes/png50/episode-counters.png' /><br />Episode Counters</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#periods' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.periods}}'><img src='images/icons/nodes/png50/periods.png' /><br />Periods</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#strategies' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.strategies}}'><img src='images/icons/nodes/png50/strategies.png' /><br />Strategies</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#positions' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.positions}}'><img src='images/icons/nodes/png50/positions.png' /><br />Positions</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#orders' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.orders}}'><img src='images/icons/nodes/png50/orders.png' /><br />Orders</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#hits' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.hits}}'><img src='images/icons/nodes/png50/hits.png' /><br />Hits</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#fails' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.fails}}'><img src='images/icons/nodes/png50/fails.png' /><br />Fails</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#user-defined-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.user_defined_counters}}'><img src='images/icons/nodes/png50/user-defined-counters.png' /><br />User Defined Counters</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /trading_engine/strategy-counters.md more="no" heading="##" icon="150" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

<table class='hierarchyTable'><thead><tr><th><a href='#strategy-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.strategy_counters}}'><img src='images/icons/nodes/png50/strategy-counters.png' /><br />Strategy Counters</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#periods' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.periods}}'><img src='images/icons/nodes/png50/periods.png' /><br />Periods</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /trading_engine/position-counters.md more="no" heading="##" icon="150" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

<table class='hierarchyTable'><thead><tr><th><a href='#position-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position_counters}}'><img src='images/icons/nodes/png50/position-counters.png' /><br />Position Counters</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#periods' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.periods}}'><img src='images/icons/nodes/png50/periods.png' /><br />Periods</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /trading_engine/order-counters.md more="no" heading="##" icon="150" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

<table class='hierarchyTable'><thead><tr><th><a href='#order-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.order_counters}}'><img src='images/icons/nodes/png50/order-counters.png' /><br />Order Counters</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#periods' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.periods}}'><img src='images/icons/nodes/png50/periods.png' /><br />Periods</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>
