import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="twit-flex twit-flex-row twit-items-center twit-px-4 twit-py-2 twit-text-sm twit-rounded-lg twit-transition-all twit-border-none
      twit-shadow-lg hover:twit-shadow-md
      active:twit-scale-105 twit-bg-slate-50 hover:twit-bg-slate-100 twit-text-slate-800 hover:twit-text-slate-900">
      Count:
      <span className="twit-inline-flex twit-items-center twit-justify-center twit-w-8 twit-h-4 twit-ml-2 twit-text-xs twit-font-semibold twit-rounded-full">
        {count}
      </span>
    </button>
  )
}
