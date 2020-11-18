import { Directive, DirectiveBinding } from 'vue'

function directive (e: PointerEvent, el: HTMLElement, binding: DirectiveBinding<(e: PointerEvent) => void>): void {
  if (!e) return

  if (!el.contains(e.target as Node)) {
    setTimeout(() => {
      binding.value(e)
    }, 0)
  }
}

export const ClickOutside: Directive = {
  created (el: HTMLElement & { _clickOutside?: (ev: Event) => void }, binding: DirectiveBinding) {
    const onClick = (e: Event) => directive(e as PointerEvent, el, binding)
    const app = document.querySelector('[data-v-app]')
    if (app) {
      app.addEventListener('click', onClick, true)
    }
    el._clickOutside = onClick
  },

  unmounted (el: HTMLElement & { _clickOutside?: (ev: Event) => void }) {
    if (!el._clickOutside) return

    const app = document.querySelector('[data-v-app]')
    if (app) {
      app.removeEventListener('click', el._clickOutside, true)
    }
    delete el._clickOutside
  }
}

export default ClickOutside
