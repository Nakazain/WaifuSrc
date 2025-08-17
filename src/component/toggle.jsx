export default function toggle({ checked, onChange }) {
  return (
    <label className="switch cursor-pointer relative flex w-[6.7rem] scale-75 overflow-hidden p-2">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="peer hidden" />
      <div className="absolute -right-[6.5rem] z-[1] flex h-12 w-24 skew-x-12 items-center justify-center text-lg duration-500 peer-checked:right-1">
        <span className="-skew-x-12">YES</span>
      </div>
      <div className="z-0 h-12 w-24 -skew-x-12 border border-gray-100 duration-500 peer-checked:skew-x-12 peer-checked:bg-red-800" />
      <div className="absolute left-[0.3rem] flex h-12 w-24 -skew-x-12 items-center justify-center text-lg duration-500 peer-checked:-left-[6.5rem]">
        <span className="skew-x-12">NO</span>
      </div>
    </label>
  )

}