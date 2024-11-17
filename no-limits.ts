
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const NoLimits: CustomThemeConfig = {
    name: 'no-limits',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #FAFA0B 
		"--color-primary-50": "254 254 218", // #fefeda
		"--color-primary-100": "254 254 206", // #fefece
		"--color-primary-200": "254 254 194", // #fefec2
		"--color-primary-300": "253 253 157", // #fdfd9d
		"--color-primary-400": "252 252 84", // #fcfc54
		"--color-primary-500": "250 250 11", // #FAFA0B
		"--color-primary-600": "225 225 10", // #e1e10a
		"--color-primary-700": "188 188 8", // #bcbc08
		"--color-primary-800": "150 150 7", // #969607
		"--color-primary-900": "123 123 5", // #7b7b05
		// secondary | #FC8C10 
		"--color-secondary-50": "255 238 219", // #ffeedb
		"--color-secondary-100": "254 232 207", // #fee8cf
		"--color-secondary-200": "254 226 195", // #fee2c3
		"--color-secondary-300": "254 209 159", // #fed19f
		"--color-secondary-400": "253 175 88", // #fdaf58
		"--color-secondary-500": "252 140 16", // #FC8C10
		"--color-secondary-600": "227 126 14", // #e37e0e
		"--color-secondary-700": "189 105 12", // #bd690c
		"--color-secondary-800": "151 84 10", // #97540a
		"--color-secondary-900": "123 69 8", // #7b4508
		// tertiary | #F43404 
		"--color-tertiary-50": "253 225 217", // #fde1d9
		"--color-tertiary-100": "253 214 205", // #fdd6cd
		"--color-tertiary-200": "252 204 192", // #fcccc0
		"--color-tertiary-300": "251 174 155", // #fbae9b
		"--color-tertiary-400": "247 113 79", // #f7714f
		"--color-tertiary-500": "244 52 4", // #F43404
		"--color-tertiary-600": "220 47 4", // #dc2f04
		"--color-tertiary-700": "183 39 3", // #b72703
		"--color-tertiary-800": "146 31 2", // #921f02
		"--color-tertiary-900": "120 25 2", // #781902
		// success | #04C4FC 
		"--color-success-50": "217 246 255", // #d9f6ff
		"--color-success-100": "205 243 254", // #cdf3fe
		"--color-success-200": "192 240 254", // #c0f0fe
		"--color-success-300": "155 231 254", // #9be7fe
		"--color-success-400": "79 214 253", // #4fd6fd
		"--color-success-500": "4 196 252", // #04C4FC
		"--color-success-600": "4 176 227", // #04b0e3
		"--color-success-700": "3 147 189", // #0393bd
		"--color-success-800": "2 118 151", // #027697
		"--color-success-900": "2 96 123", // #02607b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D62A30 
		"--color-error-50": "249 223 224", // #f9dfe0
		"--color-error-100": "247 212 214", // #f7d4d6
		"--color-error-200": "245 202 203", // #f5cacb
		"--color-error-300": "239 170 172", // #efaaac
		"--color-error-400": "226 106 110", // #e26a6e
		"--color-error-500": "214 42 48", // #D62A30
		"--color-error-600": "193 38 43", // #c1262b
		"--color-error-700": "161 32 36", // #a12024
		"--color-error-800": "128 25 29", // #80191d
		"--color-error-900": "105 21 24", // #691518
		// surface | #12638A 
		"--color-surface-50": "219 232 237", // #dbe8ed
		"--color-surface-100": "208 224 232", // #d0e0e8
		"--color-surface-200": "196 216 226", // #c4d8e2
		"--color-surface-300": "160 193 208", // #a0c1d0
		"--color-surface-400": "89 146 173", // #5992ad
		"--color-surface-500": "18 99 138", // #12638A
		"--color-surface-600": "16 89 124", // #10597c
		"--color-surface-700": "14 74 104", // #0e4a68
		"--color-surface-800": "11 59 83", // #0b3b53
		"--color-surface-900": "9 49 68", // #093144
		
	}
}