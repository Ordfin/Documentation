<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Network Node" %}
{% assign definition = site.data.network.network_node %}
{% assign preposition = "a" %}
{% assign plural = "s" %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.more == "yes" and include.heading == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.heading != "" and include.heading != "more" %}
{{include.heading}} {{title}}
{% endif %}

{% if include.icon != "no" %} 

{% if include.table == "yes" and include.icon != "no" %}
<table class='definitionTable'><tr><td>
{% endif %}

<img src='images/icons/nodes/png{{include.icon}}/{{ title | downcase | replace: " ", "-" }}.png' />

{% if include.table == "yes" and include.icon != "no" %}
</td><td>
{% endif %}

{% endif %}

{% if include.definition == "bold" %}
<strong>{{ definition }}</strong>
{% else %}
{% if include.definition != "no" %}
{{ definition }}
{% endif %}
{% endif %}

{% if include.table == "yes" and include.icon != "no" %}
</td></tr></table>
{% endif %}

{% if include.more == "yes" and include.content == "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

By default, processes are set up to run locally in a network node representing your local machine. However, the system is prepared to run distributed on a network of nodes, or what we call a trading farm.

You may create unlimited network nodes and map them with different machines on a network. Each machine in the network runs an instance of the Superalgos backend, and you may control the whole network operation from a single machine, or&mdash;in general&mdash;from any machine in the network running the Superalgos frontend. To learn more about distributed setups, check the [trading farms](suite-fundamental-trading-farms-concepts.html) pages.

The easiest and fastest way to set up a network node is using the *Install Market* function available on markets defined in the Crypto Ecosystem hierarchy, under the exchange markets node. This function adds data mining tasks for all sensor and indicator bots shipping with the system, backtesting and live trading tasks for trading systems shipping with the system, including the data storage definitions for both, and also creates the corresponding dashboards and charts in the Charting Space hierarchy. You may learn more about this function in the [how to install a new market](suite-how-to-install-a-new-market.html) page.

If you need finer control over the operation you wish to deploy on the network, then you may use the individual functions available under each section of the hierarchy under the network node.

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about adding {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}}

<!--------------------------------------------- ADDING starts -->

To add a network node, select *Add Network Node* on the *Superalgos Network* node menu. A network node is added along with the basic structure of nodes to set up a node.

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure* on the menu to access the configuration.

```json
{ 
"host": "localhost", 
"webPort": "34248", 
"webSocketsPort": "18041"
}
```

* ```host``` is the machine or hardware represented by the network node. The default parameter is ```localhost```, but if you intend to access the backend services of this node from a remote computer, then you must change ```localhost``` for the IP Address of the machine on which the node is running, for example, to ```147.0.0.1```.

* ```webPort``` is the port used by the Web Server, at this stage ```34248```.

* ```webSocketsPort``` is the port used by the system to communicate over the local area network, by default set at ```18041```.

<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}