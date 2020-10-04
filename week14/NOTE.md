**Week14 - Componen**

# 1. gesture and animation/overview

down→move→up

統一 touch screen/ mouse

start move/ start end

start → tap = click
(start) → move 10 px, retina → (pan start, 緩慢移動) → move → (pan) → end → (pan end)

(pan)→end 且速度 > ? →(flick/swipe)

(start) → press > 0.5s → (press start) → move 10px → ( pan start)

(press start) → end → (press end)


# 2. gesture and animation/

touch 與 mouse不同：

1. touchstart 後就會有 move ，起點相同
2. touchmove 無法越過 touchstart
3. identifier (move/end 判斷)
4. touch cancel


# 3. gesture and animation/

(start) 時要處理的行為：

1. touchend
2. 移動 10px
3. press over 0.5s


# 4. gesture and animation/

variable 是 global ?

touch → 多點 touch
mousce → right/left

mouse event:
mouse(left/right/center/forward/afterward)


# 5. gesture and animation/

DOM dispatch→ new event + attribute
event 可以 inherit

# 6. gesture and animation/ flick

flick 判斷速度：

取多點平均

# 7. gesture and animation/ encapsulation

**message flow:**
listen → judge → dispatch

script type="module" 需要 webserver