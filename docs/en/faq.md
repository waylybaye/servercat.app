---
slug: "/en/faq"
date: "2020-09-04"
title: "ServerCat FAQ"
---

### How does ServerCat work and do you install any program on the server?

ServerCat uses SSH to read the Linux <code>/proc</code> file system to get the status of the system. It does not install any programs on your servers and doesn't rely on any third-party tools.


### Why can't I see the status of macOS/FreeBSD/***?

ServerCat relies on the Linux kernel's <code>/proc</code> subsystem for most of its data, and is temporarily unable to display all metrics on other platforms 


### Does ServerCat need root permission?

NO, normal users will work. If you want docker works the user need to be one of `docker` group.


## Privacy

### Will my data leave my device ?

1. All data are stored locally, we don't upload any data to our servers.
2. Synchronization uses Apple iCloud, the data goes directly to the iCloud server.
