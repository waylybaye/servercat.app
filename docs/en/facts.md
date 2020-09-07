---
slug: "/en/docs/facts"
date: "2019-05-04"
title: "ServerCat metrics description"
---

**All statistics are cumulative after system power-up**

### charts on the status page

* `Load` The three rings of represent the average load of the last 1 minute, 5 minutes, 15 minutes of CPU computation and waiting IO.
* `Memory` means used memory and page cache
* `Disk` disk read and write speed/bytes 


## Data on detail pages

### CPU data

* `system` CPU time spent on  kernel
* `User` CPU time for non-kernel programs
* `IO wait` Time spent by CPU waiting for disk or network IO.

* `Load` indicates the average load of the last 1 minute, 5 minutes, 15 minutes of CPU calculations and waiting IO.


### Memory data

* `Used` size of memory used
* `Page cache` The kernel uses free memory to cache the most recent file reads and writes to accelerate disk
* `Idle` memory minus the size of used and page cache.

### Network data

* `Retransmission Rate` Indicates the retransmission rate of TCP packets, which can reflect the packet loss rate or latency of the network.

The network traffic statistics are based on the system's boot up.

