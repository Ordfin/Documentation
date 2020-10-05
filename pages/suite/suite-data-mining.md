---
title:  Data Mining
summary: "The data mining structure of nodes controls the bots you need to run to extract data from exchanges and process it into indicators or technical studies."
sidebar: suite_sidebar
permalink: suite-data-mining.html
toc: false
---

{% include /network/data-mining.md heading="" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

<table class='hierarchyTable'><thead><tr><th><a href='#data-mining' data-toggle='tooltip' data-original-title='{{site.data.network.data_mining}}'><img src='images/icons/nodes/png50/data-mining.png' /><br />Data Mining</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-data-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_data_tasks}}'><img src='images/icons/nodes/png50/exchange-data-tasks.png' /><br />Exchange Data Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-data-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.market_data_tasks}}'><img src='images/icons/nodes/png50/market-data-tasks.png' /><br />Market Data Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#data-mine-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.data_mine_tasks}}'><img src='images/icons/nodes/png50/data-mine-tasks.png' /><br />Data Mine Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task-manager' data-toggle='tooltip' data-original-title='{{site.data.network.task_manager}}'><img src='images/icons/nodes/png50/task-manager.png' /><br />Task Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task' data-toggle='tooltip' data-original-title='{{site.data.network.task}}'><img src='images/icons/nodes/png50/task.png' /><br />Task</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#sensor-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.sensor_bot_instance}}'><img src='images/icons/nodes/png50/sensor-bot-instance.png' /><br />Sensor Bot Instance</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#sensor-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.sensor_process_instance}}'><img src='images/icons/nodes/png50/sensor-process-instance.png' /><br />Sensor Process Instance</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#indicator-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.indicator_bot_instance}}'><img src='images/icons/nodes/png50/indicator-bot-instance.png' /><br />Indicator Bot Instance</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#indicator-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.indicator_process_instance}}'><img src='images/icons/nodes/png50/indicator-process-instance.png' /><br />Indicator Process Instance</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#time-frames-filter' data-toggle='tooltip' data-original-title='{{site.data.network.time_frames_filter}}'><img src='images/icons/nodes/png50/time-frames-filter.png' /><br />Time Frames Filter</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#key-reference' data-toggle='tooltip' data-original-title='{{site.data.network.key_reference}}'><img src='images/icons/nodes/png50/key-reference.png' /><br />Key Reference</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /network/exchange-data-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/market-data-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/data-mine-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/task-manager.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/task.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/sensor-bot-instance.md heading="##" icon="150" adding="####" configuring="####" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/sensor-process-instance.md heading="####" icon="50" adding="#####" configuring="" starting="#####" content="yes" definition="yes" table="yes" more="yes"%}

{% include /network/indicator-bot-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/indicator-process-instance.md heading="####" icon="50" adding="#####" configuring="" starting="#####" content="yes" definition="yes" table="yes" more="yes"%}

{% include /network/time-frames-filter.md heading="##" icon="150" adding="####" configuring="####" starting="" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/key-reference.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="yes"%}


