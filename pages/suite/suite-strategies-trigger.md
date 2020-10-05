---
title:  "Trading Strategies &mdash; Trigger Stage"
summary: "The trigger stage features the definitions of the Trigger-On Event, Trigger-Off Event, and Take Position Event."
sidebar: suite_sidebar
permalink: suite-strategies-trigger.html
toc: false
---


{% include /trading_system/trigger-stage.md heading="" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}


<table class='hierarchyTable'><thead><tr><th><a href='#trigger-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger_stage}}'><img src='images/icons/nodes/png50/trigger-stage.png' /><br />Trigger Stage</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#trigger-on-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger-on_event}}'><img src='images/icons/nodes/png50/trigger-on-event.png' /><br />Trigger-On Event</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#trigger-off-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger-off_event}}'><img src='images/icons/nodes/png50/trigger-off-event.png' /><br />Trigger-Off Event</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#take-position-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.take_position_event}}'><img src='images/icons/nodes/png50/take-position-event.png' /><br />Take Position Event</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /trading_system/trigger-on-event.md heading="###" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/trigger-off-event.md heading="###" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/take-position-event.md heading="###" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include tip.html content="Events are triggered by situations, which are defined by conditions. The combination of conditions and situations make up a good part of the rules of a trading strategy. Both are explained in the <a href='suite-situations-conditions-formulas'>situations, conditions, and formulas</a> page." %}