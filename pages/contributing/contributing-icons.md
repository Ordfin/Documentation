---
title:  Contributing Icons
summary: Fork the Graphics repository, coordinate with the design team, work locally, share your progress, and submit your contributions when you are done!
sidebar: contributing_sidebar
permalink: contributing-icons.html
---

Superalgos visual interface features hundreds of icons and many more icons are required with each release, as new functionality is rolled out. Designing icons is a great way to leave your mark, as it puts your work directly in front of every user!

{% include important.html content="All contributions are subject to the terms of the <a href='https://github.com/Superalgos/Superalgos/blob/master/LICENSE' rel='nofollow' rel='noopener' target='_blank'>Apache License 2.0</a>. " %}

This is what you need to know to start contributing.

## Attribution

The original set of icons is a *web design pack* made by <a href='https://www.flaticon.com/authors/freepik' rel='nofollow' rel='noopener' target='_blank'>Freepik</a> and is available at <a href='https://www.flaticon.com/packs/web-design-10?k=1596385749125' rel='nofollow' rel='noopener' target='_blank'>flaticon.com</a>.

The rest of the series is inspired in the design style developed for the original set. 

The authorship of each icon not in the original series is indicated by the contributor's identity in the <a href='https://github.com/Superalgos/Graphics' rel='nofollow' rel='noopener' target='_blank'>Graphics repository</a>.

## Coordination

Designers coordinate their work over the <a href='https://t.me/superalgosuxui' rel='nofollow' rel='noopener' target='_blank'>Superalgos UX/UI Design</a> Telegram group. 

Please, join the group, introduce yourself, and get up to speed with the group currently doing the work. The main coordination task is keeping track of who will block what part of the pending work so that we don't duplicate efforts.

## Design Brief

### Color Palette

We use a restricted palette, with a playful selection of colors that work well both over a black background&mdash;on the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.design_space}}">design space</a>&mdash;and a white background&mdash;on the documentation site and the <a data-toggle="tooltip" data-original-title="{{site.data.charting_space.charting_space}}">charting space</a>.

![color-palette](images/icons/color-palette/png512/color-palette.png)

### Look & Feel

Superalgos is a large and rather complex system aimed at all sorts of user profiles. The ultimate goal of the project is to massify the use of the system, thus, Superalgos should be accessible to a wide user base: from professional traders to crypto-holders, and everything in between.

The choice of a playful look and feel responds to the underlying strategy to achieve massification: to gamify the user experience, in the sense that building profitable trading strategies may be turned into a strategy game in and of itself.

We choose to depart from realistic or corporate styles and lean towards cartoonish, joyful, and spirited ideas instead.

The following are examples of icons we like among the existing batch:

| charting space | data mine | crypto exchange | record property | trigger on |
| :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png150/charting-space.png) | ![color-palette](images/icons/nodes/png150/data-mine.png) | ![color-palette](images/icons/nodes/png150/crypto-exchange.png) | ![color-palette](images/icons/nodes/png150/record-property.png)| ![color-palette](images/icons/nodes/png150/trigger-on-event.png) |

The group above features icons representing ideas that directly or indirectly remind of the underlying concept they represent. However, icons may also be abstract, and have a loose or no obvious connection with the concept being represented:

| phase | situation | slippage | strategy | backtesting session |
| :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png150/phase.png) | ![color-palette](images/icons/nodes/png150/situation.png) | ![color-palette](images/icons/nodes/png150/slippage.png) | ![color-palette](images/icons/nodes/png150/strategy.png)| ![color-palette](images/icons/nodes/png150/backtesting-session.png) |

Sometimes, the relationship between the drawing and the actual concept being represented may be figurative, such as when the icon illustrates an alternative interpretation of the word:

| open stage | close stage | formula | plotter module | procedure initialization |
| :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png150/open-stage.png) | ![color-palette](images/icons/nodes/png150/close-stage.png) | ![color-palette](images/icons/nodes/png150/formula.png) | ![color-palette](images/icons/nodes/png150/plotter-module.png)| ![color-palette](images/icons/nodes/png150/procedure-initialization.png) |

### Underperformers

Occasionally, we have produced icons that fail to maintain the playful, graceful, and light-spirited feel of the best ones. We hope to be able to&mdash;eventually&mdash;replace them with better versions. Such is the case of the following few, which we accompany with a brief note on what seem to not work so well in each case:

