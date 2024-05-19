import { useEffect, useState } from "react"

export function Toast() {
  const [toast, setToast] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setToast(false)
    }, 3000)
  }, [])
  return (
    <>

      {toast && (
        <div className="p-2 text-xl text-cha-ciele-header">
          <p>Cadastrado com sucesso</p>
        </div>
      )}
    </>



  )
}