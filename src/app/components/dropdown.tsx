interface DropdownProps {
  setDropDown: (isVisible: boolean) => void
  handleSelectItem: () => void
  nameItem: string
}

export function Dropdown({ setDropDown, handleSelectItem, nameItem }: DropdownProps) {
  return (
    <div className='fixed bg-black/80 top-0 right-0 w-full h-full flex justify-center items-center z-50'>
      <div className='bg-white p-4 rounded-sm'>
        <p>{`Você tem certeza que deseja escolher o item "${nameItem}"?`}</p>
        <footer className='flex justify-center items-center gap-4 mt-4'>
          <button className='p-2 rounded bg-red-800 hover:bg-red-800/90 transform duration-200 ease-in-out text-white' onClick={() => setDropDown(false)}>Não</button>
          <button className='p-2 rounded bg-green-800 hover:bg-green-800/90 transform duration-200 ease-in-out text-white' onClick={handleSelectItem}>Sim</button>
        </footer>
      </div>
    </div>
  )
}