| close-execution | production environment | initial take profit | trigger stage | plotter panel |
| :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png150/close-execution.png) | ![color-palette](images/icons/nodes/png150/production-environment.png) | ![color-palette](images/icons/nodes/png150/initial-take-profit.png) | ![color-palette](images/icons/nodes/png150/trigger-stage.png)| ![color-palette](images/icons/nodes/png150/plotter-panel.png) |
| The idea is that the letter X hinted by the crossing lines represents the word *eXecution*, and that the arrows pointing outwards represent the *exit* of the position. However, the icon feels too simple and void of character. | This is the opposite case: the icon tries hard to represent the idea of monetary exchange, as opposed to a test, creating an overly complex representation that looks too busy. | The idea of a hand taking the profit seems good, but the execution departs from the design style with the drawing of the hand leaning towards a realistic depiction instead of a cartoonish one. | This is a similar case to the previous one: the idea of using a firearm trigger to represent the concept of the trigger stage seems good, but the execution seems to depart from the cartoonish style. | The drawing merges the idea of the outer lid of an electrical panel with the existing representation of a plotter. The result feels a bit forced. The integration of the two ideas may be improved. |

### Design Tips

#### Split Colors

A stylistic resource that we favour and that helps to create depth and richness in the composition is the split in half of the drawing, giving each half a slight shift in color, using adjacent colors in the palette on each half:

| execution algorithm | scripts library | super action | polygon condition | super scripts |
| :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png150/execution-algorithm.png) | ![color-palette](images/icons/nodes/png150/scripts-library.png) | ![color-palette](images/icons/nodes/png150/super-action.png) | ![color-palette](images/icons/nodes/png150/polygon-condition.png)| ![color-palette](images/icons/nodes/png150/super-scripts.png) |

#### Non-Realistic Proportions

It's one of the characteristics of the cartoonish look and feel:

![color-palette](images/icons/nodes/png150/workspace.png)

#### Rounded Corners

Again, one other typical characteristic:

![color-palette](images/icons/nodes/png150/shapes.png)

#### Level of Detail

It is important to notice that icons must work well when used in small sizes. The documentation uses the 150 x 150 px size mostly (the examples above). It also uses the 50 x 50 px version extensibly:

| charting space | data mine | crypto exchange | record property | trigger on | execution algorithm | scripts library | super action | polygon condition | super scripts |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![color-palette](images/icons/nodes/png50/charting-space.png) | ![color-palette](images/icons/nodes/png50/data-mine.png) | ![color-palette](images/icons/nodes/png50/crypto-exchange.png) | ![color-palette](images/icons/nodes/png50/record-property.png)| ![color-palette](images/icons/nodes/png50/trigger-on-event.png) | ![color-palette](images/icons/nodes/png50/execution-algorithm.png) | ![color-palette](images/icons/nodes/png50/scripts-library.png) | ![color-palette](images/icons/nodes/png50/super-action.png) | ![color-palette](images/icons/nodes/png50/polygon-condition.png)| ![color-palette](images/icons/nodes/png50/super-scripts.png) |

Occasionally, the system may use smaller sizes, and&mdash;exeptionally&mdash;the documentation may use a rare 12 x 12 px version such as {% include inline_image.html file="icons/menu/png12/expand.png" %} or {% include inline_image.html file="icons/menu/png12/collapse.png" %} for inline images. This means that detail beyond the level featured in the existing samples is undesirable, as it tends to produce visual noise and alias effects when reduced in size.

{% include tip.html content="As a rule of thumb, try to avoid lines or shapes smaller than 20 pt in the original composition." %}

#### Full Size and Centered

Ideally, icons occupy the whole canvas, either in the horizontal or vertical dimension, or both. Save from exceptions, this is a requirement, as any departure from this standard is quite noticeable.

### Technical Requirements

Icons are created and maintained in vectors, in the SVG format, but are used in the system and documentation&mdash;the current two main use cases&mdash;as raster images in the PNG format, for technical reasons.

#### Vector Source Files

| Criterion | Details |
| :--- | :--- |
| Format | ```SVG``` |
| Width | ```512 pt``` |
| Height | ```512 pt``` |
| Extension | ```svg (lower-case)``` |

Save for a few exceptions, all icons are squared.

#### Raster Images

| Criterion | Details |
| :--- | :--- |
| Format | ```PNG``` |
| Application Size | ```512 x 512 px``` |
| Documentation Sizes | ```150 x 150 px, 50 x 50 px, and 12 x 12 px``` |
| Color Depth | ```24 bits (PNG-24)``` |
| Transparency | ```Yes``` |
| Interlaced | ```No``` |
| Extension | ```png (lower-case)``` |

#### Naming Convention

Files inherit the name of the node, asset, exchange, or whatever the icon represents, and are named in lower case, each word separated by a hyphen, and with a lower-case extension. For example, the PNG file for the Initial Take Profit node is ```initial-take-profit.png```.

### Repository Data Structure

* ```assets```: icons representing the logo of cryptocurrencies.

* ```color-palette```: a single SVG file featuring the design brief's color palette.

* ```exchanges```:icons representing the logo of cryptocurrency exchanges.

* ```layers```: icons representing the type of content displayed by indicator's layers.

