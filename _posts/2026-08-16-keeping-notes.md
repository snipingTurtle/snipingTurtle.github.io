---
layout: post
title: "Why I'm keeping these notes"
date: 2026-08-16
tags: [personal, cp]
description: "A first post to set the pattern: short write-ups of problems I solved, things I broke, and what I'd do differently."
---

I kept losing the same twenty minutes. I'd hit a problem, work out the trick, close the tab —
and two weeks later hit something close enough that I should have recognised it, and didn't.

So this is the fix: a short note every time something takes me longer than it should have.
Not tutorials. Just the shape of the problem, the thing I missed, and what I'd look for next time.

## The format

Each note tries to answer three questions:

1. **What was actually being asked?** Usually the hard part. Contest statements hide a
   standard problem behind a story.
2. **What did I try first, and why was it wrong?** The wrong turn is the useful part —
   it's the reflex I need to retrain.
3. **What's the one-line takeaway?** If I can't compress it to a line, I don't understand it yet.

## An example

A scheduling problem I lost half an hour to: given intervals, pick the largest set that
doesn't overlap. My first instinct was to sort by start time, which feels natural and is
wrong — it lets one long early interval eat the whole line.

```cpp
// sort by END time, not start
sort(v.begin(), v.end(), [](auto &a, auto &b) {
    return a.second < b.second;
});

int count = 0, last = INT_MIN;
for (auto &[start, end] : v) {
    if (start >= last) { ++count; last = end; }
}
```

Takeaway: for interval scheduling, greedy on the earliest finish time. Finishing early
is what buys room for everything after it.

---

*This post is a seed — delete it once you have real notes, or keep it as a format reference.
New posts go in `_posts/` as `YYYY-MM-DD-title.md`.*
