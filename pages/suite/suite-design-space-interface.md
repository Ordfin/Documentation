---
title:  "Design Space Interface"
summary: "Navigation allows the use of mouse and keyboard. You may also create shortcuts. Node's menu allows controlling the physics of the environment and provides backup, share and clone functions."
sidebar: suite_sidebar
permalink: suite-design-space-interface.html
---

## Accessing the Design Space

{% include /reuse/switch-from-charting-space-to-design-space.md content="yes" extended="no" %}

## Navigation

Left-click on the black background and drag to move around the workspace.

You may also use the following key combinations on your keyboard:

1. <kbd>Ctrl or &#8984;</kbd> + <kbd>&#8592;</kbd> to pan to the left.
1. <kbd>Ctrl or &#8984;</kbd> + <kbd>&#8594;</kbd> to pan to the right.
1. <kbd>Ctrl or &#8984;</kbd> + <kbd>&#8593;</kbd> to pan upwards.
1. <kbd>Ctrl or &#8984;</kbd> + <kbd>&#8595;</kbd> to pan downwards.

## Node Shortcuts

You may define shortcuts for frequently-used nodes with the following procedure:

1. Hover the mouse pointer over the target node until the menu opens up. This puts the node *in focus*.
1. Click <kbd>Ctrl or &#8984;</kbd> + <kbd>Alt</kbd> + your preferred key to assign the shortcut.
1. A sign will appear below the node confirming the assignation of the shortcut.

{% include image.html file='design-space/design-space-interface-00-shortcuts.gif' url='yes' max-width='100' caption='Custom shortcuts help you personalize your navigation.' %}

Repeat the same procedure to remove a shortcut.

{% include note.html content="When attempting to assign a shortcut with a keyboard combination that is already in use, the system will notify of the issue. If you insist by hitting the same keyboard combination two more times, the system will assign the shortcut as expected." %}

## Node's Menu

Hovering the mouse pointer over nodes causes a menu to pop up. In this situation, the node is *in focus*.

### Arrangement Features

The design space functions under the paradigm of a *self-organizing workspace* in which nodes tend to find their place guided by certain laws of physics, and constrained by their chain relationships.

This self-organizing paradigm saves users the effort of maintaining the arrangement of nodes in a logical manner, in particular when manipulating or creating new nodes.

However, there will be times in which you will want to override this self-organizing nature. The following menu options are tools that will help you manipulate the arrangement of nodes, overriding the physics that affect their floating nature.

| Icon | Pinned / Unpinned &mdash; Click to cycle through the different options. |
| --- | --- |
| ![pinned](images/icons/menu/png50/pinned.png) | The node is pinned to the workspace on a specific ```[x, y]``` coordinate. This status overrides any other setting affecting the node's mobility. Only direct user action by clicking and dragging may move a pinned node. |
| ![unpinned](images/icons/menu/png50/unpinned.png) | When a node is unpinned, it is free to be affected by other settings, or find its place floating on the workspace. |


| Icon | Freeze / Unfreeze &mdash; Click to cycle through the different options. |
| --- | --- |
| ![freeze](images/icons/menu/png50/freeze.png) | Clicking the *freeze* option freezes the node's chain connections with its parent and offspring. Connecting lines turn blue. If you freeze the head node of a hierarchy, then the whole hierarchy is frozen. Freezing node structures is effective only when nodes are loose, that is, when they are not affected by angle or distance settings and are unpinned. In such cases, freezing releases CPU resources, as the system stops calculating node's positions and status. | 
| ![unfreeze](images/icons/menu/png50/unfreeze.png) |  Clicking the *unfreeze* option unfreezes connections. If you click the option to unfreeze a node and the node does not change its status, it may be because a higher node in the hierarchy is still frozen. | 

| Icon | Collapse / Expand &mdash; Click to cycle through the different options. |
| --- | --- |
| ![collapse](images/icons/menu/png50/collapse.png) | Clicking the _minus_ button collapses the structure, hiding offspring nodes. This also has the effect of releasing CPU resources as the system stops calculating their position and status. In general, it is good practice to keep hierarchies closed when not being actively worked on. | 
| ![expand](images/icons/menu/png50/expand.png) | Clicking the _plus_ button expands the structure of offspring nodes. | 

