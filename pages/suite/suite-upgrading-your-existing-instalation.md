---
title:  How to Upgrade Your Existing Installation
summary: "Staying up to date with the latest version of the software is highly recommended. Learn how to do it and what precautions to take."
sidebar: suite_sidebar
permalink: suite-upgrading-your-existing-instalation.html
---

You should expect new releases of Superalgos to become available every few months. Release announcements are made through the <a href="https://t.me/superalgos" rel="nofollow" rel="noopener" target="_blank">Official Superalgos Telegram Announcements Channel</a>.

{% include note.html content="During this beta stage, patches may be released as frequently as several times per week. Due to their high-frequency, minor updates go unannounced. If you ever experience a malfunction, make sure you upgrade your installation to the latest version available in the <a href='https://github.com/Superalgos/Superalgos/' rel='nofollow' rel='noopener' target='_blank'>Superalgos repository</a> before [reporting a bug](suite-how-to-report-an-issue.html)." %}

## New Releases

If you are upgrading to a new official release, make sure you follow these instructions as well as those under the [All Upgrades](#all-upgrades) section.

### Read the Announcement Carefully

Read and understand the announcement explaining the changes and how they may impact your workflow. Most importantly, find out if the new version requires upgrading your workspace. 

### Check the Getting Started Guide

It would be wise to go through the potentially new *Getting Started Guide* in the documentation, as it may reveal important information.

### Back Up Your Personal Work

If the new version requires upgrading to a new workspace, you must decide which parts of your work you wish to backup so that you may restore them on the upgraded workspace (*e.g.: you may want to backup your trading systems, data mines, super scripts, specific settings or configurations such as testing sessions, time machines, and so on*). 

If there is no need to upgrade the workspace, that means that the new version of the system should work well with your existing workspace, provided that you are only one version behind.

## All Upgrades

### Back Up the Workspace

Always back up your existing workspace before switching versions. You may go back to a working version of the software in case something goes wrong with the new one, by installing the previous version of the system and restoring your old workspace from a backup file if needed.

### Put the House in Order

**1. Stop all tasks that may be running in the network hierarchy**, and close your browser. Allow a minute or two until all activity stops before closing the Console/Command Line/Terminal running the servers.

**2. Check if you have any personal files**, such as your workspace backups and so on in your ```Superalgos-master``` folders. Move them to a different location if you do, or take precautions **not** to delete them in the next step.

**3. You will keep the ```Data-Storage``` and ```My-Workspaces``` folders intact** and delete all the remaining folders within the ```Superalgos``` folder. 

{%include important.html content="You do not need to get rid of the historic market data or the workspaces you have been working with every time you upgrade your system. **Do not delete your ```Data-Storage``` or your ```My-Workspaces``` folder**." %}

### Download and Install the New Version

**1. Download the latest release** from the location advertised on the Official Announcement Channel.

{% include warning.html content="Always beware of what random people may post in open Telegram groups or forums. Patches and releases will always be made available at the ```master``` branch of the <a href='https://github.com/Superalgos/Superalgos' rel='nofollow' rel='noopener' target='_blank'>Superalgos repository</a>." %}

**2. Extract / unpack the contents of the ZIP file directly into the ```Superalgos-master``` folder**. That's it! You are up and running with the new version. Start the system the same way you always do unless new instructions become available.

### Empty Cache and Hard Reload

Once the system loads in your browser window and before you start working, you need to empty Chrome's cache and do a hard reload to make sure the browser *does* use the newly installed files. 

**1. Hit <kbd>F12</kbd> to open Chrome's Developer Tools**. You do not need to use the Developers Tools, but opening it allows performing the next task.

**2. Right-click on the refresh icon and select *Empty Cache and Hard Reload* from the drop-down menu**. Once refreshed, you may close Developer Tools with <kbd>F12</kbd>.

{% include image.html file='how-to/empty-cache-hard-reload-00.gif' url='yes' max-width='100' caption='F12 to open Developer Tools, then right-click on the refresh icon.' %}

## Final Tunning and Testing

Occasionally, the new version of the system may introduce changes that may require you to update your existing trading systems or some other parts of your workspace. If that is the case, an official announcement should explain how to proceed.

This is the time to restore any of the work you may have backed up earlier.

Before going deep back to work, it is always recommeended to test the new version a bit and make sure that your existing work performs as you would expect.

If you run into any issues, feel free to drop us a line in our <a href="https://t.me/superalgoscommunity" rel="nofollow" rel="noopener" target="_blank">Community</a>.
