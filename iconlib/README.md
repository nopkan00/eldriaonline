# Icon library (source sheets kept for later use)

ไฟล์ไอคอนต้นฉบับที่ผู้ใช้ส่งมา เก็บไว้ใช้ในอนาคต

- i1.jpg – rings/necklaces/shields/arrows/swords/clubs/wands/staffs/axes/helmets/armor/pants/boots (classic style)
- i2.jpg – chest armor 5x6 grid (C)
- i3.jpg – realistic knight/mage/commoner sets (sword, shield, helm, tunic, gloves, boots)
- i4.jpg – weapons 10x10 grid (A)
- i5.jpg – rings & necklaces 10x10 grid (R)
- i6.jpg – armor/helmets/capes/pants/jewelry/weapons 10x10 grid (G)

Grid: A/R/G box x=18+col*71.6, y=Y0+row*71.6 (A Y0=387, R Y0=332, G Y0=314), size 64. C box x=34+col*139.5, y=31+row*142, size 106.

## Used for Lv60/70/80 gear (tier 8 template id -> [Lv60, Lv70, Lv80] cells)
```
MAP={'sw6':[('A',0,1),('A',0,5),('A',0,7)],'sw16':[('A',0,4),('A',0,8),('A',0,9)],'mc6':[('A',4,4),('A',4,5),('A',4,9)],'mc16':[('A',4,7),('A',4,2),('A',4,3)],
'st6':[('A',6,0),('A',6,2),('A',6,3)],'st16':[('A',6,1),('A',6,4),('A',6,5)],'bw6':[('A',8,0),('A',8,2),('A',8,4)],'bw16':[('A',8,1),('A',8,3),('A',8,5)],
'dg6':[('A',2,1),('A',2,4),('A',2,7)],'dg16':[('A',1,0),('A',1,3),('A',1,9)],'sh6':[('A',9,1),('A',9,4),('A',9,6)],'ob6':[('R',8,0),('R',8,6),('R',7,8)],
'qv6':[('A',7,5),('A',7,6),('G',4,8)],'rl6':[('R',7,1),('R',6,8),('R',7,3)],'ar6':[('C',0,2),('C',1,3),('C',2,4)],'rb6':[('C',0,4),('C',1,4),('C',5,1)],
'lt6':[('C',0,1),('C',2,0),('C',2,3)],'vs6':[('C',3,1),('C',3,3),('C',3,2)],'hd6':[('G',1,0),('G',1,2),('G',1,4)],'hd16':[('G',1,6),('G',1,8),('G',1,7)],
'pt6':[('G',4,0),('G',4,5),('G',4,3)],'lg6':[('G',4,2),('G',4,4),('G',4,2,140)],'sk6':[('G',4,1),('G',4,1,200),('G',4,1,120)],'cp6':[('G',3,0),('G',3,2),('G',3,3)],
'cp16':[('G',3,1),('G',3,4),('G',3,5)],'bt6':[('G',0,7),('G',0,8),('G',0,9)],'ear6':[('G',7,8),('G',8,8),('G',7,9)],'ring9':[('R',1,4),('R',2,9),('R',3,6)],
'nk9':[('G',5,4),('G',5,7),('G',6,7)],'ear16':[('G',8,9),('R',9,8),('R',9,9)]}
```
Everything else is unused and available.
