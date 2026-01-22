import { defineStore } from 'pinia'

type NewToastMessage = {
  message: string,
  status: 'danger'|'warning'|'success'|'info',
  userMustDismiss?: boolean
}

type ToastMessage = NewToastMessage & {
  id: number,
}

export const useToastStore = defineStore('toast', {
  state: (): {messages: ToastMessage[], maxId: number} => ({
    messages: [],
    maxId: 0
  }),
  getters: {
    getMaxId: (state): number => state.maxId
  },
  actions: {
    increaseMaxId() {
      this.maxId++
    },
    deleteToast(idToDelete: number) {
      this.messages = this.messages.filter(({ id }) => id !== idToDelete)
    },
    addToast(newToast: NewToastMessage) {
      const newToastId: number=  this.maxId;
      this.messages.push({
        id: newToastId,
        message: newToast.message,
        status: newToast.status,
        userMustDismiss: newToast.userMustDismiss
      })

      if (! newToast.userMustDismiss) {
        setTimeout(function(ctx: { deleteToast: ((a: number) => void) }) {
          ctx.deleteToast(newToastId)
        }, 5000, this)
      }
      this.increaseMaxId();
    }
  }
})
