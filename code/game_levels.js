var GAME_LEVELS = [
  ["xxxxxxxx!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxx!!x!!x!!x!!x!!x!!x!!!!!=       x!! ",
   " !!!!!!!!!xxxxxxxxxxxxxxxxxxxx=    y      xxxxxxxxxxxxxxxxxxxxxxxxxxv        xv ",
   " vxxxxxxxx     Y     Y             y          y   y      y       y y            ",
   "    Y   Y      Y     Y                            y      y       y              ",
   "        Y            Y    c                              y       y              ",
   "        Y                                                                       ",
   "                         xxxx       y                y             xxx      yyy ",
   "                           yxxx                    xx      xx    xx!xx          ",
   "         y        xxxx               o o      xx            y    x!!!x          ",
   "  o  yyyyyy          y                         y             y   xx!xx       o  ",
   "         y                 y         xxxxx                         xvx          ",
   " !xxy          xxx                     y                y                     x ",
   " !!xxxxxxx      y                            o                              x   ",
   " xvx y                            xxxx                    xx             y   x  ",
   " x x               y             y       y    xxxxx          y    xx        xx  ",
   " x x         xxxx          o  yyy      xxx!!!!!xxx                      xx      ",
   " x x  @     xxy!x  p                 xxx!!!!v!!!!!xxxx                 xy       ",
   " x xxxxxxxxxy!!!!xxxxxx  xxxxxxxx   xx!!!!!!v v!!!!!!!xxx    xxxxxxxxxxy        ",
   " x xy     xxy!!!!!x!!xx  xx     x   xyyyyyyyyyyyyyyyyyyxx    xy        y        ",
   " xyx y        xxx!!!!vx!!x    y  x!!!xyyyyyyyyyyyyyyyyyyxx!!!!xy    y           ",
   " x!!      y            xxxx       x!!!x!!!!!!yyyyy!!!!!!!x!!!!!x                ",
   " x!              y              xxxxx!!!!!!!!!!!!!!!!!!xxxxxxx           y      ",
   "  !!!                                                                           ",
   "  !!                            y                                               "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx=                               x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xxxxxxxxxxxxxxxx                 x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   c   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "     0                                                         xxxx!!!!!xxxx                                      ",
   "                 y    y                          x     x          xxxxxxx        xxx         xxx                  ",
   "                   y                            x      x                         x x         x x                  ",
   "                                               x       x      y   y                x         x                    ",
   "     xxx          o          y                  x       x       y                   xx        x                    ",
   "!!    y                    y   y                   x                                 x         x                    ",
   "!x                                             x     x      o  o     x   x           x         x                    ",
   "v              xxxxxxx        xxx   xxx      x       x               x   x   p       x         x                    ",
   "              xx     xx         x   x        x       x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "           xxxxy     yxxxx      x o x        x      xx               x   x   x               x                    ",
   "     @       x         xx       x   x        x         x             x   x   x               x                   ",
   "    xxx      x    y     x       x   x          x      xxxx           x   xxxxx   xxxxxx      x                   ",
   "    x x      x    y     x      xx o xx         x     x=              x     o     x x         x                   ",
   "!!!!x x!!!!!!x          x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                   ",
   "!!!!x x!!!!!!x          x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!  p  xxxxxxxxxxxxx xx  o o  xx                   ",
   "!!!!x x!!!!!!x          x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                    ",
   "!!!!x x!!!!!!x          x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                     ",
   "!!!!x x!!!!!!x          x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                 ",
   "!!!!x x!!!!!!x          x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                 ",
   "!!!!x x!!!!!!x          x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                 "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x   c             x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx           y           xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                    y      xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "         y    y      yyy     y    y             y       y    yyy     yy    y    !                             ",
   "          y  y      y   y    y    y             y       y   y    y   y y   y    !                             ",
   "           y       y     y   y    y             y   y   y  y      y  y  y  y    !                             ",
   "           y        y   y    y    y             y  y y  y   y    y   y   y y    v                             ",
   "           y         yyy      yyyy y              y   y      yyyy    y    yy                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  x  @                                          o                                                             ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=        p         =       p        =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
