**Week7 - CSS Layout**

# 1. CSS Layout|CSS Box

- Tag(code)/Element(sematic)/Box(representation)

Element 是 Node 的一種，但是 Node 還有其它種類：comment, CDATA, DTD

**Box Model**

- margin (box 本身 layout, box 周圍所需空間)
- border
- padding (box 內 layout, 決定 content 大小)
- content

`box-sizing` 影響參與 layout


# 2. CSS Layout|Normal Flow

**Normal Flow**

Normal Flow → flex → grid → houdini?

layout： 將可見元素放到正確位置(box + context)
正確的位罝：位置 + 尺寸


**寫字**

- 左到右/同行文字對齊/當一行滿了換行


**layout normal flow**

1. 收集 Box(文字) 到行內
2. 計算 box 在行中排佈
3. 計算行與行之間排佈

**box**

inline-box (文字/inline 元素)/ block-box

inline-box：從左到右 (IFC)
block-box：上從上到下 (BFC)


# 3. CSS Layout|Normal Flow--inline layout

**Text**

- baselin
- freetype
- 碼點


**in-line**

- line-top
- text-top
- base-line
- text-bottom
- line-bottom


多種字體混排，由 font-size 最大的決定 text-top/ text-bottom
行高 > 文字高度 → line-top/ line-bottom

和 box 混排： box 下緣對齊文字 baseline，過高/先後順序時會造成 line-top/line-bottom 偏移，不影響 text-top/text-bottom
但 box 中有文字時則對齊 box 內文字 baseline


# 3. CSS Layout|Normal Flow--block layout

**float/ clear**

脫離 normal flow，但是依附 normal flow 做排布

float：先在 normal flow 中，接著有 float attribute 往 float 方向移動，重新改變 inline-box 位置

重點是影響範圍與 float 元素高度相等。 float 元素會互相堆疊。透過 clear 來找到沒有沒有 float 元素的乾淨空間


**Margin Collapse**

只有正常流中的 BFC 會發生，Margin 重疊時取最大的。



# 4. CSS Layout| BFC (block formatting context)

- Block Container：內含 BFC
- Block-level Box：外部有 BFC
- Block Box = Block Container + Block-level Box (裡外都有 BFC)

**Block Container**

內為 normal flow

`Display:`
- block/inline-block/table-cell(table-row !==)/flex item(flex !==)/ grid cell/ table-caption


**Block-level Box**

Block level/ Inline level

`display: run-in`


**建立 BFC**

- floats/ position: absolute elements/ block container/ block boxes with `overflow: visible`

**BFC 合併**

block box && `overflow: visible`

是否在同一 BFC 內會影響以下排版行為

- BFC 合併與 float
- BFC 合併與 margin collapse



# 5. CSS Layout| Flex

1. 收集 Box 進 line
2. 計算 Box 在 Main Axis 的排布
2. 計算 Box 在 Cross Axis 的排布


**分行**

根據剩餘 Main Axis 尺寸，把元素分進行，超過就換行。
``no-wrap``： force to first line

**主軸計算**

1. 找出所有 flex 元素
2. 剩餘空間按比分配給所有元素
3. 剩餘為負數，則 flex 元素比例為 0，等比壓縮。


**交叉軸計算**

每 line 最大元素計算line-height
flex-align(元素)/ item-align(container) 確定元素具體位置




# 5. CSS Layout| Animation

CSS 控制

1. position/size
2. render
3. interaction/ animation


**Animation**

`@keyframes` 定義
animation 使用

animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction

@keyframes {
    可用 transition
}


**Transition**

transition-property
transition-duration
transition-timing-function
transition-delay


**cubic-bezier**

1次(線性, 0控制點), 2次(2線, 1控制點), 3次(3線, 2控制點)

使用：scroll 的回彈


# 5. CSS Layout| Colr

- CMYK/ RGB

- HSL/ HSV

HSL：只更換顏色，其它亮度都能保留，更換 theme 時好用。


# 5. CSS Layout| Render

- 幾何圖形 (border/box-shadow/border-radius)
- 文字 (font/text-decoration)
- bitmap (background-image)


**Fragment Shader**

根據 coordinator 去算一個 dot 的顏色

render 任何圖形 data uri + svg
