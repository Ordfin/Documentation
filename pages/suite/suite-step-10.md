---
title:  Run a Live Trading Session
summary: Run a live trading session using an existing open-source strategy and follow the progress over the charts.
sidebar: suite_sidebar
permalink: suite-step-10.html
toc: false
---

Running a live trading session is very similar to running a backtesting session. The two main operational differences are:

* Live sessions&mdash;this includes paper trading and forward testing sessions&mdash;require all of the trading system's dependencies to be up to date and running. In this context, *dependencies* are the bots that provide information to the trading system for strategies to make decisions. In the case of [Weak Hands Buster](suite-community-weak-hands-buster.html), this means that all Masters bots and Sparta's EMA must be running and up to date.

* An <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_account_key}}">exchange account key</a> must be set up to log into your account at the corresponding exchange.

{% include note.html content="We will refer to Binance as the exchange of choice for running this live trading session, assuming you have an account with Binance. Please get your API Key and Secret Key from Binance before you begin. If you do not have an account with Binance, then you may run a paper trading session instead. If you wish to work with other exchanges other than Binance, you may use Bitfinex which is already installed in the default workspace, or learn [how to set up other exchanges](suite-how-to-set-up-a-new-exchange.html). If you choose to use an exchange other than Binance, you should first run the data mining operation and wait until all Masters bots and Sparta's EMA are up to date." %}

{% include live-trading-warning.html %}

## Start Here

### Set Up Your Exchange Account Key

**1. Go to the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">crypto ecosystem</a> hierarchy and expand it**.

{% include /how_to/find-a-hierarchy.md heading="more" definition="yes" content="yes" extended="no" table="yes" more="yes"%}

{% include image.html file='how-to/run-a-live-session-00.gif' url='yes' max-width='100' caption='The image illustrates points 1 to 5 below.' %}

**2. Find the *Tested*  <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchanges}}">crypto exchanges</a> node** on the right-hand side.

**3. Find the Binance <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchange}}">crypto exchange</a> node**.

**4. Find the exchange account key node** under <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_accounts}}">exchange accounts</a> &#8594; <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.user_account}}">user account</a> &#8594; <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.user_keys}}">user keys</a>.

**5. Select *Configure Key* on the menu** and carefully enter your API Key and Key Secret as instructed on the message featured on the configuration bubble. Make sure you don't leave any character foreign to your keys between the double quote marks&mdash;only the exact sequence of characters in the key should go there.

```json
{ 
"codeName": "Paste your exchange API name or label here",
"secret": "Paste your exchange API secret key here. To keep you exchange keys safe, never share data structures you may download from the system, as downloads contain all information in the data structure, including personal information such as exchange keys. Use the share option on the menu instead. The share option strips sensitive information and outputs a file that is safe for sharing."
}
```

{% include image.html file='how-to/run-a-live-session-01.png' url='yes' max-width='100' caption='Enter your keys carefully.' %}

### Start Data Mining

**1. Go to the network hierarchy and find the *Masters Binance BTC/USDT* task manager** under Network Node &#8594; Data Mining &#8594; Binance.

**2. Select *Run All Tasks* on the menu**.

**3. Expand the *Sparta Binance BTC/USDT* task manager next to it and start the EMA task**.

**4. Wait until all indicators are at 100%**.

{% include important.html content="Remember that a live trading session requires having a live data feed from the exchange and all indicators up to date." %}

### Run the Live Trading Task and Session

**1. Find the <a data-toggle="tooltip" data-original-title="{{site.data.network.production_environment}}">production environment</a> node**.

{% include image.html file='how-to/run-a-live-session-02.gif' url='yes' max-width='100' caption='The image illustrates points 1 to 5 below.' %}

**2. Find the *Fwd & Live Sessions Binance BTC/USDT*** task manager under the Binance exchange tasks node.

**3. Find the *Live Trading WHB*** task.

**4. Find the *Live Trading WHB* live trading session** and its <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.parameters}}">parameters</a>.

**5. Go to the <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.base_asset}}">base asset</a>** parameter and select *Configure Base Asset* on the menu.

{% include image.html file='how-to/run-a-live-session-02.png' url='yes' max-width='100' caption='Base asset configuration.' %}

**6. Decide if the default setting for the ```initialBalance``` is correct** and change it if you wish.

```json
{
"initialBalance": 0.001,
"minimumBalance": 0.0001,
"maximumBalance": 0.1
}
```

{% include /network/base-asset.md heading="more" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="yes"%}

**7. Click *Run* on the *Live Trading WHB* task menu**.

**8. Click *Run* on the *Live Trading WHB* session menu**.

### Monitor the Live Session on the Charts

Live trading sessions feature the same visualization capabilities as backtesting sessions. Make sure you use the Live Trading layer manager instead of the Backtesting layer manager.

{% include /network/live-trading-session.md heading="more" icon="150" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="yes"%}