let mySprite = sprites.create(img`
    ........fffff.......
    bbbffffbbbbbbbbbbb..
    bbbb999999999bbbbb..
    bbbb922992299bbbbb..
    bbbb924992499bbbbb..
    bbbb924992499bbbbb..
    bbbb999999999bbbbb..
    bbbb999992999bbbbb..
    bbbb992229999bbbbb..
    bbbb999999999bbbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbfffffffffbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfcfcccfcfbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfffffffffbbbbb..
    ...bbbbbbbbbbb......
    ..bbbbbbbbbbbbb.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    ........fffff.......
    bbbffffbbbbbbbbbbb..
    bbbb999999999bbbbb..
    bbbb922992299bbbbb..
    bbbb924992499bbbbb..
    bbbb924992499bbbbb..
    bbbb999999999bbbbb..
    bbbb999992999bbbbb..
    bbbb992229999bbbbb..
    bbbb999999999bbbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbfffffffffbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfcfcccfcfbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfffffffffbbbbb..
    ...bbbbbbbbbbb......
    ..bbbbbbbbbbbbb.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ....................
    `,img`
    ....................
    ........fffff.......
    bbbffffbbbbbbbbbbb..
    bbbb999999999bbbbb..
    bbbb922992299bbbbb..
    bbbb924992499bbbbb..
    bbbb924992499bbbbb..
    bbbb999999999bbbbb..
    bbbb999992999bbbbb..
    bbbb992229999bbbbb..
    bbbb999999999bbbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbfffffffffbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfcfcccfcfbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfffffffffbbbbb..
    ...bbbbbbbbbbb......
    ..bbbbbbbbbbbbb.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    `,img`
    ..........fffff.....
    ..bbbffffbbbbbbbbbbb
    ..bbbb999999999bbbbb
    ..bbbb922992299bbbbb
    ..bbbb924992499bbbbb
    ..bbbb924992499bbbbb
    ..bbbb999999999bbbbb
    ..bbbb999992999bbbbb
    ..bbbb992229999bbbbb
    ..bbbb999999999bbbbb
    ..bbbbbbbbbbbbbbbbbb
    ..bbbbfffffffffbbbbb
    ..bbbbfcccccccfbbbbb
    ..bbbbfcfcccfcfbbbbb
    ..bbbbfcccccccfbbbbb
    ..bbbbfffffffffbbbbb
    .....bbbbbbbbbbb....
    ....bbbbbbbbbbbbb...
    ....................
    .....99999999999....
    ....9...........9...
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ....................
    `,img`
    ....................
    ........fffff.......
    bbbffffbbbbbbbbbbb..
    bbbb999999999bbbbb..
    bbbb922992299bbbbb..
    bbbb924992499bbbbb..
    bbbb924992499bbbbb..
    bbbb999999999bbbbb..
    bbbb999992999bbbbb..
    bbbb992229999bbbbb..
    bbbb999999999bbbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbfffffffffbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfcfcccfcfbbbbb..
    bbbbfcccccccfbbbbb..
    bbbbfffffffffbbbbb..
    ...bbbbbbbbbbb......
    ..bbbbbbbbbbbbb.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    ...99999999999......
    ..9...........9.....
    ....................
    `,img`
    .....fffff..........
    bbbbbbbbbbbffffbbb..
    bbbbb999999999bbbb..
    bbbbb992299229bbbb..
    bbbbb994299429bbbb..
    bbbbb994299429bbbb..
    bbbbb999999999bbbb..
    bbbbb999299999bbbb..
    bbbbb999922299bbbb..
    bbbbb999999999bbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbbfffffffffbbbb..
    bbbbbfcccccccfbbbb..
    bbbbbfcfcccfcfbbbb..
    bbbbbfcccccccfbbbb..
    bbbbbfffffffffbbbb..
    ....bbbbbbbbbbb.....
    ...bbbbbbbbbbbbb....
    ....................
    ....99999999999.....
    ...9...........9....
    ....................
    ......99999999999...
    .....9...........9..
    ....................
    ....................
    `,img`
    ....................
    bbbbbbbbbbbbbbbbbb..
    bbbbb999999999bbbb..
    bbbbb999999999bbbb..
    bbbbb9fff9fff9bbbb..
    bbbbb994299429bbbb..
    bbbbb999999999bbbb..
    bbbbb999299999bbbb..
    bbbbb999922299bbbb..
    bbbbb999999999bbbb..
    bbbbbbbbbbbbbbbbbb..
    bbbbbfffffffffbbbb..
    bbbbbfcccccccfbbbb..
    bbbbbfcfcccfcfbbbb..
    bbbbbfcccccccfbbbb..
    bbbbbfffffffffbbbb..
    ....bbbbbbbbbbb.....
    ...bbbbbbbbbbbbb....
    ....................
    ....99999999999.....
    ...9...........9....
    ....................
    ......99999999999...
    .....9...........9..
    ....................
    ....................
    `,img`
    ....................
    ....................
    ..bbbbbbbbbbbbbbbbbb
    ..bbbbb999999999bbbb
    ..bbbbb999999999bbbb
    ..bbbbbffff9ffffbbbb
    ..bbbbb999999999bbbb
    ..bbbbb999999999bbbb
    ..bbbbb999299999bbbb
    ..bbbbb999922299bbbb
    ..bbbbb999999999bbbb
    ..bbbbbbbbbbbbbbbbbb
    ..bbbbbfffffffffbbbb
    ..bbbbbfcccccccfbbbb
    ..bbbbbfcfcccfcfbbbb
    ..bbbbbfcccccccfbbbb
    ..bbbbbfffffffffbbbb
    ......bbbbbbbbbbb...
    .....bbbbbbbbbbbbb..
    ....................
    ......99999999999...
    .....9...........9..
    ....................
    ......99999999999...
    .....9...........9..
    ....................
    `],
500,
true
)
scene.setBackgroundColor(7)
let textSprite = textsprite.create("Room", 0, 1)
textSprite.setPosition(64, 89)
textSprite.setOutline(1, 2)
textSprite.setMaxFontHeight(10)
Music.CatQuestVo1(songs.Room)
textSprite.setText("Tavern")
Music.CatQuestVo1(songs.Tavern)
textSprite.setText("Seaside Town")
Music.CatQuestVo1(songs.Seaside_town)
textSprite.setText("Ocean")
Music.CatQuestVo1(songs.Ocean)
textSprite.setText("Town")
Music.CatQuestVo1(songs.Town)
forever(function () {
	
})
