// This gadget is now unfunctional due to the server rate limiting ticks in a recent update
// Fortunately the patch lead to another gadget being possible

// Previous versions of this gist:
// v1: requestAnimationFrame deltaTime spoofing, max 175% speedup
(o=>requestAnimationFrame=f=>o(t=>f(t*1.75)))(requestAnimationFrame);
// v2: Date.now spoofing, max 200% speedup
(original => Date.now = () => original() * 2)(Date.now);
// v3: v2 with .toString spoofing
(original => (Date.now = () => original() * 2).toString = () => "function now() {\n    [native code]\n}")(Date.now);

// Special appreciation to those the people that choose to plagiarize, the parasites of every community.
