---
title:  Timeline Charts
summary: "Timeline charts allow setting up customized charts, fitting specific data products, and potentially their own rate and time frame scales."
sidebar: suite_sidebar
permalink: suite-timeline-charts.html
toc: false
---

{% include /charting_space/timeline-chart.md heading="" icon="150" adding="####" configuring="" charts="" content="yes" definition="bold" table="yes" more="yes"%}

Layers in a <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.timeline_chart}}">timeline chart</a> are <a data-toggle="tooltip" data-original-title="{{site.data.concepts.reference}}">references</a> to <a data-toggle="tooltip" data-original-title="{{site.data.concepts.data_product}}">data products</a> offered by <a data-toggle="tooltip" data-original-title="{{site.data.concepts.bot}}">bots</a> in different <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.data_mine}}">data mines</a> and <a data-toggle="tooltip" data-original-title="{{site.data.trading_mine.trading_mine}}">trading mines</a>. The <a data-toggle="tooltip" data-original-title="{{site.data.concepts.dataset}}">datasets</a> compilled in data products are read by <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.plotter}}">plotters</a>, which render a graphic interpretation of the data on the <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.charting_space}}">charting space</a>.

These data products may also be consumed by <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_strategy}}">strategies</a>, using a specific syntax to formulate <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.situation}}">situations</a>, <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.condition}}">conditions</a>, and <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.formula}}">formulas</a>.

{% include tip.html content="Indicators and plotters may be created quite easily and with very little programming skills required, using the features of data mines." %}

<table class='hierarchyTable'><thead><tr><th><a href='#timeline-chart' data-toggle='tooltip' data-original-title='{{site.data.charting_system.timeline_chart}}'><img src='images/icons/nodes/png50/timeline-chart.png' /><br />Timeline Chart</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#rate-scale' data-toggle='tooltip' data-original-title='{{site.data.charting_system.rate_scale}}'><img src='images/icons/nodes/png50/rate-scale.png' /><br />Rate Scale</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#time-frame-scale' data-toggle='tooltip' data-original-title='{{site.data.charting_system.time_frame_scale}}'><img src='images/icons/nodes/png50/time-frame-scale.png' /><br />Time Frame Scale</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#layers-manager' data-toggle='tooltip' data-original-title='{{site.data.charting_system.layers_manager}}'><img src='images/icons/nodes/png50/layers-manager.png' /><br />Layers Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#layer' data-toggle='tooltip' data-original-title='{{site.data.charting_system.layer}}'><img src='images/icons/nodes/png50/layer.png' /><br />Layer</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include note.html content="Timeline charts may have their own rate and time frame scales. To learn about scales, please see the [scales](suite-scales.html) page." %}

{% include /charting_space/layers-manager.md heading="##" icon="150" adding="####" configuring="" charts="" content="yes" definition="bold" table="yes" more="yes"%}

{% include /charting_space/layer.md heading="##" icon="50" adding="####" configuring="####" charts="####" content="yes" definition="yes" table="yes" more="yes"%}
