
export function getOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>): string {
  switch(e.key) {
    case 'Enter': return 'Enter'
    case 'Escape':
    case 'Esc': return 'Escape'
    default: return e.key
  }
}