* ```menu```: icons representing controls and features accessed through node's menu.

* ```mouse```: icons representing mouse and keyboard controls used by screen video capture features.

* ```replaced```: icons not currently in use, which may at some point have been replaced by new ones.

* ```various```: icons of unusual sizes and format used for specific purpouses.

## Getting Started

### 1. Get Familiar with GitHub

A basic understanding of GitHub is required to participate in the collaboration. GitHub administers file versions, keeps a historic record of who made what changes, and properly attributes authorship.

If you are not familiar with Git in general and GitHub in particular, we suggest using <a href='https://desktop.github.com/' rel='nofollow' rel='noopener' target='_blank'>GitHub Desktop</a>. Go through a <a href='https://www.youtube.com/results?search_query=github+basics' rel='nofollow' rel='noopener' target='_blank'>a few basic GitHub tutorials</a>, as well as a few <a href='https://www.youtube.com/results?search_query=basic+github+desktop+tutorial' rel='nofollow' rel='noopener' target='_blank'>tutorials on GitHub Desktop</a>.

{% include important.html content="You will need an account with GitHub to participate in the collaboration." %}

{% include note.html content="GitHub is a great tool to learn, even if you haven't needed it so far, as it is the top resource for maintaining open-source projects and large collaboration." %}

### 2. Fork the Graphics Repository

The <a href='https://github.com/Superalgos/Graphics' rel='nofollow' rel='noopener' target='_blank'>Graphics repository</a> holds all the icons, including source vector files and PNG files in different sizes. The repo is organized by ```type of icon > file format / size```.

{% include important.html content="Do not *clone* or *download* the repository. It is important that you *fork* it instead. When you fork the repository, GitHub creates a fork (a live copy) of the repository under your GitHub account. This allows GitHub to keep track of your fork and allows you to maintain your fork in sync with the upstream (original) repository, as well as submitting your contributions, via *Pull Requests* (PR)." %}

Once you have an account with GitHub, simply click the *Fork* button while standing on the <a href='https://github.com/Superalgos/Graphics' rel='nofollow' rel='noopener' target='_blank'>Graphics repository</a> page.

{% include image.html file='contributing/icons-fork-repository.png' url='yes' max-width='100' caption='Find the Fork button on the top-right corner of the screen.' %}

Once your fork is up and running under your GitHub account, then you will *clone* your fork to your local machine (using GitHub Desktop if you choose to), so that you may work on the files locally.

### 3. Clone the ```develop``` Branch of Your Fork

The actual work is done in your machine, on a clone of your fork, more precisely on the ```develop``` branch. Use GitHub Desktop to make the clone, so that you may use the app to maintain both clone and fork in sync. Remember, do not clone the original Superalgos Grphics repository; you must clone your fork instead, and the ```develop``` branch in particular!

### 4. Join the Design Group

The <a href='https://t.me/superalgosuxui' rel='nofollow' rel='noopener' target='_blank'>Superalgos UX/UI Design</a> group is where you will coordinate with other designers which icons you will work on, so as not to duplicate efforts. Once you have a clear understanding of the task at hand, you may start creating!

## Workflow

### 1. Work in Your Local Machine

You will produce all the work locally, using your preferred vector design software package. 

You may always choose to create on top of, or use elements from, existing icons.

Feel free to start your designs using the ```color-palette.svg``` file as a template. The file will provide you with the exact canvas size/format and colors to work with.

{% include tip.html content="Remember to always rename the file as soon as you open it, saving it in the proper folder before you continue, to avoid accidentally rewriting the original file with your work. If you ever make a mistake and rewrite an existing file in your local clone, you may always choose to stash (discard) the changes in GitHub Desktop and pull the data from your fork to update your local clone. If you ever get to commit undesired changes to your fork, then you may choose to re-synchronize the fork with the upstream repository via a Pull Request (PR)." %}

### 2. Share Your Progress

Feel free to discuss ideas and share your progress with other designers in the group. We are all happy to offer feedback, especially during your first few contributions.

### 3. Produce the Required Files and Update You Fork

Once you are happy with the icon design, export each of the required sizes to the corresponding folder. Each type of icon requires certain sizes of PNG images. You can tell which sizes are required by the name of the folders that exist for the specific kind of icon you are creating. 

{% include tip.html content="Remember to follow the [naming convention](#naming-convention)!" %}

Once all files are ready and double-checked, commit the changes and push them to your fork (using GitHub Desktop).

### 4. Submit a Pull Request to the ```develop``` branch of the Graphics Repository

Then, go to your fork on github.com and submit a PR to the ```develop``` branch of the upstream repository.

The maintainer of the repository will review the work and respond to your PR accordingly. If everything seems OK, your PR will be merged. Otherwise, you will get an answer from the maintainer.
