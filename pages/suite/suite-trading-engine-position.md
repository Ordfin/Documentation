---
title:  Position
summary: "Keep track of all the details concerning a position. On this page: Entry Target Rate, Exit Target Rate, Stop Loss, Stop Loss Phase, Stop Loss Position, Take Profit, Take Profit Phase, Take Profit Position."
sidebar: suite_sidebar
permalink: suite-trading-engine-position.html
toc: false
---

{% include /trading_engine/position.md more="no" heading="" icon="150" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}

* a few more concepts inherent to positions such as entry and exit target rates, entry and exit sizes accounted for each asset, and stop loss and take profit targets&mdash;all of these covered below.

## Entry and Exit Target Rates

{% include /trading_engine/entry-target-rate.md more="no" heading="" icon="50" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/exit-target-rate.md more="no" heading="" icon="50" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}

## Entry and Exit Target Sizes

{% include /trading_engine/entry-target-size.md more="no" heading="" icon="50" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/exit-target-size.md more="no" heading="" icon="50" definition="bold" table="yes" content="yes" adding="" configuring="" starting="" %}


{% include /trading_engine/stop-loss.md more="no" heading="##" icon="50" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/stop-loss-phase.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/stop-loss-position.md more="no" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include /trading_engine/take-profit.md more="no" heading="##" icon="50" definition="bold" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/take-profit-phase.md more="no" heading="####" icon="50" definition="yes" table="yes" content="no" adding="" configuring="" starting="" %}

{% include /trading_engine/take-profit-position.md more="no" heading="####" icon="50" definition="yes" table="yes" content="yes" adding="" configuring="" starting="" %}

{% include note.html content="Find below the data structure under the position node, including concepts covered in detail elsewhere. Hover your mouse over a node for a tooltip definition." %}

<table class='hierarchyTable'><thead><tr><th><a href='#position' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position}}'><img src='images/icons/nodes/png50/position.png' /><br />Position</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#serial-number' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.serial_number}}'><img src='images/icons/nodes/png50/serial-number.png' /><br />Serial Number</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#identifier' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.identifier}}'><img src='images/icons/nodes/png50/identifier.png' /><br />Identifier</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#begin' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.begin}}'><img src='images/icons/nodes/png50/begin.png' /><br />Begin</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#end' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.end}}'><img src='images/icons/nodes/png50/end.png' /><br />End</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#begin-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.begin_rate}}'><img src='images/icons/nodes/png50/begin-rate.png' /><br />Begin Rate</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#end-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.end_rate}}'><img src='images/icons/nodes/png50/end-rate.png' /><br />End Rate</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#status' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.status}}'><img src='images/icons/nodes/png50/status.png' /><br />Status</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#exit-type' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.exit_type}}'><img src='images/icons/nodes/png50/exit-type.png' /><br />Exit Type</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#situation-name' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.situation_name}}'><img src='images/icons/nodes/png50/situation-name.png' /><br />Situation Name</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#entry-target-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.entry_target_rate}}'><img src='images/icons/nodes/png50/entry-target-rate.png' /><br />Entry Target Rate</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#exit-target-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.exit_target_rate}}'><img src='images/icons/nodes/png50/exit-target-rate.png' /><br />Exit Target Rate</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#stop-loss' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.stop_loss}}'><img src='images/icons/nodes/png50/stop-loss.png' /><br />Stop Loss</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#take-profit' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.take_profit}}'><img src='images/icons/nodes/png50/take-profit.png' /><br />Take Profit</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#position-counters' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position_counters}}'><img src='images/icons/nodes/png50/position-counters.png' /><br />Position Counters</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#position-statistics' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position_statistics}}'><img src='images/icons/nodes/png50/position-statistics.png' /><br />Position Statistics</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#position-base-asset' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position_base_asset}}'><img src='images/icons/nodes/png50/position-base-asset.png' /><br />Position Base Asset</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#position-quoted-asset' data-toggle='tooltip' data-original-title='{{site.data.trading_engine.position_quoted_asset}}'><img src='images/icons/nodes/png50/position-quoted-asset.png' /><br />Position Quoted Asset</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>
