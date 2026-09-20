# Test record: updated version

20 September 2026. Local Chromium, HTML opened directly from disk. External network requests were blocked during website QA. No WhatsApp messages were sent.

| Check | Result |
| --- | --- |
| Widths 320, 375, 768, 1366, 1920px | No horizontal overflow |
| Local images | All loaded with nonzero natural dimensions |
| Hero structure | Exactly five slides, five captions and five navigation dots |
| Decorative stars | No spark symbols or uses remain in the HTML |
| Mobile menu | Opens and closes through section selection |
| Service selection | Full reset prefills the matching form option |
| Empty form | Required location and other required fields show errors |
| Other location | Appears only for Others; empty value is rejected |
| Return to listed area | Extra field hides, clears and disables; stale WhatsApp draft hides |
| WhatsApp draft | Correct international number; selected/custom location included; old location removed |
| Gallery | Opens; keyboard arrow navigation and Escape work |
| Carousel | Slide 5 wraps to slide 1; autoplay advances after four seconds |
| JavaScript runtime | No errors during tested flows |

The desktop full-page screenshot and mobile carousel were visually reviewed. Current evidence: desktop-1366.png, tablet-768.png, mobile-375.png.

Reduced-motion users start with autoplay paused. Rotation also pauses on hover/focus and while the tab is hidden. Controls remain usable. These are local checks, not certification or an all-browser claim. Verify on real devices before submission.
