**Week13 - Componen**

`mouse`drag 不支援 `touch`

**animation**

framwork 概念

<!-- 16 ms , 60fps -->
<!-- browser 不保證 setInterval 的行為一定為指定 ms -->
- setInterval(() => {}, 16)
- setTimeout(tick, 16)

<!-- browser 控制，與browser frame 正相關，在下一個 frame 時 execute-->
<!-- cncelAnimationFrame -->
- requestAnimationFrame(tick)