| Icon | Angle to Parent &mdash; Click to cycle through the different options. |
| --- | --- |
| ![00](images/icons/menu/png50/angle-to-parent-000.png) | The *rotational symmetry* is disabled and the node may take any position. The connection line with its parent is yellow.| 
| ![36](images/icons/menu/png50/angle-to-parent-360.png) | The node is locked to a *rotational symmetry* around its parent node, with sibling nodes using the same setting. The symmetry spans **360 degrees**, and the connection line with the parent node turns orange.| 
| ![180](images/icons/menu/png50/angle-to-parent-180.png) | The slot of the symmetry around its parent node is limited to **180 degrees**, and the connection line remains orange.| 
| ![90](images/icons/menu/png50/angle-to-parent-090.png) | The slot of the symmetry around its parent node is limited to **90 degrees**, and the connection line remains orange.| 
| ![45](images/icons/menu/png50/angle-to-parent-045.png) | The slot of the symmetry around its parent node is limited to **45 degrees**, and the connection line remains orange.| 

| Icon | Distance to Parent &mdash; Click to cycle through the different options. |
| --- | --- |
| ![000](images/icons/menu/png50/distance-to-parent-000.png) | The distance setting is dissabled and the node may assume any distance to its parent. | 
| ![025](images/icons/menu/png50/distance-to-parent-025.png) | The node is locked to a distance from its parent node that is **0.25X** of the distance from the parent to its parent. | 
| ![050](images/icons/menu/png50/distance-to-parent-050.png) | The node is locked to **0.5X** of the distance. | 
| ![100](images/icons/menu/png50/distance-to-parent-100.png) | The node is locked to **1X** of the distance. | 
| ![150](images/icons/menu/png50/distance-to-parent-150.png) | The node is locked to **1.5X** of the distance. | 
| ![200](images/icons/menu/png50/distance-to-parent-200.png) | The node is locked to **2X** of the distance. | 


| Icon | Arrangement Style &mdash; Click to cycle through the different options. |
| --- | --- |
| ![concave](images/icons/menu/png50/arrangement-concave.png) | The node adopts a slot on a circumsference around its parent node. In the icon's graphic, the orange dot represents the parent node, and the blue dots represent the node adopting the specific arrangement style. | 
| ![convex](images/icons/menu/png50/arrangement-convex.png) | The node adopts a slot on a convex curve away from its parent node . | 
| ![vertical-right](images/icons/menu/png50/arrangement-vertical-right.png) | The node adopts a slot on a vertical line to the right of its parent node. | 
| ![vertical-left](images/icons/menu/png50/arrangement-vertical-left.png) | The node adopts a slot on a vertical line to the left of its parent node.  | 
| ![horizontal-bottom](images/icons/menu/png50/arrangement-horizontal-bottom.png) | The node adopts a slot on a horizontal line below its parent node.  | 
| ![horizontal-top](images/icons/menu/png50/arrangement-horizontal-top.png) | The node adopts a slot on a vertical line below its parent node. | 

### Relationships and References

| Icon | Action |
| --- | --- |
| ![detach](images/icons/menu/png50/detach.png) | **Detach**: Breaks the parent-offspring relationship that keeps the node attached to its parent. Once detached, the node is no longer computed as part of the hierarchy it was attached to. Learn more about [how to attach nodes](suite-how-to-detach-and-attach-nodes.html) |
| ![delink](images/icons/menu/png50/delink.png) | **Delink**: Removes the reference that may have existed between the node and a second node. Learn more about [how to establish references](suite-how-to-remove-and-establish-references). |


### Productivity Features

| Icon | Action |
| --- | --- |
| ![menu-backup](images/icons/menu/png50/backup.png) | **Backup**: Downloads a JSON file with the data structure and references concerning the particular node and the structure of offspring nodes in the hierarchy. Use this feature to save your entire workspace or any particular structure of nodes within your workspace so that you may later restore the information, including all references, should you need to. For your reference, the file downloaded is named ```Backup``` followed by the name of the node you are backing up. Learn more about [the nuances of backups](suite-backups.html). |
| ![clone](images/icons/menu/png50/clone.png) | **Clone**: Downloads a JSON file containing information similar to a backup. The main difference is that the feature is built to facilitate the production of identical copies of any particular structure of nodes of a hierarchy, or a complete hierarchy. Use this feature to accelerate your work process when you need to replicate nodes, for example, to create multiple testing sessions. The file downloaded is named ```Clone``` followed by the name of the node you are cloning. Learn more about [the nuances of clones](suite-clones.html). |
| ![menu-share](images/icons/menu/png50/share.png) | **Share**: Downloads a JSON file containing information similar to a backup. The only difference is that no personal information is included. This is particularly important so that you do not share sensitive information accidentally, such as your API keys. Always use this function when you intend to share work. Do not share your backups. The file downloaded is named ```Share``` followed by the name of the node you are sharing. Learn more about [the nuances of shares and the potential risks](suite-shares.html) of using shared data structures from untrusted sources. |
| ![menu-delete](images/icons/menu/png50/delete.png) | **Delete**: Deletes the node and all its offspring. Confirmation in the form of an additional click is required. |
