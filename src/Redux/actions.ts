

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export function showNotification( text:string) {
    return { type: 'SHOW_NOTIFICATION', payload : text }
  }

export function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' }
  }

