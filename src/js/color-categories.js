/* expanded + scrollable palette */
const colorCategories = {
  greyscale: [
	'#000000', '#1a1a1a', '#2e2e2e', '#404040',
	'#595959', '#6b6b6b', '#808080', '#999999',
	'#b3b3b3', '#cccccc', '#d9d9d9', '#e6e6e6',
	'#f2f2f2', '#ffffff'
  ],
  reds: [
	'#4d0000', '#660000', '#7f0000', '#990000',
	'#b30000', '#cc0000', '#e60000', '#ff0000',
	'#ff3333', '#ff6666', '#ff8080', '#ff9999',
	'#ffb3b3', '#ffcccc'
  ],
  oranges: [
	'#4d1f00', '#663300', '#7f3300', '#994c00',
	'#b36600', '#cc7f00', '#e69900', '#ffb300',
	'#ffcc33', '#ffd94d', '#ffe680', '#fff2b3',
	'#fff7cc', '#fffbe6'
  ],
  yellows: [
	'#4d4d00', '#666600', '#7f7f00', '#999900',
	'#b3b300', '#cccc00', '#e6e600', '#ffff00',
	'#ffff33', '#ffff66', '#ffff80', '#ffff99',
	'#ffffb3', '#ffffcc'
  ],
  greens: [
	'#003300', '#004d00', '#006600', '#008000',
	'#009900', '#00b300', '#00cc00', '#00e600',
	'#00ff00', '#1aff1a', '#33ff33', '#66ff66',
	'#80ff80', '#b3ffb3'
  ],
  teals_cyans: [
	'#004d40', '#00665c', '#008080', '#00998c',
	'#00b3a6', '#00ccc0', '#00e6d9', '#00fff2',
	'#1afff5', '#33fff5', '#4dfff7', '#80fff9',
	'#b3fffb', '#e6fffd'
  ],
  blues: [
	'#00004d', '#000066', '#00007f', '#000099',
	'#0000b3', '#0000cc', '#0000e6', '#0000ff',
	'#3333ff', '#4d4dff', '#6666ff', '#8080ff',
	'#9999ff', '#b3b3ff'
  ],
  indigos_violets: [
	'#0d0033', '#190033', '#26004d', '#330066',
	'#400080', '#4c0099', '#5900b3', '#6600cc',
	'#7300e6', '#8000ff', '#9933ff', '#b366ff',
	'#cc99ff', '#e6ccff'
  ],
  purples_magentas: [
	'#1a001a', '#330033', '#4d004d', '#660066',
	'#800080', '#990099', '#b300b3', '#cc00cc',
	'#e600e6', '#ff00ff', '#ff33ff', '#ff66ff',
	'#ff99ff', '#ffccff'
  ],
  browns: [
	'#331900', '#4d2600', '#663300', '#804000',
	'#996600', '#b38c00', '#cca300', '#e6b800',
	'#ffcc00', '#ffd11a', '#ffd633', '#ffdb4d',
	'#ffe066', '#fff0b3'
  ],
  extras: [
	'#8b4513', '#a0522d', '#cd853f', '#daa520',
	'#556b2f', '#228b22', '#2e8b57', '#20b2aa',
	'#008b8b', '#00ced1', '#4682b4', '#1e90ff',
	'#4169e1', '#8a2be2'
  ],
  pastels: [
	'#ffd1dc', '#fddde6', '#e0bbe4', '#e6d0eb',
	'#c1c8e4', '#d5f4e6', '#fefbd8', '#fff0f5',
	'#e6e6fa', '#f0fff0', '#f5fffa', '#f0f8ff',
	'#fafad2', '#e0ffff'
  ],
  metallics: [
	'#d4af37', '#ffd700', '#c0c0c0', '#b87333',
	'#aaa9ad', '#e5e4e2', '#9e7e38', '#c9ae5d',
	'#a8a9ad', '#b5b5b5', '#979797', '#8c7853',
	'#bfa77f', '#d7d7d7'
  ],
  neon: [
	'#39ff14', '#7fff00', '#ccff00', '#faff00',
	'#ffdf00', '#ffae42', '#ff6ec7', '#fe019a',
	'#ff073a', '#ff1493', '#ff00ff', '#f0f',
	'#e0f', '#d0f'
  ],
  camo: [
	'#4b5320', '#78866b', '#6e6e30', '#3c341f',
	'#403d3c', '#2c3539', '#5b5b3a', '#556b2f',
	'#6b8e23', '#4e4e1f', '#4d5d53', '#727547',
	'#3e3b32', '#2e3b2b'
  ],
  gloss_high: [
	'#ffffff', '#fefefe', '#fbfbfb', '#f8f8f8',
	'#f5f5f5', '#f2f2f2', '#eeeeee', '#ebebeb',
	'#e8e8e8', '#e5e5e5', '#e2e2e2', '#dfdfdf',
	'#dcdcdc', '#d9d9d9'
  ],
  gloss_low: [
	'#2d2d2d', '#3a3a3a', '#494949', '#575757',
	'#666666', '#747474', '#828282', '#909090',
	'#9e9e9e', '#a0a0a0', '#adadad', '#bababa',
	'#c7c7c7', '#d4d4d4'
  ]
};

const colorPalette = Object.values(colorCategories).flat();
