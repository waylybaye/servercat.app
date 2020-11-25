---
slug: "/en/faq"
date: "2020-09-04"
title: "ServerCat FAQ"
---

### How does ServerCat work and will the program be installed on the server?

ServerCat uses SSH to read the Linux <code>/proc</code> file system directly to get the status of the system.
It does not rely on any third-party tools and does not install any programs on the server.

### Why can't I see the status of macOS/FreeBSD/***?

ServerCat relies on the Linux kernel's <code>/proc</code> subsystem for most of its data, 
and is temporarily unable to display all metrics on other platforms due to the lack of a similar kernel statistics mechanism.

### Is my data safe?

Data is stored locally in the App Sandbox and sensitive information (keys and passwords) is stored AES-encrypted.

### Is data synchronization secure?

Data syncs using Apple iCloud, and the data - which is also AES-encrypted - goes directly to the iCloud server, 
not through any third-party servers.

### Does ServerCat need root permission

NO, We get information from `/proc` and `docker commands`, so you only need to be one of `docker` group.
