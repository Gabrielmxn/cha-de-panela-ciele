import { ComponentProps, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
interface ToastProps extends ComponentProps<'div'> {
  description: string
}
export function Toast({ description, color, ...rest }: ToastProps) {
  const [toast, setToast] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setToast(false)
    }, 3000)
  }, [])
  return (
    <>

      {toast && (
        <div className={twMerge('p-4 text-xl text-green-500', rest.className)}>
          <p>{description}</p>
        </div>
      )}
    </>



  )
}