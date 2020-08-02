<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Viewport" %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.content == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn about the {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

When you open the <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.charting_space}}">charting space</a>, you are actually looking at it through a <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.viewport}}">viewport</a>. You may see several charts, depending on the setup of your current <a data-toggle="tooltip" data-original-title="{{site.data.concepts.workspace}}">workspace</a>.

**1. To move around the viewport**, right-click and drag. You may also use the wheel of the mouse to zoom in and out, and the keyboard as follows:

1. <kbd>Shift</kbd> + <kbd>&#8592;</kbd> to pan to the left.
1. <kbd>Shift</kbd> + <kbd>&#8594;</kbd> to pan to the right.
1. <kbd>Shift</kbd> + <kbd>&#8593;</kbd> to pan upwards.
1. <kbd>Shift</kbd> + <kbd>&#8595;</kbd> to pan downwards.

{% include image.html file='interface/viewport-00.gif' url='yes' max-width='100' caption='Right-click and drag to move the viewport and zoom in and out using the whell of the mouse.' %}

{% include note.html content="Notice how the viewport navigation resembles the navigation in *Google Maps*. You zoom out for the big picture. You zoom in for a closer view of any particular chart to get the details. Keep zooming in and you get the immersive experience... the *street view* of the market." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.extended == "more" and include.content != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.extended != "no" %}

<!--------------------------------------------- EXTENDED starts -->

{% include /charting_space/viewport.md heading="more" icon="150" adding="" configuring="" charts="" content="yes" definition="bold" table="yes" more="yes"%}

<!--------------------------------------------- EXTENDED ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}