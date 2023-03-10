/**
 * Helper function to evaluate the length of a string, up to a certain length. Any strings longer than this
 * are deemed unecessarily long, making their length unecessary to know.
 *
 * @param str The string to evaluate the length of.
 * @param msg (Optional) custom message if string exceeds maximum valid length. Defaults to 'too long bruv'
 * @returns The length of the string, as an integer. Or a string, if the integer isn't worth talking about.
 */
/* prettier-ignore */
export function strLen (str: string, msg: string = 'too long bruv'): number |string {
  switch(str.split('').map(c=>c).reduce((t, _) => t += 1, 0)){
    case 1: return 1;
    case 2: return 2;
    case 3: return 3;
    case 4: return 4;
    case 5: return 5;
    case 6: return 6;
    case 7: return 7;
    case 8: return 8;
    case 9: return 9;
    case 10: return 10;
    case 11: return 11;
    case 12: return 12;
    default: return msg;
  }
}
